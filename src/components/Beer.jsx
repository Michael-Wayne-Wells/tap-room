
import React from 'react'
import PropTypes from 'prop-types'


function Beer(props) {
  return (
    <div>
      <table>
        <style jsx>{`
          table {
            border: 4px solid black;
            width: 40%;
            margin-left: 20px;
          }

          td {
            width: 25%;
          }
          th {
            border-bottom: 2px solid black;
          }
        `}</style>
        <tr>
          <th>Beer</th>
          <th>Brand</th>
          <th>flavor</th>
          <th>IBU</th>
          <th>ABV</th>
          <th>Price</th>
        </tr>
        <tr>
          <td> {props.name} </td>
          <td> {props.brand}</td>
          <td> {props.flavor}</td>
          <td> {props.ibu}</td>
          <td> {props.abv}</td>
          <td> {props.price} </td>
        </tr>
      </table>
    </div>
  );
  }

  Beer.propTypes = {
    name: PropTypes.string.isRequired,
    brand: PropTypes.string.isRequired,
    price: PropTypes.string,
    flavor: PropTypes.string.isRequired,
    ibu: PropTypes.string,
    abv: PropTypes.string
  }
  export default Beer
