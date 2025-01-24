import { useState, useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import { Transition } from "@headlessui/react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const { totalCart } = useContext(CartContext);
  const { user, closeSession } = useContext(AuthContext);
  console.log( user )

  const handleIsOpen = () => setIsOpen(!isOpen);

  const handleCloseSession = async() => {
    await closeSession();
  }

  return (
    <nav className="text-black bg-white">
      {/* container */}
      <div className="px-4 mx-auto lg:px-8 xl:max-w-7xl">
        <div className="flex justify-between py-4">
          {/* logo */}
          <div className="flex items-center">Logo</div>
          {/* links */}
          <ul className="items-center justify-center hidden gap-10 lg:flex">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/products">Productos</Link>
            </li>
          </ul>

          <div className="items-center justify-end hidden gap-4 lg:flex">
            <Link to="/checkout" className="relative">
              <span className="absolute flex items-center justify-center w-6 h-6 font-semibold bg-red-500 rounded-full -top-2 -right-2">
                {totalCart}
              </span>

              <i className="fa-solid fa-cart-shopping fa-2x"></i>
            </Link>
            {/* si user no es null, estamos logueados , mostramos el botón de cerrar sesión, pero si no mostrarmos los botones de login y registro*/}
            {user ? (
              <button className="btn btn-black" onClick={handleCloseSession} >Cerrar sesión</button>
            ) : (
              <>
                <Link to="/login" className="btn btn-black">
                  Login
                </Link>
                <Link to="/register" className="btn btn-black">
                  Registrate
                </Link>
              </>
            )}
          </div>
          {/* botón responsive */}
          <div className="lg:hidden">
            <button className="btn btn-black" onClick={handleIsOpen}>
              <i className="fa-solid fa-bars"></i>
            </button>
          </div>
        </div>
        {/* Mobile */}
        <Transition
          show={isOpen}
          enter="transition-all duration-300 ease-in-out"
          enterFrom="max-h-0 opacity-0"
          enterTo="max-h-screen opacity-100"
          leave="transition-all duration-300 ease-in-out"
          leaveFrom="max-h-screen opacity-100"
          leaveTo="max-h-0 opacity-0"
        >
          <div className="flex flex-col gap-2 py-4 border-t border-gray-200">
            <Link to="/" className="flex items-center text-sm text-gray-600">
              Home
            </Link>
            <Link
              to="/products"
              className="flex items-center text-sm text-gray-600"
            >
              Productos
            </Link>
            <Link
              to="/checkout"
              className="flex items-center text-sm text-gray-600"
            >
              Carrito
              <span className="flex items-center justify-center w-6 h-6 font-semibold bg-red-500 rounded-full ms-1">
                {totalCart}
              </span>
            </Link>
            {user ? (
              <button className="px-3 py-1 text-sm text-white bg-black rounded w-min" onClick={handleCloseSession}>
                Cerrar sesión
              </button>
            ) : (
              <>
                <Link
                  to="/login"
                  className="px-3 py-1 text-sm text-white bg-black rounded w-min"
                >
                  Login
                </Link>
                <Link
                  to="/register"
                  className="px-3 py-1 text-sm text-white bg-black rounded w-min"
                >
                  Registrate
                </Link>
              </>
            )}
          </div>
        </Transition>
      </div>
    </nav>
  );
};

export default Navbar;
