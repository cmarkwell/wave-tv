import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import withFirebaseAuth from "react-auth-firebase";
import "./channels.css";
import firebase from "./firebase";
import YouTube from 'react-youtube';
import Header from "./components/header/header";
import Player from "./components/player/player";
import Channels from "./components/channels/channels";



const BasicExample = () => (


  <Router>
    <div>
    <Header/>

      <Route exact path="/" component={channelsWindow} />
      <Route path="/player" component={playerWindow} />
    </div>
  </Router>
);


const channelsWindow = () => (
  <div>
<Channels/>
  </div>
);

const playerWindow = () => (
  <div>
<Player/>
  </div>
);


export default BasicExample;
