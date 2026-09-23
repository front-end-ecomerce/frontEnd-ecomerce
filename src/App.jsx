
import Header from "./components/Header"
import Hero from "./components/Hero"
import Shopping from "./components/Shopping";
import Footer from "./components/Footer"
import { useState } from "react";

import {Routes, Route} from "react-router-dom";

import Home from "./pages/Home"
import Shop from "./pages/Shop"
import Aboutpage from "./pages/Aboutpage"

function App() {
  const [cartCount, setCartCount] = useState(0);

  function AddtoCart() {
  setCartCount((prevCount) => prevCount + 1);
}

  return (
        
     <div className="">
           <Header  cartCount={cartCount} />
         <Routes>
    <Route path="/" element={<Home AddtoCart={AddtoCart} />} />
    <Route path="/shop" element={<Shop AddtoCart={AddtoCart} />} />
    <Route path="/about" element={<Aboutpage />} />
  </Routes>
        <Footer/>
      </div>
    

  )
}

export default App