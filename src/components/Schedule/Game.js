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
        <div className='schedule__game--teams flex-cell--4'>
          <Team
            className='schedule__game--team flex-box flex-cell--4'
            team={h} win={ h.s && v.s ? parseInt(h.s) > parseInt(v.s) : false}
          />
          <Team
            className='schedule__game--team flex-box flex-cell--4'
            team={v} win={ h.s && v.s ? parseInt(h.s) < parseInt(v.s) : false}
          />
        </div>
        <div className='schedule__game--time flex-cell'>
          <p>{ gm.stt ? gm.stt : new Date(gm.etm).toLocaleTimeString()}</p>
          <p>{gm.gweek === null ? 'Pre-Season' : ''}</p>
        </div>
        <div className='schedule__game--arena flex-cell'>
          <p>{gm.an}</p>
          <p>{gm.ac}, {gm.as}</p>
        </div>
        <div className='flex-cell'>
          {
            gm.stt === 'Final' ? <a href='`/boxscore/${gm.gid}`'>
              <button>Boxscore</button>
            </a> : <span />
          }
          <button> Preview </button>
        </div>
      </div>
    )
  }

}

export default Game
