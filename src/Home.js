import React from "react";
import { BrowserRouter as Route, Link } from "react-router-dom";

//War selection component
function Home(props) {
  return (
    <div className="Home">
      <h1 className="Home__title">Select a war:</h1>
      <div className="Home__grid">
        {props.links.map((l, i) => {
          return (
            <Link
              key={i}
              to={`/${l}`}
              style={{ backgroundImage: `url(${props.imgs[i]})` }}
            >
              {l}
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default Home;
