import React from 'react'

const Footer = () => {
  return (
  <footer className="w-full h-36 bg-[#233229] px-6 text-gray-300 sm:px-10 md:px-16 flex items-center">

  <div className="w-full flex flex-col items-center justify-between gap-5 text-center md:flex-row md:text-left">

    {/* Logo */}
    <div className="flex items-center gap-3">
      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-xl font-bold text-[#26332f]">
        N
      </div>

      <span className="text-xl font-semibold tracking-[0.18em]">
        NORDLY
      </span>
    </div>

    
    <div>
      <p className="text-xs xs:text-base">
        Considered goods for modern living.
      </p>
    </div>

    
    <div className="text-xs xs:text-base">
      <p>© 2026 Nordly Studio</p>
    </div>

  </div>

</footer>
  )
}

export default Footer