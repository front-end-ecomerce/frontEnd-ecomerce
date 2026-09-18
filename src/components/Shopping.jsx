import { useState, useEffect } from "react";
import { FiSearch } from "react-icons/fi";

const Shopping = ({ AddtoCart }) => {
  const [products, setProducts] = useState([])
  const [search, setSearch] = useState("")

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
     .then(r => r.json())
     .then(setProducts)
  }, [])

  const filtered = products.filter(p =>
    p.title.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div className="min-h-screen" style={{backgroundColor:'#FAF6F0'}}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-6 sm:py-12">

        {/* HEADER - responsive */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-8 sm:mb-10">
          <div>
            <p className="text- sm:text- tracking-[0.2em] font-semibold mb-2" style={{color:'#8B6F5A'}}>THE COLLECTION</p>
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-medium tracking-tight">Pieces worth keeping</h1>
          </div>
          <p className="text-xs sm:text-sm text-neutral-500 max-w-xs">
            Everyday objects and wardrobe staples, chosen with care.
          </p>
        </div>

        {/* SEARCH - responsive */}
        <div className="flex justify-center mb-8 sm:mb-12">
          <div className="relative w-full sm:max-w-md">
            <FiSearch size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-400" />
            <input
              value={search}
              onChange={e => setSearch(e.target.value)}
              placeholder="Search by product or category"
              className="w-full bg-white border border-black/10 py-2.5 sm:py-3 pl-11 pr-4 text-xs sm:text-sm focus:outline-none focus:border-black/30"
            />
          </div>
        </div>

        {/* GRID - responsive */}
        <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {filtered.map(p => (
            <div key={p.id} className="bg-white group">
              {/* Card image - yar oo responsive */}
              <div className="relative flex justify-center items-center p-4 sm:p-6 h-48 sm:h-52" style={{backgroundColor:'#F5F0E8'}}>
                <span className="absolute left-2 sm:left-3 top-2 sm:top-3 text-white text- sm:text- tracking-widest px-2 py-1" style={{backgroundColor:'#1E3A2F'}}>NEW</span>
                <img src={p.image} alt={p.title} className="h-24 sm:h-32 object-contain group-hover:scale-105 transition duration-300" />
              </div>

              <div className="p-3 sm:p-4">
                <p className="text-xs sm:text-sm font-medium line-clamp-1">{p.title}</p>
                <p className="text-xs sm:text-sm mt-1" style={{color:'#A4714B'}}>${p.price}</p>

                <button
                  onClick={() => AddtoCart(p)}
                  className="mt-3 sm:mt-4 w-full text-white text- sm:text- tracking-[0.15em] uppercase font-medium py-2.5 sm:py-3 hover:bg-black transition"
                  style={{backgroundColor:'#1E3A2F'}}
                >
                  Add to bag
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  )
}

export default Shopping