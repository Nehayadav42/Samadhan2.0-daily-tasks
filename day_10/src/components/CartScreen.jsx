import React from 'react';
import QuantitySelector from './QuantitySelector';
import Navbar from './Navbar';

function CartItem({ item, onIncrease, onDecrease }) {
  return (
    <div className="flex items-center bg-white rounded-xl p-4 shadow-sm mb-4">
      <div className="w-20 h-20 flex-shrink-0 rounded-lg overflow-hidden mr-4 bg-gray-50">
        <img src={item.imageUrl} alt={item.name} className="w-full h-full object-contain" />
      </div>

      <div className="flex-grow">
        <h3 className="text-gray-900 font-medium">{item.name}</h3>
        {item.selectedColor && (
          <div className="flex items-center mt-1">
            <span className="text-xs text-gray-500 mr-2">Color:</span>
            <span
              className="w-4 h-4 rounded-full border border-gray-300 inline-block"
              style={{ backgroundColor: item.selectedColor }}
            />
          </div>
        )}
        <p className="text-gray-900 font-semibold mt-1">₹{(item.price * item.quantity).toFixed(2)}</p>
      </div>

      <QuantitySelector
        quantity={item.quantity}
        onIncrease={() => onIncrease(item.cartItemId, +1)}
        onDecrease={() => onDecrease(item.cartItemId, -1)}
        className="ml-4"
      />
    </div>
  );
}

function CartScreen({ cartItems, onUpdateQuantity, onBack, onScreenChange, activeScreen }) {
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col pt-6 pb-28 font-sans">
      {/* Top Bar */}
      <div className="flex justify-between items-center px-4 mb-2">
        <button onClick={onBack} className="p-2 bg-white rounded-xl shadow-sm">
          <svg className="h-6 w-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <h1 className="text-xl font-bold text-gray-900">Cart</h1>
        <div className="p-2 bg-white rounded-xl shadow-sm">
          <svg className="h-6 w-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" />
          </svg>
        </div>
      </div>

      {/* Items */}
      <div className="flex-grow px-4">
        {cartItems.length === 0 ? (
          <p className="text-center text-gray-600 mt-10">Your cart is empty.</p>
        ) : (
          cartItems.map(item => (
            <CartItem
              key={item.cartItemId}
              item={item}
              onIncrease={onUpdateQuantity}
              onDecrease={onUpdateQuantity}
            />
          ))
        )}
      </div>

      {/* Summary + CTA */}
      {cartItems.length > 0 && (
        <div className="fixed bottom-0 left-0 right-0 bg-white p-6 shadow-[0_-8px_20px_rgba(0,0,0,0.08)] rounded-t-3xl">
          <div className="flex justify-between items-center mb-4">
            <span className="text-gray-600">Total ({totalItems} items):</span>
            <span className="text-3xl font-bold text-gray-900">₹{subtotal.toFixed(2)}</span>
          </div>
          <button className="w-full bg-gray-900 text-white py-4 rounded-xl text-lg font-semibold shadow-lg active:scale-95 transition">
            Proceed to checkout
          </button>
        </div>
      )}

      <Navbar activeScreen={activeScreen} onScreenChange={onScreenChange} />
    </div>
  );
}

export default CartScreen;
