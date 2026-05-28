import react from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import BestSellers from "./components/Bestsellers";

const App=()=>{
  return(
    <div>
      <Navbar/>
      <Hero/>
      <BestSellers/>
    </div>
  )
}

export default App;