import React from "react";
import "./App.scss";
import BackBtn from "./img/back.png";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import War from "./War";
import Home from "./Home";

function App() {
  //All data
  const data = {
    WW1: [
      {
        year: 1914,
        events: [
          "Archduke Francis Ferdinand is assassinated in Sarajevo, Bosnia.",
          "Austria-Hungary declares war on Serbia, beginning World War I.",
          "Germany invades Luxembourg and Belgium. France invades Alsace. British forces arrive in France. Nations allied against Germany were eventually to include Great Britain.",
          "Austria-Hungary invades Russia.",
          "Allied forces halt German advance into France during First Battle of the Marne.",
        ],
        img:
          "https://upload.wikimedia.org/wikipedia/commons/e/ea/DC-1914-27-d-Sarajevo-cropped.jpg",
      },
      {
        year: 1915,
        events: [
          "Germany begins naval blockade of Great Britain.",
          "Allied forces land on the Gallipoli Peninsula of the Ottoman Empire.",
          "German submarine sinks the passenger liner Lusitania during crossing from New York to Liverpool, England, killing 128 Americans.",
          "Italy declares war on Austria-Hungary.",
        ],
        img:
          "https://www.deeperblue.com/wp-content/uploads/2019/09/AdobeStock_165830313-1068x625.jpeg",
      },
      {
        year: 1916,
        events: [
          "Germany begins the attack on Verdun.",
          "Naval Battle of Jutland takes place between British and German fleets.",
          "Allied offensive begins the Battle of the Somme.",
          "Battle of Verdun ends with 550,000 French and 450,000 German casualties.",
        ],
        img:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/French_87th_Regiment_Cote_34_Verdun_1916.jpg/170px-French_87th_Regiment_Cote_34_Verdun_1916.jpg",
      },
      {
        year: 1917,
        events: [
          "Germany returns to unrestricted submarine warfare halted after the sinking of the Lusitania.",
          "United States severs diplomatic relations with Germany.",
          "The United States declares war on Germany.",
          "American combat forces arrive in France.",
          "Russia signs armistice with Germany.",
        ],
        img:
          "https://i.pinimg.com/originals/88/e6/f9/88e6f95443b21a78342f74e96f58c626.jpg",
      },
      {
        year: 1918,
        events: [
          "Russia signs the Treaty of Brest-Litovsk with Germany.",
          "Germany begins its final offensive of the war.",
          "American First Army attacks St. Mihiel salient.",
          "Allied forces begin the attack at Meusse-Argonne, the final offensive of the war.",
          "Germany signs the Armistice at Compiègne, ending World War I.",
        ],
        img:
          "https://upload.wikimedia.org/wikipedia/commons/2/2f/Armisticetrain_%28slight_crop%29.jpg",
      },
    ],
    WW2: [
      {
        year: 1939,
        events: [
          "Hitler invades Poland on 1 September. Britain and France declare war on Germany two days later.",
        ],
        img:
          "http://totallyhistory.com/wp-content/uploads/2013/04/Polish_infantry_marching_-2_1939.jpg",
      },
      {
        year: 1940,
        events: [
          "Rationing starts in the UK.",
          "German 'Blitzkrieg' overwhelms Belgium, Holland and France.",
          "Churchill becomes Prime Minister of Britain.",
          "British Expeditionary Force evacuated from Dunkirk.",
          "British victory in Battle of Britain forces Hitler to postpone invasion plans.",
        ],
        img:
          "https://static.independent.co.uk/s3fs-public/thumbnails/image/2015/07/10/12/Heinkel_He_111_during_the_Battle_of_Britain.jpg",
      },
      {
        year: 1941,
        events: [
          "Hitler begins Operation Barbarossa - the invasion of Russia.",
          "The Blitz continues against Britain's major cities.",
          "Allies take Tobruk in North Africa, and resist German attacks.",
          "Japan attacks Pearl Harbor, and the US enters the war.",
        ],
        img:
          "https://www.history.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTU3ODc4NjAzNzkwMTY1NzI3/gettyimages-2660140-2.jpg",
      },
      {
        year: 1942,
        events: [
          "Germany suffers setbacks at Stalingrad and El Alamein.",
          "Singapore falls to the Japanese in February - around 25,000 prisoners taken.",
          "American naval victory at Battle of Midway, in June, marks turning point in Pacific War.",
          "Mass murder of Jewish people at Auschwitz begins.",
        ],
        img:
          "https://www.yadvashem.org/yv/fr/expositions/43-rue-vieille-du-temple/images/station_6/01.jpg",
      },
      {
        year: 1943,
        events: [
          "Surrender at Stalingrad marks Germany's first major defeat.",
          "Allied victory in North Africa enables invasion of Italy to be launched.",
          "Italy surrenders, but Germany takes over the battle.",
          "British and Indian forces fight Japanese in Burma.",
        ],
        img:
          "https://static01.nyt.com/images/2012/01/30/learning/Feb02LN/Feb02LN-blog480.jpg",
      },
      {
        year: 1944,
        events: [
          "Allies land at Anzio and bomb monastery at Monte Cassino.",
          "Soviet offensive gathers pace in Eastern Europe.",
          "D Day: The Allied invasion of France. Paris is liberated in August.",
          "Guam liberated by the US Okinawa, and Iwo Jima bombed.",
        ],
        img:
          "https://i.guim.co.uk/img/media/66374bee0516d7bff1d8ca1e3f144cf3e14f0649/0_431_3500_2099/master/3500.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=41d5fb51eb49b01539fd869b36ce1a69",
      },
      {
        year: 1945,
        events: [
          "Auschwitz liberated by Soviet troops.",
          "Russians reach Berlin: Hitler commits suicide and Germany surrenders on 7 May.",
          "Truman becomes President of the US on Roosevelt's death, and Attlee replaces Churchill.",
          "After atomic bombs are dropped on Hiroshima and Nagasaki, Japan surrenders on 14 August.",
        ],
        img:
          "https://cdnph.upi.com/svc/sv/upi/8581596809704/2020/1/ffc24f10fb1da77fb975b189d0a7d2f9/UPI-Almanac-for-Sunday-Aug-9-2020.jpg",
      },
    ],
    Falklands: [
      {
        year: "April",
        events: [
          "Argentinian forces invaded the Falkland Islands, entering the capital city, Port Stanley and forcing the governor to surrender.",
          "British task force of more than 100 naval ships set sail for Falkland Islands, including aircraft carriers.",
          "South Georgia was retaken by Royal Marines on April 25, 1982.",
          "The British task force arrived in 200-mile exclusion zone surrounding the Falkland Islands.",
        ],
        img:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Amtrack-82.jpg/220px-Amtrack-82.jpg",
      },
      {
        year: "May",
        events: [
          "Air attacks began by both sides on May 1, 1982.",
          "On May 2, Argentinian cruiser, the General Belgrano, was torpedoed and sank by a British submarine.",
          "On May 21, 1982, the HMS Ardent sank, causing 22 British deaths.",
          "Argentinian aircraft successfully sank the HMS Coventry on May 25, 1982.",
          "Fierce fighting at the Battle of Goose Green resulted in Argentinian surrender.",
        ],
        img:
          "https://upload.wikimedia.org/wikipedia/en/5/51/Goose_Green_school.jpg",
      },
      {
        year: "June",
        events: [
          "Argentinian attacks on British landing crafts RAF Sir Galahad and RAF Sir Tristram resulted in a number of British deaths.",
          "The British retook key sites, including Mount Longdon and Mount Harriet in the Falkland Islands.",
          "On June 14, 1982, Argentinian General Mario Menendez surrendered to Major General Jeremy Moore.",
          "Argentinian President Leopoldo Galitieri resigned following his defeat in the Falklands War.",
        ],
        img:
          "https://i2-prod.walesonline.co.uk/incoming/article1999382.ece/ALTERNATES/s615b/sir-galahad-930386708.jpg",
      },
    ],
  };

  // Gets keys of main data (WW1/WW2 etc.)
  const keys = Object.keys(data); //["WW1", "WW2"]...

  // Gets first image from each war, to use as background image for war selections screen
  const imgs = Object.keys(data).map((d) => {
    return data[d][0].img;
  });

  return (
    <Router>
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
              <Route key={i} path={`/${key}`}>
                <War war={data[key]} />
                <Link to="/">
                  <img
                    src={BackBtn}
                    alt="back"
                    style={{ cursor: "pointer" }}
                    className="backBtn"
                  />
                </Link>
              </Route>
            );
          })}
          <Route path="/">
            <Home links={keys} imgs={imgs} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
