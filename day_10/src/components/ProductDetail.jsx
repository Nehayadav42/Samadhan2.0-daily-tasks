import React, { useState } from 'react';
import QuantitySelector from './QuantitySelector';

function ProductDetail({ product, onBack, onAddToCart }) {
  const [quantity, setQuantity] = useState(1);
  const [selectedColor, setSelectedColor] = useState(product?.colors?.[0] ?? '#D1D5DB');

  if (!product) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <p className="text-gray-600">No product selected.</p>
        <button onClick={onBack} className="ml-4 px-4 py-2 bg-blue-600 text-white rounded-lg">Go Back</button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col font-sans pb-28">
      {/* Top Bar */}
      <div className="flex justify-between items-center p-4">
        <button onClick={onBack} className="p-2 bg-white rounded-xl shadow-sm">
          <svg className="h-6 w-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <div className="p-2 bg-white rounded-xl shadow-sm">
          <svg className="h-6 w-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" />
          </svg>
        </div>
      </div>

      {/* Image + Colors */}
      <div className="flex-shrink-0 flex justify-center items-center h-64 bg-white mx-4 rounded-3xl shadow-md relative mb-6">
        <img src={product.imageUrl} alt={product.name} className="max-h-full max-w-full object-contain p-4" />

        {product.colors?.length > 0 && (
          <div className="absolute top-4 right-4 bg-white p-2 rounded-full shadow-md flex flex-col space-y-2">
            {product.colors.map((color) => (
              <button
                key={color}
                type="button"
                className={`w-6 h-6 rounded-full border-2 ${selectedColor === color ? 'border-blue-600' : 'border-gray-200'}`}
                style={{ backgroundColor: color }}
                onClick={() => setSelectedColor(color)}
                aria-label={`Choose color ${color}`}
              />
            ))}
          </div>
        )}
      </div>

      {/* Details */}
      <div className="flex-grow bg-white rounded-t-3xl p-6 shadow-[0_-6px_20px_rgba(0,0,0,0.05)]">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">{product.name}</h1>

        <div className="flex justify-between items-center mb-4">
          <span className="text-gray-900 text-2xl font-bold">₹{product.price.toFixed(2)}</span>
          <QuantitySelector
            quantity={quantity}
            onIncrease={() => setQuantity((q) => q + 1)}
            onDecrease={() => setQuantity((q) => Math.max(1, q - 1))}
          />
        </div>

        <h2 className="text-lg font-semibold text-gray-800 mt-6 mb-2">Introduction</h2>
        <p className="text-gray-600 text-sm leading-relaxed">
          {product.fullDescription || product.description}
        </p>
      </div>

      {/* Add to cart (sticky) */}
      <div className="fixed bottom-0 left-0 right-0 p-4 bg-white shadow-[0_-8px_20px_rgba(0,0,0,0.08)]">
        <button
          onClick={() => onAddToCart({ ...product, quantity, selectedColor })}
          className="w-full bg-gray-900 text-white py-4 rounded-xl text-lg font-semibold shadow-lg active:scale-95 transition"
        >
          Add to cart
        </button>
      </div>
    </div>
  );
}

export default ProductDetail;
