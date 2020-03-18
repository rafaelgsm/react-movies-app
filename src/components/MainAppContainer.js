import React, { Component } from "react";

import Search from "../layout/Search";
import TabsContainer from "./TabsContainer";

import { searchMovies } from "../services/MovieApi";

class MainAppContainer extends Component {
  state = {
    searchList: undefined
  };

  ////////////////////////////////////////////////////////////
  // Search Form
  ////////////////////////////////////////////////////////////

  handleInputChange = currentSearchText => {
    this.setState({
      currentSearchText
    });
  };

  handleSelectorChange = currentSearchType => {
    this.setState({
      currentSearchType
    });
  };

  handleSubmit = e => {
    const { currentSearchText, currentSearchType } = this.state;
    e.preventDefault();

    if (currentSearchText && currentSearchType) {
      //Both query and search type are filled, then do the request:
      searchMovies(currentSearchType, currentSearchText).then(searchList => {
        this.setState({
          searchList
        });
      });
    } else {
      //Fields not filled:
      this.setState({
        searchList: undefined
      });
    }
    //todo----
  };

  ////////////////////////////////////////////////////////////

  render() {
    const { searchList } = this.state;
    return (
      <div>
        <Search        
          onInputChange={this.handleInputChange}
          onSelectorChange={this.handleSelectorChange}
          onSubmit={this.handleSubmit}
        />

        <TabsContainer searchList={searchList} />
      </div>
    );
  }
}

export default MainAppContainer;
