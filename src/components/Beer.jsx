import React from "react";
import PropTypes from "prop-types";

function Beer(props) {
  return (
    <>
      <style jsx>
        {`
          td {
            width: 25%;
          }

          td:nth-child(1) {
            background: #54575c;
            width: 18%;
            color: whitesmoke;
            text-shadow: 1.5px 1.5x black;
            font-size: 20px;
            font-weight: bold;
          }
        `}
      </style>

      <tr>
        <td> {props.name} </td>
        <td> {props.brand}</td>
        <td> {props.flavor}</td>
        <td> {props.ibu}</td>
        <td> {props.abv}</td>
        <td> {props.price} </td>
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
