import React, { Component } from "react";
import { getMovies } from "../services/MovieApi";

import DefaultSelector from "../layout/DefaultSelector";
import Loading from "../layout/Loading";
import MovieList from "../layout/MovieList";

class MoviesTabContainer extends Component {
  state = {
    isLoading: true,

    categorySelected: "now_playing",

    movieList: []
  };

  getMoviesBasedOnCategory() {
    getMovies(this.state.categorySelected).then(movieList => {
      this.setState({
        isLoading: false,
        movieList
      });
    });
  }

  componentDidMount = () => {
    this.setState({
      isLoading: true
    });

    this.getMoviesBasedOnCategory();
  };

  onSelectorChange = categorySelected => {
    this.setState({
      isLoading: true,
      categorySelected
    });

    this.getMoviesBasedOnCategory();
  };

  render() {
    const { isLoading, categorySelected, movieList } = this.state;
    return (
      <div>
        <DefaultSelector
          searchTypeName="Category"
          searchTypeSelected={categorySelected}
          typeList={["now_playing", "popular", "top_rated", "upcoming"]}
          onSelectorChange={this.onSelectorChange}
        />
        {isLoading ? <Loading /> : <MovieList movieList={movieList} />}
      </div>
    );
  }
}

export default MoviesTabContainer;
