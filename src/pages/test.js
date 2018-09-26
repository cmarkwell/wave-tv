
import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import withFirebaseAuth from "react-auth-firebase";
import firebase from "./firebase";
import YouTube from 'react-youtube';
import Header from "./components/header/header";



const BasicExample = () => (

  <Router>
    <div>
    <Header/>
      <ul>
        <li>
          <Link to="/">Channels</Link>
        </li>
        <li>
          <Link to="/player">Player</Link>
        </li>
        <li>
        </li>
      </ul>

      <hr />

      <Route exact path="/" component={Channels} />
      <Route path="/player" component={Player} />
    </div>
  </Router>
);


const Channels = () => (
  <div>
  <div className="news">
  <h2><mark>News</mark></h2>
  <h3>Muller Investigation releases big news.</h3>
  <h4>Publisher: CNN</h4>
  <button className="watch">Watch</button>
  </div>

  <div className="entertainment">
  <h2><mark>Entertainment</mark></h2>
  <h3>New Trailer released for Captain Marvel.</h3>
  <h4>Publisher: Marvel Entertainment</h4>
  <button className="watch">Watch</button>
  </div>
  </div>
);

const Player = () => (
  <div>
<Player/>
  </div>
);


export default BasicExample;
