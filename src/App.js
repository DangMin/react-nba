import React, { Component } from 'react';

import GameList from './components/GameList'
import MonthSchedule from './components/MonthSchedule'

import logo from './logo.svg';
import './App.css';

const SCHEDULE_BASE = "http://stats.nba.com/js/data/league/2017/00_full_schedule_week.json"
const CORS_PROXY = "https://cors-anywhere.herokuapp.com/"
const PLAYER_IMG_PREFIX = "https://neulionmdnyc-a.akamaihd.net/nba/media/img/players/head/132x132/"

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      lscd: [],
      lws: null
    }

    this.fetchSchedule = this.fetchSchedule.bind(this)
  }

  componentDidMount() {
    this.fetchSchedule()
  }

  fetchSchedule = _ => {
    fetch(`${CORS_PROXY}${SCHEDULE_BASE}`, {
      headers: {
        'Access-Control-Allow-Origin': 'http://localhost:3000',
        'Origin': 'http://localhost:3000',
        'Content-Type': 'text/plain'
      },
    }).then(response => {
      return response.json()
    }).then(response => {
      this.setState({lscd: Array.from(response.lscd), lws: response.lws})
    }).catch(console.log('Cannot get schedule.'))
  }

  render() {
    const {lscd, lws} = this.state
    return (
      <div className="container">
        <div className="sidebar">
          <p>Sidebar</p>
        </div>
        <div className="content schedule">
          <h1>Schedule</h1>
          {
            lscd.map(l => <MonthSchedule key={l.mscd.mon} mscd={l.mscd}/>)
          }
        </div>
      </div>
    )
  }
}

export default App;
