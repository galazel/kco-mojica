import React from "react";
import { LoginForm } from "@/components/login-form";
import Home from "@/views/layout/Home";

export default function Login() {
  const login = (
    <section className="flex justify-center py-20">
      <div className="flex w-full max-w-sm flex-col gap-6">
        <LoginForm />
      </div>
    </section>
  );

  return <Home>{login}</Home>;
}
