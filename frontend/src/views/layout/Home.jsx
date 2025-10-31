import Header from "@/components/Header";
import React from "react";

function Home({ children }) {
  return (
    <main className="relative flex flex-col">
      <Header />
      {children}
      {/* footer */}
    </main>
  );
}

export default Home;
