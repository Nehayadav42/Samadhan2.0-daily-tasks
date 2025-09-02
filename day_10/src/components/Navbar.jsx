import React from 'react';

function Navbar({ activeScreen, onScreenChange }) {
  const navItems = [
    { name: 'Home', screen: 'home', iconPath: 'M3 12l2-2m0 0l7-7 7 7M5 10v10...' },
    { name: 'Likes', screen: 'likes', iconPath: 'M4.318 6.318a4.5 4.5 0 000 6.364L12...' },
    { name: 'Cart', screen: 'cart', iconPath: 'M3 3h2l.4 2M7 13h10l4-8H5.4...' },
    { name: 'Profile', screen: 'profile', iconPath: 'M16 7a4 4 0 11-8 0 4 4 0 018...' },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white shadow-[0_-4px_12px_rgba(0,0,0,0.06)] p-3 rounded-t-3xl flex justify-around items-center z-50">
      {navItems.map((item) => (
        <button
          key={item.name}
          onClick={() => onScreenChange(item.screen)}
          className={`flex flex-col items-center px-3 py-2 rounded-xl transition-colors
            ${activeScreen === item.screen ? 'text-blue-600 bg-blue-50' : 'text-gray-400 hover:text-gray-600'}`}
        >
          <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={item.iconPath} />
          </svg>
          <span className="text-[11px] mt-1">{item.name}</span>
        </button>
      ))}
    </nav>
  );
}

export default Navbar;
