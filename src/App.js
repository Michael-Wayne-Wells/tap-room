import React from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import NewBeer from "./components/NewBeer";
import BeerList from "./components/BeerList";
import { Switch, Route } from "react-router-dom";
import "./fonts.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <style jsx>{`
      .header {
        box-shadow: 0px 20px 15px;
      }
        body {
    background: #000000;  /* fallback for old browsers */
background: -webkit-linear-gradient(to bottom, #434343, #000000);  /* Chrome 10-25, Safari 5.1-6 */
background: linear-gradient(to bottom, #434343, #000000); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */


          );
        }
      `}</style>
      <div className="header">
        <Header />
      </div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/beerlist" component={BeerList} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="/newbeer" component={NewBeer} />
      </Switch>
    </div>
  );
}

export default App;
