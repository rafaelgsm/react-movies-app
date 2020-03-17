import React, { Component } from "react";

import Search from "../layout/Search";
import TabsContainer from "./TabsContainer";

class MainAppContainer extends Component {
  state = {
    currentSearchText: "",
    currentSearchType: ""
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
      console.log(`YESH! ${currentSearchText} ${currentSearchType}`);
    } else {
      console.log(`No!`);
    }
    //todo----
  };

  ////////////////////////////////////////////////////////////

  render() {
    return (
      <div>
        <Search
          onInputChange={this.handleInputChange}
          onSelectorChange={this.handleSelectorChange}
          onSubmit={this.handleSubmit}
        />

        <TabsContainer />
      </div>
    );
  }
}

export default MainAppContainer;
