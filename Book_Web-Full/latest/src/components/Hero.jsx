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
      <div className="md:m-15 m-10">
        <h1 className="text-4xl noto-serif font-bold">Genres</h1>
        <p className="noto-serif pt-2">Browse Our Extensive Collection of Books Across Different Genres.</p>
      </div>
      <div className="flex gap-10 justify-center">
        <div className="flex flex-col items-center p-2">
          <GiGhost className=" text-8xl border-gray-800 bg-gray-200 text-red-500 rounded-full p-4"/>
          <h2 className="text-xl font-semibold w-[200px] text-center p-2">Horror, Mystery and Thriller</h2>
        </div>
        <div className="flex flex-col items-center p-2">
          <SiAnimedotjs className=" text-8xl border-gray-800 bg-gray-200 text-red-500 rounded-full p-4"/>
          <h2 className="text-xl font-semibold w-[200px] text-center p-2">Horror, Mystery and Thriller</h2>
        </div>
        <div className="flex flex-col items-center p-2">
          <GiUnicorn className=" text-8xl border-gray-800 bg-gray-200 text-red-500 rounded-full p-4"/>
          <h2 className="text-xl font-semibold w-[200px] text-center p-2">Horror, Mystery and Thriller</h2>
        </div>
         <div className="flex flex-col items-center p-2">
          <GiLovers className=" text-8xl border-gray-800 bg-gray-200 text-red-500 rounded-full p-4"/>
          <h2 className="text-xl font-semibold w-[200px] text-center p-2">Horror, Mystery and Thriller</h2>
        </div>
        <div className="flex flex-col items-center p-2">
          <GiMadScientist className=" text-8xl border-gray-800 bg-gray-200 text-red-500 rounded-full p-4"/>
          <h2 className="text-xl font-semibold w-[200px] text-center p-2">Horror, Mystery and Thriller</h2>
        </div>
      </div>
  </div>
  )
}

export default Hero;