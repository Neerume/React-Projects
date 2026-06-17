import react,{useState} from "react";
import Hero from "./components/Hero";
import BestSellers from "./components/Bestsellers";
import Newarrival from "./components/Newarrivals";
import Usedbooks from "./components/Usedbooks";
import Footer from "./components/Footer";
import Login from "./components/Login";
import Register from "./components/Register"

const Home=({ setShowLogin, setShowRegister, handleAddToCart })=>{

  return(
    <div>
      <Hero/>
      <BestSellers handleAddToCart={handleAddToCart} cart={cart} />
      <Newarrival handleAddToCart={handleAddToCart} cart={cart} />
      <Usedbooks handleAddToCart={handleAddToCart} cart={cart} />
      <Footer/>
    

    </div>
    
    
  )
}

export default Home;