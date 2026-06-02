import react,{useState} from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import BestSellers from "./components/Bestsellers";
import Newarrival from "./components/Newarrivals";
import Usedbooks from "./components/Usedbooks";
import Footer from "./components/Footer";
import Login from "./components/Login";
import Register from "./components/Register"

const App=()=>{
  const[showLogin,setShowLogin]= useState(false);
  const[showRegister, setShowRegister]= useState(false);
  return(
    <div>
      <Navbar setShowLogin={setShowLogin} setShowRegister={setShowRegister}/>
      <Hero/>
      <BestSellers/>
      <Newarrival/>
      <Usedbooks/>
      <Footer/>
      {showLogin && <Login setShowLogin={setShowLogin} setShowRegister={setShowRegister}/>}
      {showRegister && <Register setShowRegister={setShowRegister} setShowLogin={setShowLogin} />}

    </div>
    
  )
}

export default App;