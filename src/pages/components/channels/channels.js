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
    const opts = {
          height: '390',
          width: '640',
          playerVars: { // https://developers.google.com/youtube/player_parameters
          autoplay: 1,
          controls: 0,
          showinfo: 0,
          modestbranding: true,
          showsearch:0,
          rel:0
          }
        };
    return (
      <div className="app">
              <ul>
                {this.state.News.map(item => {
                  return (
                    <li key={item.id}>
                    <div className="news">
                    <h2><mark>News</mark></h2>
                    <h3>{item.title}.</h3>
                    <h4>Publisher: {item.channel}</h4>
                    <Link to="/player"><button className="watch">Watch</button></Link>
                    </div>

                    <div className="entertainment">
                    <h2><mark>Entertainment</mark></h2>
                    <h3>New Trailer released for Captain Marvel.</h3>
                    <h4>Publisher: Marvel Entertainment</h4>
                    <button className="watch">Watch</button>
                    </div>
                    </li>
                  );
                })}
              </ul>
      </div>
    );
  }
}

export default App;
