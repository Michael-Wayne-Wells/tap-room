import React from "react";
import Header from "./components/Header";
import Home from "./components/Home";
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
    this.handleAddingNewBeerToList = this.handleAddingNewBeerToList.bind(this);
  }
  handleAddingNewBeerToList(beer) {
    let newMasterBeerList = this.state.masterBeerList.slice();
    newMasterBeerList.push(beer);
    this.setState({ masterBeerList: newMasterBeerList });
  }

  onDeleteBeer = index => {
    this.setState({
      masterBeerList: this.state.masterBeerList.filter((_, i) => i !== index)
    });
  };

  onSellBeer = id => {
    let newMasterBeerList = this.state.masterBeerList.slice();
    newMasterBeerList.forEach(function(beer, index) {
      if (id === beer.id) {
        beer.kegAmount -= 1;
      }
    });
    this.setState({ masterBeerList: newMasterBeerList });
  };

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
            render={() => (
              <BeerList
                beerList={this.state.masterBeerList}
                onSellBeer={this.onSellBeer}
                onDeleteBeer={this.onDeleteBeer}
              />
            )}
          />
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
