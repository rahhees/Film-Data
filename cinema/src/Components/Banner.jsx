import React from "react";

function Banner() {
  return (
  <div
      className="h-[50vh] md:h-[79vh] bg-center bg-cover relative flex items-end"
      style={{
        backgroundImage: `url("https://i.pinimg.com/1200x/29/7d/e0/297de0761b0c756266d74ca50d03cc1d.jpg")`,
      }}
    >
      <div className="w-full bg-blue-900/60 text-white text-center py-3 
                      text-lg sm:text-xl md:text-3xl lg:text-4xl font-bold">
        Avengers Endgame
      </div>
      </div>

  );
}

export default Banner;
