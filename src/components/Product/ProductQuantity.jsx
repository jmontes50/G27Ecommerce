const ProductQuantity = ({ quantity, incrementQty, decrementQty }) => {
  return (
    <div className="flex">
      {/* 1er botón */}
      <button
        className="p-4 border-y-2 border-s-2 border-slate-900 rounded-s-lg hover:bg-gray-100"
        onClick={decrementQty}
      >
        <i className="fa-solid fa-minus"></i>
      </button>
      {/* span */}
      <span className="p-4 border-y-2 border-slate-900">{quantity}</span>
      {/* 2do botón */}
      <button
        className="p-4 border-y-2 border-e-2 border-slate-900 rounded-e-lg hover:bg-gray-100"
        onClick={incrementQty}
      >
        <i className="fa-solid fa-plus"></i>
      </button>
    </div>
  );
};

export default ProductQuantity;
