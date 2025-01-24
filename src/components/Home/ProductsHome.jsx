import useGetAxios from "../../hooks/useGetAxios";
import ProductCard from "../ui/ProductCard";

const ProductsHome = () => {
  const URL = `https://json-server-vercel-git-main-osmar-montesinos-projects.vercel.app/products?_limit=4`;

  const { data, loading, error } = useGetAxios(URL);

  return (
    <div className="my-10">
      <h2 className="mb-10 text-3xl">Main Products</h2>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-4">
        {data
          ? data.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))
          : null}
      </div>
    </div>
  );
};

export default ProductsHome;
