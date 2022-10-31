import React from "react";

const Card = ({ children }) => {
  return (
    <div className="flex justify-center items-center text-center bg-zinc-300 w-full h-screen">
      {children}
    </div>
  );
};

export default Card;
