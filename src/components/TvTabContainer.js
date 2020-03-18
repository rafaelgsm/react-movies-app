import React, { Component } from "react";
import { getTvShows } from "../services/MovieApi";

import Box from "@material-ui/core/Box";

import DefaultSelector from "../layout/DefaultSelector";
import Loading from "../layout/Loading";
import MovieList from "../layout/MovieList";

class TvTabContainer extends Component {
  state = {
    isLoading: true,

    categorySelected: "airing_today",

    tvList: []
  };

  getTvShowsBasedOnCategory() {
    getTvShows(this.state.categorySelected).then(tvList => {
      this.setState({
        isLoading: false,
        tvList
      });
    });
  }

  componentDidMount = () => {
    this.setState({
      isLoading: true
    });

    this.getTvShowsBasedOnCategory();
  };

  onSelectorChange = categorySelected => {
    this.setState({
      isLoading: true,
      categorySelected
    });

    this.getTvShowsBasedOnCategory();
  };

  render() {
    const { isLoading, categorySelected, tvList } = this.state;
    return (
      <div>
        <Box
          display="flex"
          margin="auto"
          justifyContent="center"
          paddingTop="1rem"
          paddingBottom="2rem"
        >
          <DefaultSelector
            searchTypeName="Category"
            searchTypeSelected={categorySelected}
            typeList={["airing_today", "on_the_air", "popular", "top_rated"]}
            onSelectorChange={this.onSelectorChange}
          />
        </Box>
        {isLoading ? <Loading /> : <MovieList movieList={tvList} />}
      </div>
    );
  }
}

export default TvTabContainer;
