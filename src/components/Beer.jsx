import React from "react";
import PropTypes from "prop-types";

function Beer(props) {
  const kegAmountCss = amount => {
    let widthValue = parseInt((amount / 165) * 100);
    console.log(widthValue);
    return widthValue;
  };
  if (props.kegAmount < 1) {
    return (
      < >
      <style jsx>{` .removeButton {
              padding-left: 15px;
              padding-right: 15px;
              color: black;
              width: 30px;
              background-color: red;
              border-radius: 4px;
              border: 4px solid black;
            }
            .removeButton:hover {
              text-shadow: 1.5px 1.5x black;
              transform: scale(1.1);
            }`}</style>
      <tr>
        <td>The Keg Is Empty!</td>
        <td
          className="removeButton"
          onClick={function(e) {
            console.log(props.index);

            props.onDeleteBeer(props.index);
          }}
        >
          Remove Keg
        </td>
      </tr>
      </>
    );
  } else {
    return (
      <>
        <style jsx>
          {`
            .sellButton:hover {
              text-shadow: 1.5px 1.5x black;
              transform: scale(1.1);
            }
            .sellButton:active {
              transform: scale(0.9);
            }
            .kegContainer {
              border-radius: 40%;
              width: 80px;
              height: 100px;
              overflow: hidden;
              border: 2px solid grey;
            }

            .emptyKeg {
              height: ${100 - kegAmountCss(props.kegAmount)}%;
              background-color: black;
            }

            .kegAmount {
              background-color: #ffce26;
              border-top: 10px solid #ffffe6;
              height: ${kegAmountCss(props.kegAmount)}%;
              width: 100px;
            }
            .beerTable td {
              color: white;
              border-left: 1px solid white;
            }
            td.sellButton {
              padding-left: 15px;
              padding-right: 15px;
              color: white;
              background-color: blue;
              border-radius: 4px;
            }
            .removeButton {
              padding-left: 15px;
              padding-right: 15px;
              color: black;
              width: 30px;
              background-color: red;
              border-radius: 4px;
              border: 4px solid black;
            }
            .removeButton:hover {
              text-shadow: 1.5px 1.5x black;
              transform: scale(1.1);
            }
            .;
          `}
        </style>

        <tr className="beerTable">
          <td> {props.name} </td>
          <td> {props.brand}</td>
          <td> {props.flavor}</td>
          <td> {props.ibu}</td>
          <td> {props.abv}</td>
          <td> {props.price} </td>
          <td>
            Beers Left:
            <br />
            {props.kegAmount}
            <div className="kegContainer">
              <div className="emptyKeg"></div>
              <div className="kegAmount"></div>
            </div>
          </td>
          <td
            className="sellButton"
            onClick={function(e) {
              props.onSellBeer(props.id);
            }}
          >
            Sell
          </td>
          <td
            className="removeButton"
            onClick={function(e) {
              console.log(props.index);

              props.onDeleteBeer(props.index);
            }}
          >
            Remove Keg
          </td>
        </tr>
      </>
    );
  }
}
Beer.propTypes = {
  name: PropTypes.string.isRequired,
  brand: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  flavor: PropTypes.string,
  ibu: PropTypes.number,
  abv: PropTypes.number,
  kegAmount: PropTypes.number.isRequired,
  onSellBeer: PropTypes.func,
  id: PropTypes.string,
  index: PropTypes.number,
  onDeleteBeer: PropTypes.func
};
export default Beer;
