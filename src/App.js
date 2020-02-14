import React from 'react';
import Header from './components/Header';
import Home from './components/Home';
import BeerList from './components/BeerList'
import { Switch, Route } from "react-router-dom";
import "./fonts.css"
import "bootstrap/dist/css/bootstrap.min.css";



function App() {

  return (
    <div className="App">
      <style jsx>{`
        body {
          background-color: black;
        }
      `}</style>
      <Header />
        <Switch>
          <Route exact path="/" component={Home} />
      
          <Route path="/beerlist" component={BeerList} />
      
        </Switch>
    </div>
  );
}

export default App;
