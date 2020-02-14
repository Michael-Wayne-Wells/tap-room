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
  {
    name: 'Raspberry Blush',
    brand: 'Mikkeller',
    price: '$6',
    flavor: 'Rasperry, duh!.',
    ibu: "not many",
    abv: "4%"
  },
  {
    name: 'American Dream',
    brand: 'Mikkerller',
    price: '$7',
    flavor: 'Apricot, light hops, grapefruit.',
    ibu: "n/a",
    abv: "4.6%"
  },
  {
    name: 'Caldene',
    brand: '3 Floyds',
    price: '$10',
    flavor: 'Lemongrass, grain, mineral, grapefruit.',
    ibu: "90",
    abv: "6.5%"
  },
 
];

function BeerList() {
  return (
    <div>
      {masterBeerList.map((beer, index) => (
        <Beer
          name={beer.name}
          brand={beer.brand}
          price={beer.price}
          flavor={beer.flavor}
          ibu={beer.ibu}
          abv={beer.abv}
          key={index}/>
      ))}
    </div>
  );
}

 export default BeerList
