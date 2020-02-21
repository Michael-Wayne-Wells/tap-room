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

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      masterBeerList: []
    };
  }
  handleAddingNewBeerToList(beer) {
    var newMasterBeerList = this.state.masterBeerList.slice();
    newMasterBeerList.push(beer);
    this.setState({ masterBeerList: newMasterBeerList });
  }

  render() {
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
          <Route
            path="/beerlist"
            render={() => <BeerList beerList={this.masterBeerList} />}
          />
          <Route path="/contact" component={Contact} />
          <Route
            path="/newbeer"
            render={() => (
              <NewBeer onNewBeerCreation={this.handleAddingNewBeerToList} />
            )}
          />
          <Route component={Error} />
        </Switch>
      </div>
    );
  }
}
export default App;
