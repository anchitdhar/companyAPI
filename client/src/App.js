import React, { Component } from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Search from "./pages/Search";
import Saved from "./pages/Saved";
import Navbar from "./components/navbar";
import Hero from "./components/hero";
import Footer from "./components/footer";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Router>
      <div className="block">
        <Navbar />
        <Hero />
        <Switch>
          <Route exact path="/" component={Search}/>
          <Route path="/saved" component={Saved}/>
        </Switch>
        <Footer />
      </div>
      </Router>
    );
  }
}

export default App;
