import react,{ useState, useEffect} from 'react'
import mangas from "../data/mangas";

const BookCard=({manga})=>{
  return(
    <div className="rounded-lg p-3 shadow-sm w-72 h-[600px] flex flex-col flex-shrink-0">
      <img src={manga.image} alt={manga.title} className="w-full h-96 object-cover rounded-lg" />
      <h2 className="font-semibold text-2xl mt-2">{manga.title}</h2>
      <p className="text-lg text-gray-600"><span className="font-semibold">by </span>{manga.author}</p>
      <p className="text-2xl font-semibold pt-2">${manga.price.toFixed(2)}</p>
      <button className="border border-blue-200 w-full rounded-md text-blue-600 text-1xl noto-serif mt-auto hover:bg-blue-400 hover:text-white p-2">ADD TO CART</button>

    </div>
  );
}

export default BookCard;