import React from "react";
import { SignupForm } from "@/components/signup-form";
import Home from "@/views/layout/Home";

export default function Signup() {
  const signup = (
    <section className=" flex justify-center py-20">
      <div className="flex w-full max-w-sm flex-col gap-6">
        <SignupForm />
      </div>
    </section>
  );

  return <Home>{signup}</Home>;
}
