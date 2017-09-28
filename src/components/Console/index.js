import React, {Component} from 'react'
import {filter, keyBy} from 'lodash'
import Schedule from './schedule'

const filterMonth = month => item => !month || item.mscd.mon == month
const filterTeam = team => game => !team || game.h.ta == team || game.v.ta == team

class Console extends Component {
  constructor (props) {
    super(props)

    this.state = {
      lscd: Schedule.lscd,
      inMonth: '',
      ofTeam: 'GSW'
    }

    // this.gamesInMonth = this.gamesInMonth.bind(this)
  }

  render() {
    const {lscd, inMonth, ofTeam} = this.state
    const gamesInMonth = lscd.filter(filterMonth(inMonth)).map(l => {
      return l.mscd.g.filter(filterTeam(ofTeam))
    })
    console.log(gamesInMonth)
    // const gamesOfTeam = gamesInMonth.g.filter(filterTeam(ofTeam))
    return (<div></div>)
  }
}

export default Console
