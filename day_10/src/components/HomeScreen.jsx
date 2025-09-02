import React from 'react';
import ProductCardSimple from './ProductCardSimple';
import Navbar from './Navbar';

const newArrivals = [
  { id: 'na1', name: 'Nordic chair', description: 'Cozy chair', price: 399, imageUrl: 'https://via.placeholder.com/150/F0F0F0/000000?text=Chair+Grey', rating: 5, isNew: true, colors: ['#D1D5DB', '#E5E7EB', '#000000'], fullDescription: 'The high-back Nordic chair will provide the best comfort. The stylish design of the chair will allow you to decorate any room in your home.' },
  { id: 'na2', name: 'Nordic sofa chair', description: 'Luxurious sofa chair', price: 699, imageUrl: 'https://via.placeholder.com/150/F8F8F8/000000?text=Chair+White', rating: 4, isNew: true, colors: ['#E5E7EB', '#D1D5DB', '#000000'], fullDescription: 'An elegant and comfortable sofa chair, perfect for adding a touch of sophistication to your living space.' },
];

const recommended = [
  { id: 'r1', name: 'Minimalist table', description: 'Sleek design', price: 299, imageUrl: 'https://via.placeholder.com/150/D1D5DB/000000?text=Table+Grey', rating: 4, isNew: false, colors: ['#D1D5DB', '#E5E7EB', '#000000'], fullDescription: 'A clean and modern minimalist table, ideal for compact spaces and contemporary decor.' },
  { id: 'r2', name: 'Wooden bookshelf', description: 'Rustic charm', price: 499, imageUrl: 'https://via.placeholder.com/150/F8F8F8/000000?text=Bookshelf+White', rating: 5, isNew: false, colors: ['#E5E7EB', '#D1D5DB', '#000000'], fullDescription: 'A sturdy wooden bookshelf with a rustic feel, perfect for storing books and decorative items.' },
];

function HomeScreen({ onProductSelect, onScreenChange, activeScreen }) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white flex flex-col pt-6 pb-24 font-sans">
      {/* Top Bar */}
      <div className="flex justify-between items-center px-4">
        <button className="p-2 bg-white rounded-xl shadow-sm">
          <svg className="h-6 w-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
        <button
          onClick={() => onScreenChange('cart')}
          className="p-2 bg-white rounded-xl shadow-sm relative"
        >
          <svg className="h-6 w-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
          </svg>
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">2</span>
        </button>
      </div>

      <div className="px-4 flex-grow">
        {/* New Arrival */}
        <section className="mb-8">
          <header className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-bold text-gray-900">New arrival</h2>
            <button className="text-gray-500 text-sm hover:text-gray-700">View all →</button>
          </header>

          <div className="flex overflow-x-auto space-x-4 pb-2 scrollbar-hide">
            {newArrivals.map((p) => (
              <ProductCardSimple key={p.id} product={p} onProductSelect={onProductSelect} />
            ))}
          </div>
        </section>

        {/* Recommend */}
        <section>
          <header className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-bold text-gray-900">Recommend</h2>
            <button className="text-gray-500 text-sm hover:text-gray-700">View all →</button>
          </header>

          <div className="flex overflow-x-auto space-x-4 pb-2 scrollbar-hide">
            {recommended.map((p) => (
              <ProductCardSimple key={p.id} product={p} onProductSelect={onProductSelect} />
            ))}
          </div>
        </section>
      </div>

      <Navbar activeScreen={activeScreen} onScreenChange={onScreenChange} />
    </div>
  );
}

export default HomeScreen;
