const Hero = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center bg-[#F8F7F3] w-full min-h-screen px-4 lg:px-16 py-10 lg:py-0">

        <div className="flex flex-col justify-center text-center items-center gap-3 p-2 lg:p-6 order-2 md:order-1">
            <p className="text- lg:text-xs tracking-[0.2em]" style={{color:'#AE9885'}}>
                AUTUMN / WINTER 2026</p>
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-semibold tracking-tight">
                Quiet luxury.</h1>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-semibold" style={{color:'#A56345'}}>
                Made to last.</h2>
            <p className="max-w-md text-sm lg:text-base text-gray-600 leading-relaxed mt-2 mb-4">
                Thoughtfully selected essentials for an effortless everyday. Timeless design, exceptional quality.</p>

            <div>
            <a href="#shopping" className="bg-[#293D32] inline-block p-3 lg:p-4 mt-2 lg:mt-4 mb-2 text-amber-50 text- lg:text-xs tracking-wide hover:bg-gray-700 transition">
                Explore The Collection → </a>
            </div>

            <div className="flex flex-col sm:flex-row gap-2 sm:gap-7 mt-4 text- lg:text-xs text-gray-500">
                <p>4.9 / 5 customer rating</p>
                <p>Free delivery over $75</p>
            </div>
        </div>

        <div className="relative flex items-center justify-center lg:justify-start order-1 md:order-2">
          <img
            className="w-full sm:w-[80%] lg:w-[75%] h- sm:h- lg:h- object-cover px-0 lg:px-10"
            src="https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=1200&q=85"
            alt="Fashion Model"
          />

          <div className="absolute left-2 lg:-left-12 bottom-4 lg:bottom-8 bg-white p-3 w-40 lg:w-48 shadow-xl border border-gray-100">
            <p className="text- lg:text-xs mb-1 lg:mb-2 text-gray-500">
              EDITOR'S PICK
            </p>
            <h3 className="text-base lg:text-xl font-semibold mb-2 text-gray-700">
              Modern essentials
            </h3>
            <a href="#shopping" className="inline-block text- lg:text-xs font-medium border-b border-gray-700 pb-1">
              Shop now →
            </a>
          </div>
        </div>

    </section>
  )
}

export default Hero;