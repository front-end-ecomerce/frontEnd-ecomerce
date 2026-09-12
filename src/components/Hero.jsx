import React from 'react'

const Hero = () => {

  return (
    <section className=" grid grid-cols-1 md:grid-cols-2 gap-4 items-center bg-[#F8F7F3] w-full min-h-screen px-16">
        
        
        <div className=" flex flex-col justify-center text-center items-center gap-3 p-6">
            <p className="text-xs text-[#AE9885] tracking-[0.2em]">
                AUTUMN / WINTER 2026</p>
            <h1 className=" text-7xl md:text-7xl font-semibold tracking-tight">
                Quiet luxury.</h1>
            <h2 className="text-6xl font-semibold text-[#A56345]">
                Made to last.</h2>
            <p className="max-w-md text-gray-600 leading-relaxed mt-2 mb-4">
                Thoughtfully selected essentials for an effortless everyday. Timeless design, exceptional quality.</p>
           
            <div>
            <a href="#shopping" className="bg-[#293D32] gap-1.5 p-4 mt-4 mb-2 text-amber-50 text-xs tracking-wide hover:bg-gray-700 transition">
                Explore The Collection → </a>
            </div>

            <div className="flex gap-7 mt-4 text-xs text-gray-500">
                <p>4.9 / 5 customer rating</p>
                <p>Free delivery over $75</p>
            </div>

        </div >
        <div className="relative flex items-center">

  <img
    className="w-[75%] h-[540px] object-cover px-10"
    src="https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=1200&q=85"
    alt="Fashion Model"
  />

  <div className="absolute -left-12 bottom-8 bg-white p-3 w-48 shadow-xl border border-gray-100">

    <p className="text-xs mb-2 text-gray-500">
      EDITOR'S PICK
    </p>

    <h3 className="text-xl font-semibold mb-2 text-gray-700">
      Modern essentials
    </h3>

    <a
      href="#shopping"
      className="inline-block text-xs font-medium border-b border-gray-700 pb-1"
    >
      Shop now →
    </a>

  </div>

</div>

    </section>

      
    
  )
}

export default Hero;
