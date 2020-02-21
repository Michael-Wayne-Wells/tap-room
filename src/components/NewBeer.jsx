import React from "react";
import PropTypes from "prop-types";
import { v4 } from "uuid";
import { withRouter } from "react-router-dom";


function NewBeer(props) {
  let _name = null;
  let _brand = null;
  let _flavor = null;
  let _ibu = null;
  let _abv = null;
  let _price = null;

  const handleNewBeerSubmission = event => {
    event.preventDefault();
    props.onNewBeerCreation({
      name: _name.value,
      brand: _brand.value,
      flavor: _flavor.value,
      ibu: _ibu.value,
      abv: _abv.value,
      price: _price.value,
      id: v4()
    });
    _name = "";
    _brand = "";
    _flavor = "";
    _ibu = "";
    _abv = "";
    _price = "";
    props.history.push('beerlist');
  };
  return (
    <div>
      <style jsx>{`
        form {
          margin: 40px auto;
          background-color: rgba(100, 100, 100, 0.5);
          border-radius: 10px;
          width: 40%;
          padding: 20px;
        }
        input {
          width: 100%;
          height: 40px;
        }
        label {
          font-size: 18px;
          color: white;
        }
        button {
          width: 100%;
          height: 40px;
          margin-top: 20px;
        }
      `}</style>

      <form onSubmit={handleNewBeerSubmission}>
        <label>Beer Name</label>
        <fieldset>
          <input
            type="text"
            id="name"
            ref={input => {
              _name = input;
            }}
          />
        </fieldset>
        <label>Brand</label>
        <fieldset>
          <input
            type="text"
            id="brand"
            ref={input => {
              _brand = input;
            }}
          />
        </fieldset>
        <label>Flavor Notes</label>
        <fieldset>
          <input
            type="text"
            id="flavor"
            ref={input => {
              _flavor = input;
            }}
          />
        </fieldset>
        <label>IBU</label>
        <fieldset>
          <input
            type="number"
            id="ibu"
            ref={input => {
              _ibu = input;
            }}
          />
        </fieldset>
        <label>ABV</label>
        <fieldset>
          <input
            type="number"
            id="abv"
            ref={input => {
              _abv = input;
            }}
          />
        </fieldset>
        <label>Price</label>
        <fieldset>
          <input
            type="number"
            i
            id="price"
            ref={input => {
              _price = input;
            }}
          />
        </fieldset>
        <button className="btn btn-dark" type="submit">
          Add Beer
        </button>
      </form>
    </div>
  );
}

NewBeer.propTypes = {
  onNewBeerCreation: PropTypes.func
};

export default withRouter(NewBeer);
