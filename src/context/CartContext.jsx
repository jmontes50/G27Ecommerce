import { createContext, useState } from "react";

const CartContext = createContext();

const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  //definir la lógica que queremos que se maneje en el contexto, acciones a realizar
  const addProductToCart = (product) => {
    //Preguntando si es que el producto Existe, si existe me dara un valor mayor a -1 si no existe me da -1
    const index = cart.findIndex((prod) => prod.id === product.id);
    // console.log("agregando producto", index);
    //si es que index es -1, No existe, es nuevo en cart
    if(index === -1){
      setCart([...cart, product]);
    }else{
      //NO ES NUEVO, porque me dara la posición donde ese producto ya existe
      const cartTemp = [...cart];
      cartTemp[index].quantity = product.quantity;
      setCart(cartTemp);
    }
  }

  //tenemos que indicar como 2do argumento el número 0 para que el acumulador tome ese 0 como valor inicial antes de iterar sobre los items del arreglo
  const totalCart = cart.reduce((acumulator, prod) => acumulator + prod.quantity, 0)

  return (
    <CartContext.Provider value={{cart, addProductToCart, totalCart}}>
      { children }
    </CartContext.Provider>
  )
}

export {
  CartContext,
  CartContextProvider
}