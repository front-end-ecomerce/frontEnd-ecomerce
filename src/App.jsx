// App.jsx
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Header from "./components/Header"
import Hero from "./components/Hero"
import Shopping from "./components/Shopping";

function App() {
  return (
        
      <div className="">
        <BrowserRouter>
        <Hero />
        <Shopping />
        </BrowserRouter>
      </div>
    

  )
}

export default App