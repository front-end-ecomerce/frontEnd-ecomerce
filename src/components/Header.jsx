import { ShoppingBag } from "lucide-react";

function Header() {
  return (
    <header className="h-[123px] w-full bg-[#f8f7f3] border-b border-gray-200">
      <div className="h-full px-10 flex items-center justify-between">

        {/* Logo */}
        <div className="flex items-center gap-4">
          <div className="w-11 h-11 bg-[#243a32] text-white flex items-center justify-center">
            <span className="text-2xl font-serif">
              N
            </span>
          </div>

          <h1 className="text-[28px] tracking-[8px] font-medium text-[#292929]">
            NORDLY
          </h1>
        </div>

        {/* Links */}
        <div className="flex items-center gap-14 h-full">
          <a
            href="#"
            className="relative h-full flex items-center text-[21px] text-[#222]"
          >
            Home
            <span className="absolute bottom-[31px] left-0 w-full h-[2px] bg-[#222]" />
          </a>

          <a href="#" className="text-[21px] text-[#6b6b6b]">
            Shop
          </a>

          <a href="#" className="text-[21px] text-[#6b6b6b]">
            About
          </a>
        </div>

        {/* Shopping bag */}
        <div className="relative">
          <ShoppingBag size={27} strokeWidth={1.8} />

          <span className="absolute -top-5 -right-5 w-7 h-7 rounded-full bg-[#bd7049] text-white text-sm flex items-center justify-center">
            0
          </span>
        </div>

      </div>
    </header>
  );
}

export default Header;