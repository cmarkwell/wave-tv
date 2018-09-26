import React from "react";
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import withAuthFirebase from "react-auth-firebase";
import firebase from "./firebase";
import App from "./App";
import "./channels.css";
import Header from "./components/header/header";
import Player from "./player";

const Home = props => {
  console.log(props);
  const { user, signOut, error } = props;
  if (!user) {
    return <App />;
  }
  return (
    <div>
    <Header />
      <button className="signout" onClick={signOut}>Sign Out</button>

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
};

export default Home;
