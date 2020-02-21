import React from "react";
import Beer from "./Beer";
import Table from "react-bootstrap/Table";
import Fade from "react-reveal/Fade";
import PropTypes from 'prop-types';



function BeerList(props) {
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
            {props.beerList.map((beer, index) => (
              <Beer
                name={beer.name}
                brand={beer.brand}
                price={beer.price}
                flavor={beer.flavor}
                ibu={beer.ibu}
                abv={beer.abv}
                key={beer.id}
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
}

export default BeerList;
