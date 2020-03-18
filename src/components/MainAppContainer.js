import React, { Component } from "react";

import Search from "../layout/Search";
import TabsContainer from "./TabsContainer";

import { searchMovies } from "../services/MovieApi";

class MainAppContainer extends Component {
  state = {
    searchList: undefined,
    selectedTab: 0
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
      this.setState({
        searchList: undefined,
        selectedTab: -1 //To force search results to refresh
      });

      //Both query and search type are filled, then do the request:
      searchMovies(currentSearchType, currentSearchText).then(searchList => {
        this.setState({
          searchList,
          selectedTab: 1
        });
      });
    }
  };

  ////////////////////////////////////////////////////////////

  handleChange = (e, newValue) => {
    this.setState({
      selectedTab: newValue
    });
  };

  ////////////////////////////////////////////////////////////
  render() {
    const { searchList, selectedTab } = this.state;
    return (
      <div>
        <Search
          onInputChange={this.handleInputChange}
          onSelectorChange={this.handleSelectorChange}
          onSubmit={this.handleSubmit}
        />

        <TabsContainer
          handleChange={this.handleChange}
          searchList={searchList}
          value={selectedTab}
        />
      </div>
    );
  }
}

export default MainAppContainer;
