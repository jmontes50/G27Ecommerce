import HeaderHome from "../components/Home/HeaderHome";
import CategoriesHome from "../components/Home/CategoriesHome";
import ProductsHome from "../components/Home/ProductsHome";

const HomePage = () => {
  return (
    <div className="px-4 py-10 mx-auto lg:px-8 xl:max-w-7xl">
      <HeaderHome />
      <CategoriesHome />
      <ProductsHome />
    </div>
  )
}

export default HomePage