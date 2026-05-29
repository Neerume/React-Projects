import react, {useState} from 'react';
import BookCard from './BookCard';
import mangas from '../data/mangas';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const Newarrivals=()=>{
  const newArrivals= mangas.filter((manga)=>manga.newArrival);
  return(
    <div className="md:m-15 m-10">
    <h1 className="text-4xl font-semibold mb-2 ">New Arrivals</h1>
    <p className="noto-serif pt-2 text-gray-500">Get your hands on our newest arrival of the great books</p>

      <div className="relative mt-10">  
        <Swiper
        modules={[Navigation]}
        navigation
        spaceBetween={20}
        className="bestSellerSwiper px-12"
        breakpoints={{
        320: { slidesPerView: 1 },
        640: { slidesPerView: 2 },
        1024: { slidesPerView: 3 },
        1280: { slidesPerView: 4 },
      }}
      >
        {newArrivals.map((manga)=>(
          <SwiperSlide key={manga.id}>
            <BookCard manga ={manga}/>
          </SwiperSlide>
        ))
      }

      

      </Swiper>

      </div>
      

    </div>

  );


}

export default Newarrivals;