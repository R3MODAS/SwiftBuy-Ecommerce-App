const Banner = () => {
  return (
    <section id="banner">
      <div className="container mx-auto h-full">
        <div className="h-full flex items-start flex-col justify-center lg:w-1/2 w-full px-5">
          <span className="text-sm font-medium">SPRING / SUMMER COLLECTION 2024</span>
          <h1 className="text-4xl lg:text-7xl pt-2 pb-5 lg:pt-5 lg:pb-8 font-bold">Get up to 30% Off New Arrivals</h1>
          <button className="common-btn">Shop Now</button>
        </div>
      </div>
    </section>
  )
}

export default Banner