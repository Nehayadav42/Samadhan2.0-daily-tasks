import React from "react";
import ProductCardSimple from "./ProductCardSimple";

export default function ProductGrid({ onProductSelect }) {
  // Dummy products
  const products = [
    { id: 1, name: "Sneakers", price: 1999, imageUrl: "https://via.placeholder.com/150", rating: 4, isNew: true },
    { id: 2, name: "Backpack", price: 999, imageUrl: "https://via.placeholder.com/150", rating: 3, isNew: false },
    { id: 3, name: "Smart Watch", price: 2999, imageUrl: "https://via.placeholder.com/150", rating: 5, isNew: true },
    { id: 4, name: "Headphones", price: 1499, imageUrl: "https://via.placeholder.com/150", rating: 4, isNew: false },
  ];

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
      {products.map((p) => (
        <ProductCardSimple key={p.id} product={p} onProductSelect={onProductSelect} />
      ))}
    </div>
  );
}
