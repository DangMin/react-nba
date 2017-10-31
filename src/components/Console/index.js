import React, {Component} from 'react'
import {isEmpty, groupBy, map, reduce} from 'lodash'
import Schedule from './schedule'

const filterTeam = team => game => isEmpty(team) || team.includes(game.h.ta) || team.includes(game.v.ta)
const filterMonth = month => item => isEmpty(month) || month.includes(item.mscd.mon)

class Console extends Component {
  constructor (props) {
    super(props)

    this.state = {
      lscd: Schedule.lscd,
      inMonth: ['September', 'October'],
      ofTeam: ['LAC', 'CHI']
    }
  }

  render() {
    const {lscd, inMonth, ofTeam} = this.state
    const gamesInMonth = lscd.filter(filterMonth(inMonth)).map(l => {
      const gamesByDate = groupBy(l.mscd.g, 'gdte')
      return map(gamesByDate, games => games.filter(filterTeam(ofTeam)) )
    })
    // console.log(gamesInMonth)
    // const gamesOfTeam = gamesInMonth.g.filter(filterTeam(ofTeam))
    const byWeek = groupBy(lscd.reduce((acc, l) => acc.concat(l.mscd.g.map(g => g)), []), 'gweek')
    const byDate = groupBy(lscd.reduce((acc, l) => acc.concat(l.mscd.g.map(g => g)), []), 'gdte')
    const today = new Date().toLocaleDateString('en-GB').split('/').reverse().join('-')

    const weeks = Object.keys(byWeek)
    const days = reduce(byWeek, (result, value, key) => {
      // value.map(v => console.log(v))
      result[key] = value.reduce((acc, cur) => {
        if (!acc.includes(cur.gdte))
          return acc.concat(cur.gdte)
        return acc
      }, [])
      return result
    }, {})



    console.log(days[weekNumber(days, today)])
    return (
      <div>
        {
          map(weeks, week => <div key={week}>
            {map(byWeek[week], game => <p key={game.gcode}>{game.gcode}</p>)}
          </div>)
        }
      </div>)
  }
}

const weekNumber = (schedule, today) => {
  const keys = Object.keys(schedule)
  let wn = null
  console.log(today)
  keys.forEach(key => {
    console.log(schedule[key].includes(today))
    if (schedule[key].includes(today))
      wn = key
  })

  return wn
}

export default Console
