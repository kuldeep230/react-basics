import React, { Component } from "react";
import Navbar from "./Components/Navbar";
import Header from "./Components/Header";
import Main from "./Components/Main";
import Footer from "./Components/Footer";

class App extends Component {
  render() {
    return (
      <div class="container py-3">
        <Navbar />
        <div class="pricing-header p-3 pb-md-4 mx-auto text-center">
          <Header />
        </div>
        <Main />
        <Footer />
      </div>
    );
  }
}

export default App;
