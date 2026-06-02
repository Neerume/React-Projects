import React, {useState} from "react";
import mangas from "../data/mangas";
import BookCard from "./BookCard";

const Genrepage = () => {
  const [genre, setGenre] = useState("All");
  const genres=["All",
    "Action",
    "Horror",
    "Fantasy",
    "Romance",
    "Science Fiction",
  ]
    const filteredBooks =
    genre === "All"
      ? mangas
      : mangas.filter(
          (manga) => manga.category === genre
        );

  return(
   <div className="flex gap-8 p-8">

      {/* ================= LEFT SIDE (FILTERS) ================= */}
      <div className="w-60">

        <h2 className="text-2xl font-bold mb-4">
          Genres
        </h2>

        <div className="flex flex-col gap-2">

          {genres.map((genre) => (
            <button
              key={genre}
              onClick={() => setSelectedGenre(genre)}

              /*
                Active genre styling:
                If clicked genre == selectedGenre → highlight it
              */
              className={`text-left p-2 rounded-md transition ${
                selectedGenre === genre
                  ? "bg-blue-500 text-white"
                  : "hover:bg-gray-100"
              }`}
            >
              {genre}
            </button>
          ))}
        </div>
      </div>

      {/* ================= RIGHT SIDE (BOOKS) ================= */}
      <div className="flex-1">

        <h1 className="text-3xl font-bold mb-6">
          {selectedGenre} Books
        </h1>

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