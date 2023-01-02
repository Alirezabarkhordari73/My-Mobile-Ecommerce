const fetchProductsFromApi = async () => {
  const url = "https://jsonplaceholder.typicode.com/todos";

  const res = await fetch(url, { method: "GET" });
  const data = await res.json();

  return { data };
};

const getAllProducts = async (): Promise<any[]> => {
  const products = await fetchProductsFromApi();
  return products.data;
};

export default getAllProducts;
