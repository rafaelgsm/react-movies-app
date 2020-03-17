import React from "react";
import "./App.css";

import MoviesContainer from "./components/MoviesContainer";
import Search from "./layout/Search";

function App() {
  return (
    <div className="App">
      <header className="App-header"></header>

      <h1>React Movies App</h1>

      <Search />

      <MoviesContainer />
    </div>
  );
}

export default App;
