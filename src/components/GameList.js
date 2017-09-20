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
      <div className="game" key={date}>
        <div className="game__date-container">
          <h5>{date}</h5>
        </div>
        <div className="game__list">
        {
          gms.map(gm => <Game key={gm.gid} gm={gm} />)
        }
        </div>
      </div>
    )
  }
}

export default GameList
