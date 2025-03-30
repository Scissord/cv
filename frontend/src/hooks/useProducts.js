import { reactive, watch } from 'vue';
import { useProductsApi } from '@api';

const useProducts = () => {
  const { getProducts, getFilters } = useProductsApi();

  const state = reactive({
    isProductsGetLoading: false,
    isFiltersGetLoading: false,
    limit: 12,
    page: 1,
    lastPage: null,
    pages: [],
    search: '',
    sort: {},
    products: [],
    categories: [],
    brands: [],
    tags: [],
  });

  const handlePageClick = (newPage) => {
    state.page = newPage;
  };

  const handleChangeSort = (val, obj) => {
    state.sort = obj;
  };

  const handleChangeSearch = (val) => {
    state.search = val;
  };

  const handleGetFilters = async () => {
    const data = await getFilters();
    state.brands.splice(0, state.brands.length, ...data.brands.map((brand) => ({
      ...brand,
      is_checked: false
    })));
    state.categories.splice(0, state.categories.length, ...data.categories.map((category) => ({
      ...category,
      is_checked: false
    })));
    state.tags.splice(0, state.tags.length, ...data.tags.map((tag) => ({
      ...tag,
      is_checked: false
    })));
  };

  const handleGetProducts = async () => {
    state.isProductsGetLoading = true;
    const data = await getProducts(
      state.limit,
      state.page,
      state.search,
      state.sort.sort_by,
      state.sort.order_by,
      state.categories,
      state.brands,
      state.tags
    );
    state.products.splice(0, state.products.length, ...data.products);
    state.lastPage = data.lastPage;
    state.pages = data.pages;
    state.isProductsGetLoading = false;
  };

  watch(
    () => [
      state.limit,
      state.page,
      state.search,
      state.sort.sort_by,
      state.sort.order_by,
      state.categories,
      state.brands,
      state.tags
    ],
    async () => {
      await handleGetProducts();
    },
    { deep: true }
  );

  return {
    state,
    handlePageClick,
    handleChangeSort,
    handleChangeSearch,
    handleGetFilters,
    handleGetProducts,
  };
};

export default useProducts;
