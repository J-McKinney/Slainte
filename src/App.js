import React from "react";
// import logo from "./logo.svg";
// import Knot from "./Images/CelticKnot.png";
import BeerContainer from "./Components/BeerContainer/BeerContainer";
import "./App.css";

function App() {
  return (
    <div className="App">
      <BeerContainer header="Slainte Brewery" />
      {/*<header className="App-header">
        <img src={Knot} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>*/}
    </div>
  );
}

export default App;
