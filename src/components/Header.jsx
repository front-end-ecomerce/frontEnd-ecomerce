import { ShoppingBag, Menu } from "lucide-react";
import { useState } from "react";

function Header({ cartCount }) {
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-[#f8f7f3] border-b border-black/5 sticky top-0 z-50">
      <div className="h-16 sm:h-20 lg:h- px-4 sm:px-6 lg:px-10 flex items-center justify-between">

        {/* Logo */}
        <div className="flex items-center gap-2 sm:gap-4">
          <div className="w-9 h-9 sm:w-11 sm:h-11 bg-[#243a32] text-white flex items-center justify-center font-serif font-bold text-sm sm:text-base">N</div>
          <h1 className="text-lg sm:text-2xl tracking- sm:tracking-">NORDLY</h1>
        </div>

        {/* Navbar - desktop */}
        <nav className="hidden md:flex gap-10 text-sm">
          <a href="#" className="text-black border-b border-black pb-1">Home</a>
          <a href="#" className="text-gray-500 hover:text-black">Shop</a>
          <a href="#" className="text-gray-500 hover:text-black">About</a>
        </nav>

        {/* Right */}
        <div className="flex items-center gap-4">
          <div className="relative">
            <ShoppingBag size={22} className="sm:w- sm:h-" />
            <span className="absolute -top-2.5 -right-2.5 sm:-top-3 sm:-right-3 bg-[#bd7049] text-white rounded-full w-5 h-5 sm:w-6 sm:h-6 flex items-center justify-center text- sm:text-sm">
              {cartCount}
            </span>
          </div>

          {/* Mobile menu button */}
          <button onClick={() => setOpen(!open)} className="md:hidden">
            <Menu size={22} />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-[#f8f7f3] border-t px-4 py-4 flex flex-col gap-4 text-sm">
          <a href="#" className="text-black font-medium">Home</a>
          <a href="#" className="text-gray-500">Shop</a>
          <a href="#" className="text-gray-500">About</a>
        </div>
      )}
    </header>
  );
}

export default Header;