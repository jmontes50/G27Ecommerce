const TableCart = ({ cart }) => {
  return (
    <table className="w-full">
      <thead className="text-xs uppercase">
        <tr>
          <th className="px-6 py-3 text-left">Producto</th>
          <th className="px-6 py-3 text-left">Precio</th>
          <th className="px-6 py-3 text-left">Cantidad</th>
          <th className="px-6 py-3 text-left">Subtotal</th>
        </tr>
      </thead>
      <tbody className="text-sm">
        {cart
          ? cart.map((prod) => (
              <tr key={prod.id} className="border-b-2">
                <td className="px-6 py-4">{prod.name}</td>
                <td className="px-6 py-4">{`S/ ${prod.price.toFixed(2)}`}</td>
                <td className="px-6 py-4">{`${prod.quantity} Unidades`}</td>
                <td className="px-6 py-4">{`S/ ${(
                  prod.price * prod.quantity
                ).toFixed(2)}`}</td>
              </tr>
            ))
          : null}
      </tbody>
    </table>
  );
};

export default TableCart;
