import React from 'react'
import {isEmpty, take} from 'lodash'
import Loading from '../Misc/Loading'

const Recap = ({content}) =>
  <div>
    <h3>{content.title}</h3>
    {
      content.items.map((item, index) => {
        const {name, title} = item
        const stats = item.playerstats ? item.playerstats : item.teamstats
        const playerOrTeam = item.playerstats ? true : false

        return (
          <div key={item.name+'_'+item.permode+'_'+index}>
            <h4>{title}</h4>
            {take(stats, 3).map(stat =>
              playerOrTeam ?
                <div key={stat.PLAYER_ID+'_'+Math.random()*1000} className='flex-box'>
                  <div className='flex-cell--3'>{stat.PLAYER_NAME}</div>
                  <div className='flex-cell'>{stat[name]}</div>
                </div> :
                <div key={stat.TEAM_ID+'_'+Math.random()*1000} className='flex-box'>
                  <div className='flex-cell--3'>{stat.TEAM_CITY}&nbsp;{stat.TEAM_NAME}</div>
                  <div className='flex-cell'>{stat[name]}</div>
                </div>
            )}
          </div>
        )
      })
    }
  </div>

export default Recap
