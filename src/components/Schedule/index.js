import React, {Component} from 'react'
import MonthSchedule from './MonthSchedule'

const SCHEDULE_BASE = 'http://stats.nba.com/js/data/league/2017/00_full_schedule_week.json'
const CORS_PROXY = 'https://cors-anywhere.herokuapp.com/'
const PLAYER_IMG_PREFIX = 'https://neulionmdnyc-a.akamaihd.net/nba/media/img/players/head/132x132/'

const headers = [
  { name: 'Date' },
  { name: 'Game', col: 4 },
  { name: 'Time' },
  { name: 'Arena' },
  { name: null }
]

class Schedule extends Component {
  constructor(props) {
    super(props)

    this.state = {
      lscd: [],
      lws: null
    }

    this.fetchSchedule = this.fetchSchedule.bind(this)
  }

  componentDidMount() {
    this.fetchSchedule()
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
      this.setState({lscd: Array.from(response.lscd), lws: response.lws})
    }).catch(console.log('Cannot get schedule.'))
  }

  render() {
    const {lscd, lws} = this.state
    const months = lscd.map(l => l.mscd.mon)
    return (
      <div className='content schedule' style={{
        display: 'flex',
        flexDirection: 'column'
      }}>
        <div style={{ flex: 1 }}>
          <h1>Schedule</h1>
        </div>
        <div style={{ display: 'flex', flex: 1 }}>
          <form>
            <div>
              <select name='team'>
                <option value=''>All Team</option>
              </select>
            </div>
            <div>
              <select name='month'>
                {}
              </select>
            </div>
          </form>
        </div>
        <div style={{ flex: 1, display: 'flex' }}>
          <div style={{ width: '5%'}} />
          <div style={{ flex: 10, display: 'flex'}} >
            {headers.map((header, index) =>
              <div style={{ flex: header.col ? header.col : 1 }}>{header.name}</div>
            )}
          </div>
        </div>
        {
          lscd.map(l => <MonthSchedule key={l.mscd.mon} mscd={l.mscd}/>)
        }
      </div>
    )
  }
}

export default Schedule
