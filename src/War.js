import React, { useState, useEffect } from "react";
import Card from "./Card";

function War(props) {

  //STATE
  const [idx, setIdx] = useState(0);

  
  useEffect(() => {
    setIdx(0);
  }, []);

  //DETECTING SWIPE FUNCTIONS

  let prev = 0;
  let curr = 0;

  const getPos1 = (e) => {
    prev = e.pageX;
  }

  const getPos2 = (e) => {
    curr = e.pageX;

    if ( curr > prev ) {
      decrement()
    } else if ( prev > curr ) {
      increment()
    }
  }


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
    <div className="War" onPointerDown={getPos1} onPointerUp={getPos2}>
      <div className={`cards-slider active-slide-${idx}`}>
        <div className="buttons">
          <div
            className="btn decrement"
            onClick={decrement}
            style={{ cursor: "pointer" }}
          >
            &lt;
          </div>
          <div
            className="btn increment"
            onClick={increment}
            style={{ cursor: "pointer" }}
          >
            &gt;
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
