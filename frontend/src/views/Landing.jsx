import Home from "@/views/layout/Home";
import React from "react";
import { products } from "@/constant";
import { Button } from "@/components/ui/button";

export default function Landing() {
  const menu = (
    <section className="grid grid-rows-[3rem_1fr] justify-center gap-10 h-full py-20">
      <h1 className="text-5xl font-bold">Our Products</h1>
      <div className="grid grid-cols-3 gap-5 w-[75vw] h-full ">
        {products.map((item, index) => {
          return (
            <div
              key={index}
              className="flex flex-col  rounded-3xl overflow-hidden shadow-2xl"
            >
              <div className="bg-amber-900 h-[50vh] rounded-t-3xl">
                <img
                  src={item.image}
                  alt={item.name}
                  className="h-full w-full object-cover rounded-t-3xl"
                />
              </div>
              <div className="flex flex-col p-5 h-[15vh]">
                <p className="font-bold text-lg">{item.name}</p>
                <p className="text-sm text-gray-600">${item.price}</p>
                <p className="text-xs text-gray-500">In Stock: {item.stocks}</p>
                <Button className="w-full mt-3 cursor-pointer">Add to Cart</Button>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );

  return <Home>{menu}</Home>;
}
