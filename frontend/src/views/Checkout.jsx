import Home from "@/views/layout/Home";
import React from "react";

export default function Checkout() {
  const checkoutContent = (
    <section className="flex justify-center items-center  h-[85vh] py-20">
      <div className="grid grid-cols-2 gap-3 bg-gray-300 w-[100vh] h-full">
        <div>Items</div>
        <div>Summary</div>
      </div>
    </section>
  );

  return <Home>{checkoutContent}</Home>;
}
