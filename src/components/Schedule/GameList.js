import React from 'react'
import {isEmpty} from 'lodash'

import Game from './Game'

const GameList = ({gms, date, filteredTeams, filterHandler}) => {
  return (
    isEmpty(gms) ? <div></div> :
      <div className='flex-box schedule__games'>
        <div className='flex-cell schedule__date'>
          <p>{date}</p>
          <p>{gms.length} {gms.length > 1 ? 'games' : 'game'}</p>
        </div>
        <div className='flex-cell--7'>
        {gms.map(gm =>
          <Game key={gm.gid} gm={gm} />
        )}
        </div>
      </div>
  )
}

export default GameList
