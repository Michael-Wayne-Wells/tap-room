import React from 'react'
import PropTypes from 'prop-types'
import Table from "react-bootstrap/Table";

function Beer(props) {
  return (
    <div>
      <Table className="tableDate" striped bordered hover variant="dark">
        <style jsx>{`
          .tableDate {
            margin: 0 auto;
            width: 60%;
          }
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

          th {
            border-bottom: 2px solid black;
          }
        `}</style>
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
        <tbody>
          <tr>
            <td> {props.name} </td>
            <td> {props.brand}</td>
            <td> {props.flavor}</td>
            <td> {props.ibu}</td>
            <td> {props.abv}</td>
            <td> {props.price} </td>
          </tr>
        </tbody>
      </Table>
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
