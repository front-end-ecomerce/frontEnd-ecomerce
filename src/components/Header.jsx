import { Carton, Link2Off, ShoppingBag } from "lucide-react";
import { Link } from "react-router-dom";

function Header({ cartCount }) {
  return (
    <header className="h-[123px] bg-[#f8f7f3] border-b">

      <div className="h-full px-10 flex items-center justify-between">

        {/* Logo */}
        <div className="flex items-center gap-4">
          <div className="w-11 h-11 bg-[#243a32] text-white flex items-center justify-center">
            N
          </div>

          <h1 className="text-2xl tracking-[8px]">
            NORDLY
          </h1>
        </div>

        {/* Navbar */}
        <nav className="flex gap-10">
          <Link to="/" className="text-black">
            Home
          </Link>

          <Link to="/Shop" className="text-gray-500">
            Shop
          </Link>

          <Link to="/About" className="text-gray-500">
            About
          </Link>
        </nav>

        {/* Cart */}
        <div className="relative">
          <ShoppingBag size={27} />

          <span className="absolute -top-3 -right-3 bg-[#bd7049] text-white rounded-full w-6 h-6 flex items-center justify-center text-sm">
            {cartCount}
          </span>
        </div>

      </div>
    </header>
  );
}

export default Header;