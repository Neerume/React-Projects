import react,{ useState, useEffect} from 'react'
import mangas from "../data/mangas";

const BookCard=({manga, size="large"})=>{
  return(
    <div className={`rounded-lg p-3 shadow-sm flex flex-col flex-shrink-0${ 
    size === "small"
      ? "w-52 h-[450px]"
      : "w-72 h-[600px]"
  }`}>
      <img src={manga.image} alt={manga.title} className={`w-full object-cover rounded-lg ${
    size === "small"
      ? "h-64"
      : "h-96"
  }`}/>
      <h2 className="font-semibold text-2xl mt-2">{manga.title}</h2>
      <p className="text-lg text-gray-600"><span className="font-semibold">by </span>{manga.author}</p>
      <p className="text-2xl font-semibold pt-2">${manga.price.toFixed(2)}</p>
      <button className="border border-blue-200 w-full rounded-md text-blue-600 text-1xl noto-serif mt-auto hover:bg-blue-400 hover:text-white p-2">ADD TO CART</button>

    </div>
  );
}

export default BookCard;