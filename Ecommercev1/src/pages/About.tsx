"use client";

import React from "react";
import Header from "@/components/Header";
import { MadeWithDyad } from "@/components/made-with-dyad";

const About: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">About ShopEasy</h1>
        <div className="prose max-w-none">
          <p className="mb-4">
            Welcome to ShopEasy, your number one source for all things electronics. We're dedicated to providing you the best of products, with a focus on dependability, customer service and uniqueness.
          </p>
          <p className="mb-4">
            Founded in 2023, ShopEasy has come a long way from its beginnings. When our team first started out, their passion for helping other entrepreneurs and businesses be more eco-friendly drove them to start their own business.
          </p>
          <p className="mb-4">
            We now serve customers all over the world, and are thrilled to be a part of the eco-friendly wing of the fashion, beauty, and health industries.
          </p>
          <h2 className="text-2xl font-semibold mt-8 mb-4">Our Mission</h2>
          <p>
            To provide high-quality products that make our customers' lives easier while maintaining our commitment to sustainability and ethical business practices.
          </p>
        </div>
      </main>
      <MadeWithDyad />
    </div>
  );
};

export default About;