import Banner from "./components/Banner";
import Categories from "./components/Categories";
import Products from "./components/Products";

export default function Home() {
  return (
    <div>
      {/* Banner Section */}
      <Banner />

      {/* Product Section */}
      <section className="container mx-auto py-10">
        <Categories />
        <Products />
      </section>
    </div>
  );
}
