import React from "react";
import Beer from "./Beer";
import Table from "react-bootstrap/Table";
import Fade from "react-reveal/Fade";

var masterBeerList = [
  {
    name: "Hamms",
    brand: "Hamms",
    price: "$3",
    flavor: "Gets the job done.",
    ibu: "It' a Hamms...",
    abv: "5%"
  },
  {
    name: "Raspberry Blush",
    brand: "Mikkeller",
    price: "$6",
    flavor: "Rasperry, duh!.",
    ibu: "not many",
    abv: "4%"
  },
  {
    name: "American Dream",
    brand: "Mikkerller",
    price: "$7",
    flavor: "Apricot, light hops, grapefruit.",
    ibu: "n/a",
    abv: "4.6%"
  },
  {
    name: "Caldene",
    brand: "3 Floyds",
    price: "$10",
    flavor: "Lemongrass, grain, mineral, grapefruit.",
    ibu: "90",
    abv: "6.5%"
  }
];

function BeerList() {
  return (
    <div className="beerTable">
      <style jsx>{`
        .tableDate {
          margin: 0 auto;
          width: 60%;
        }
        .beerTable {
          margin: 50px;
        }

        th {
          border-bottom: 2px solid black;
        }
      `}</style>

      <Table className="tableDate" striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>Beer</th>
            <th>Brand</th>
            <th>flavor</th>
            <th>IBU</th>
            <th>ABV</th>
            <th>Price</th>
          </tr>
        </thead>
        <Fade bottom>
          <tbody>
            {masterBeerList.map((beer, index) => (
              <Beer
                name={beer.name}
                brand={beer.brand}
                price={beer.price}
                flavor={beer.flavor}
                ibu={beer.ibu}
                abv={beer.abv}
                key={index}
              />
            ))}
          </tbody>
        </Fade>
      </Table>
    </div>
  );
}

export default BeerList;
