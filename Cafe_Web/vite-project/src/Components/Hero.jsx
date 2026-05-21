import React, {useState} from 'react'
import { motion } from "framer-motion";
import Boba1 from '../assets/PinkBoba.png'
import Boba2 from '../assets/PurpleBoba.png'
import Boba3 from '../assets/greenBoba.png'
import Background from '../assets/Background.jpg'

const drinks=[
  {
    title:"Strawberry",
    price:"$20",
    description:"Fresh bubble tea crafted with premium ingredients and creamy flavors.",
    image: Boba1,
    color: "text-pink-200"
  },
    {
    title:"Blueberry",
    price:"$25",
    description:"Fresh bluberry bubble tea crafted with premium ingredients and creamy flavors.",
    image: Boba2,
    color: "text-purple-400"
  },  
  {
    title:"Matcha",
    price:"$40",
    description:"Fresh matcha bubble tea crafted with premium ingredients and creamy flavors.",
    image: Boba3,
    color: "text-green-600",
    size: "w-[400px]"

  }

]

const Hero = () => {
  const [currentDrink, setCurrentDrink] = useState(0);

  const nextSlide = () => {
  setCurrentDrink((prev)=>(prev === drinks.length -1 ? 0 : prev+1));

  }
  const prevSlide = () =>{
    setCurrentDrink((prev)=>(prev>0 ? prev-1 : prev));
  }
  const item = drinks[currentDrink];

return( 
    <div
      className="relative w-full h-screen bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${Background})` }}>
      <div className='flex justify-evenly gap-5 md:ml-10 md:mr-5' >

       <motion.div
            key={item.title}
            initial={{opacity:0, y:50}}
            whileInView={{opacity:1, y:0}}
            transition={{duration:1, ease:"easeOut"}}
            viewport={{once:false}}
          className='flex flex-col items-center mt-20 md:mt-30 text-center'>
          <h1 className={`text-6xl md:text-8xl noto-serif ${item.color} pb-4`}>{item.title}</h1>
          <h1 className='text-6xl md:text-8xl  noto-serif text-yellow-50 pb-4' >Flavour</h1>
          <hr className="w-100 border-t-2 border-yellow-100 my-4 opacity-80" />
          <h1 className={`text-4xl md:text-6xl noto-serif ${item.color} pb-4`}>{item.price}</h1>


          <p className='text-sm md:text-lg font-cause text-yellow-50'> {item.description}</p>
          <button className="mt-6 px-6 py-3 bg-gradient-to-r from-yellow-50 to-amber-100 text-black rounded-full text-3xl font-cause transition duration-300 hover:from-yellow-100 hover:to-amber-200 noto-serif">Order Now</button>   
        </motion.div>

        <motion.div
          key={currentDrink}
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, type: "spring", stiffness: 100, damping: 6, mass: 2 }}
          className="flex"
        >
          <img src={item.image} alt={item.title} className={`${item.size || "w-[450px]"} h-auto object-cover`}></img>
        </motion.div>

      </div>

      <div className="absolute inset-0 flex items-center justify-between px-6">

          {/* LEFT */}
          <button
            onClick={prevSlide}
            className="bg-white/20 backdrop-blur-md text-white w-14 h-14 rounded-full text-3xl hover:bg-white/40 transition"
          >
            ←
          </button>

          {/* RIGHT */}
          <button
            onClick={nextSlide}
            className="bg-white/20 backdrop-blur-md text-white w-14 h-14 rounded-full text-3xl hover:bg-white/40 transition"
          >
            →
          </button>

        </div>
    </div>
  

);

}


export default Hero;