import React from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import Contact from "./components/Contact";
import NewBeer from "./components/NewBeer";
import BeerList from "./components/BeerList";
import { Switch, Route } from "react-router-dom";
import Error from "./components/Error";
import "./fonts.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <style jsx>{`
  
      body {
        background: #000000; 
        );
        }
      `}</style>
      <div className="header">
        <Header />
      </div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/beerlist" component={BeerList} />
        <Route path="/contact" component={Contact} />
        <Route path="/newbeer" component={NewBeer} />
        <Route component={Error} />
      </Switch>
    </div>
  );
}

export default App;
