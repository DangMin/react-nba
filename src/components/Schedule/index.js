import React, {Component} from 'react'
import {isEmpty} from 'lodash'

import MonthSchedule from './MonthSchedule'
import Dropdown from './Dropdown'
import {NBA_TEAMS as TEAMS} from '../../config/team'

const SCHEDULE_BASE = 'https://data.nba.com/data/10s/v2015/json/mobile_teams/nba/2017/league/00_full_schedule_week.json'
const CORS_PROXY = 'https://cors-anywhere.herokuapp.com/'
// const PLAYER_IMG_PREFIX = 'https://neulionmdnyc-a.akamaihd.net/nba/media/img/players/head/132x132/'

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
    this.remove = this.remove.bind(this)
  }

  componentDidMount() {
    this.fetchSchedule()
  }

  // Static functions
  onStateChange = ev => {
		const {name, value} = ev.target,
      set = new Set(this.state[name])
		if (set.has(value)) {
			set.delete(value)
		} else {
			set.add(value)
		}

    const obj = {}
    obj[name] = Array.from(set)
		this.setState(obj)
	}

  remove = ev => {
    const name = ev.target.parentNode.getAttribute('name'),
      value = ev.target.parentNode.getAttribute('value'),
      set = new Set(this.state[name])

    if (set.has(value)) {
      set.delete(value)
    }

    const obj = {}
    obj[name] = Array.from(set)
    this.setState(obj)
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
    const {lscd, teams, months} = this.state
    const MONTHS = lscd.map(l => l.mscd.mon)
    return (
      <div className='schedule'>
        <div className='content__title'>
          <h1>Schedule</h1>
        </div>
        <div>
          <Dropdown list={TEAMS} name='teams' handler={this.onStateChange} children='Teams' selected={teams}/>
          <Dropdown list={MONTHS} name='months' handler={this.onStateChange} children='Months' selected={months}/>
        </div>
        <FilterStatus teams={teams} months={months} handler={this.remove}/>
        <div className='flex-horizontal schedule__header'>
          <div style={{ width: '5%'}} />
          <div style={{ flex: 10, display: 'flex'}} >
            {headers.map((header, index) =>
              <div key={index} style={{ flex: header.col ? header.col : 1}}>{header.name}</div>
            )}
          </div>
        </div>
        {
          isEmpty(lscd) ? <div><i className='fa fa-spin fa-refresh fa-3x' /></div> :
          lscd.filter(filterMonth(months)).map(l =>
            <MonthSchedule key={l.mscd.mon} mscd={l.mscd} filterHandler={filterTeam} filteredTeams={teams}/>
          )
        }
      </div>
    )
  }
}

const FilterStatus = ({ teams, months, handler }) =>
  <div className="filter flex-horizontal">
  {teams.map(t => <Tag key={TEAMS[t].code} name='teams' value={TEAMS[t].code} handler={handler}>{TEAMS[t].city} {TEAMS[t].name}</Tag>)}
  {months.map((m, i) => <Tag key={i} name='months' value={m} handler={handler}>{m}</Tag>)}
  </div>

const Tag = ({handler, value, name, children}) =>
  <div name={name} value={value}>
    <i className='fa fa-times' onClick={handler} />
    {children}
  </div>

export default Schedule
