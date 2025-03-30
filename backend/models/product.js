import knex from './knex.js';

const db = knex();

export const get = async function(
  limit,
  page,
  search,
  sort_by,
  order_by,
  category_ids,
  brand_ids,
  tag_ids
) {
  const result = await db('product as p')
    .select(
      'p.*',
      'pc.name as category_name',
      'pb.name as brand_name',
    )
    .select(db.raw('COALESCE(json_agg(pi.link) FILTER (WHERE pi.id IS NOT NULL), \'[]\') as images'))
    .select(db.raw('COALESCE(json_agg(pr.*) FILTER (WHERE pr.id IS NOT NULL), \'[]\') as reviews'))
    .select(db.raw('COALESCE(json_agg(DISTINCT pt.name) FILTER (WHERE pt.id IS NOT NULL), \'[]\') as tags'))
    .leftJoin('product_category as pc', 'pc.id', 'p.category_id')
    .leftJoin('product_brand as pb', 'pb.id', 'p.brand_id')
    .leftJoin('product_image as pi', 'pi.product_id', 'p.id')
    .leftJoin('product_review as pr', 'pr.product_id', 'p.id')
    .leftJoin('pivot_product_tags as ppt', 'ppt.product_id', 'p.id')
    .leftJoin('product_tag as pt', 'pt.id', 'ppt.tag_id')
    .groupBy('p.id', 'pc.name', 'pb.name')
    .modify((qb) => {
      if (search) {
        qb.where('p.title', 'ilike', `%${search}%`)
      };
      if (sort_by && order_by) {
        const allowedFields = ['price', 'rating'];
        const allowedOrders = ['asc', 'desc'];

        if (allowedFields.includes(sort_by) && allowedOrders.includes(order_by)) {
          qb.orderBy(`p.${sort_by}`, order_by);
        }
      };
      if (category_ids) {
        qb.whereIn('p.category_id', JSON.parse(category_ids));
      };
      if (brand_ids) {
        qb.whereIn('p.brand_id', JSON.parse(brand_ids));
      };
      if (tag_ids) {
        qb.whereIn('p.tag_id', JSON.parse(tag_ids));
      };
    })
    .paginate({
      perPage: limit,
      currentPage: page,
      isLengthAware: true
    });

  const { lastPage, currentPage } = result.pagination;

  const current = parseInt(currentPage, 10);
  const last = parseInt(lastPage, 10);
  const maxPagesToShow = 4;

  let pages = [];

  if (last <= maxPagesToShow) {
    pages = Array.from({ length: last }, (_, i) => i + 1);
  } else {
    if (current <= Math.ceil(maxPagesToShow / 2)) {
      pages = Array.from({ length: maxPagesToShow }, (_, i) => i + 1);
    } else if (current >= last - Math.floor(maxPagesToShow / 2)) {
      pages = Array.from({ length: maxPagesToShow }, (_, i) => last - (maxPagesToShow - 1) + i);
    } else {
      const startPage = current - Math.floor(maxPagesToShow / 2);
      pages = Array.from({ length: maxPagesToShow }, (_, i) => startPage + i);
    }
  }

  return {
    products: result.data,
    lastPage,
    pages
  };
};

export const create = async function(data) {
  const [product] = await db("product")
    .insert(data)
    .returning("id")

  data.id = product.id;
  return data;
};

export const update = async function(id, data) {
  const [product] = await db("product")
    .where('id', id)
    .update(data)
    .returning("*");

  return product;
};

export const destroy = async function(id) {
  await db("product")
    .del()
    .where("id", id)
};
