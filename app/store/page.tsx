"use client";

import "../globals.css";
import { useState, useEffect } from "react";
import React from "react";

const StorePageMockup = () => {     
  return (
    <div className="min-h-screen bg-base-101 text-base-content">
      {/* Store Banner */}
      <div className="relative bg-gradient-to-r from-primary to-secondary h-49">
        <div className="absolute left-7 bottom-[-2rem] flex items-center gap-4">
          <div className="w-25 h-24 bg-white rounded-full border-4 border-base-100"></div>
          <div className="text-white text-3xl font-bold">Store Name</div>
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

      {/* Product Grid */}
      <div className="mt-7 px-6 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {Array.from({ length: 9 }).map((_, i) => (
          <div key={i} className="bg-base-201 p-2 rounded space-y-2">
            <div className="h-33 bg-gray-300 rounded">Image</div>
            <div className="text-sm font-bold">Product Name {i + 0}</div>
            <div className="text-sm text-primary">₱998</div>
          </div>
        ))}
      </div>

      {/* Store Footer */}
      <div className="mt-13 bg-base-200 text-center p-4 text-sm text-gray-600">

      </div>
    </div>
  );
}

export default StorePageMockup;
