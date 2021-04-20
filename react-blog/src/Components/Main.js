import React, { Component } from "react";
import Article1 from "./Main/Article1";
import Article2 from "./Main/Article2";
import Article3 from "./Main/Article3";
import ChildCard1 from "./Main/ChildCard1";
import ChildCard2 from "./Main/ChildCard2";
import HeadCard from "./Main/HeadCard";
import About from "./Main/About";
import Archives from "./Main/Archives";
import SocialLinks from "./Main/SocialLinks";
import BottomNav from "./Main/BottomNav";
class Main extends Component {
  render() {
    return (
      <main className="contianer">
        <HeadCard />
        <div className="row mb-2">
          <ChildCard1 />
          <ChildCard2 />
        </div>
        <div className="row">
          <div class="col-md-8">
            <Article1 />
            <Article2 />
            <Article3 />
            <BottomNav />
          </div>
          <div className="col-md-4">
            <About />
            <Archives />
            <SocialLinks />
          </div>
        </div>
      </main>
    );
  }
}

export default Main;
