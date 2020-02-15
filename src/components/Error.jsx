import React from "react";
import { Link } from "react-router-dom";

function Error(props) {
  return (
    <div className="error">
      <style jsx>{`
        .error {
          background: white;
          text-align: center;
          padding: 20px;
          width: 60%;
          margin: 50px auto;
        }
      `}</style>
      <h2>The page {props.location.pathname} does not exist!</h2>
      <h3>
        Would you like to return <Link to="/">home</Link> instead?
      </h3>
    </div>
  );
}

export default Error;
