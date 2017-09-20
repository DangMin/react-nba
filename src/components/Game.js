import React, {Component} from 'react'

import {TEAM} from '../config/team'

const TEAM_ICON_PREFIX = "https://neulionms-a.akamaihd.net/nba/player/v7/nba/site/images/teams/"

const getTeamIconURL = (teamCode) => {
  return `${TEAM_ICON_PREFIX}${teamCode}.png`
}

class Game extends Component {
  constructor(props) {
    super(props)
    this.state = {
      gm: props.gm
    }
  }

  render(){
    const {h, v} = this.state.gm
    const {gm} = this.state
    const homeBg = { backgroundColor: TEAM[h.ta].color },
          visitBg = { backgroundColor: TEAM[v.ta].color }
    return(
      <div className="game__row">
        <div className="game__teams">
          <div className="game__team">
            <div className="game__team--logo">
              <img className="team-logo" src={getTeamIconURL(h.ta)} />
            </div>
            <div className="game__team--info">
              &nbsp;<a href="#">{h.tc} {h.tn}</a>
            </div>
          </div>
          <div className="game__team">
            <div className="game__team--logo">
              <img className="team-logo" src={getTeamIconURL(v.ta)} />
            </div>
            <div className="game__team--info">
              &nbsp;<a href="#">{v.tc} {h.tn}</a>
            </div>
          </div>
        </div>
        <div className="game__time">
          <p>{new Date(gm.etm).toString()}</p>
        </div>
        <div className="game__arena">
          <p>{gm.an}</p>
          <p>{gm.ac}, {gm.as}</p>
        </div>
        <div className="game__action">
          <button >Preview</button>
        </div>
      </div>
      // <!--
      // <div className="game__row">
      //   <div className="game__row--team-left" style={homeBg}>
      //     <div className="game__row--team-logo">
      //       <img src={getTeamIconURL(h.ta)} />
      //     </div>
      //     <div className="game__row--team-info">
      //       <a href="#">
      //         <span>{h.tc}</span>
      //         &nbsp;<span>{h.tn}</span>&nbsp;
      //         <span>({h.ta})</span>
      //       </a>
      //     </div>
      //     <div className="game__row--team-record">
      //       &nbsp;<span>{h.re}</span>
      //     </div>
      //   </div>
      //   <div className="game__row--team-right" style={visitBg}>
      //     <div className="game__row--team-logo">
      //       <img src={getTeamIconURL(v.ta)} />
      //     </div>
      //     <div className="game__row--team-info">
      //       <a href="#">
      //         <span>{v.tc}</span>
      //         &nbsp;<span>{v.tn}</span>&nbsp;
      //         <span>({v.ta})</span>
      //       </a>
      //     </div>
      //     <div className="game__row--team-record">
      //       <span>{v.re}</span>&nbsp;
      //     </div>
      //   </div>
      // </div>
      // -->
    )
  }

}

export default Game
