import React, {Component} from 'react'
import {groupBy} from 'lodash'
import GameList from './GameList'

const MonthSchedule = ({mscd}) => {
  const gms = groupBy(mscd.g, 'gdte')
  return (
    <div className="schedule__month">
      <h4>{mscd.mon}</h4>
      {
        Object.keys(gms).map(dt => {
          return <GameList key={dt} gms={gms[dt]} date={dt} />
        })
      }
    </div>
  )
}

export default MonthSchedule
