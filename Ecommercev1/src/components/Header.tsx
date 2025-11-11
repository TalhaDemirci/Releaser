"use client";

import React from "react";
import { ShoppingCart, Menu, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { useAuth } from "@/contexts/AuthContext";
import UserMenu from "@/components/UserMenu";

const Header: React.FC = () => {
  const { toast } = useToast();
  const { isAuthenticated } = useAuth();

  const handleCartClick = () => {
    toast({
      title: "Cart",
      description: "Cart functionality would go here in a full implementation.",
    });
  };

  return (
    <header className="border-b">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <h1 className="text-2xl font-bold">ShopEasy</h1>
        </div>
        
        <nav className="hidden md:flex space-x-6">
          <a href="/" className="font-medium hover:text-gray-700">Home</a>
          <a href="/products" className="font-medium hover:text-gray-700">Products</a>
          <a href="/about" className="font-medium hover:text-gray-700">About</a>
          <a href="/contact" className="font-medium hover:text-gray-700">Contact</a>
        </nav>
        
        <div className="flex items-center space-x-4">
          {isAuthenticated ? (
            <UserMenu />
          ) : (
            <a href="/login">
              <Button variant="ghost" size="icon">
                <User className="h-5 w-5" />
              </Button>
            </a>
          )}
          <Button variant="ghost" size="icon" onClick={handleCartClick}>
            <ShoppingCart className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;