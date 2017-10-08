import React, {Component} from 'react'

import {TEAMS} from '../../config/team'
import {Team} from './misc'

class Game extends Component {
  constructor(props) {
    super(props)
    this.state = {
      gm: props.gm
    }
  }

  render(){
    const {h, v} = this.state.gm
    const {gm} = this.state
    return(
      <div className="game">
        <div className="game__teams" style={{
          display: 'flex',
          flexDirection: 'column'
        }}>
          <Team
            className="game__team"
            style={{ flex: 4, display: 'flex' }}
            team={h}
          />
          <Team
            className="game__team"
            style={{ flex: 4, display: 'flex' }}
            team={v}
          />
        </div>
        <div className="game__time" style={{ flex: 1 }}>{new Date(gm.etm).toLocaleTimeString()}</div>
        <div className="game__arena" style={{ flex: 1 }}>
          <p>{gm.an}</p>
          <p>{gm.ac}, {gm.as}</p>
        </div>
        <div style={{ flex: 1 }}>
          <button> Preview </button>
        </div>
      </div>
    )
  }

}

export default Game
