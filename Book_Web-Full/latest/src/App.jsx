import react,{useState, useEffect} from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Login from "./components/Login";
import Register from "./components/Register"
import {Route,Routes} from "react-router-dom";
import TermsConditions from "./components/TermsConditions";
import Home from "./Home";
import Genrepage from "./components/Genrepage";
import Cart from "./components/Cart";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

const App=()=>{
  const[showLogin,setShowLogin]= useState(false);
  const[showRegister, setShowRegister]= useState(false);
  const navigate = useNavigate();

  const [cart, setCart] = useState(()=>{
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });  
      useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
    }, [cart]);

    const handleAddToCart = (manga) => {
      setCart((prevCart) => [...prevCart, {...manga, quantity:1}]);
      console.log("added", manga);

      
    toast(
      <div>
        <p>Added to cart successfully 🛒</p>
        <button onClick={() => navigate("/cart")}  className="text-blue-500 underline">View Cart  </button>
      </div>
    )
  };
  const increaseQty = (id) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };
   const decreaseQty = (id) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  return(
    <div>
        <Navbar
        setShowLogin={setShowLogin}
        setShowRegister={setShowRegister}
        cart={cart}
      />
      <Routes>
            <Route path="/" element={
                <Home
                  setShowLogin={setShowLogin}
                  setShowRegister={setShowRegister}
                  handleAddToCart={handleAddToCart}
                />
              }
            />

          <Route path="/terms-conditions" element={<TermsConditions />}/>
          <Route path="/genres/:genre" element={<Genrepage />} />
          <Route path="/cart" element={<Cart cart={cart}
            increaseQty={increaseQty}
            decreaseQty={decreaseQty}
               />} />
      
      </Routes>

      <ToastContainer/>

      {showLogin && <Login setShowLogin={setShowLogin} setShowRegister={setShowRegister}/>}
      {showRegister && <Register setShowRegister={setShowRegister} setShowLogin={setShowLogin} />}

    </div>
    
    
  )
}

export default App;