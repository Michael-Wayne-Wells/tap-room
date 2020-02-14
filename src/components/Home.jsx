import React from "react";
import danza from "../danza.gif";

function Home() {
  return (
    <div className="about">
      <style jsx>{`
        .about {
          height: 30rem;
        }
        img {
          width: 100%;
        }
        .danza {
          margin: 40px auto;

          width: 50%;
        }
      `}</style>
      <div className="danza">
        <img src={danza} alt="tony danza dancing"></img>
      </div>
    </div>
  );
}
export default Home;
