"use client";

import React from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import FeaturedProducts from "@/components/FeaturedProducts";
import { MadeWithDyad } from "@/components/made-with-dyad";

const Index: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />
        <FeaturedProducts />
      </main>
      <MadeWithDyad />
    </div>
  );
};

export default Index;