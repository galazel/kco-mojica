import React from "react";
import { GalleryVerticalEnd } from "lucide-react";
import { LoginForm } from "@/components/login-form";
import Home from "@/views/layout/Home";

export default function Login() {
  const login = (
    <section className="bg-muted flex min-h-svh flex-col justify-center items-center gap-6 p-6 md:p-10 ">
      <div className="flex w-full max-w-sm flex-col gap-6">
        <LoginForm />
      </div>
    </section>
  );

  return <Home>{login}</Home>;
}
