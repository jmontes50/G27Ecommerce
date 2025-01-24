import { useState } from "react";
import useGetAxios from "../hooks/useGetAxios";
import ProductCard from "../components/ui/ProductCard";
import Loading from "../components/ui/Loading";

const ProductsPage = () => {
  const [page, setPage] = useState(1);

  const URL = `https://json-server-vercel-git-main-osmar-montesinos-projects.vercel.app/products?_page=${page}`;
  const { data, loading, error } = useGetAxios(URL);

  const previousPage = () => {
    if (page === 1) return; //prevenir que vaya a algo menos de 1
    setPage(page - 1);
  };

  const nextPage = () => {
    setPage(page + 1);
  };

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="px-4 py-10 mx-auto lg:px-8 xl:max-w-7xl">
      <h1 className="mb-10 text-4xl text-center">Productos</h1>
      {/* grilla */}
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
        {/* renderizado condicional */}
        {data
          ? data.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))
          : null}
      </div>
      <div className="flex justify-between mt-4">
        <button
          className="px-3 py-2 text-white bg-black rounded justify-self-start"
          onClick={previousPage}
        >
          Ver menos
        </button>
        <button
          className="px-3 py-2 text-white bg-black rounded justify-self-end"
          onClick={nextPage}
        >
          Ver más
        </button>
      </div>
    </div>
  );
};

export default ProductsPage;
