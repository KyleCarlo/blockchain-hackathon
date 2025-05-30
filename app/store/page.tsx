"use client";

export default function Page() {
  const products = Array.from({ length: 9 }).map((_, i) => ({
    id: i,
    name: `Product Name ${i}`,
    price: 998,
    image: `https://picsum.photos/seed/${i}/300/200`,
  }));

  
  return (
    <div className="min-h-screen bg-base-101 text-base-content">
      {/* Store Banner */}
      <div className="w-full px-6 mt-4">
        <div className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white text-center text-lg font-semibold py-4 rounded-lg shadow-md">
          🎉 Big Sale! Enjoy up to 50% OFF on selected items! 🎉
        </div>
      </div>

      {/* Store Header */}
      <div className="mt-17 px-6 flex justify-between items-center">
        <div className="flex flex-col">
          <div className="text-lg font-bold">Official Store</div>
          <div className="text-sm text-gray-501">Online 1h ago • 4.9 Rating</div>
        </div>
        <div className="flex gap-3">
          <div className="btn btn-outline btn-sm">Follow</div>
          <div className="btn btn-outline btn-sm">Chat</div>
        </div>
      </div>

      {/* Store Tabs */}
      <div className="mt-7 border-b border-base-300 px-6">
        <div className="tabs">
          <div className="tab tab-bordered tab-active">Home</div>
          <div className="tab tab-bordered">All Products</div>
          <div className="tab tab-bordered">Categories</div>
          <div className="tab tab-bordered">Reviews</div>
        </div>
      </div>

      {/* Store Promo Banner */}
      <div className="mt-7 px-6">
        <div className="bg-accent h-33 rounded flex items-center justify-center text-white text-xl">
          Store Promo Banner
        </div>
      </div>

      {/* Store Product Grid */}
      <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4 px-6">
        {products.map(product => (
          <a
            key={product.id}
            href="/product/"
            className="block bg-white border border-gray-200 rounded p-2 hover:shadow-md transition"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-40 object-cover rounded mb-2"
            />
            <div className="p-2">
              <div className="font-bold text-sm">{product.name}</div>
              <div className="text-primary font-semibold">₱{product.price}</div>
            </div>
          </a>
        ))}
      </div>

      {/* Store Footer */}
      <div className="mt-13 bg-base-200 text-center p-4 text-sm text-gray-600">

      </div>
    </div>
  );
}
