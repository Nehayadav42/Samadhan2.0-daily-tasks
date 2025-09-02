function ProductCardSimple({ name, price, image }) {
  return (
    <div className="bg-white shadow-lg rounded-xl overflow-hidden hover:scale-105 transform transition">
      <img src={image} alt={name} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-lg font-semibold">{name}</h3>
        <p className="text-gray-600">{price}</p>
        <button className="mt-3 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default ProductCardSimple;
