import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './player.css';
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
        <div className="container">
        <Link to="/"><button>Back</button></Link>
        <h1><mark>News</mark></h1>
          <section className="display-item">
            <div className="wrapper">
              <ul>
                {this.state.News.map(item => {
                  return (
                    <li key={item.id}>
                    <YouTube className="player" videoId= {item.videoid}/>
                      <h2>{item.title}</h2>
                      <p class="channel">video by: {item.channel}</p>
                    </li>
                  );
                })}
              </ul>
            </div>
          </section>
        </div>
      </div>
    );
  }
}

export default App;
