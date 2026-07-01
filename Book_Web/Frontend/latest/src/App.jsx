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
import axios from "axios";

const App=()=>{
  const[showLogin,setShowLogin]= useState(false);
  const[showRegister, setShowRegister]= useState(false);
  const navigate = useNavigate();

  const [books, setBooks]= useState([]);
  
  const [cart, setCart] = useState(()=>{
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });  
      useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
    }, [cart]);

    useEffect(() => {
      const fetchBooks = async()=>{
        try{
          const response = await axios.get("http://localhost:5000/api/books");
          setBooks(response.data);
        } catch (error) {
          console.error("Error fetching books:", error);
        }
      }
      fetchBooks();
     
    },[]);
     useEffect(() => {
  console.log(books);
}, [books]);

    const handleAddToCart = (book) => {
      const exists = cart.some(item => item._id === book._id);

      if (exists) return;
      setCart((prevCart) => [...prevCart, {...book, quantity:1}]);
      console.log("added", book);

      
    toast(
      <div>
        <p>Added to cart successfully 🛒</p>
        <button onClick={() => navigate("/cart")}  className="text-blue-500 underline">View Cart  </button>
      </div>
    )
  };
  const increaseQty = (_id) => {
    setCart((prev) =>
      prev.map((item) =>
        item._id === _id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };
   const decreaseQty = (_id) => {
    setCart((prev) =>
      prev.map((item) =>
        item._id === _id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  const removeFromCart=(_id)=>{
    setCart((prev) => prev.filter((item) => item._id !== _id));  
  }

  const removeCart=()=>{
    setCart([]);
  }
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
                  cart={cart}
                  books={books}
                />
              }
            />

          <Route path="/terms-conditions" element={<TermsConditions />}/>
          <Route path="/genres/:genre" element={<Genrepage
            handleAddToCart={handleAddToCart}
            cart={cart} books={books}
          />} />
          <Route path="/cart" element={<Cart cart={cart}
            increaseQty={increaseQty}
            decreaseQty={decreaseQty}
            removeCart={removeCart}
            removeFromCart={removeFromCart}
               />} />
      
      </Routes>

      <ToastContainer/>

      {showLogin && <Login setShowLogin={setShowLogin} setShowRegister={setShowRegister}/>}
      {showRegister && <Register setShowRegister={setShowRegister} setShowLogin={setShowLogin} />}

    </div>
    
    
  )
}

export default App;