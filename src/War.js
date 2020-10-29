import React, { useState, useEffect } from "react";
import Card from "./Card";

import { FaLessThan, FaGreaterThan } from "react-icons/fa";
function War(props) {

  //STATE
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    setIdx(0);
  }, []);


  //HANDLE INCREMENT
  const increment = () => {
    if (idx < props.war.length - 1) {
      setIdx((prev) => prev + 1);
    }
  };
  //HANDLE DECREMENT
  const decrement = () => {
    if (idx > 0) {
      setIdx((prev) => prev - 1);
    }
  };

  return (
    <div className="War">
      <div className={`cards-slider active-slide-${idx}`}>
        <div className="buttons">
          <div
            className="btn decrement"
            onClick={decrement}
            style={{ cursor: "pointer" }}
          >
            <FaLessThan/>
          </div>
          <div
            className="btn increment"
            onClick={increment}
            style={{ cursor: "pointer" }}
          >
            <FaGreaterThan/>
          </div>
        </div>
        <div
          className="cards-slider-wrapper"
          style={{
            transform: `translateX(-${idx * (100 / props.war.length)}%)`,
          }}
        >
          {props.war.map((yr, i) => {
            return <Card key={i} id={i} data={yr} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default War;
