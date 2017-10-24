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
      <div className='schedule__game'>
        <div className='schedule__game--teams flex-cell--5 flex-box'>
          <Team
            className='schedule__game--team flex-box flex-cell--4'
            team={h}
          />
          <Team
            className='schedule__game--team flex-box flex-cell--4'
            team={v}
          />
        </div>
        <div className='schedule__game--time flex-cell'>{new Date(gm.etm).toLocaleTimeString()}</div>
        <div className='schedule__game--arena flex-cell'>
          <p>{gm.an}</p>
          <p>{gm.ac}, {gm.as}</p>
        </div>
        <div className='flex-cell'>
          <button> Preview </button>
        </div>
      </div>
    )
  }

}

export default Game
