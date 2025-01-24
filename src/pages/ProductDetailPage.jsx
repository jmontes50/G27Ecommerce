import { useState, useContext } from "react";
import { CartContext } from "../context/CartContext";
import { useParams } from "react-router-dom";
import useGetAxios from "../hooks/useGetAxios";
import Loading from "../components/ui/Loading";
import Stars from "../components/ui/Stars";
import ProductQuantity from "../components/Product/ProductQuantity";
import { toast } from "react-toastify";

const ProductDetailPage = () => {
  const [quantity, setQuantity] = useState(1);

  const { id } = useParams();

  const { cart, addProductToCart } = useContext(CartContext);

  const URL = `https://json-server-vercel-git-main-osmar-montesinos-projects.vercel.app/products/${id}`;
  const { data, loading, error } = useGetAxios(URL);

  if (loading) {
    return <Loading />;
  }

  //no puedo desestructurar el id porque ya declaramos id más arriba
  const {
    nombre,
    descripcion,
    precio,
    precio_oferta,
    imagen,
    cantidad,
    estrellas,
    detalles,
  } = data;

  const incrementQty = () => {
    if (quantity < cantidad) {
      setQuantity(quantity + 1);
    }
  };

  const decrementQty = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleAddProductToCart = () => {
    const newProduct = {
      id: id,
      name: nombre,
      price: precio_oferta,
      quantity,
    };
    addProductToCart(newProduct);
    toast.success(`${nombre} agregado al carrito`);
  };

  return (
    <div className="px-4 py-10 mx-auto lg:px-8 xl:max-w-7xl">
      <div className="grid grid-cols-1 gap-10 mb-8 md:grid-cols-2">
        <div className="object-cover w-full h-full overflow-hidden">
          <img src={imagen} alt={nombre} className="w-full" />
        </div>
        <div className="mt-2">
          <h2 className="mb-5 text-3xl font-semibold">{nombre}</h2>
          <Stars rating={estrellas} />
          <div className="mb-5 text-xl">
            <span className="me-2">S/ {precio_oferta.toFixed(2)}</span>
            <span className="line-through text-slate-600">
              S/ {precio.toFixed(2)}
            </span>
          </div>
          <p className="mb-5">{descripcion}</p>

          <div className="flex gap-4">
            <ProductQuantity
              quantity={quantity}
              incrementQty={incrementQty}
              decrementQty={decrementQty}
            />

            <button
              className="w-full btn btn-black"
              onClick={handleAddProductToCart}
            >
              Agregar a carrito
            </button>
          </div>
        </div>
      </div>
      {/* detalles */}
      <div className="pt-5 border-t-2 border-slate-300">
        <h4 className="mb-5 text-xl font-semibold">Detalles</h4>
        <p className="whitespace-pre-wrap">{detalles}</p>
      </div>
    </div>
  );
};

export default ProductDetailPage;
