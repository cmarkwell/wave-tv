import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './player.css';
import firebase from "./firebase.js";
import YouTube from 'react-youtube';
import Back from './back.png';

const VIDEO_OPTS = {
  height: '390',
  width: '640',
  playerVars: { // https://developers.google.com/youtube/player_parameters
    autoplay: 1,
    controls: 0,
    showinfo: 0,
    modestbranding: true,
    showsearch:0,
    rel:0
  },
};

class App extends Component {
  constructor() {
    super();
    this.state = {
      playerIndex: 0, // Index of currently playing video in news array
      username: "",
      news: []        // Array of video data from firebase
    };
  }

  componentDidMount() {
    const NewsRef = firebase
      .database()
      .ref('News')
      .orderByChild('date');
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
        news: newState
      });
    });
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  removeItem(itemId) {
    const itemRef = firebase.database().ref(`/News/${itemId}`);
    itemRef.remove();
  }

  playNextVideo = () => {
    this.setState(prevState => {
      const { news, playerIndex } = prevState;
      return {
          playerIndex: playerIndex < news.length ? playerIndex + 1 : 0,
      };
    });
  }

  render() {
    const currentVideo = this.state.news[this.state.playerIndex];

    return (
      <div className="app">
        <div className="container">
        <Link to="/"><img src={Back} className="backButton"/></Link>
        <h1><mark>News</mark></h1>
          <section className="display-item">
            {currentVideo && 
              <div className="wrapper">
                <YouTube
                  className="player"
                  videoId={currentVideo.videoid}
                  opts={VIDEO_OPTS}
                  onEnd={this.playNextVideo}
                />
                <h2>{currentVideo.title}</h2>
                <p className="channel">Video by: {currentVideo.channel}</p>
              </div>
            }
          </section>
        </div>
      </div>
    );
  }
}

export default App;
