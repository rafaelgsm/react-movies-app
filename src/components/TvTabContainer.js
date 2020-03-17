import React, { Component } from "react";
import { getTvShowsTopRated } from "../services/MovieApi";

import Loading from "../layout/Loading";
import MovieList from "../layout/MovieList";

class TvTabContainer extends Component {
  state = {
    isLoading: true,
    tvList: []
  };

  componentDidMount() {
    this.setState({
      isLoading: true
    });

    getTvShowsTopRated().then(tvList => {
      console.log("getTvShowsTopRated", tvList);

      this.setState({
        isLoading: false,
        tvList
      });
    });
  }

  render() {
    const { isLoading, tvList } = this.state;
    return (
      <div>
        TV
        {isLoading ? <Loading /> : <MovieList movieList={tvList} />}
      </div>
    );
  }
}

export default TvTabContainer;
