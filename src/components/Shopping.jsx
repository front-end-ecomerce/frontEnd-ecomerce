import React from 'react'
import {useState, useEffect} from "react";
import { FiSearch } from "react-icons/fi";
import { GiPriceTag } from 'react-icons/gi';

const Shopping = ({AddtoCart}) => {

    const [products, setProducts] = useState([])
    const [search, setSearch] = useState("")
    



    const SearchProducts = products.filter((product) => 
    product.title.toLowerCase().includes(search.toLowerCase())
    
)





useEffect(() =>{
    const FetchProduct =async () => {
const response = await fetch("https://fakestoreapi.com/products")
const data = await response.json()
console.log(data)

setProducts(data)
}

    FetchProduct();
}, []);

  return (
    <div id="shopping" className="min-h-screen bg-white">
        <div className="mx-auto w-full max-w-6xl px-6 py-6 md:px-16">
        <div className="flex items-center gap-16 p-4">
            <div className="w-1/2 pl-24 flex flex-col p-8 gap-6">
        <p className="text-xs text-[#AE9885] tracking-[0.12em] font-semibold">
            THE COLLECTION
            </p>
            <h1 className="text-4xl text-black">Pieces worth keeping</h1>
            </div>
            <div className="w-1/2 pl-26">
                <p className="max-w-sm text-xs text-gray-600">
                    Everyday objects and wardrobe staples, chosen with care.</p>
            </div>
            </div>

       <div className="flex justify-center items-center pb-4">  
        <div className="relative w-full max-w-md">
        <FiSearch 
        size={20}
        className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 "/>

        <input 
        className="w-full rounded-lg border border-gray-300 py-2 pl-10 pr-4 
        focus:outline-none focus:ring-2 focus:ring-blue-500" 
        placeholder="search by product or category"
        value={search}
        onChange={(e) => setSearch(e.target.value)}/>
        </div>
        <h2>{search}</h2>

        </div>
        <div className="grid grid-cols-1 gap-x-2 gap-y-6 sm:grid-cols-2 lg:grid-cols-4"> 
            

            {SearchProducts.map((product) => (
                <div className="w-64 bg-white" 
                key={product.id}>
                    
                   <div className=" relative flex justify-center bg-gray-200 p-6">
                    <span className="absolute left-3 top-3 z-10 bg-[#26332f] px-2 py-1 text-[9px] font-semibold tracking-wider text-white">
                        NEW</span>
                     <img className="w-full h-48 object-contain transition duration-300 hover:-translate-y-2"
                    src={product.image}
                    alt={product.title}
                    />
                   
                    </div>
                     <div className="px-4 py-3">
                    <p className="text-sm font-semibold text-gray-600 line-clamp-1">
                        {product.title}</p>
                    <p className="mt-1 text-sm font-medium text-[#AE9885]"> 
                        ${product.price}</p>
                    <p className="mt-1 text-sm font-medium text-[#AE9885]">
                            {product.category}</p>
                    <p className="mt-1 text-sm font-medium text-[#AE9885]">
                        {product.rating.rate}</p>
                    </div>

                         <div className=" flex justify-center items-center">
                        <button className="  w-[124px] rounded-lg bg-[#A56345] px-8 py-4 font-medium text-white transition
                         hover:bg-[#bd7049]
                          hover:scale-105
                          hover:-translate-y-1
                          hover:shadow-lg active:scale-95"
                             
                        onClick={AddtoCart}>
                            add
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