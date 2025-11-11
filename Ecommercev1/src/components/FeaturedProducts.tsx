"use client";

import React from "react";
import ProductCard from "@/components/ProductCard";

const FeaturedProducts: React.FC = () => {
  // Sample product data
  const products = [
    {
      id: 1,
      name: "Wireless Headphones",
      price: 99.99,
      description: "High-quality sound with noise cancellation",
      image: "/placeholder.svg?height=200&width=300"
    },
    {
      id: 2,
      name: "Smart Watch",
      price: 199.99,
      description: "Track your fitness and stay connected",
      image: "/placeholder.svg?height=200&width=300"
    },
    {
      id: 3,
      name: "Bluetooth Speaker",
      price: 79.99,
      description: "Portable speaker with 360° sound",
      image: "/placeholder.svg?height=200&width=300"
    },
    {
      id: 4,
      name: "Laptop Stand",
      price: 49.99,
      description: "Ergonomic adjustable stand for your laptop",
      image: "/placeholder.svg?height=200&width=300"
    }
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Featured Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;