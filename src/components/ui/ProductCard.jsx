import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  // console.log("ProductCard", product)
  const { id, nombre, descripcion, precio, precio_oferta, detalles, estrellas, imagen } = product;

  return (
    <Link to={`/product/${id}`} className="flex flex-col max-w-lg gap-2">
      <div className="object-cover w-full overflow-hidden aspect-auto">
        <img src={imagen} alt={nombre} className="w-full" />
      </div>
      <h4 className="mt-2 font-semibold">{nombre}</h4>
      {/* <p>{descripcion}</p> */}
      <div className="flex gap-2 mt-auto">
        <span className="font-semibold">S/ {precio_oferta.toFixed(2)}</span>
        <span className="text-gray-500 line-through">
          S/ {precio.toFixed(2)}
        </span>
      </div>
    </Link>
  )
}

export default ProductCard