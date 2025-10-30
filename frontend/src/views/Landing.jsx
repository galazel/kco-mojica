import Home from "@/views/layout/Home";
import React from "react";

export default function Landing() {
  const menu = (
    <section className="flex flex-col gap-5 bg-amber-300 h-screen p-5">
      <h1>Menu</h1>
      <div className="grid grid-cols-3 bg-red-600 h-full">
        <div>sdfds</div>
        <div>fsdf</div>
        <div>sdfdsf</div>
        <div>dsfsf</div>
        <div>sdfsdf</div>
        <div>fdag</div>
      </div>
    </section>
  );

  return <Home>{menu}</Home>;
}
