/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable react/prop-types */

'use client';

// any component that uses useAuth needs this because if a component directly imports useAuth, it needs to be a client component since useAuth uses React hooks.

import { useState, useEffect } from 'react';
import { Bars3Icon } from '@heroicons/react/24/outline';

// function CategorySection() {
//   const categories = [
//     {
//       name: 'New Arrivals',
//       imageSrc: 'https://tailwindcss.com/plus-assets/img/ecommerce-images/home-page-01-category-01.jpg',
//       href: '#',
//     },
//     {
//       name: 'Productivity',
//       imageSrc: 'https://tailwindcss.com/plus-assets/img/ecommerce-images/home-page-01-category-02.jpg',
//       href: '#',
//     },
//     {
//       name: 'Workspace',
//       imageSrc: 'https://tailwindcss.com/plus-assets/img/ecommerce-images/home-page-01-category-04.jpg',
//       href: '#',
//     },
//     {
//       name: 'Accessories',
//       imageSrc: 'https://tailwindcss.com/plus-assets/img/ecommerce-images/home-page-01-category-05.jpg',
//       href: '#',
//     },
//     {
//       name: 'Sale',
//       imageSrc: 'https://tailwindcss.com/plus-assets/img/ecommerce-images/home-page-01-category-03.jpg',
//       href: '#',
//     },
//   ];

//   return (
//     <section className="pt-24 px-4 sm:px-6 lg:px-8">
//       <h2 className="text-2xl font-bold text-gray-900 mb-6">Shop by Category</h2>
//       <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
//         {categories.map((cat) => (
//           <a key={cat.name} href={cat.href} className="relative rounded-lg overflow-hidden group">
//             <img src={cat.imageSrc} alt={cat.name} className="w-full h-48 object-cover group-hover:opacity-80" />
//             <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white text-center py-2 font-semibold">{cat.name}</div>
//           </a>
//         ))}
//       </div>
//     </section>
//   );
// }

// function CollectionSection() {
//   const collections = [
//     {
//       name: 'Handcrafted Collection',
//       imageSrc: 'https://tailwindcss.com/plus-assets/img/ecommerce-images/home-page-01-collection-01.jpg',
//       imageAlt: 'Brown leather key ring on wood table.',
//       description: 'Keep your phone, keys, and wallet together.',
//       href: '#',
//     },
//     {
//       name: 'Organized Desk Collection',
//       imageSrc: 'https://tailwindcss.com/plus-assets/img/ecommerce-images/home-page-01-collection-02.jpg',
//       imageAlt: 'Leather mouse pad on white desk.',
//       description: 'Your desk will look great.',
//       href: '#',
//     },
//     {
//       name: 'Focus Collection',
//       imageSrc: 'https://tailwindcss.com/plus-assets/img/ecommerce-images/home-page-01-collection-03.jpg',
//       imageAlt: 'Task list card in walnut holder.',
//       description: 'Be more productive with a single piece of paper.',
//       href: '#',
//     },
//   ];

//   return (
//     <section className="py-24 px-4 sm:px-6 lg:px-8">
//       <h2 className="text-2xl font-bold text-gray-900 mb-6">Shop by Collection</h2>
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//         {collections.map((item) => (
//           <a key={item.name} href={item.href} className="group block">
//             <img src={item.imageSrc} alt={item.imageAlt} className="w-full h-64 object-cover rounded-lg group-hover:opacity-75" />
//             <h3 className="mt-4 text-lg font-semibold text-gray-900">{item.name}</h3>
//             <p className="text-sm text-gray-500">{item.description}</p>
//           </a>
//         ))}
//       </div>
//     </section>
//   );
// }

function FeaturedProducts({ products }) {
  return (
    <section className="p-8 bg-gray-50">
      <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Featured Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Placeholder product cards */}
        {products.map((product) => (
          <div key={product.id} className="border rounded-lg p-4 shadow-sm bg-white">
            <div className="h-40 bg-gray-200 rounded mb-4">
              <img src="https://picsum.photos/200/300" alt="randomly generated media" />
            </div>
            <h3 className="font-semibold text-gray-800">{product.name}</h3>
            <p className="text-sm text-gray-500">{product.price}</p>
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

function Header({ setMobileMenuOpen }) {
  return (
    <header className="bg-gray-100 p-4 shadow-sm">
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        <h1 className="text-lg font-bold">Apparel Demo</h1>
        <button type="button" onClick={() => setMobileMenuOpen(true)} className="lg:hidden">
          <Bars3Icon className="h-6 w-6 text-gray-600" />
        </button>
      </div>
    </header>
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
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
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
      <Header mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} />
      <HeroSection />
      <main>
        {/* <CategorySection /> */}
        <FeaturedProducts products={products} />
        {/* <CollectionSection /> */}
      </main>
      <Footer />
    </div>
  );
}

export default Home;
