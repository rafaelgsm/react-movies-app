import React from "react";
import MovieItem from "./MovieItem";

// Layout for representing a list
const MovieList = props => {
  console.log(props);

  return (
    <div>
      
      {/* Add a container here, like a grid */}
      
        {props.movieList.map(movie => {
          const { title } = movie;
          return <MovieItem title={title} />;
        })}
      
      {/* Add a container here, like a grid */}

    </div>
  );
};

export default MovieList;
