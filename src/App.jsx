// App.jsx
import Header from "./components/Header"
import Hero from "./components/Hero"
import Shopping from "./components/Shopping";
import Footer from "./components/Footer"
import { useState } from "react";
import About from "./About";

function App() {
  const [cartCount, setCartCount] = useState(0);

  function AddtoCart() {
  setCartCount((prevCount) => prevCount + 1);
}

  return (
        
      <div className="">
           <Header  cartCount={cartCount} />
        <Hero />
        <Shopping AddtoCart={AddtoCart} />
        <About/>
        <Footer/>
      </div>
    

  )
}

export default App