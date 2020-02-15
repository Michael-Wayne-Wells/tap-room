import React from "react";
import NavigationBar from "./NavigationBar";
import HeaderBody from "./HeaderBody";
import beer from "../beer.jpeg";

function Header() {
  return (
    <div className="headerFull">
      <style jsx>
        {`
          .headerFull {
            background: url(${beer});
            background-size: 100%;
            background-repeat: no-repeat;
            background-position: center;
          }
        `}
      </style>
      <NavigationBar />
      <HeaderBody />
    </div>
  );
}
export default Header;
