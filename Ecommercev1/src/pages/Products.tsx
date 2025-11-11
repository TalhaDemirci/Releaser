"use client";

import React from "react";
import Header from "@/components/Header";
import ProductCard from "@/components/ProductCard";
import { MadeWithDyad } from "@/components/made-with-dyad";

const Products: React.FC = () => {
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
    },
    {
      id: 5,
      name: "Mechanical Keyboard",
      price: 129.99,
      description: "RGB backlit mechanical gaming keyboard",
      image: "/placeholder.svg?height=200&width=300"
    },
    {
      id: 6,
      name: "Wireless Mouse",
      price: 39.99,
      description: "Ergonomic wireless mouse with long battery life",
      image: "/placeholder.svg?height=200&width=300"
    },
    {
      id: 7,
      name: "4K Monitor",
      price: 349.99,
      description: "27-inch 4K UHD monitor with HDR",
      image: "/placeholder.svg?height=200&width=300"
    },
    {
      id: 8,
      name: "Tablet Stand",
      price: 29.99,
      description: "Adjustable stand for tablets and phones",
      image: "/placeholder.svg?height=200&width=300"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Our Products</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </main>
      <MadeWithDyad />
    </div>
  );
};

export default Products;