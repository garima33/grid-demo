import React, { Component } from "react";
import { data } from "./utils/data";
import { Card } from "./components/Card/Card";
import "./App.css";

class App extends Component {
  render() {
    let items = data.map((item, index) => {
      return (
        <div className="item">
          <Card cardData={item} />
        </div>
      );
    });
    return <div className="container">{items}</div>;
  }
}

export default App;
