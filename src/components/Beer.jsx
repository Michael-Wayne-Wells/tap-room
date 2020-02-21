import React from "react";
import PropTypes from "prop-types";

const sellBeer = x => {
  console.log(x);
};
function Beer(props) {
  return (
    <>
      <style jsx>
        {`
       
          .sellButton {
            padding-left: 15px;
            padding-right: 15px;
            color: white;
            background-color: blue;
            border-radius: 4px;
            border: 4px solid black;
          }
          .sellButton:hover {
            text-shadow: 1.5px 1.5x black;
            transform: scale(1.2);
          }
          .sellButton:active {
            transform: scale(0.8);
          }
        

        
        `}
      </style>

      <tr className="beerTable">
        <td> {props.name} </td>
        <td> {props.brand}</td>
        <td> {props.flavor}</td>
        <td> {props.ibu}</td>
        <td> {props.abv}</td>
        <td> {props.price} </td>
        <td
          className="sellButton"
          onClick={function(e) {
            sellBeer("hj");
          }}
        >
          Sell
        </td>
      </tr>
    </>
  );
}

Beer.propTypes = {
  name: PropTypes.string.isRequired,
  brand: PropTypes.string.isRequired,
  price: PropTypes.string,
  flavor: PropTypes.string.isRequired,
  ibu: PropTypes.string,
  abv: PropTypes.string
};
export default Beer;
