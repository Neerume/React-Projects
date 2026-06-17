import React from "react";
import { useNavigate } from "react-router-dom";

const BookCard = ({manga, onAddToCart, cart, size = "large",}) =>
   {
  const navigate = useNavigate();

  const isInCart = cart.some(
    (item) => item.id === manga.id
  );

  return (
    <div
      className={`rounded-lg p-3 shadow-sm flex flex-col flex-shrink-0 ${
        size === "small"
          ? "w-52 h-[450px]"
          : "w-72 h-[600px]"
      }`}
    >
      <img
        src={manga.image}
        alt={manga.title}
        className={`w-full object-cover rounded-lg ${
          size === "small"
            ? "h-64"
            : "h-96"
        }`}
      />

      <h2 className="font-semibold text-2xl mt-2">
        {manga.title}
      </h2>

      <p className="text-lg text-gray-600">
        <span className="font-semibold">
          by
        </span>{" "}
        {manga.author}
      </p>

      <p className="text-2xl font-semibold pt-2">
        ${manga.price.toFixed(2)}
      </p>

      <button
        onClick={() =>
          isInCart
            ? navigate("/cart")
            : onAddToCart(manga)
        }
        className="border border-blue-200 w-full rounded-md text-blue-600 text-xl noto-serif mt-auto hover:bg-blue-400 hover:text-white p-2"
      >
        {isInCart
          ? "VIEW CART"
          : "ADD TO CART"}
      </button>
    </div>
  );
};

export default BookCard;