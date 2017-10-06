import React, {Component} from 'react'
import {groupBy, map, isEmpty} from 'lodash'
import GameList from './GameList'

const MonthSchedule = ({mscd, filteredTeams, filterHandler}) => {
  const groupByDate = groupBy(mscd.g, 'gdte')
  const dates = Object.keys(groupByDate)
  return (
    <div style={{ display: 'flex' }}>
      <div style={{ border: '1px solid black', width: '5%' }}>
        <p style={{
          textOrientation: 'sideways',
          writingMode: 'vertical-lr'
        }}>{mscd.mon}</p>
      </div>
      <div style={{ flex: 10 }}>
        {
          dates.map(date => {
            const gms = groupByDate[date].filter(filterHandler(filteredTeams))
            return !isEmpty(gms) ?
              <GameList key={date} gms={gms} date={date} /> : <div key={date}></div>
          }
        )}
      </div>
    </div>
  )
}

export default MonthSchedule
