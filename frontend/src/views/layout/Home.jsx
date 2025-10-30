import Header from "@/components/Header";
import React from "react";

function Home({ children }) {
  return (
    <main className="relative">
      <Header />
      {children}
      {/* footer */}
    </main>
  );
}

export default Home;
