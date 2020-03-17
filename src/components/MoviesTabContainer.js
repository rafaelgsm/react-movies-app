import React, { Component } from "react";
import { getNowPlaying } from "../services/MovieApi";

import Loading from "../layout/Loading";
import MovieList from "../layout/MovieList";

class MoviesTabContainer extends Component {
  state = {
    isLoading: true,
    movieList: []
  };

  componentDidMount() {
    this.setState({
      isLoading: true
    });

    getNowPlaying().then(movieList => {
      console.log("getNowPlaying", movieList);

      this.setState({
        isLoading: false,
        movieList
      });
    });
  }

  render() {
    const { isLoading, movieList } = this.state;
    return (
      <div>
        MOVIE
        {isLoading ? <Loading /> : <MovieList movieList={movieList} />}</div>
    );
  }
}

export default MoviesTabContainer;
