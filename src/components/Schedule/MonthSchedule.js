import React from 'react'
import {groupBy, isEmpty} from 'lodash'
import GameList from './GameList'

const MonthSchedule = ({mscd, filteredTeams, filterHandler}) => {
  const groupByDate = groupBy(mscd.g, 'gdte')
  const dates = Object.keys(groupByDate)
  return (
    <div className='schedule__month'>
      <div className='schedule__month--title'>
        <h3>{mscd.mon}</h3>
      </div>
      <div className=''>
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
