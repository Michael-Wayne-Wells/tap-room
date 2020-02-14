import React from 'react';

function HeaderBody() {
  return (
    <div className="headerBody">
      <style jsx>
        {`
          
          .headerTitle {
            text-align: center;
            line-height: 400px;
            color: white;
            font-family:'Odibee Sans', cursive;
            font-size: 10vw;
            text-shadow: 4px 4px 4px black;
          }
          .headerBody {
            height: 500px;
          }
        `}
      </style>
      <h1 className="headerTitle">Tony Danza's Tap Room</h1>
    </div>
  );
}
 export default HeaderBody
