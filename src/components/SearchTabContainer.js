import React, { Component } from "react";
import { getTvShows } from "../services/MovieApi";

import Loading from "../layout/Loading";
import MovieList from "../layout/MovieList";

class SearchTabContainer extends Component {
  state = {
    isLoading: false,
    searchList: this.props.searchList
  };

  getMessage = () => {
    if (this.state.searchList) {
      if (this.state.searchList.length === 0) {
        return "Sorry, there were no results";
      } else {
        return ""; //Has results
      }
    } else {
      return "Please initiate a search";
    }
  };

  componentDidMount = () => {
  
    // this.setState({
    //   isLoading: true
    // });

    // this.getTvShowsBasedOnCategory();
  };

  render() {
    const { isLoading, searchList } = this.state;
    return (
      <div>      
        {this.getMessage() !== "" ? this.getMessage() : <MovieList movieList={searchList} />}
      </div>
    );
  }
}

export default SearchTabContainer;
