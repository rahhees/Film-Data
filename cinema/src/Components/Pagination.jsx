import React from "react";

function Pagination({ handlePrev, handleNext, pageno }) {
  return (
    <div className="flex justify-center items-center gap-6 mt-8">
      <button
        onClick={handlePrev}
        className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold px-4 py-2 rounded-full shadow-md transition-all duration-200 hover:scale-105 disabled:opacity-50"
      >
        <i className="fa-solid fa-arrow-left"></i>
      </button>

      <span className="text-lg font-bold bg-gray-100 text-gray-800 px-5 py-2 rounded-full shadow-inner">
        {pageno}
      </span>

      <button
        onClick={handleNext}
        className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold px-4 py-2 rounded-full shadow-md transition-all duration-200 hover:scale-105 disabled:opacity-50"
      >
        <i className="fa-solid fa-arrow-right"></i>
      </button>
    </div>
  );
}

export default Pagination;
