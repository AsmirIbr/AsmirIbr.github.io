function Table(params){

  this.currentSeason = params.season.name;
  this.seasonStartDate = params.season.start_date;
  this.seasonEndDate = params.season.end_date;

  this.standingsTotalName = params.standings[0].type;
  this.teamStandingsTotal = params.standings[0].groups[0].team_standings;
  
  this.standingsHomeName = params.standings[1].type;
  this.teamStandingsHome = params.standings[1].groups[0].team_standings;

  this.standingsAwayName = params.standings[2].type;
  this.teamStandingsAway = params.standings[2].groups[0].team_standings;

  this.standingsRule = params.standings[0].tie_break_rule;
}