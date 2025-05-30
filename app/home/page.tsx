'use client';

import Link from 'next/link';

const LazadaMockup = () => {
  const products = Array.from({ length: 9 }).map((_, i) => ({
    id: i,
    name: `Product Name ${i}`,
    price: 998,
    image: `https://picsum.photos/seed/${i}/300/200`,
  }));

  return (
    <div className="min-h-screen bg-base-100 text-base-content">
      {/* Top Navbar */}
      <div className="navbar bg-primary text-primary-content px-4">
        <div className="flex-1">
          <div className="text-2xl font-bold">Lazada</div>
        </div>
        <div className="flex-1 px-4">
          <div className="w-full">
            <div className="input input-bordered w-full bg-white text-black">Search</div>
          </div>
        </div>
        <div className="flex-none flex gap-4">
          <div className="btn btn-ghost">Login</div>
          <div className="btn btn-ghost">Cart</div>
        </div>
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-12 gap-4 p-4">
        {/* Sidebar */}
        <div className="col-span-2 space-y-2">
          <div className="bg-base-200 p-2 rounded">Category 1</div>
          <div className="bg-base-200 p-2 rounded">Category 2</div>
          <div className="bg-base-200 p-2 rounded">Category 3</div>
          <div className="bg-base-200 p-2 rounded">Category 4</div>
          <div className="bg-base-200 p-2 rounded">Category 5</div>
          <div className="bg-base-200 p-2 rounded">Category 6</div>
        </div>

        {/* Main Panel */}
        <div className="col-span-10 space-y-4">
          {/* Banner */}
          <div className="bg-secondary h-48 rounded flex items-center justify-center text-white text-2xl">
            Main Banner
          </div>

          {/* Flash Sale / Promo Section */}
          <div className="grid grid-cols-5 gap-4">
            <div className="bg-accent h-32 rounded">Promo 1</div>
            <div className="bg-accent h-32 rounded">Promo 2</div>
            <div className="bg-accent h-32 rounded">Promo 3</div>
            <div className="bg-accent h-32 rounded">Promo 4</div>
            <div className="bg-accent h-32 rounded">Promo 5</div>
          </div>

          {/* Product Grid */}
           <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {products.map(product => (
          <Link
            key={product.id}
            href="/store"
            className="block border border-base-300 rounded-lg overflow-hidden hover:shadow-md transition"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-32 object-cover"
            />
            <div className="p-2">
              <div className="font-bold text-sm">{product.name}</div>
              <div className="text-primary font-semibold">₱{product.price}</div>
            </div>
          </Link>
        ))}
      </div>
        </div>
      </div>

      {/* Footer */}
      <div className="bg-base-200 text-center p-4 mt-4">
        © 2025 Lazada Clone UI. All rights reserved.
      </div>
    </div>
  );
};

export default LazadaMockup;