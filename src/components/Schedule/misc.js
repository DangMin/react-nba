import React from 'react'

const TEAM_ICON_PREFIX = "https://neulionms-a.akamaihd.net/nba/player/v7/nba/site/images/teams/"

const getTeamName = (t) => `${t.tc} ${t.tn} (${t.ta})`

const getTeamIconURL = (teamCode) => {
  return `${TEAM_ICON_PREFIX}${teamCode}.png`
}

export const Team = ({team, win, className}) =>
  <div className={className}>
    <div className='schedule__game--team--logo flex-cell'>
      <a href={`/team/${team.tid}`} ><img src={getTeamIconURL(team.ta)} alt={getTeamName(team)}/></a>
    </div>
    <div className='schedule__game--team--info flex-cell--5'>
      <a href={`/team/${team.tid}`} >&nbsp;{getTeamName(team)}</a>
    </div>
    <div className='schedule__game--team--record flex-cell'>
      ({team.re})
    </div>
    <div className='schedule__game--team--score flex-cell' style={win ? {color:'red'} : {}}>
      {team.s ? team.s : ''}
    </div>
  </div>
