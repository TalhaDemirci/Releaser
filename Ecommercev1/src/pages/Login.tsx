"use client";

import React from "react";
import Header from "@/components/Header";
import LoginForm from "@/components/LoginForm";
import { MadeWithDyad } from "@/components/made-with-dyad";

const Login: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow flex items-center justify-center py-12">
        <LoginForm />
      </main>
      <MadeWithDyad />
    </div>
  );
};

export default Login;