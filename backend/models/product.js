import knex from './knex.js';

const db = knex();

export const get = async function (limit, page, search) {
  const result = await db('product as p')
    .select('*')
    .where((q) => {
      if (search) {
        q.where('p.title', 'ilike', `%${search}%`)
      }
    })
    .paginate({
      perPage: limit,
      currentPage: page,
      isLengthAware: true
    });

  return {
    products: result.data,
    total: result.pagination.total
  };
};

export const create = async function (data) {
  const [product] = await db("product")
    .insert(data)
    .returning("id")

  data.id = product.id;
  return data;
};

export const update = async function (id, data) {
  const [product] = await db("product")
    .where('id', id)
    .update(data)
    .returning("*");

  return product;
};

export const destroy = async function (id) {
  await db("product")
    .del()
    .where("id", id)
};
