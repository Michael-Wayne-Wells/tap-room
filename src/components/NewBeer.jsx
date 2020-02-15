import React from "react";

function NewBeer() {
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
      <form>
        <label>Beer Name</label>
        <fieldset>
          <input type="text"></input>
        </fieldset>
        <label>Brewer</label>
        <fieldset>
          <input type="text"></input>
        </fieldset>
        <label>Flavor Notes</label>
        <fieldset>
          <input type="text"></input>
        </fieldset>
        <label>IBU</label>
        <fieldset>
          <input type="number"></input>
        </fieldset>
        <label>ABV</label>
        <fieldset>
          <input type="number"></input>
        </fieldset>
        <label>Price</label>
        <fieldset>
          <input type="number"></input>
        </fieldset>
        <button className="btn btn-dark" type="submit">
          Add Beer
        </button>
      </form>
    </div>
  );
}
export default NewBeer;
