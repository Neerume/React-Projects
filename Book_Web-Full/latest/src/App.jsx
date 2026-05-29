import react from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import BestSellers from "./components/Bestsellers";
import Newarrival from "./components/Newarrivals";

const App=()=>{
  return(
    <div>
      <Navbar/>
      <Hero/>
      <BestSellers/>
      <Newarrival/>
    </div>
  )
}

export default App;