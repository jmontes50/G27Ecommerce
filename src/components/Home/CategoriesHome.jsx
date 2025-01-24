import useGetAxios from "../../hooks/useGetAxios";

const CategoriesHome = () => {
  const URL =
    "https://json-server-vercel-git-main-osmar-montesinos-projects.vercel.app/categories";

  const { data, loading, error } = useGetAxios(URL);

  return (
    <div>
      <h2 className="my-10 text-3xl text-left">Shop by Categories</h2>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-4">
        {data
          ? data.map((category) => (
              // cada tarjeta de categoria
              <div
                className="relative overflow-hidden rounded-xl"
                key={category.id}
              >
                <div className="object-cover w-full h-96">
                  <img
                    src={category.imagen}
                    alt={category.nombre}
                    className="w-full h-full"
                  />
                </div>
                <h3 className="absolute w-10/12 h-10 p-2 font-semibold text-center text-black bg-white rounded left-1/2 bottom-3 transform translate-x-[-50%]">
                  {category.nombre}
                </h3>
              </div>
            ))
          : null}
      </div>
    </div>
  );
};

export default CategoriesHome;
