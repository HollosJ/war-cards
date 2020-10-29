import React from "react";
import "./App.scss";
import {FaArrowLeft} from "react-icons/fa"
import { HashRouter, Route, Link, Switch } from "react-router-dom";
import { data } from "./data";
import War from "./War";
import Home from "./Home";
function App() {
  // Gets keys of main data (WW1/WW2 etc.)
  const keys = Object.keys(data); //["WW1", "WW2"]...

  // Gets first image from each war, to use as background image for war selections screen
  const imgs = Object.keys(data).map((d) => {
    return data[d][0].img;
  });

  return (
    <HashRouter>
      <div className="App">
        {/* Nav menu */}
        <div className="Nav">
          <ul className="Nav__links">
            <Link to="/" className="homebtn">
              War Cards
            </Link>
          </ul>
        </div>

        {/*Router routes to wars */}
        <Switch>
          {keys.map((key, i) => {
            return (
              <Route key={i} exact path={`/${key}/`}>
                <War war={data[key]} />
                <Link to="/"className="backBtn">
                  <FaArrowLeft />
                </Link>
              </Route>
            );
          })}
          <Route exact path="/">
            <Home links={keys} imgs={imgs} />
          </Route>
        </Switch>
      </div>
    </HashRouter>
  );
}

export default App;
