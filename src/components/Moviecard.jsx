import React from "react";

const getPoster = (posterPath) => {
  return `https://www.themoviedb.org/t/p/w300_and_h450_bestv2${posterPath}`;
};

const MovieCard = ({
  movie: { id, release_date, poster_path, original_title, overview }
}) => {
  return (
    <div className="movie" key={id}>
      <div>
        <p>{release_date}</p>
      </div>

      <div>
        <img
          src={
            getPoster(poster_path) !== "N/A"
              ? getPoster(poster_path)
              : "https://via.placeholder.com/400"
          }
          alt="poster"
        />
      </div>
      <div>
        <span>{original_title}</span>
        <p>{overview}</p>
      </div>
    </div>
  );
};

export default MovieCard;
