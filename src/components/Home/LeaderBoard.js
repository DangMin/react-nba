import React from 'react'
import {isEmpty, chunk} from 'lodash'

import Loading from '../Misc/Loading'
import Tab from '../Misc/Tab'

const LeaderBoard = ({leaders, className}) => {
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
  <div className='board'>
    {chunk(content.items, 3).map((row, index) =>
      <Row key={index} content={row} statType={statType}/>
    )}
  </div>

const Row = ({content, statType}) =>
  <div className='board__row'>
    {content.map((item, index) =>
      <Cell content={item} key={item.name} statType={statType}/>
    )}
  </div>

const Cell = ({content, statType}) => {
  const {name, title} = content
  return (
    <div className='board__cell'>
      <h4>{title}</h4>
      <hr />
      {content[statType].map((item, index) =>
        statType === 'playerstats' ?
          <div key={item.PLAYER_ID} className='flex-box'>
            <div className='flex-cell--3'>{index+1}.&nbsp;{item.PLAYER_NAME}&nbsp;
              <span>{item.TEAM_ABBREVIATION}</span>
            </div>
            <div className='flex-cell' style={index===0 ? {fontSize:'1.4em',fontWeight:'bold'} : {}}>{item[name]}</div>
          </div> :
          <div key={item.TEAM_ID} className='flex-box'>
            <div className='flex-cell--3'>{index+1}.&nbsp;{item.TEAM_CITY}&nbsp;{item.TEAM_NAME}&nbsp;
              <span>{item.TEAM_ABBREVIATION}</span>
            </div>
            <div className='flex-cell' style={index===0 ? {fontSize:'1.4em',fontWeight:'bold'} : {}}>{item[name]}</div>
          </div>
      )}
    </div>
  )
}

export default LeaderBoard
