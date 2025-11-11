"use client";

import React from "react";
import { Button } from "@/components/ui/button";

const Hero: React.FC = () => {
  return (
    <section className="bg-gradient-to-r from-blue-500 to-purple-600 text-white py-16">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Welcome to ShopEasy</h1>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Discover amazing products at unbeatable prices. Shop with confidence and enjoy fast delivery.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button variant="secondary" size="lg" className="text-blue-600">
            Shop Now
          </Button>
          <Button variant="outline" size="lg" className="text-white border-white hover:bg-white/10">
            Learn More
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;