import "./App.css";
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";
import Playlists from "./pages/Playlists";
import Profile from "./pages/Profile";
import Uploads from "./pages/Uploads";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Menu from "./components/Menu";
import Footer from "./components/Footer";
import Card from "./components/UI/Card";
import { useState } from "react";
import { Fragment } from "react";
import Genres from "./pages/Genres";
import GenreItem from "./components/GenreItem";

function App() {
  const [isMenuActive, setIsMenuActive] = useState(true);

  return (
    <Fragment>
      <Navbar />
      <div className="flex">
        <span
          onClick={() => setIsMenuActive((state) => !state)}
          className="fixed left-2 top-2 block text-white sm:hidden"
        >
          Burger
        </span>
        <Menu isMenuActive={isMenuActive} />
        <Card>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/favorites" element={<Favorites />} />
            <Route path="/playlists" element={<Playlists />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/uploads" element={<Uploads />} />
            <Route path="/genres" element={<Genres />} />
            <Route path="/genres/:label" element={<GenreItem />} />
          </Routes>
        </Card>
      </div>
      <Footer />
    </Fragment>
  );
}

export default App;
