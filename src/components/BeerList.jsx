import React from 'react'
import Beer from './Beer'

var masterBeerList = [
  {
    name: 'Hamms',
    brand: 'Hamms',
    price: '$3',
    flavor: 'Gets the job done.',
    ibu: "It' a Hamms...",
    abv: "5%"
  },
 
];

function BeerList() {
  return (
    <div>
      {masterBeerList.map((beer, index) =>
      <Beer name={beer.name}
      brand={beer.brand}
      price={beer.price}
      flavor={beer.flavor}
      ibu={beer.ibu}
      abv={beer.ibv}/>
      )}
    </div>
  );
}

 export default BeerList
