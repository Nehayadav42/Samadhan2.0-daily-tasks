// src/App.jsx
import ProductCardSimple from "./components/ProductCardSimple";

const products = [
  { name: "Wireless Headphones", price: 2999, image: "https://via.placeholder.com/300x200" },
  { name: "Smart Watch", price: 4999, image: "https://via.placeholder.com/300x200" },
  { name: "Gaming Mouse", price: 1599, image: "https://via.placeholder.com/300x200" },
  { name: "Mechanical Keyboard", price: 3999, image: "https://via.placeholder.com/300x200" },
];

export default function App() {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-center mb-8">🛍️ Styled Product Card List</h1>

      {/* New Arrival Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">✨ New Arrivals</h2>
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {products.map((item, index) => (
            <ProductCardSimple
              key={index}
              name={item.name}
              price={item.price}
              image={item.image}
            />
          ))}
        </div>
      </section>

      {/* Recommend Section */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">🔥 Recommended</h2>
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {products.map((item, index) => (
            <ProductCardSimple
              key={index}
              name={item.name}
              price={item.price}
              image={item.image}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
