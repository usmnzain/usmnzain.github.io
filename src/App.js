import React from "react";
import Header from "./components/header";
import Body from "./components/body";

function App() {
  return (
    <div className="container">
      <div className="row">
        <Header />
      </div>
      <div className="row">
        <Body />
      </div>
    </div>
  );
}

export default App;
