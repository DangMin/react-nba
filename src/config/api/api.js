const BASE = "stats.nba.com/stats/"

const paths = {
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

const queryBuilder = (params) =>
    `?${Object.keys(params).map(key => `${key}=${params[key]}`).join('&')}`