import react,{useState,useEffect} from 'react'
import action from '../assets/action.png'
import horror from '../assets/horror.png'
import fantasy from '../assets/fantasy.png'
import romance from '../assets/romance.png'
import scifi from '../assets/scifi.png'
import { SiAnimedotjs } from "react-icons/si";
import { GiUnicorn } from "react-icons/gi";
import { GiLovers } from "react-icons/gi";
import { GiGhost } from "react-icons/gi";
import { GiMadScientist } from "react-icons/gi";
import { Link } from 'react-router-dom';

const Hero=()=>{
   const images=[action,horror,fantasy,romance,scifi]
   const [index, setIndex] = useState(0)

   useEffect(()=>{
    const interval =setInterval(()=>{
      setIndex((prev) => (prev + 1) % images.length)
    },2000)
    return()=> clearInterval(interval)

  },[])
   return (
    <div>
      <div className="overflow-hidden w-full mt-10">

      <div
        className="flex gap-4 transition-transform duration-700"
        style={{
          transform: `translateX(-${index * 320}px)`
        }}
      >

        {images.concat(images).map((img, i) => (
          <img
            key={i}
            src={img}
            className="w-[400px] h-[350px] rounded-lg"
          />
        ))}

      </div>

      </div>
      <div className="md:m-20 m-10">
        <h1 className="text-4xl noto-serif font-semibold mb-2 ">Genres</h1>
        <p className="noto-serif pt-2 text-gray-500">Browse Our Extensive Collection of Books Across Different Genres.</p>
      </div>
        
      <div className="flex md:gap-10 justify-center noto-seri">

        <Link to="/genres/Horror" className="flex flex-col items-center md:p-2">
          <GiGhost className=" md:text-8xl text-5xl border-gray-800 bg-gray-200 text-red-500 rounded-full md:p-4 p-3"/>
          <h2 className="md:text-xl text-sm md:w-[200px] w-[120px] text-center md:p-3 p-2">Horror, Mystery and Thriller</h2>
        </Link>
        <Link to="/genres/Action" className="flex flex-col items-center md:p-2">
          <SiAnimedotjs className=" md:text-8xl text-5xl border-gray-800 bg-gray-200 text-green-500 rounded-full md:p-4 p-3"/>
          <h2 className="md:text-xl text-sm md:w-[200px] w-[120px] text-center md:p-3 p-2">Action & Adventure</h2>
        </Link>
        <Link to="/genres/Fantasy" className="flex flex-col items-center md:p-2">
          <GiUnicorn className=" md:text-8xl text-5xl border-gray-800 bg-gray-200 text-blue-500 rounded-full md:p-4 p-3"/>
          <h2 className="md:text-xl text-sm md:w-[200px] w-[120px] text-center md:p-3 p-2">Fantasy</h2>
        </Link>
         <Link to="/genres/Romance" className="flex flex-col items-center md:p-2">
          <GiLovers className=" md:text-8xl text-5xl border-gray-800 bg-gray-200 text-pink-500 rounded-full md:p-4 p-3"/>
          <h2 className="md:text-xl text-sm md:w-[200px] w-[120px] text-center md:p-3 p-2">Romance</h2>
        </Link>
        <Link to="/genres/Science Fiction" className="flex flex-col items-center md:p-2">
          <GiMadScientist className=" md:text-8xl text-5xl border-gray-800 bg-gray-200 text-yellow-500 rounded-full md:p-4 p-3"/>
          <h2 className="md:text-xl text-sm md:w-[200px] w-[120px] text-center md:p-3 p-2">Science Fiction</h2>
        </Link>
      </div>
  </div>
  )
}

export default Hero;