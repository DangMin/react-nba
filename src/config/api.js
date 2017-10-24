const BASE = "stats.nba.com/stats/"

const CORS_PROXY = 'https://cors-anywhere.herokuapp.com/'
const FETCH_HDS = {
  'Access-Control-Allow-Origin': 'http://localhost:8001',
  'Origin': 'http://localhost:8001',
  'Content-Type': 'text/plain'
}
const IMAGES = {
  portrait: (playerID) => playerID ? `//ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/${playerID}.png` : `//stats.nba.com/media/img/league/nba-headshot-fallback.png`
}

const HOME_WIDGETS = '//stats.nba.com/js/data/widgets/'

const HOME = {
  DAILY: HOME_WIDGETS+'home_daily.json',
  EDITORIAL: HOME_WIDGETS+'home_editorial.json',
  SEASON: HOME_WIDGETS+'home_season.json',
  RECAP: HOME_WIDGETS+'home_sidebar.json',
  PLAYOFF: HOME_WIDGETS+'home_playoff.json',
  DRAFT: HOME_WIDGETS+'draft_pick.json',

}

const ENDPOINTS = {
    allStarBalloPreditor: params => `allstarballotpredictor${queryBuilder(params)}`,
    boxScore: (params) => `boxscore${queryBuilder(params)}`,
    boxScoreAdvanced: params => `boxscoreadvanced${queryBuilder(params)}`,
    boxScoreAdvancedV2: params => `boxscoreadvancedv2${queryBuilder(params)}`,
    boxScoreFourFactors: params => `boxscorefourfactors${queryBuilder(params)}`,
    boxScoreFourFactorsV2: params => `boxscorefourfactorsv2${queryBuilder(params)}`,
    boxScoreMisc: params => `boxscoremisc${queryBuilder(params)}`,
    boxScoreMiscV2: params => `boxscoremiscv2${queryBuilder(params)}`,
    boxScorePlayerTrackv2: params => `boxscoreplayertrackv2${queryBuilder(params)}`,
    boxScoreUsage: params => `boxscoreusage${queryBuilder(params)}`,
    boxScoreUsageV2: params => `boxscoreusagev2${queryBuilder(params)}`,

    commonTeamYears: params => `commonTeamYears${queryBuilder(params)}`,
    commonAllPlayers: params => `commonallplayer{${queryBuilder(params)}`,
    commonPlayerInfo: params => `commonplayerinfo${queryBuilder(params)}`,
    commonPlayoffSeries: params => `commonplayoffseries${queryBuilder(params)}`,
    commonTeamRoster: params => `commonteamroster${queryBuilder(params)}`,

    draftCombineDrillResults: params => `draftcombinedrillresult${queryBuilder(params)}`,
    draftCombineNonStationaryShooting: params => `draftcombinenonstationaryshooting${queryBuilder(params)}`,
    draftCombinePlayerAnthro: params => `draftcombineplayeranthro${queryBuilder(params)}`,
    draftCombineSpotShooting: params => `draftcombinespotshooting${queryBuilder(params)}`,
    draftCombineStats: params => `draftcombinestats${queryBuilder(params)}`,
    draftHistory: params => `drafthistory${queryBuilder(params)}`,

    franchiseHistory: params => `franchisehistory${queryBuilder(params)}`,

    homePageLeaders: params => `homepageleaders${queryBuilder(params)}`,
    homePagev2: params => `homepagev2${queryBuilder(params)}`,

    leadersTiles: params => `leaderstiles${queryBuilder(params)}`,
    leagueDashLineups: params => `leaguedashlineups${queryBuilder(params)}`,
    leagueDashPlayerBiostats: params => `leaguedashplayerbiostats${queryBuilder(params)}`,
    leagueDashPlayerClutch: params => `leaguedashplayerclutch${queryBuilder(params)}`,
    leagueDashPlayerPtShot: params => `leaguedashplayerptshot${queryBuilder(params)}`,
    leagueDashPlayerShotLocations: params => `leaguedashplayershotlocations${queryBuilder(params)}`,
    leagueDashPlayerStats: params => `leaguedashplayerstats${queryBuilder(params)}`,
    leagueDashPtDefend: params => `leaguedashptdefend${queryBuilder(params)}`,
    leagueDashPtTeamDefend: params => `leaguedashptteamdefend${queryBuilder(params)}`,
    leagueDashTeamClutch: params => `leaguedashteamclutch${queryBuilder(params)}`,
    leagueDashTeamPtShot: params => `leaguedashteamptshot${queryBuilder(params)}`,
    leagueDashTeamShotLocations: params => `leaguedashteamshotlocations${queryBuilder(params)}`,
    leagueDashTeamStats: params => `leaguedashteamstats${queryBuilder(params)}`,

    leagueLeaders: params => `leagueleaders${queryBuilder(params)}`,
    playByPlay: params => `playbyplay${queryBuilder(params)}`,
    playByPlayV2: params => `playbyplayv2${queryBuilder(params)}`,

    playerCareerStats: params => `playercareerstats${queryBuilder(params)}`,
    playerCompare: params => `playercompare${queryBuilder(params)}`,
    playerDashboardByClutch: params => `playerdashboardbyclutch${queryBuilder(params)}`,
    playerDashboardByGameSplits: params => `playerdashboadbygamesplits${queryBuilder(params)}`,
    playerDashboardByGeneralSplits: params => `playerdashboardbygeneralsplits${queryBuilder(params)}`,
    playerDashboardByLastGames: params => `playerdashboardbylastgames${queryBuilder(params)}`,
    playerDashboardByOpponent: params => `playerdashboardbyopponent${queryBuilder(params)}`,
    playerDashboardByShootingSplits: params => `playerdashboardbyshootingsplits${queryBuilder(params)}`,
    playerDashboardByTeamPerformance: params => `playerdashboardbyteamperformance${queryBuilder(params)}`,
    playerDashboardByYearOverYear: params => `playerdashboardbyyearoveryear${queryBuilder(params)}`,
    playerDashPtPass: params => `playerdashptpass${queryBuilder(params)}`,
    playerDashPtReb: params => `playerdashptreb${queryBuilder(params)}`,
    playerDashPtReboundLogs: params => `playerdashptreboundlogs${queryBuilder(params)}`,
    playerDashPtShotDefend: params => `playerdashptshotdefend${queryBuilder(params)}`,
    playerDashPtShots: params => `playerdashptshots${queryBuilder(params)}`,
    playerGameLog: params => `playergamelog${queryBuilder(params)}`,
    playerProfile: params => `playerprofile${queryBuilder(params)}`,
    playerProfileV2: params => `playerprofilev2${queryBuilder(params)}`,
    playersVsPlayers: params => `playersvsplayers${queryBuilder(params)}`,
    playerVsPlayer: params => `playervsplayer${queryBuilder(params)}`,

    playoffPicture: params => `playoffpicture${queryBuilder(params)}`,
    scoreboard: params => `scoreboard${queryBuilder(params)}`,
    scoreboardV2: params => `scoreboardv2${queryBuilder(params)}`,

    shotChartDetail: params => `shotchartdetail${queryBuilder(params)}`,
    shotChartLineupDetail: params => `shotchartlineupdetail${queryBuilder(params)}`,

    teamDashboardByClutch: params => `teamdashboard${queryBuilder(params)}`,
    teamDashboardByGameSplits: params => `teamdashboardbygamesplits${queryBuilder(params)}`,
    teamDashboardByGeneralSplits: params => `teamdashboardbygeneralsplits${queryBuilder(params)}`,
    teamDashboardByLastGames: params => `teamdashboardbylastgames${queryBuilder(params)}`,
    teamDashboardByOpponent: params => `teamdashboardbyoppenent${queryBuilder(params)}`,
    teamDashboardByShootingSplits: params => `teamdashboardbyshootingsplits${queryBuilder(params)}`,
    teamDashboardByTeamPerformance: params => `teamdashboardbyteamperformance${queryBuilder(params)}`,
    teamDashboardByYearOverYear: params => `teamdashboardbyyearoveryear${queryBuilder(params)}`,
    teamdashLineups: params => `teamdashlineups${queryBuilder(params)}`,
    teamDashPtPass: params => `teamdashptpass${queryBuilder(params)}`,
    teamDashPtReb: params => `teamdashptreb${queryBuilder(params)}`,
    // teamDashPtReboundLogs: params => `teamdashptreboundlogs${queryBuilder(params)}`,
    // teamDashPtShotDefend: params => `teamdashptshotdefend${queryBuilder(params)}`,
    teamDashPtShots: params => `teamdashptshots${queryBuilder(params)}`,
    teamrGameLog: params => `teamgamelog${queryBuilder(params)}`,
    // teamProfile: params => `teamprofile${queryBuilder(params)}`,
    // teamProfileV2: params => `teamprofilev2${queryBuilder(params)}`,
    // playersVsPlayers: params => `playersvsplayers${queryBuilder(params)}`,
    // playerVsPlayer: params => `playervsplayer${queryBuilder(params)}`,
    teamInfoCommon: params => `teaminfocommon${queryBuilder(params)}`,
    teamPlayerDashboard: params => `teamplayerdashboard${queryBuilder(params)}`,
    teamPlayerOnOffDetails: params => `teamplayeronoffdetails${queryBuilder(params)}`,
    teamPlayerOnOffSummary: params => `teamplayeronoffsummary${queryBuilder(params)}`,
    teamVsPlayer: params => `teamvsplayer${queryBuilder(params)}`,
    teamYearByYearStats: params => `teamyearbyyearstats${queryBuilder(params)}`,

    videoStatus: params => `videoStatus${queryBuilder(params)}`
}

/*
    http://stats.nba.com/stats/commonallplayers?LeagueID=00&Season=2017-18&IsOnlyCurrentSeason=1
    http://stats.nba.com/stats/commonteamyears?LeagueID=00
    http://stats.nba.com/stats/commonplayerinfo?PlayerID=203518 - use person_ID
    http://stats.nba.com/stats/commonplayoffseries?LeagueID=00&Season=2016-17
    http://stats.nba.com/stats/commonteamroster?LeagueID=00&TeamID=1610612764&Season=2016-17
    http://stats.nba.com/stats/draftcombinedrillresults?LeagueID=00&SeasonYear=2016-17
    http://stats.nba.com/stats/draftcombinenonstationaryshooting?LeagueID=00&SeasonYear=2016-17
    http://stats.nba.com/stats/draftcombineplayeranthro?LeagueID=00&SeasonYear=2016-17
    http://stats.nba.com/stats/draftcombinespotshooting?LeagueID=00&SeasonYear=2016-17
    http://stats.nba.com/stats/draftcombinestats?LeagueID=00&SeasonYear=2016-17
    http://stats.nba.com/stats/drafthistory?LeagueID=00&Season=2017 - TeamID, RoundNum, RoundPick, OverallPick, TopX, College
    http://stats.nba.com/stats/franchisehistory?LeagueID=00
    http://stats.nba.com/stats/homepageleaders?StatCategory=Points&LeagueID=00&Season=2016-17&SeasonType=Regular%20Season&PlayerOrTeam=Player&GameScope=Season&PlayerScope=Rookies
        - StatCategory: (Points)|(Rebounds)|(Assists)|(Defense)|(Clutch)|(Playmaking)|(Efficiency)|(Fast Break)|(Scoring Breakdown)
        - SeasonType: "Regular Season", "Pre Season", "Playoffs", "All-Star", "All Star", "Preseason"
        - GameScope: (Season)|(Last 10)|(Yesterday)|(Finals)
        - PlayerOrTeam: Player | Team
        - PlayerScope: All Players | Rookies
    http://stats.nba.com/stats/homepagev2?StatType=Traditional&LeagueID=00&Season=2016-17&SeasonType=Regular%20Season&PlayerOrTeam=Player&GameScope=Season&PlayerScope=Rookies
        - StatType: (Traditional)|(Advanced)|(Tracking)
    http://stats.nba.com/stats/leaderstiles?Stat=PTS&LeagueID=00&Season=2016-17&SeasonType=Regular%20Season&PlayerOrTeam=Player&GameScope=Season&PlayerScope=Rookies
        - Stat: (PTS)|(REB)|(AST)|(FG_PCT)|(FT_PCT)|(FG3_PCT)|(STL)|(BLK)
    http://stats.nba.com/stats/leaguedashlineups?Season=2016-17&GroupQuantity=5&SeasonType=Regular%20Season&MeasureType=Base&PerMode=Totals&PlusMinus=N&PaceAdjust=N&Rank=N&Outcome=W&Location=Home&Month=4&SeasonSegment=Pre All-Star&DateFrom=2016-10-10&DateTo=2016-10-30&OpponentTeamID=1610612737&VsConference=East&VsDivision=East&GameSegment=First Half&Period=1&LastNGames=1
        - MeasureType:  (Base)|(Advanced)|(Misc)|(Four Factors)|(Scoring)|(Opponent)|(Usage)|(Defense)
        - PerMode:      (Totals)|(PerGame)|(MinutesPer)|(Per48)|(Per40)|(Per36)|(PerMinute)|(PerPossession)|(PerPlay)|(Per100Possessions)|(Per100Plays)
        - PaceAdjust:   Y | N
        - PlusMinus:    Y | N
        - Rank:         Y | N
        - Location:     (Home) | (Away)
        - SeasonSegment: Post All-Star | Pre All-Star
        - Outcome:      W | L
        - VsDivision:   (Atlantic)|(Central)|(Northwest)|(Pacific)|(Southeast)|(Southwest)|(East)|(West)
        - GameSegment:  (First Half)|(Overtime)|(Second Half)
        - VsConference: East | West
        - DateFrom, DateTo: YYYY-MM-DD
        - Additional: TeamID, Conference, Division, ShotClockRange, PORound, LeagueID
    http://stats.nba.com/stats/leaguedashplayerbiostats?PerMode=Totals&LeagueID=00&Season=2016-17&SeasonType=Regular%20Season
        - Additional: PORound, Outcome, Location, Month, SeasonSegment, DateFrom, DateTo,
            OpponentTeamID, VsConference, VsDivision, TeamID, Conference, Division, GameSegment,
            Period, ShotClockRange, LastNGames, GameScope, PlayerExperience, PlayerPosition, StarterBench,
            DraftYear, DraftPick, College, Country, Height, Weight
    http://stats.nba.com/stats/leaguedashplayerclutch?ClutchTime=Last%201%20Minute&AheadBehind=Behind%20or%20Tied&PointDiff=1&GameScope=Yesterday&PlayerExperience=Rookie&PlayerPosition=C&StarterBench=Starters&MeasureType=Base&PerMode=PerGame&PlusMinus=N&PaceAdjust=N&Rank=N&Season=2016-17&SeasonType=Regular%20Season&Outcome=W&Location=Home&Month=3&SeasonSegment=Post%20All-Star&DateFrom=2017-03-01&DateTo=2017-03-31&OpponentTeamID=1610612737&VsConference=East&VsDivision=East&GameSegment=Second%20Half&Period=10&LastNGames=1
        - ClutchTime: ((Last 5 Minutes)|(Last 4 Minutes)|(Last 3 Minutes)|(Last 2 Minutes)|(Last 1 Minute)|(Last 30 Seconds)|(Last 10 Seconds))
        - AheadBehind: (Ahead or Behind)|(Behind or Tied)|(Ahead or Tied)
        - GameScope: (Yesterday)|(Last 10)
        - PlayerExperience: (Rookie)|(Sophomore)|(Veteran)
        - PlayerPosition: C | PF | SF | SG | PG
        - StarterBench: (Starters)|(Bench)
        - Additional: what missing from additional above
    http://stats.nba.com/stats/leaguedashplayerptshot?LeagueID=00&PerMode=PerGame&Season=2016-17&SeasonType=Regular%20Season
        - Additional: group leaguedash..
    Remaining ../leaguedash... is similar (I guess)

    http://stats.nba.com/stats/leagueleaders?LeagueID=00&PerMode=PerGame&StatCategory=PTS&Season=2016-17&SeasonType=Regular%20Season&Scope=RS
        - Scope: (RS)|(S)|(Rookies)
        - Additional: ActiveFlag
    http://stats.nba.com/stats/playbyplay?GameID=0021600450&StartPeriod=0&EndPeriod=10
        - EndPeriod: 1 - 14

*/
const queryBuilder = (params) =>
    `?${Object.keys(params).map(key => `${key}=${params[key]}`).join('&')}`

export { ENDPOINTS, BASE, CORS_PROXY, FETCH_HDS, HOME, IMAGES }
