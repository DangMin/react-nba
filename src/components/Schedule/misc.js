import React from 'react'

const TEAM_ICON_PREFIX = "https://neulionms-a.akamaihd.net/nba/player/v7/nba/site/images/teams/"

const getTeamName = (t) => `${t.tc} ${t.tn} (${t.ta})`

const getTeamIconURL = (teamCode) => {
  return `${TEAM_ICON_PREFIX}${teamCode}.png`
}

export const Team = ({team, style, className}) =>
  <div className={className} style={style}>
    <div><img src={getTeamIconURL(team.ta)} /></div>
    <div>&nbsp;<span>{getTeamName(team)}</span></div>
  </div>
