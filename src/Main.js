import React, { Component } from "react";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import Home from "./Home";
import Mahnoor from "./Mahnoor";
import Alok from "./Alok";

import Ainnie from "./Ainnie";
import bejki from "./bejki";

import Sakhshi from "./Sakhshi";
import Jorenz from "./Jorenz";
import Sowmya from "./Sowmya";

class Main extends Component {
  render() {
    return (
    <HashRouter>
       <div>
          <h1>Team Digital Hot Mess</h1>
          <ul className="header">
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/Mahnoor">Mahnoor</NavLink></li>
            <li><NavLink to="/Alok">Alok</NavLink></li>

            <li><NavLink to="/Ainnie">Annie</NavLink></li>
            <li><NavLink to="/bejki">Bejke</NavLink></li>

            <li><NavLink to="/Sakhshi">Sakshi</NavLink></li>
            <li><NavLink to="/Jorenz">Jorn</NavLink></li>
            <li><NavLink to="/Sowmya">Sowmya</NavLink></li>
          </ul>
          <div className="content">
            <Route path="/" component={Home}/>
            <Route path="/Mahnoor" component={Mahnoor}/>
            <Route path="/Alok" component={Alok}/>
            <Route path="/Ainnie" component={Ainnie}/>
            <Route path="/bejki" component={bejki}/>
            <Route path="/Sakhshi" component={Sakhshi}/>
            <Route path="/Jorenz" component={Jorenz}/>
            <Route path="/Sowmya" component={Sowmya}/>
          </div>
        </div>
        </HashRouter>
    );
  }
}

export default Main;
