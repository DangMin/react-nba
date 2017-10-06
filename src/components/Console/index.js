import React, {Component} from 'react'
import {filter, keyBy, isEmpty, groupBy, map} from 'lodash'
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
    console.log(gamesInMonth)
    // const gamesOfTeam = gamesInMonth.g.filter(filterTeam(ofTeam))
    return (<div></div>)
  }
}

export default Console
