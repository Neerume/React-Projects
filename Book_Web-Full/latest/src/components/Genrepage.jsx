import React, {useState} from "react";
import mangas from "../data/mangas";
import BookCard from "./BookCard";
import { CiSearch } from "react-icons/ci";


const Genrepage = () => {
  const [genre, setGenre] = useState("All");
  const [search, setSearch] = useState("");
  const genres=["All",
    "Action",
    "Horror",
    "Fantasy",
    "Romance",
    "Science Fiction",
  ]
  const filteredBooks = mangas.filter((manga) => {
  const matchesGenre =
    genre === "All" || manga.category === genre;

  const matchesSearch =
    manga.title
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
            onClick={() => setGenre(item)}
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

          {filteredBooks.map((manga) => (
            <BookCard
              key={manga.id}
              manga={manga}
            />
          ))}
        </div>
      </div>
    </div>
  
  );

}

export default Genrepage;