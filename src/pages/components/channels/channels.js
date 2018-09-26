import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './channels.css';
import firebase from "./firebase.js";
import YouTube from 'react-youtube';

class App extends Component {
  constructor() {
    super();
    this.state = {
      currentItem: "",
      username: "",
      News: []
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }
  componentDidMount() {
    const NewsRef = firebase
      .database()
      .ref("News")
      .limitToLast(1);
    NewsRef.on("value", snapshot => {
      let News = snapshot.val();
      let newState = [];
      for (let item in News) {
        newState.push({
          id: item,
          title: News[item].title,
          channel: News[item].channel,
          embed: News[item].embed,
          date: News[item].date,
          videoid: News[item].videoid
        });
      }
      this.setState({
        News: newState
      });
    });
  }
  removeItem(itemId) {
    const itemRef = firebase.database().ref(`/News/${itemId}`);
    itemRef.remove();
  }
  render() {
    return (
      <div className="app">
      <div className="news">
      <h2><mark>News</mark></h2>
      <h3>Muller Investigation releases big news.</h3>
      <h4>Publisher: CNN</h4>
      <Link to="/player"><button className="watch">Watch</button></Link>
      </div>

      <div className="entertainment">
      <h2><mark>Entertainment</mark></h2>
      <h3>New Trailer released for Captain Marvel.</h3>
      <h4>Publisher: Marvel Entertainment</h4>
      <button className="watch">Watch</button>
      </div>
      </div>
    );
  }
}

export default App;
