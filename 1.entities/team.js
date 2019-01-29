function Team(params, season) {
  this.stats =[]
    
  this.goalTimeConceded = params.goaltime_statistics.conceded;
  this.goalTimeScored = params.goaltime_statistics.scored;
  this.playerStats = params.player_statistics;
  this.seasonCoverage = params.team_season_coverage;

  this.form = params.team_statistics.form;

  if(season === "sr:season:33771"){
  params.team_statistics.ball_possession.name = "Ball possession";
  params.team_statistics.cards_given.name = "Cards given";
  params.team_statistics.corner_kicks.name = "Corner kicks";
  params.team_statistics.offsides.name = "Offsides";
  params.team_statistics.shots_off_goal.name = "Shots off goal";
  params.team_statistics.shots_on_goal.name = "Shots on goal";
  params.team_statistics.goal_attempts.name = "Goal attempts";
  params.team_statistics.goals_by_foot.name = "Goals by foot";
  params.team_statistics.goals_by_head.name = "Goals by head";
  params.team_statistics.goals_conceded.name = "Goals conceded";
  params.team_statistics.goals_scored.name = "Goals scored";
  params.team_statistics.free_kicks.name = "Free kicks";
  params.team_statistics.shots_blocked.name = "Shots blocked";

  this.stats.push(params.team_statistics.ball_possession);
  this.stats.push(params.team_statistics.cards_given);
  this.stats.push(params.team_statistics.corner_kicks);
  this.stats.push(params.team_statistics.offsides);
  this.stats.push(params.team_statistics.shots_off_goal);
  this.stats.push(params.team_statistics.shots_on_goal);
  this.stats.push(params.team_statistics.goal_attempts); 
  this.stats.push(params.team_statistics.goals_by_foot);
  this.stats.push(params.team_statistics.goals_by_head);
  this.stats.push(params.team_statistics.goals_conceded);
  this.stats.push(params.team_statistics.goals_scored);
  this.stats.push(params.team_statistics.free_kicks);
  this.stats.push(params.team_statistics.shots_blocked);

} else if(season === "sr:season:8618"){
  params.team_statistics.ball_possession.name = "Ball possession";  
  params.team_statistics.cards_given.name = "Cards given";
  params.team_statistics.corner_kicks.name = "Corner kicks";
  params.team_statistics.free_kicks.name = "Free kicks";
  params.team_statistics.goals_conceded.name = "Goals conceded";
  params.team_statistics.goals_scored.name = "Goals scored";
  params.team_statistics.offsides.name = "Offsides";
  params.team_statistics.shots_blocked.name = "Shots blocked";

  this.stats.push(params.team_statistics.ball_possession);
  this.stats.push(params.team_statistics.cards_given);
  this.stats.push(params.team_statistics.corner_kicks);
  this.stats.push(params.team_statistics.free_kicks);
  this.stats.push(params.team_statistics.goals_conceded);
  this.stats.push(params.team_statistics.goals_scored);
  this.stats.push(params.team_statistics.offsides);
  this.stats.push(params.team_statistics.shots_blocked);
  
} else{
  params.team_statistics.ball_possession.name = "Ball possession";  
  params.team_statistics.cards_given.name = "Cards given";
  params.team_statistics.corner_kicks.name = "Corner kicks";
  params.team_statistics.offsides.name = "Offsides";
  params.team_statistics.shots_blocked.name = "Shots blocked";
  params.team_statistics.shots_off_goal.name = "Shots off goal";
  params.team_statistics.shots_on_bar.name = "Shots on bar";
  params.team_statistics.shots_on_goal.name = "Shots on goal"
  params.team_statistics.shots_on_post.name = "Shots on post";;
  params.team_statistics.free_kicks.name = "Free kicks";
  params.team_statistics.goal_attempts.name = "Goal attempts";
  params.team_statistics.goals_by_foot.name = "Goals by foot";
  params.team_statistics.goals_by_head.name = "Goals by head";
  params.team_statistics.goals_conceded.name = "Goals conceded";
  params.team_statistics.goals_scored.name = "Goals scored";

  this.stats.push(params.team_statistics.ball_possession);
  this.stats.push(params.team_statistics.cards_given);
  this.stats.push(params.team_statistics.corner_kicks);
  this.stats.push(params.team_statistics.offsides);
  this.stats.push(params.team_statistics.shots_blocked);
  this.stats.push(params.team_statistics.shots_off_goal);
  this.stats.push(params.team_statistics.shots_on_bar);
  this.stats.push(params.team_statistics.shots_on_goal);
  this.stats.push(params.team_statistics.shots_on_post);
  this.stats.push(params.team_statistics.free_kicks);
  this.stats.push(params.team_statistics.goal_attempts);
  this.stats.push(params.team_statistics.goals_by_foot);
  this.stats.push(params.team_statistics.goals_by_head);
  this.stats.push(params.team_statistics.goals_conceded);
  this.stats.push(params.team_statistics.goals_scored);
}

  
}