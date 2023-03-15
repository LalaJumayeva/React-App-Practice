import React, { useEffect, useState } from "react";
import MovieCard from "./Moviecard";
import SearchIcon from "../components/search.svg";
import tmdb from "./tmdb";

// const movie1 = {
//   adult: false,
//   backdrop_path: "/22z44LPkMyf5nyyXvv8qQLsbom.jpg",
//   genre_ids: [27, 9648, 53],
//   id: 631842,
//   original_language: "en",
//   original_title: "Knock at the Cabin",
//   overview:
//     "While vacationing at a remote cabin, a young girl and her two fathers are taken hostage by four armed strangers who demand that the family make an unthinkable choice to avert the apocalypse. With limited access to the outside world, the family must decide what they believe before all is lost.",
//   popularity: 2101.02,
//   poster_path: "/dm06L9pxDOL9jNSK4Cb6y139rrG.jpg",
//   release_date: "2023-02-01",
//   title: "Knock at the Cabin",
//   video: false,
//   vote_average: 6.5,
//   vote_count: 983
// };

const API_search = "https://api.themoviedb.org/3/movie/search/movie?api_key=7736ed9f5427a468429b0f9cc1d80060&language=en-US&page=1";

const URL =
  "https://api.themoviedb.org/3/movie/popular?api_key=7736ed9f5427a468429b0f9cc1d80060&language=en-US&page=1";

function App() {
  const [movies, setMovie] = useState([]);
  const [search, setSeatch] = useState("");

  useEffect(() => {
    const fetchMovies = async() =>{
      const {data} = await tmdb.get("movie/popular")
      setMovie(data.results)
    }
    fetchMovies()
  }, []);

  const handleSearch= (e) => {
    e.preventDefault();
    fetch(API_search + search)
    .then(res => res.json())
    .then(data => setMovie(data.results))
  }

  return (
    <div className="app">
      <h1>MovieScreen</h1>

      <div className="search">
        <input
          placeholder="Search Movie"
          value={search}
          onChange={(e) => setSeatch(e.target.value)}
        />
        <img src={SearchIcon} alt="search" onClick={handleSearch} />
      </div>
      {movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie) => (
            <MovieCard movie={movie} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h1>no movies found</h1>
        </div>
      )}
    </div>
  );
}

export default App;
