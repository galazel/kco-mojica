import Header from "@/components/Header";
import React from "react";

function Home({children}) {
  return (
    <main className="relative bg-amber-200">
      <Header />
      {children}
      {/* footer */}
    </main>
  );
}

export default Home;
