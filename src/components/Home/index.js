import React, {Component} from 'react'

import {DAILY_LEADER, CORS_PROXY} from '../../config/api'
import LeaderBoard from './LeaderBoard'

class Home extends Component {
  constructor(props) {
    super(props)

    this.state = {
      dailyLeader: {}
    }
  }

  componentDidMount() {
    fetch(`${CORS_PROXY}${DAILY_LEADER}`, {
      headers: {
        'Access-Control-Allow-Origin': 'http://localhost:8001',
        'Origin': 'http://localhost:8001',
        'Content-Type': 'text/plain'
      }
    }).then(response => response.json())
    .then(response => this.setState({ dailyLeader: response}))
    .catch(console.log("Unable to get information."))
  }

  render() {
    const {dailyLeader} = this.state
    return (
      <div className='content'>
        <h1>Stats Home</h1>
        <hr />
        <div className='flex-horizontal'>
          <div className='sub-content' style={{flex:4}}>
            <LeaderBoard leaders={dailyLeader}/>
            <hr />
          </div>
          <div className='subSidebar' style={{flex:1}}></div>
        </div>
      </div>
    )
  }
}

export default Home
