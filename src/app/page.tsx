import ProductList from "@/components/product-list";
import Banner from "../components/Banner";

export default function Home() {
  return (
    <>
      <div className="mt-20">
        {/* Banner Section */}
        <Banner />

        {/* Products Section */}
        <ProductList />
      </div>
    </>
  );
}
