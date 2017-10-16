import React from 'react'
import {isEmpty, chunk} from 'lodash'

import Loading from '../Misc/Loading'
import Tab from '../Misc/Tab'

const LeaderBoard = ({leaders}) => {
  const [players, teams, live] = !isEmpty(leaders) ? leaders.items : Array(3)
  const tabs = ['Players', 'Teams']

  return (
    <div>
      {isEmpty(leaders) ? <Loading /> :
        <Tab title={leaders.title} tabs={tabs}>
          <Board content={players} statType='playerstats'></Board>
          <Board content={teams} statType='teamstats'></Board>
        </Tab>
      }
    </div>
  )
}

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

export default LeaderBoard
