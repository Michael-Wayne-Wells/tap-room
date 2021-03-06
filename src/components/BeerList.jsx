import React from "react";
import Beer from "./Beer";
import Table from "react-bootstrap/Table";
import Fade from "react-reveal/Fade";
import PropTypes from "prop-types";

function BeerList(props) {
  return (
    <div className="beerTable">
      <style jsx>{`
        .tableDate {
          text-align: center;
          margin: 0 auto;
          width: 60%;
          color: white;
        }
        .beerTable {
          margin: 50px;
        }

        th {
          font-size: 20px;
          text-align: center;
          border-bottom: 4px solid white;
          border-left: 1px solid whitesmoke;
        }
      `}</style>

      <Table className="tableDate" bordered variant="dark">
        <thead>
          <tr>
            <th>Beer</th>
            <th>Brand</th>
            <th>flavor</th>
            <th>IBU</th>
            <th>ABV</th>
            <th>Price</th>
            <th> Keg Amount</th>
          </tr>
        </thead>
        <Fade bottom>
          <tbody>
            {props.beerList.map((beer, index) => (
              <Beer
                name={beer.name}
                brand={beer.brand}
                price={beer.price}
                flavor={beer.flavor}
                ibu={beer.ibu}
                abv={beer.abv}
                key={beer.id}
                kegAmount={beer.kegAmount}
                id={beer.id}
                index={index}
                onSellBeer={props.onSellBeer}
                onDeleteBeer={props.onDeleteBeer}
              />
            ))}
          </tbody>
        </Fade>
      </Table>
    </div>
  );
}

BeerList.propTypes = {
  beerList: PropTypes.array
};

export default BeerList;
