import { Link } from "react-router-dom"
import ProductCard from "../components/product-card"

const Home = () => {

  const addToCartHandler = () => {}

  return (
    <div className="home">
      <section></section>

      <h1>
        Latest Products
        <Link to="/search" className="findmore">
          More
        </Link>
      </h1>

      <main>
          <ProductCard productId="asadasd" name="Macbook" price={123} photo="asdasd" stock={2} key={123} handler={addToCartHandler} />
      </main>
    </div>
  )
}

export default Home