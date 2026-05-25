import react,{useState,useEffect} from 'react'
import action from '../assets/action.png'
import horror from '../assets/horror.png'
import fantasy from '../assets/fantasy.png'
import romance from '../assets/romance.png'
import scifi from '../assets/scifi.png'

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
  )
}

export default Hero;