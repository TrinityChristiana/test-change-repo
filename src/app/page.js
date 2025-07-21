/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable react/prop-types */

'use client';

// any component that uses useAuth needs this because if a component directly imports useAuth, it needs to be a client component since useAuth uses React hooks.

import { useState, useEffect } from 'react';

function FeaturedProducts({ products }) {
  return (
    <section className="p-8 bg-gray-50">
      <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Featured Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Placeholder product cards */}
        {products.map((product) => (
          <div key={product.id} className="border rounded-lg p-4 shadow-sm bg-white">
            <div className="h-40 bg-gray-200 rounded mb-4 bg-[url(https://picsum.photos/200/300)]" />
            <h3 className="font-semibold text-gray-800">{product.name}</h3>
            <p className="text-sm text-gray-500">${product.price}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
function Footer() {
  return (
    <footer className="bg-gray-900 text-white p-6 text-center">
      <p className="text-sm">© 2025 Repped In Tech, Inc.</p>
    </footer>
  );
}

function HeroSection() {
  return (
    <section className="relative bg-gray-900">
      <img className="absolute inset-0 w-full h-full object-cover opacity-50" src="https://tailwindcss.com/plus-assets/img/ecommerce-images/home-page-01-hero-full-width.jpg" alt="Hero" />
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-6 py-32 sm:py-64">
        <h2 className="text-4xl font-bold text-white sm:text-6xl">New arrivals are here</h2>
        <p className="mt-4 text-xl text-white max-w-2xl">Check out the latest options from our summer small-batch release while they are still in stock.</p>
        <a href="/" className="mt-8 inline-block rounded-md border border-transparent bg-white px-8 py-3 text-base font-medium text-gray-900 hover:bg-gray-100">
          Shop New Arrivals
        </a>
      </div>
    </section>
  );
}

function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('/api/products')
      .then((res) => res.json())
      .then((data) => {
        const shuffled = data.sort(() => 0.5 - Math.random());
        setProducts(shuffled.slice(0, 10));
      });
  }, []);

  return (
    <div className="bg-white">
      <HeroSection />
      <main>
        <FeaturedProducts products={products} />
      </main>
      <Footer />
    </div>
  );
}

export default Home;
