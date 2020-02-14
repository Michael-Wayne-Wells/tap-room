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
          font-size: 8vw;
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
