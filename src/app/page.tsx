import Banner from "./components/Banner";
import Products from "./components/Products";

export default function Home() {
  return (
    <div>
      {/* Banner Section */}
      <Banner />

      {/* Product Section */}
      <section className="container mx-auto py-10">
        <Products />
      </section>
    </div>
  );
}
