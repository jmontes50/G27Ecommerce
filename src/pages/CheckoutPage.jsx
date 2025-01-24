import { useContext } from "react";
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import { CartContext } from "../context/CartContext";
import TableCart from "../components/Checkout/TableCart";
import FormCheckout from "../components/Checkout/FormCheckout";

const CheckoutPage = () => {

  const { cart } = useContext(CartContext);
  console.log(cart)

  return (
    <div className="px-4 py-10 mx-auto lg:px-8 xl:max-w-7xl">
      <h1 className="mb-5 text-3xl text-center">Checkout</h1>
      <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
        <div className="col-span-2">
          <TabGroup>
            <TabList>
              <Tab className="data-[selected]:bg-black data-[selected]:text-white px-4 py-2 rounded-t-lg data-[hover]:bg-slate-500 data-[hover]:text-white">
                Checkout
              </Tab>
              <Tab className="data-[selected]:bg-black data-[selected]:text-white px-4 py-2 rounded-t-lg data-[hover]:bg-slate-500 data-[hover]:text-white">
                Datos de envio
              </Tab>
            </TabList>
            <TabPanels>
              <TabPanel>
                <TableCart cart={cart}/>
              </TabPanel>
              <TabPanel>
                <FormCheckout />
              </TabPanel>
            </TabPanels>
          </TabGroup>
        </div>
        <div className="col-span-1 border-2">
          <div className="flex justify-between p-6 font-bold border-b-2">
            <span>Subtotal</span>
            <span>S/ 200.00</span>
          </div>
          <div className="p-6 border-b-2">
            <span className="text-xs">Código de descuento</span>
            <div className="flex mb-2">
              <input type="text" placeholder="Ingrese el código" className="p-4 border-2 border-black outline-none rounded-s-xl" />
              <button className="px-8 py-4 text-white bg-black rounded-e-xl">
                Aplicar
              </button>
            </div>
            <div className="flex justify-between text-sm">
              <span>Costo del delivery</span>
              <span>S/ 5.00</span>
            </div>
          </div>
          <div className="flex justify-between p-6 font-bold">
            <span>Total</span>
            <span>S/ 205.00</span>
          </div>
          <div className="px-6 mb-6">
            <button className="w-full p-4 text-white bg-black rounded-xl">
              Realizar Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
