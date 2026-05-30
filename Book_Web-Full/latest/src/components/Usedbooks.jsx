import { FaBookBookmark } from "react-icons/fa6";
import React from "react";
import Books from "../assets/usedbooks.png";

const Usedbooks=()=>{
    return(
    <div className="flex flex-col md:flex-row items-center justify-between md:m-20 m-10 max-w-full ">

        {/* LEFT SIDE */}
        <div className="flex-1">
          
          {/* icon + heading */}
          <div className="flex items-center gap-4">
            <FaBookBookmark className="text-6xl text-black flex-shrink-0" />
            <h1 className="text-4xl font-semibold">
              Pre-Loved Books, Fresh Adventures
            </h1>
          </div>

          {/* paragraph under it */}
          <p className="noto-serif pt-2 text-lg mt-2 md:mt-4">
            Find Bestselling Novels, Manga, and Classics in Excellent Condition at Affordable Prices.
          </p>

          <button className="border border-blue-200 w-[200px] rounded-md text-blue-600 text-1xl noto-serif md:mt-15 hover:bg-blue-400 hover:text-white p-2">VIEW BOOKS</button>

        </div>

        {/* RIGHT SIDE */}
        <div className="flex-1 flex justify-end">
          <img src={Books} alt="books" className="w-[250px] md:w-[500px]" />
        </div>

</div>
    );
  }

    export default Usedbooks;