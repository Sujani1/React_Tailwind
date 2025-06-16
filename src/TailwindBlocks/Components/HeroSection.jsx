
import React from 'react'

const HeroSection = () => {
  return (
    <section>
        <section className="text-gray-600 body-font bg-BgColor text-TextColor">
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-TextColor">“Before It Melts-
        <br className="hidden lg:inline-block" />Taste Real Chocolate“
      </h1>
      <p className="mb-8 leading-relaxed">We start with heirloom cacao from rainforest cooperatives, grind it slow on granite, and swirl in raw cane sugar for a velvet finish. Limited runs mean each release has its own personality—think espresso‑fired dark, sea‑salt milk, or hibiscus‑rose white. Grab yours before the last square melts away.</p>
      <div className="flex justify-center">
        <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Shop Now</button>
        <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">Explore Our Process</button>
      </div>
    </div>
   
   <div className="">
      <img src="src/assets/Taysbakers.jpg" alt="child" />
   </div>

  </div>
</section>
    </section>
  )
}

export default HeroSection