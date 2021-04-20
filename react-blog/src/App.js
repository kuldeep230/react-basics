import React, { Component } from "react";
import Header from "./Components/Header";
import Navbar from "./Components/Navbar";
import Main from "./Components/Main";
import Footer from "./Components/Footer";

class App extends Component {
  render() {
    return (
      <div class="container">
        <Header />
        <Navbar />
        <Main />
        <Footer />
      </div>
    );
  }
}

export default App;
