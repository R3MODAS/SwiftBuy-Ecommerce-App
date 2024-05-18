"use client"

import Banner from "../components/Banner";
import Product from "./product/page";

export default function Home() {
  return (
    <>
      <div className="mt-20">
        {/* Banner Section */}
        <Banner />

        {/* Products Section */}
        <Product />
      </div>
    </>
  );
}
