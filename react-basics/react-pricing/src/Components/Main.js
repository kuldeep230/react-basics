import React, { Component } from "react";
import Card1 from "./Main/Card1";
import Card2 from "./Main/Card2";
import Card3 from "./Main/Card3";
import Plans from "./Main/Plans";
class Main extends Component {
  render() {
    return (
      <main>
        <div className="row row-cols-1 row-cols-md-3 mb-3 text-center">
          <Card1 />
          <Card2 />
          <Card3 />
        </div>
        <Plans />
      </main>
    );
  }
}

export default Main;
