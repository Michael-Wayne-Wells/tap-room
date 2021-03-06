import React from "react";
import Zoom from "react-reveal/Zoom";

function HeaderBody() {
  return (
    <div className="headerBody">
      <style jsx>
        {`
          .headerTitle {
            text-align: center;
            line-height: 250px;
            color: white;
            font-family: "Odibee Sans", cursive;
            font-size: 10vw;
            text-shadow: 4px 4px 4px black;
          }
          .headerBody {
            height: 300px;
          }
        `}
      </style>
      <Zoom>
        <h1 className="headerTitle">Tony Danza's Tap Room</h1>
      </Zoom>
    </div>
  );
}
export default HeaderBody;
