import react from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import BestSellers from "./components/Bestsellers";
import Newarrival from "./components/Newarrivals";
import Usedbooks from "./components/Usedbooks";
import Footer from "./components/Footer";

const App=()=>{
  return(
    <div>
      <Navbar/>
      <Hero/>
      <BestSellers/>
      <Newarrival/>
      <Usedbooks/>
      <Footer/>
    </div>
  )
}

export default App;