// App.jsx
import Header from "./components/Header"
import Hero from "./components/Hero"
import Shopping from "./components/Shopping";
import Footer from "./components/Footer"
import { useState } from "react";
import {Routes, Route} from "react-router-dom";

function App() {
  const [cartCount, setCartCount] = useState(0);

  function AddtoCart() {
  setCartCount((prevCount) => prevCount + 1);
}

  return (
        
      <div className="">

           <Header  cartCount={cartCount} />
           

           <Routes>
            <Route path="/" element={
              <>
              <Hero />
              
            <Shopping AddtoCart={AddtoCart} />
              </>

            } />

            <Route path="shop" element={<Shopping AddtoCart={AddtoCart} />}/>
       

            <Route path="about" element={<about/>}/>

        </Routes>
        <Footer/>
      </div>
    

  )
}

export default App