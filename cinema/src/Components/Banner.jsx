import React from "react";

function Banner() {
  return (
    <div
      className="h-[50vh] md:h-[79vh] bg-center bg-cover flex items-center justify-center"
      style={{
        backgroundImage: `url("https://i.pinimg.com/1200x/29/7d/e0/297de0761b0c756266d74ca50d03cc1d.jpg")`,
        
      }}
    >
      <div className="text-white  text-xl text-center w-full bg-blue-900/60 mt-155">
        Avengers Endgame
      </div>
    </div>

  );
}

export default Banner;
