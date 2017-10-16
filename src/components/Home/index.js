import React, {Component} from 'react'

import {HOME, CORS_PROXY, FETCH_HDS as HEADER} from '../../config/api'
import LeaderBoard from './LeaderBoard'
import Recap from './Recap'

class Home extends Component {
  constructor(props) {
    super(props)

    this.state = {
      dailyLeaders: {},
      seasonRecap: {},
      seasonLeaders: {}
    }
  }

  componentDidMount() {
    fetch(`${CORS_PROXY}${HOME.DAILY}`, {
      headers: HEADER
    }).then(response => response.json())
    .then(response => this.setState({ dailyLeaders: response}))
    .catch(console.log("Unable to get daily leaders."))

    fetch(`${CORS_PROXY}${HOME.RECAP}`, {
      headers: HEADER
    }).then(response => response.json())
    .then(response => this.setState({seasonRecap: response.items[0]}))
    .catch(console.log("Unable to get season recap."))

    fetch(`${CORS_PROXY}${HOME.SEASON}`, {headers: HEADER})
    .then(response => response.json())
    .then(response => this.setState({seasonLeaders: response}))
    .catch(console.log("Unable to get season leaders."))
  }

  render() {
    const {dailyLeaders, seasonRecap, seasonLeaders} = this.state
    return (
      <div className='content'>
        <h1>Stats Home</h1>
        <hr />
        <div className='flex-horizontal'>
          <div className='sub-content' style={{flex:4}}>
            <LeaderBoard leaders={dailyLeaders}/>
            <hr />
            <LeaderBoard leaders={seasonLeaders}/>
          </div>
          <div className='subSidebar' style={{flex:1}}>
            <Recap content={seasonRecap} />
          </div>
        </div>
      </div>
    )
  }
}

export default Home
