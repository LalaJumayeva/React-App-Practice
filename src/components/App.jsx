import React, { useEffect, useState } from "react";
import axios from "axios";
import MovieCard from "./Moviecard";
import SearchIcon from "../components/search.svg";

const movie1 = {
  "adult": false,
  "backdrop_path": "/22z44LPkMyf5nyyXvv8qQLsbom.jpg",
  "genre_ids": [
      27,
      9648,
      53
  ],
  "id": 631842,
  "original_language": "en",
  "original_title": "Knock at the Cabin",
  "overview": "While vacationing at a remote cabin, a young girl and her two fathers are taken hostage by four armed strangers who demand that the family make an unthinkable choice to avert the apocalypse. With limited access to the outside world, the family must decide what they believe before all is lost.",
  "popularity": 2101.02,
  "poster_path": "/dm06L9pxDOL9jNSK4Cb6y139rrG.jpg",
  "release_date": "2023-02-01",
  "title": "Knock at the Cabin",
  "video": false,
  "vote_average": 6.5,
  "vote_count": 983
}

const getPoster = (posterPath) =>{
  return `https://www.themoviedb.org/t/p/w300_and_h450_bestv2${posterPath}`
}


const URL =
  "https://api.themoviedb.org/3/movie/popular?api_key=7736ed9f5427a468429b0f9cc1d80060&language=en-US&page=1";


function App() {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    axios
      .get(URL)
      .then((res) => {
        setMovie(res.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  });

  return (
    <div className="app">
      <h1>MovieScreen</h1>

      <div className="search">
        <input 
        placeholder="Search Movie" 
        value="Batman"
        onChange={()=>{}}
        />
        <img 
        src={SearchIcon} 
        alt="search"
        onClick={()=>{}}
        />
      </div>

      <div className="container">
        <div className="movie">
          <div>
            <p>{movie1.release_date}</p>
          </div>

          <div>
            <img src={getPoster(movie1.poster_path)!== "N/A"?getPoster(movie1.poster_path):"https://via.placeholder.com/400"} alt="poster"/>
          </div>
          <div>
            <span>{movie1.original_title}</span>
            <p>{movie1.overview}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
