import React from "react";
import { BrowserRouter as Route, Link } from "react-router-dom";

//War selection component
function Home(props) {
  return (
    <div className="Home">
      <div className="Home__grid">
        {props.links.map((l, i) => {
          return (
            <Link
              key={i}
              to={`/${l}`}
              style={{
                background: `linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url(${props.imgs[i]})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
              }}
            >
              {l.replaceAll("_", " ")}
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default Home;
