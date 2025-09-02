

import React from 'react';

function QuantitySelector({ quantity, onIncrease, onDecrease, className = '' }) {
  return (
    <div className={`flex items-center space-x-2 bg-gray-100 rounded-full p-1 ${className}`}>
      <button
        onClick={onDecrease}
        className="text-gray-700 hover:text-gray-900 p-1 rounded-full hover:bg-gray-200"
        aria-label="Decrease quantity"
      >
        <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 12H4" />
        </svg>
      </button>
      <span className="font-semibold text-gray-900 text-sm w-6 text-center">{quantity}</span>
      <button
        onClick={onIncrease}
        className="text-gray-700 hover:text-gray-900 p-1 rounded-full hover:bg-gray-200"
        aria-label="Increase quantity"
      >
        <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
        </svg>
      </button>
    </div>
  );
}

export default QuantitySelector;
