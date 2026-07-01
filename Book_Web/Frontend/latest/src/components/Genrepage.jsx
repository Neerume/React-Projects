import React, { useState, useEffect } from "react";
import BookCard from "./BookCard";
import { CiSearch } from "react-icons/ci";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Genrepage = ({handleAddToCart, cart, books}) => {

  const navigate = useNavigate();
  const { genre: routeGenre } = useParams();
  const [genre, setGenre] = useState(routeGenre || "All");  

  useEffect(() => {
  setGenre(routeGenre || "All");
}, [routeGenre]);

  const [search, setSearch] = useState("");
  const genres=["All",
    "Action",
    "Horror",
    "Fantasy",
    "Romance",
    "Science Fiction",
  ]
  const filteredBooks = books.filter((book) => {
  const matchesGenre =
    genre === "All" || book.category === genre;

  const matchesSearch =
    book.title
      .toLowerCase()
      .includes(search.toLowerCase());

  return matchesGenre && matchesSearch;
});

  return(
   <div className="flex gap-8 p-8">

      {/* LEFT SIDE */}
      <div className="w-60">

        <h2 className="text-2xl font-bold mb-4">
          Genres
        </h2>

        <div className="flex flex-col gap-2">

          {genres.map((item) => (
          <button
            key={item}
            onClick={() => navigate(`/genres/${item}`)}
            className={`text-left p-2 rounded-md transition ${
              genre === item
                ? "bg-blue-500 text-white"
                : "hover:bg-gray-100"
            }`}
          >
            {item}
          </button>
        ))}
        </div>
      </div>

      {/*  RIGHT SIDE (BOOKS) */}
      <div className="flex-1">

        <div className="flex flex-col md:flex-row md:justify-between gap-4 mb-6 ">
              <h1 className="text-3xl font-bold mb-6">
                {genre} Books
              </h1>
              <div className="flex items-center gap-2 border p-2 rounded-md w-full max-w-sm">
                <input type="text"  placeholder="Search by title or author"    value={search} onChange={(e) => setSearch(e.target.value)}   className="w-full outline-none"/>  
                <CiSearch />
              </div>
        </div>

        {/* GRID OF BOOKS */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

          {filteredBooks.map((book) => (
            <BookCard
              key={book._id}
              book={book}
              onAddToCart={handleAddToCart}
              cart={cart}
            />
          ))}
        </div>
      </div>
    </div>
  
  );

}

export default Genrepage;