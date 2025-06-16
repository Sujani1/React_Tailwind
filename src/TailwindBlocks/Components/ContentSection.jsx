import React from 'react'

const ContentSection = () => {
  return (
   <section>
    <section className="text-gray-600 body-font bg-BgColor text-TextColor">
  <div className="container px-5 py-24 mx-auto flex flex-col">
    <div className="lg:w-4/6 mx-auto">
      <div className="rounded-lg h-64 overflow-hidden">
        <img alt="content" className="object-cover object-center h-full w-full" src="src/assets/cont.jpg" />
      </div>
      
      <div className="flex flex-col sm:flex-row mt-10">
        <div className="sm:w-1/3 text-center sm:pr-8 sm:py-8">
          <div className="w-20 h-20 rounded-full inline-flex items-center justify-center bg-gray-200 text-gray-400">
          <img src='src/assets/thumb.jpg' className='contain'/>
              <rect cx="12" cy="7" r="4"></rect>
          </div>
          <div className="flex flex-col items-center text-center justify-center">
            <h2 className="font-medium title-font mt-4 text-TextColor text-lg">The Craft Behind Every Bite</h2>
            <div className="w-12 h-1 bg-indigo-500 rounded mt-2 mb-4"></div>
            <p className="text-base">Handmade with heart.</p>
          </div>
        </div>
        <div className="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
          <p className="leading-relaxed text-lg mb-4">At our chocolate factory, every bar begins with carefully selected cocoa beans and ends with a moment of joy. We blend age-old techniques with modern flavor twists to create chocolates that are as soulful as they are delicious.

Slow-roasted, stone-ground, and poured in small batches, our creations are more than treats — they're stories. From bean to bar, we obsess over texture, balance, and purity. Every bite reflects our passion for craftsmanship, sustainability, and flavor that lingers long after the last square melts.</p>
          <a className="text-indigo-500 inline-flex items-center">Learn More
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </a>
        </div>
      </div>
    </div>
  </div>
</section>
   </section>
  )
}

export default ContentSection