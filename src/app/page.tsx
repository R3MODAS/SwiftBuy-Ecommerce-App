"use client"

import Banner from "./components/Banner";
import Products from "./components/Products";

export default function Home() {
  return (
    <>
    <div className="mt-20">
      {/* Banner Section */}
      <Banner />

      {/* Product Section */}
      <Products />
    </div>
    </>
  );
}
