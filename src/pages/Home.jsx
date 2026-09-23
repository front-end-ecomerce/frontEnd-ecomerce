import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Shopping from "../components/Shopping";

function Home({ AddtoCart }) {
  return (
    <>
    
      <Hero />
      <Shopping AddtoCart={AddtoCart} />
      <Footer/>
    </>
  );
}

export default Home;