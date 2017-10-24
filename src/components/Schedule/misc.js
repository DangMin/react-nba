import React from 'react'

const TEAM_ICON_PREFIX = "https://neulionms-a.akamaihd.net/nba/player/v7/nba/site/images/teams/"

const getTeamName = (t) => `${t.tc} ${t.tn} (${t.ta})`

const getTeamIconURL = (teamCode) => {
  return `${TEAM_ICON_PREFIX}${teamCode}.png`
}

export const Team = ({team, className}) =>
  <div className={className}>
    <div className='schedule__game--team--logo flex-cell'><img src={getTeamIconURL(team.ta)} alt={getTeamName(team)}/></div>
    <div className='schedule__game--team--info flex-cell--5'>&nbsp;{getTeamName(team)}</div>
  </div>
