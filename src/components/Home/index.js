import React, {Component} from 'react'
import {isEmpty, chunk} from 'lodash'

import Loading from '../Misc/Loading'
import Tab from '../Misc/Tab'
import {DAILY_LEADER, CORS_PROXY} from '../../config/api'

class Home extends Component {
  constructor(props) {
    super(props)

    this.state = {
      dailyLeader: {}
    }
  }

  componentDidMount() {
    fetch(`${CORS_PROXY}${DAILY_LEADER}`, {
      headers: {
        'Access-Control-Allow-Origin': 'http://localhost:8001',
        'Origin': 'http://localhost:8001',
        'Content-Type': 'text/plain'
      }
    }).then(response => response.json())
    .then(response => this.setState({ dailyLeader: response}))
    .catch(console.log("Unable to get information."))
  }

  render() {
    const {dailyLeader} = this.state
    return (
      <div className='content'>
        <h1>Stats Home</h1>
        <hr />
        <div className='flex-horizontal'>
          <LeaderBoard dailyLeader={dailyLeader}/>
          <div className='subSidebar' style={{flex:1}}></div>
        </div>
      </div>
    )
  }
}

const LeaderBoard = ({dailyLeader}) => {
  const [playersBoard, teamsBoard, live] = !isEmpty(dailyLeader) ? dailyLeader.items : Array(3)
  const tabs = ['Players', 'Teams']

  return (
    <div style={{flex:4}}>
      {isEmpty(dailyLeader) ? <Loading /> :
        <Tab title={dailyLeader.title} tabs={tabs}>
          <Board content={playersBoard} statType='playerstats'></Board>
          <Board content={teamsBoard} statType='teamstats'></Board>
        </Tab>
      }
    </div>
  )
}

const PlayerBoard = ({content}) => <Board content={content} statType='playerstats' />
const TeamBoard = _ => <p>This is teams board</p>

const Board = ({content, statType}) =>
  <div className='leaders__board' style={{width:'100%'}}>
    {chunk(content.items, 3).map((row, index) =>
      <Row key={index} content={row} statType={statType} style={{width:'100%'}}/>
    )}
  </div>

const Row = ({content, statType}) =>
  <div className='leaders__board--row flex-horizontal'>
    {content.map((item, index) =>
      <Cell content={item} key={index} statType={statType} style={{flex:1}}/>
    )}
  </div>

const Cell = ({content, statType}) => {
  const {name, title} = content
  return (
    <div style={{flex:1}}>
      <h4>{title}</h4>
      {content[statType].map((item) =>
        statType === 'playerstats' ?
          <div key={item.PLAYER_ID} className='flex-horizontal'>
            <div style={{flex:4}}>{item.PLAYER_NAME}&nbsp;
              <span style={{fontSize:'0.5em',color:'#ddd'}}>{item.TEAM_ABBREVIATION}</span>
            </div>
            <div style={{flex:1}}>{item[name]}</div>
          </div> :
          <div key={item.GAME_ID} className='flex-horizontal'>
            <div style={{flex:4}}>{item.TEAM_CITY}&nbsp;{item.TEAM_NAME}&nbsp;
              <span style={{fontSize:'0.5em',color:'#ddd'}}>{item.TEAM_ABBREVIATION}</span>
            </div>
            <div style={{flex:1}}>{item[name]}</div>
          </div>
      )}
    </div>
  )
}

// const Board = ({content, statType, type}) =>
//   <div className='leaders__board--body' >
//     {chunk(content.items, 3).map((item, index) =>
//       <Row key={index} info={item} statType={statType} type={type}/>
//     )}
//   </div>
//
// const Row = ({info, statType, type}) =>
//   <div className='flex-horizontal' style={{margin:'10px auto'}}>
//     {info.map(board =>
//       type === 'player' ?
//       <PlayerCell key={board.name} info={board} statType={statType}/> :
//       <TeamCell key={board.name} info={board} statType={statType}/>
//     )}
//   </div>
//
// const PlayerCell = ({info, statType}) => {
//   const content = info[statType], {name} = info
//   return (
//     <div style={{flex:1}}>
//       <div className='flex-horizontal' style={{padding:'5px'}}>
//         <h4>{info.title}</h4>
//       </div>
//       {content.map(player =>
//         <div key={player.PLAYER_ID} className='flex-horizontal'>
//           <div style={{flex:3,padding:'3px 5px'}}>
//             <span style={{fondWeight:'bold'}}>{player.PLAYER_NAME}&nbsp;</span>
//             <span style={{color:'#ddd',fontSize:'0.5em'}}>{player.TEAM_ABBREVIATION}</span>
//           </div>
//           <div style={{flex:1}}>
//             <span style={{fondWeight:'bold'}}>{player[name]}</span>
//           </div>
//         </div>
//       )}
//     </div>
//   )
// }
//
// const TeamCell = ({info, statType}) => {
//   const content = info[statType]
//   const {name} = info
//   return (
//     <div style={{flex:1}}>
//       <div className='flex-horizontal' style={{padding:'5px'}}>
//         <h4>{info.title}</h4>
//       </div>
//       {content.map(team =>
//         <div key={team.TEAM_ID} className='flex-horizontal'>
//           <div style={{flex:3,padding:'3px 5px'}}>
//             <span style={{fondWeight:'bold'}}>{team.TEAM_CITY} {team.TEAM_NAME}&nbsp;</span>
//           </div>
//           <div style={{flex:1}}>
//             <span style={{fondWeight:'bold'}}>{team[name]}</span>
//           </div>
//         </div>
//       )}
//     </div>
//   )
// }

export default Home
