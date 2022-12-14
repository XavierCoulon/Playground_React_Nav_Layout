import React from "react";

function Navbar() {
  return (
    <div className="fixed w-screen h-10 text-white bg-[#1E1E1E] flex items-center justify-center">
      <div className="w-full text-center">
        <input
          className="rounded-sm w-2/5"
          type="text"
          placeholder="Search..."
        />
      </div>
    </div>
  );
}

export default Navbar;
