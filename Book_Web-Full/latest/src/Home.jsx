import react,{useState} from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import BestSellers from "./components/Bestsellers";
import Newarrival from "./components/Newarrivals";
import Usedbooks from "./components/Usedbooks";
import Footer from "./components/Footer";
import Login from "./components/Login";
import Register from "./components/Register"

const Home=({ setShowLogin, setShowRegister })=>{

  return(
    <div>
      <Navbar setShowLogin={setShowLogin} setShowRegister={setShowRegister}/>
      <Hero/>
      <BestSellers/>
      <Newarrival/>
      <Usedbooks/>
      <Footer/>
    

    </div>
    
    
  )
}

export default Home;