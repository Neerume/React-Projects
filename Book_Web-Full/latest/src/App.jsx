import react,{useState} from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Login from "./components/Login";
import Register from "./components/Register"
import {Route,Routes} from "react-router-dom";
import TermsConditions from "./components/TermsConditions";
import Home from "./Home";
import Genrepage from "./components/Genrepage";

const App=()=>{
  const[showLogin,setShowLogin]= useState(false);
  const[showRegister, setShowRegister]= useState(false);
  return(
    <div>
        <Navbar
        setShowLogin={setShowLogin}
        setShowRegister={setShowRegister}
      />
      <Routes>
        <Route path="/" element={
            <Home
              setShowLogin={setShowLogin}
              setShowRegister={setShowRegister}
            />
          }
        />

        <Route
          path="/terms-conditions"
          element={<TermsConditions />}
        />

      <Route path="/genres/:genre" element={<Genrepage />} />
      </Routes>

      {showLogin && <Login setShowLogin={setShowLogin} setShowRegister={setShowRegister}/>}
      {showRegister && <Register setShowRegister={setShowRegister} setShowLogin={setShowLogin} />}

    </div>
    
    
  )
}

export default App;