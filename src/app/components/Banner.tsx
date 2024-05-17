"use client"

const Banner = () => {
  return (
    <section id="banner">
      <div className="container mx-auto h-full">
        <div className="h-full flex items-start flex-col justify-center w-1/2">
          <span className="text-sm font-medium">SPRING / SUMMER COLLECTION 2024</span>
          <h1 className="text-7xl pt-5 pb-8 font-bold">Get up to 30% Off New Arrivals</h1>
          <button className="bg-purple-600 text-white px-6 py-3 rounded-lg uppercase font-medium hover:bg-purple-500 transition-colors">Shop Now</button>
        </div>
      </div>
    </section>
  )
}

export default Banner