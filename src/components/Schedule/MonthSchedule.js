import React, {Component} from 'react'
import {groupBy} from 'lodash'
import GameList from './GameList'

const MonthSchedule = ({mscd, col}) => {
  const gms = groupBy(mscd.g, 'gdte')
  const dates = Object.keys(gms)
  return (
    <div style={{ display: 'flex' }}>
      <div style={{ border: '1px solid black', width: '5%' }}>
        <p style={{
          textOrientation: 'sideways',
          writingMode: 'vertical-lr'
        }}>{mscd.mon}</p>
      </div>
      <div style={{ flex: 10 }}>
        {dates.map(date =>
          <GameList key={date} gms={gms[date]} date={date} />
        )}
      </div>
    </div>
  )
}

export default MonthSchedule
