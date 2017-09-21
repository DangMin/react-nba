import React, {Component} from 'react'
import {groupBy} from 'lodash'

import Game from './Game'

class GameList extends Component {
  constructor (props) {
    super(props)

    this.state = {
      gms: props.gms,
      date: props.date
    }
  }

  render() {
    const {gms, date} = this.state
    return (
      <div className='games' style={{ display: 'flex' }}>
        <div className='games__date' style={{ flex: 1 }}>
          <p>{date}</p>
          <p>{gms.length} {gms.length > 1 ? 'games' : 'game'}</p>
        </div>
        <div className='game__list' style={{
          display: 'flex',
          flexDirection: 'column',
          flex: 7
        }}>
        {gms.map(gm =>
          <Game key={gm.gid} gm={gm} />
        )}
        </div>
      </div>
    )
  }
}

export default GameList
