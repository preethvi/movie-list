import React from "https://cdn.skypack.dev/react";
import PropTypes from "https://cdn.skypack.dev/prop-types";

import Movie from "./Movie";
const Movies = props => (
    <ul className="movies">
      {props.movies.map(movie => (
        <li key={movie.id}>
          <Movie {...movie} />
        </li>
      ))}
    </ul>
  );
  
  Movies.propTypes = {
    movies:PropTypes.arrayOf(PropTypes.object)
  };
  export default Movies;