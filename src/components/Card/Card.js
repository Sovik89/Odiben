import React from "react";
import { Link } from "react-router-dom";

function Card({ product }) {
  return (
    <div
      key={product.id}
      className="card-container w-full max-w-sm bg-white border rounded-lg shadow shadow-lg shadow-purple-800/50 border-purple-500 relative top-0 left-0"
    >
      <Link to="#">
        <img
          className="p-4  rounded-t-lg mx-auto flex items-center border-purple-400 justify-center h-40  object-cover"
          src={product.image}
          alt={product.title}
        />
      </Link>
      <div className="content-container px-5 pb-5">
        <Link to="#">
          <h5 className="text-xl font-semibold tracking-tight text-purple-900 ">
            {product.title}
          </h5>
        </Link>
        <div className="category-container flex items-center mt-2.5 mb-[3rem]">
          <span className="bg-purple-100 text-purple-800 text-xs font-semibold px-2.5 py-3 rounded">
            {product.category}
          </span>
        </div>
        <div className="price-submit-container absolute left-0 bottom-2 w-full flex justify-between items-center px-5">
          <span className="text-3xl font-bold text-purple-900 ">
            ${product.price}
          </span>
          <button
            to="#"
            onClick={() => {
              alert("WIP");
            }}
            className="p-3 text-white rounded-lg bg-purple-400 hover:bg-purple-800 "
          >
            Submit Bid
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;
