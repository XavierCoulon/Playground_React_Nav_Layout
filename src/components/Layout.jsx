import React, { useState } from "react";
import Menu from "./Menu";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Card from "./UI/Card";

function Layout({ children, setCurrentPage }) {
  const [isMenuActive, setIsMenuActive] = useState(true);

  return (
    <div>
      <Navbar />
      <div className="flex">
        <span
          onClick={() => setIsMenuActive((state) => !state)}
          className="fixed left-2 top-2 block text-white sm:hidden"
        >
          Burger
        </span>
         <Menu setCurrentPage={setCurrentPage} isMenuActive={isMenuActive} />
        <Card>{children}</Card>
      </div>
      <Footer />
    </div>
  );
}

export default Layout;
