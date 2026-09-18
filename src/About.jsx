export default function About() {
  return (
    <div className="min-h-screen bg-[#FAF6F0]">

      {/* HEADER */}
      <header className="flex justify-between items-center px-4 lg:px-12 h-16 border-b bg-[#FAF6F0] sticky top-0">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-green-900 text-white grid place-items-center font-bold">N</div>
          <span className="text-xs tracking-widest">NORDLY</span>
        </div>
        <nav className="hidden md:flex gap-6 text-sm">
          <a href="/">Home</a>
          <a href="/shop">Shop</a>
          <a href="/about" className="border-b border-black">About</a>
        </nav>
        <div className="w-6 h-6 bg-orange-400 text-white rounded-full grid place-items-center text-xs">0</div>
      </header>

      {/* HERO */}
      <div className="px-4 lg:px-12 py-10 lg:py-20">
        <p className="text- tracking-widest text-yellow-800 mb-4">OUR POINT OF VIEW</p>
        <div className="grid lg:grid-cols-2 gap-6">
          <h1 className="text-4xl lg:text-6xl font-medium leading-none">Less, but <span className="italic text-orange-800">better.</span></h1>
          <p className="text-sm text-gray-500 max-w-sm lg:self-end">Nordly began with a simple belief: the things we bring into our lives should feel good and last for years.</p>
        </div>
      </div>

      {/* STORY */}
      <div className="mx-4 lg:mx-12 bg-[#F5F0E8] grid md:grid-cols-2">
        <img src="https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?w=800" className="h-80 lg:h- w-full object-cover" />
        <div className="p-6 lg:p-12">
          <p className="text- tracking-widest text-yellow-800 mb-4">THE NORDLY STORY</p>
          <h2 className="text-3xl lg:text-4xl mb-4">Chosen slowly.<br/>Loved for longer.</h2>
          <p className="text-sm text-gray-500 leading-7 mb-6">We search for pieces that balance form and function. Our collection is small because good choices should feel simple.</p>
          <a href="/shop" className="bg-green-900 text-white px-6 py-3 text-xs">Browse collection →</a>
        </div>
      </div>

      {/* 3 BOXES */}
      <div className="px-4 lg:px-12 py-12 lg:py-20">
        <p className="text- tracking-widest text-yellow-800 mb-6">WHAT GUIDES US</p>
        <div className="grid md:grid-cols-3 border-t">
          <div className="py-8 border-b md:border-b-0 md:border-r md:pr-8"><p className="text-xs text-orange-700 mb-2">01</p><h3 className="font-medium">Quality first</h3><p className="text-xs text-gray-500 mt-2">Made with care and detail.</p></div>
          <div className="py-8 border-b md:border-b-0 md:border-r md:px-8"><p className="text-xs text-orange-700 mb-2">02</p><h3 className="font-medium">Timeless</h3><p className="text-xs text-gray-500 mt-2">Designed to outlive trends.</p></div>
          <div className="py-8 md:pl-8"><p className="text-xs text-orange-700 mb-2">03</p><h3 className="font-medium">Thoughtful</h3><p className="text-xs text-gray-500 mt-2">A smaller edit, easier choice.</p></div>
        </div>
      </div>

      {/* FOOTER */}
      <footer className="bg-[#1A2E26] text-white px-4 lg:px-12 py-6 flex flex-col md:flex-row justify-between gap-2 text-xs text-center">
        <span>NORDLY</span>
        <span className="opacity-60">Considered goods for modern living.</span>
        <span className="opacity-50">© 2026</span>
      </footer>

    </div>
  )
}