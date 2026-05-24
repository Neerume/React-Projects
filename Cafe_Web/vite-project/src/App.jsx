import Navbar from "./Components/Navbar"
import Hero from "./Components/Hero"
import Cakes from "./Components/Cakes"
import Footer from "./Components/Footer"

function App() {
  return(
    <div className="min-h-screen bg-gradient-to-r from-yellow-50 to-amber-100">

     <Navbar/>
     <Hero/>
     <Cakes/>
     <Footer/>
    </div>
  )}

export default App
