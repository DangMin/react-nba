const CONSTANTS = {
  LeagueID: {
    NBA: '00', ABA: '01'
  },
  CurrentSeason: _ => {
    const today = new Date()
    if (today.getMonth() > 6) {
      return `${today.getFullYear().toString()}-${(today.getFullYear()+1).toString().substring(2)}`
    }

    return `${(today.getFullYear()-1).toString()}-${today.getFullYear().toString().substring(2)}`
  },
  IsOnlyCurrentSeason: true, // other user will provide
  StatCategory: {
    Pts: 'Points',
    Rbs: 'Rebounds',
    Ast: 'Assists',
    Def: 'Defense',
    Clt: 'Clutch',
    Pmk: 'PlayMaking',
    Eff: 'Efficiency',
    Fbk: 'Fast Break',
    Sco: 'Scoring Breakdown'
  },
  SeasonType: {
    Regular: 'Regular Season',
    PreSeason: 'Pre Season',
    Playoffs: 'Playoffs',
    AllStar: 'All-Star',
  },
  GameScope: {
    Season: 'Season',
    Last10: 'Last 10',
    Yesterday: 'Yesterday',
    Finals: 'Finals'
  },
  PlayerOrTeam: {
    Player: 'Player', Team: 'Team'
  },
  PlayerScope: {
    All: 'All Players', Rookies: 'Rookies'
  },
  StatType: {
    Traditional: 'Traditional',
    Advanced: 'Advanced',
    Tracking: 'Tracking'
  },
  Stat: {
    Pts: 'PTS', Reb: 'REB',
    Ast: 'AST', Fgp: 'FG_PCT',
    Ftp: 'FG_PCT', Fg3p: 'FG3_PCT',
    Stl: 'STL', Blk: 'BLK'
  },
  MeasureType: {
    Base: 'Base', Advanced: 'Advanced',
    Misc: 'Misc', FourFactors: 'Four Factors',
    Scoring: 'Scoring', Opponent: 'Opponent',
    Usage: 'Usage', Defense: 'Defense'
  },
  PerMode: {
    Totals: 'Totals',
    PerGame: 'PerGame',
    MinutesPer: 'MinutesPer',
    Per48: 'Per48',
    Per40: 'Per40',
    Per36: 'Per36',
    PerMinute: 'PerMinute',
    PerPossession: 'PerPossession',
    PerPlay: 'PerPlay',
    Per100Possessions: 'Per100Possessions',
    Per100Plays: 'Per100Plays'
  },
  Default_N: 'N',
  Default_Y: 'Y',
  Location: { Home: 'Home', Away: 'Away', },
  SeasonSegment: { Pre: 'Pre All-Star', Post: 'Post All-Star' },
  Default_W: 'W',
  Default_L: 'L',
  Division: {
    Atl: 'Atlantic',
    Cen: 'Central',
    Nwt: 'Northwest',
    Pcf: 'Pacific',
    Sea: 'Southeast',
    Swt: 'Southwest',
    East: 'East',
    West: 'West'
  },
  Conference: { West: 'West', East: 'East' },
  GameSegment: {
    First: 'First Half',
    Second: 'Second Half',
    Ot: 'Overtime'
  },
  ClutchTime: {
    Last5: 'Last 5 Minutes',
    Last4: 'Last 4 Minutes',
    Last3: 'Last 3 Minutes',
    Last2: 'Last 2 Minutes',
    Last1: 'Last 1 Minute',
    Last30: 'Last 30 Seconds',
    Last10: 'Last 10 Seconds'
  },
  AheadBehind: {
    Default: 'Ahead or Behind',
    BehindTies: 'Behind of Tied',
    AheadTies: 'Ahead or Tied'
  },
  PlayerExp: {
    Rook: 'Rookies',
    Sop: 'Sophomore',
    Vet: 'Veteran'
  },
  PlayerPosition: {
    C: 'C',
    CF: 'C-F',
    FC: 'F-C',
    F: 'F',
    FG: 'F-G',
    GF: 'G-F',
    G: 'G'
  },
  Starter: {
    Default: 'Starters',
    Bench: 'Bench'
  },

}

export default CONSTANTS
