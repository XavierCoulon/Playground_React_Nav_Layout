import React from "react";
import Menu from "./Menu";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Card from "./UI/Card";

function Layout({ children, setCurrentPage }) {
  return (
    <div>
      <Navbar />
      <div className="flex">
        <Menu setCurrentPage={setCurrentPage} />
        <Card>{children}</Card>
      </div>
      <Footer />
    </div>
  );
}

export default Layout;
