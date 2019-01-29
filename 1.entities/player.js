function Player(params, id) {
    
    this.name = params.player.name;
    this.firstName = params.player.first_name;
    this.lastName = params.player.last_name;
    this.height = params.player.height;
    this.weight = params.player.weight;
    this.id = params.player.id;
    this.birthDay = params.player.date_of_birth;
    this.type = params.player.type;
    this.nationality = params.player.nationality;
    this.preferredFoot = params.player.preferred_foot;
    this.allMatchesPlayed = params.statistics.totals.matches_played;
    this.allGoalsScored = params.statistics.totals.goals_scored;
    this.allAssists = params.statistics.totals.assists;
    this.allOwnGoals = params.statistics.totals.own_goals;
    this.lastEvent = params.statistics.totals.last_event_time;
    this.allSubstitutedIn = params.statistics.totals.substituted_in;
    this.allSubstitutedOut = params.statistics.totals.substituted_out;
    this.allYellowCards = params.statistics.totals.yellow_cards;
    this.allYellowRedCards = params.statistics.totals.yellow_red_cards;
    this.allRedCards = params.statistics.totals.red_cards;

    this.season = params.roles;

    if(id === "sr:player:2949"){
        this.img = "teamLarge/1.png";
        this.sign = "teamLarge/1sign.png";
        this.img1 = "teamLarge/goalkeeper-jersey.png"
        this.jerseyNumber = "1";

    } else if(id === "sr:player:70630"){
        this.img = "teamLarge/4.png";
        this.sign = "teamLarge/4sign.png";
        this.img1 = "teamLarge/player-jersey.png"
        this.jerseyNumber = "2";

    } else if(id === "sr:player:91046"){
        this.img = "teamLarge/5.png";
        this.sign = "teamLarge/5sign.png";
        this.img1 = "teamLarge/player-jersey.png"
        this.jerseyNumber = "6";

    } else if(id === "sr:player:32742"){
        this.img = "teamLarge/7.png";
        this.sign = "teamLarge/7sign.png";
        this.img1 = "teamLarge/player-jersey.png"
        this.jerseyNumber = "18";

    } else if(id === "sr:player:13017"){
        this.img = "teamLarge/8.png";
        this.sign = "teamLarge/8sign.png";
        this.img1 = "teamLarge/player-jersey.png"
        this.jerseyNumber = "23";

    } else if(id === "sr:player:385386"){
        this.img = "teamLarge/9.png";
        this.sign = "teamLarge/9sign.png";
        this.img1 = "teamLarge/player-jersey.png"
        this.jerseyNumber = "29";

    } else if(id === "sr:player:107936"){
        this.img = "teamLarge/10.png";
        this.sign = "teamLarge/10sign.png";
        this.img1 = "teamLarge/player-jersey.png"
        this.jerseyNumber = "33";

    } else if(id === "sr:player:187205"){
        this.img = "teamLarge/11.png";
        this.sign = "teamLarge/11sign.png";
        this.img1 = "teamLarge/player-jersey.png"
        this.jerseyNumber = "37";

    } else if(id === "sr:player:158615"){
        this.img = "teamLarge/13.png";
        this.sign = "teamLarge/13sign.png";
        this.img1 = "teamLarge/player-jersey.png"
        this.jerseyNumber = "8";

    } else if(id === "sr:player:44001"){
        this.img = "teamLarge/14.png";
        this.sign = "teamLarge/14sign.png";
        this.img1 = "teamLarge/player-jersey.png"
        this.jerseyNumber = "14";

    } else if(id === "sr:player:97001"){
        this.img = "teamLarge/15.png";
        this.sign = "teamLarge/15sign.png";
        this.img1 = "teamLarge/player-jersey.png"
        this.jerseyNumber = "15";

    } else if(id === "sr:player:19373"){
        this.img = "teamLarge/16.png";
        this.sign = "teamLarge/16sign.png";
        this.img1 = "teamLarge/player-jersey.png"
        this.jerseyNumber = "20";

    } else if(id === "sr:player:38710"){
        this.img = "teamLarge/17.png";
        this.sign = "teamLarge/17sign.png";
        this.img1 = "teamLarge/player-jersey.png"
        this.jerseyNumber = "44";

    } else if(id === "sr:player:108800"){
        this.img = "teamLarge/18.png";
        this.sign = "teamLarge/18sign.png";
        this.img1 = "teamLarge/player-jersey.png"
        this.jerseyNumber = "77";

    } else if(id === "sr:player:233114"){
        this.img = "teamLarge/19.png";
        this.sign = "teamLarge/19sign.png";
        this.img1 = "teamLarge/player-jersey.png"
        this.jerseyNumber = "9";

    } else if(id === "sr:player:925842"){
        this.img = "teamLarge/20.png";
        this.sign = "teamLarge/20sign.png";
        this.img1 = "teamLarge/player-jersey.png"
        this.jerseyNumber = "10";

    } else if(id === "sr:player:317699"){
        this.img = "teamLarge/21.png";
        this.sign = "teamLarge/21sign.png";
        this.img1 = "teamLarge/player-jersey.png"
        this.jerseyNumber = "11";

    } else if(id === "sr:player:235672"){
        this.img = "teamLarge/22.png";
        this.sign = "teamLarge/22sign.png";
        this.img1 = "teamLarge/player-jersey.png"
        this.jerseyNumber = "16";

    } else if(id === "sr:player:27982"){
        this.img = "teamLarge/23.png";
        this.sign = "teamLarge/23sign.png";
        this.img1 = "teamLarge/player-jersey.png"
        this.jerseyNumber = "87";
    }
}

