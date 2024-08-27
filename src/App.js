import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Navbar } from "./Components/Navbar/Navbar";
// import { About, Contact, Home, Services } from "./components/pages";
import Homepage from "./Components/HomePage/Homepage";
import Toprated from "./Components/Movies/Toprated";
import Upcoming from "./Components/Movies/Upcoming";
import Moviedetail from "./Components/Moviedetail/Moviedetail";
import Searchmovies from "./Components/SearchMovies/Searchmovies";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/toprated" element={<Toprated />} />
        <Route path="/upcoming" element={<Upcoming />} />
        <Route path="/movie/:id" element={<Moviedetail />} />
        <Route path="/search/:query" element={<Searchmovies />} />
      </Routes>
    </div>
  );
}

export default App;