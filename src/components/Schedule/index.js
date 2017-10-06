import React, {Component} from 'react'
import {map, isEmpty} from 'lodash'

import MonthSchedule from './MonthSchedule'
import Dropdown from './Dropdown'
import {NBA_TEAMS as TEAMS} from '../../config/team'

const SCHEDULE_BASE = 'https://data.nba.com/data/10s/v2015/json/mobile_teams/nba/2017/league/00_full_schedule_week.json'
const CORS_PROXY = 'https://cors-anywhere.herokuapp.com/'
const PLAYER_IMG_PREFIX = 'https://neulionmdnyc-a.akamaihd.net/nba/media/img/players/head/132x132/'

const headers = [
  { name: 'Date' },
  { name: 'Game', col: 4 },
  { name: 'Time' },
  { name: 'Arena' },
  { name: null }
]

const filterTeam = team => game => isEmpty(team) || team.includes(game.h.ta) || team.includes(game.v.ta)
const filterMonth = month => item => isEmpty(month) || month.includes(item.mscd.mon)

class Schedule extends Component {
  constructor(props) {
    super(props)

    this.state = {
      lscd: [],
      months: [],
      teams: []
    }

    this.fetchSchedule = this.fetchSchedule.bind(this)
    this.onStateChange = this.onStateChange.bind(this)
  }

  componentDidMount() {
    this.fetchSchedule()
  }

  // Static functions
  onStateChange = ev => {
		const name = ev.target.name,
      set = new Set(this.state[name]),
      value = ev.target.value
		if (set.has(value)) {
			set.delete(value)
		} else {
			set.add(value)
		}

    const obj = {}
    obj[name] = Array.from(set)

		this.setState(obj)
    console.log(this.state[name])
	}

  fetchSchedule = _ => {
    fetch(`${CORS_PROXY}${SCHEDULE_BASE}`, {
      headers: {
        'Access-Control-Allow-Origin': 'http://localhost:3000',
        'Origin': 'http://localhost:3000',
        'Content-Type': 'text/plain'
      },
    }).then(response => {
      return response.json()
    }).then(response => {
      this.setState({lscd: Array.from(response.lscd)})
    }).catch(console.log('Cannot get schedule.'))
  }

  // Render
  render() {
    const {lscd, lws, teams, months} = this.state
    const MONTHS = lscd.map(l => l.mscd.mon)
    return (
      <div className='content schedule' style={{
        display: 'flex',
        flexDirection: 'column'
      }}>
        <div style={{ flex: 1 }}>
          <h1>Schedule</h1>
        </div>
        <div style={{ display: 'flex', flex: 1 }}>
          <Dropdown list={TEAMS} name='teams' handler={this.onStateChange}/>
        </div>
        <div style={{ flex: 1, display: 'flex' }}>
          <div style={{ width: '5%'}} />
          <div style={{ flex: 10, display: 'flex'}} >
            {headers.map((header, index) =>
              <div key={index} style={{ flex: header.col ? header.col : 1 }}>{header.name}</div>
            )}
          </div>
        </div>
        {
          lscd.filter(filterMonth(months)).map(l =>
            <MonthSchedule key={l.mscd.mon} mscd={l.mscd} filterHandler={filterTeam} filteredTeams={teams}/>
          )
        }
      </div>
    )
  }
}

export default Schedule
