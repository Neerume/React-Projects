import React from 'react'
import Cake1 from '../assets/Cake1.png'
import Cake2 from '../assets/Cake2.png'
import Cake3 from '../assets/Cake3.png'
import Cake4 from '../assets/Cake4.png'
import { color } from 'framer-motion'

const cakes = [
  {
    title: "Raspberry Cake",
    desc: "Yummy raspberry flavor",
    image: Cake1,
    color: "bg-pink-100",
    size: "w-[150px]"

  },
  {
    title: "Chocolate Cake",
    desc: "Rich Chocolate flavor",
    image: Cake2,
    color: "bg-white"    
  },
  {
    title: "BlueBerry Cake",
    desc: "Creamy blueberry flavor",
    image: Cake3,
    color: "bg-blue-100"
  },
  {
    title: "Vanilla Cake",
    desc: "Classic vanilla flavor",
    image: Cake4,
    color: "bg-pink-100"
  }
]
const Cakes = () => {
  return (
    <div>
      <div className='text-center mt-20'>
        <h1 className='text-5xl md:text-7xl noto-serif text-black pb-4'>Our Cakes</h1>
      </div>
      <div className='flex justify-center flex-wrap gap-8 p-6'>
        {cakes.map((cake, index) => (
          <div key={index} className={`flex flex-col items-center justify-between w-[280px] h-[380px]
            p-4 ${cake.color} rounded-lg shadow-lg hover:scale-110 transition duration-300`}>
            <h1 className='text-2xl text-black noto-serif'>{cake.title}</h1>
          <div className="h-[300px] flex items-center justify-center">
            <img
              src={cake.image}
              alt={cake.title}
              className={`${cake.size || "w-[450px]"} max-h-full object-contain`}
            />
          </div>        
          <p className='text-gray-300 text-center'>{cake.desc}</p>
        </div>
          ))}
        </div>
    </div>
  )
}

export default Cakes
