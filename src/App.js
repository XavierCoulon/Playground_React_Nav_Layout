import { useState } from "react";
import "./App.css";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";
import Playlists from "./pages/Playlists";
import Profile from "./pages/Profile";
import Uploads from "./pages/Uploads";

function App() {
  const [currentPage, setCurrentPage] = useState("HOME");

  return (
    <Layout setCurrentPage={setCurrentPage}>
      {currentPage === "HOME" && <Home />}
      {currentPage === "FAVORITES" && <Favorites />}
      {currentPage === "PLAYLISTS" && <Playlists />}
      {currentPage === "PROFILE" && <Profile />}
      {currentPage === "UPLOADS" && <Uploads />}
    </Layout>
  );
}

export default App;
