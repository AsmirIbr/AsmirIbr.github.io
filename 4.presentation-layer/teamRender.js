function RenderTeam() {
    this.teamPageData = new PageLogic();

    this.teamRender = async function () {

        var $pageWrapper = $("#page-wrapper").addClass("team-pageWrapper").removeClass("news-pageWrapper");;

        $("<div>").appendTo($pageWrapper).addClass("team-img");
        var $allTeam = $("<div>").appendTo($pageWrapper).addClass("allTeam");

        var $goalkeepersDiv = $("<div>").appendTo($allTeam)
        $("<h2>").appendTo($goalkeepersDiv).text("Our Goalkeepers").addClass("our-player");
        var $goalkeepers = $("<div>").addClass("goalkeepers").appendTo($goalkeepersDiv);

        for (var i = 0; i < 3; i++) {

            var $goalkeeper = $("<div>").addClass("player").appendTo($goalkeepers);
            $("<div>").addClass("popUpTeam").appendTo($goalkeeper).append($("<i>").addClass("fas").addClass("fa-clone"));
            var $goalkeeperImg = $("<img>").appendTo($goalkeeper).addClass("player-img");
            var $goalkeeperSpan = $("<span>").appendTo($goalkeeper).addClass("player-span");
            var $goalkeeperName = $("<div>").appendTo($goalkeeper).addClass("player-name");

            if (i === 0) {
                $($goalkeeper).attr("id", "sr:player:2949");
                $($goalkeeperImg).attr("src", "teamSmall/1.jpg")
                $($goalkeeperSpan).text("1");
                $("<h4>").text("Samir").appendTo($goalkeeperName);
                $("<h3>").text("Handanovic").appendTo($goalkeeperName);

            } else if (i === 1) {
                $($goalkeeper).attr("id", "sr:player:2949");
                $($goalkeeperImg).attr("src", "teamSmall/2.jpg")
                $($goalkeeperSpan).text("27");
                $("<h4>").text("Daniele").appendTo($goalkeeperName);
                $("<h3>").text("Padelli").appendTo($goalkeeperName);

            } else {
                $($goalkeeper).attr("id", "sr:player:2949");
                $($goalkeeperImg).attr("src", "teamSmall/3.jpg");
                $($goalkeeperSpan).text("46");
                $("<h4>").text("Tommaso").appendTo($goalkeeperName);
                $("<h3>").text("Berni").appendTo($goalkeeperName);
            }
        }

        var $defendersDiv = $("<div>").appendTo($allTeam)
        $("<h2>").appendTo($defendersDiv).text("Our Defenders").addClass("our-player");
        var $defenders = $("<div>").addClass("defenders").appendTo($defendersDiv);

        for (var i = 0; i < 8; i++) {

            var $defender = $("<div>").addClass("player").appendTo($defenders);
            $("<div>").addClass("popUpTeam").appendTo($defender).append($("<i>").addClass("fas").addClass("fa-clone"));
            var $defenderImg = $("<img>").appendTo($defender).addClass("player-img");
            var $defenderSpan = $("<span>").appendTo($defender).addClass("player-span");
            var $defenderName = $("<div>").appendTo($defender).addClass("player-name");

            if (i === 0) {
                $($defender).attr("id", "sr:player:70630");
                $($defenderImg).attr("src", "teamSmall/4.jpg")
                $($defenderSpan).text("2");
                $("<h4>").text("Sime").appendTo($defenderName);
                $("<h3>").text("Vrsaljko").appendTo($defenderName);

            } else if (i === 1) {
                $($defender).attr("id", "sr:player:91046");
                $($defenderImg).attr("src", "teamSmall/5.jpg")
                $($defenderSpan).text("6");
                $("<h4>").text("Stefan").appendTo($defenderName);
                $("<h3>").text("de Vrij").appendTo($defenderName);

            } else if (i === 2) {
                $($defender).attr("id", "sr:player:91046");
                $($defenderImg).attr("src", "teamSmall/6.jpg")
                $($defenderSpan).text("13");
                $("<h4>").text("Andrea").appendTo($defenderName);
                $("<h3>").text("Ranocchia").appendTo($defenderName);

            } else if (i === 3) {
                $($defender).attr("id", "sr:player:32742");
                $($defenderImg).attr("src", "teamSmall/7.jpg")
                $($defenderSpan).text("18");
                $("<h4>").text("Kwadwo").appendTo($defenderName);
                $("<h3>").text("Asamoah").appendTo($defenderName);

            } else if (i === 4) {
                $($defender).attr("id", "sr:player:13017");
                $($defenderImg).attr("src", "teamSmall/8.jpg")
                $($defenderSpan).text("23");
                $("<h4>").text("João").appendTo($defenderName);
                $("<h3>").text("Miranda").appendTo($defenderName);

            } else if (i === 5) {
                $($defender).attr("id", "sr:player:385386");
                $($defenderImg).attr("src", "teamSmall/9.jpg")
                $($defenderSpan).text("29");
                $("<h4>").text("Estevão").appendTo($defenderName);
                $("<h3>").text("Dalbert").appendTo($defenderName);

            } else if (i === 6) {
                $($defender).attr("id", "sr:player:107936");
                $($defenderImg).attr("src", "teamSmall/10.jpg")
                $($defenderSpan).text("33");
                $("<h4>").text("Danilo").appendTo($defenderName);
                $("<h3>").text("D'Ambrosio").appendTo($defenderName);

            } else {
                $($defender).attr("id", "sr:player:187205");
                $($defenderImg).attr("src", "teamSmall/11.jpg")
                $($defenderSpan).text("37");
                $("<h4>").text("Milan").appendTo($defenderName);
                $("<h3>").text("Skriniar").appendTo($defenderName);
            }
        }


        var $midfieldersDiv = $("<div>").appendTo($allTeam)
        $("<h2>").appendTo($midfieldersDiv).text("Our Midfielders").addClass("our-player");
        var $midfielders = $("<div>").addClass("midfielders").appendTo($midfieldersDiv);

        for (var i = 0; i < 6; i++) {

            var $midfielder = $("<div>").addClass("player").appendTo($midfielders)
            $("<div>").addClass("popUpTeam").appendTo($midfielder).append($("<i>").addClass("fas").addClass("fa-clone"));
            var $midfielderImg = $("<img>").appendTo($midfielder).addClass("player-img");
            var $midfielderspan = $("<span>").appendTo($midfielder).addClass("player-span");
            var $midfielderName = $("<div>").appendTo($midfielder).addClass("player-name");

            if (i === 0) {
                $($midfielder).attr("id", "sr:player:158615");
                $($midfielderImg).attr("src", "teamSmall/13.jpg")
                $($midfielderspan).text("8");
                $("<h4>").text("Matias").appendTo($midfielderName);
                $("<h3>").text("Vecino").appendTo($midfielderName);

            } else if (i === 1) {
                $($midfielder).attr("id", "sr:player:44001");
                $($midfielderImg).attr("src", "teamSmall/14.jpg")
                $($midfielderspan).text("14");
                $("<h4>").text("Radja").appendTo($midfielderName);
                $("<h3>").text("Nainggolan").appendTo($midfielderName);

            } else if (i === 2) {
                $($midfielder).attr("id", "sr:player:97001");
                $($midfielderImg).attr("src", "teamSmall/15.jpg")
                $($midfielderspan).text("15");
                $($midfielder).css("marginRight", "250px");
                $("<h4>").text("").appendTo($midfielderName);
                $("<h3>").text("Joao Mario").appendTo($midfielderName);

            } else if (i === 3) {
                $($midfielder).attr("id", "sr:player:19373");
                $($midfielderImg).attr("src", "teamSmall/16.jpg")
                $($midfielderspan).text("20");
                $("<h4>").text("Borja").appendTo($midfielderName);
                $("<h3>").text("Valero").appendTo($midfielderName);

            } else if (i === 4) {
                $($midfielder).attr("id", "sr:player:38710");
                $($midfielderImg).attr("src", "teamSmall/17.jpg")
                $($midfielderspan).text("44");
                $("<h4>").text("Ivan").appendTo($midfielderName);
                $("<h3>").text("Perisic").appendTo($midfielderName);

            } else {
                $($midfielder).attr("id", "sr:player:108800");
                $($midfielderImg).attr("src", "teamSmall/18.jpg")
                $($midfielderspan).text("77");
                $("<h4>").text("Marcelo").appendTo($midfielderName);
                $("<h3>").text("Brozovic").appendTo($midfielderName);

            }
        }


        var $strikersDiv = $("<div>").appendTo($allTeam)
        $("<h2>").appendTo($strikersDiv).text("Our Strikers").addClass("our-player");
        var $strikers = $("<div>").addClass("strikers").appendTo($strikersDiv);

        for (var i = 0; i < 5; i++) {

            var $striker = $("<div>").addClass("player").appendTo($strikers)
            $("<div>").addClass("popUpTeam").appendTo($striker).append($("<i>").addClass("fas").addClass("fa-clone"));
            var $strikerImg = $("<img>").appendTo($striker).addClass("player-img");
            var $strikerspan = $("<span>").appendTo($striker).addClass("player-span");
            var $strikerName = $("<div>").appendTo($striker).addClass("player-name")

            if (i === 0) {
                $($striker).attr("id", "sr:player:233114");
                $($strikerImg).attr("src", "teamSmall/19.jpg")
                $($strikerspan).text("9");
                $($strikerName).css("backgroundColor", "rgb(163,146,97)");
                $("<h4>").text("Mauro").appendTo($strikerName);
                $("<h3>").text("Icardi ©").appendTo($strikerName);

            } else if (i === 1) {
                $($striker).attr("id", "sr:player:925842");
                $($strikerImg).attr("src", "teamSmall/20.jpg")
                $($strikerspan).text("10");
                $($striker).css("borderColor", "rgb(18,102,171)");
                $("<h4>").text("Lautaro").appendTo($strikerName);
                $("<h3>").text("Martínez").appendTo($strikerName);

            } else if (i === 2) {
                $($striker).attr("id", "sr:player:317699");
                $($strikerImg).attr("src", "teamSmall/21.jpg")
                $($strikerspan).text("11");
                $("<h4>").text("Keita").appendTo($strikerName);
                $("<h3>").text("Balde").appendTo($strikerName);

            } else if (i === 3) {
                $($striker).attr("id", "sr:player:235672");
                $($strikerImg).attr("src", "teamSmall/22.jpg")
                $($strikerspan).text("16");
                $($striker).css("borderColor", "rgb(18,102,171)");
                $("<h4>").text("Matteo").appendTo($strikerName);
                $("<h3>").text("Politano").appendTo($strikerName);

            } else {
                $($striker).attr("id", "sr:player:27982");
                $($strikerImg).attr("src", "teamSmall/23.jpg")
                $($strikerspan).text("87");
                $("<h4>").text("Antonio").appendTo($strikerName);
                $("<h3>").text("Candreva").appendTo($strikerName);

            }
        }

        var $coachDiv = $("<div>").appendTo($allTeam)
        $("<h2>").appendTo($coachDiv).text("Our Coach").addClass("our-player");
        var $coach = $("<div>").addClass("coach").appendTo($coachDiv);
        $("<img>").appendTo($coach).attr("src", "teamLarge/coach.png");
        $("<div>").appendTo($coach)
            .append($("<h3>").text("LUCIANO"))
            .append($("<h2>").text("SPALLETTI"))
            .append($("<h5>").text("Country: Italy"))
            .append($("<h5>").text("Born in Certaldo, on 07 March 1959"));


        $(".popUpTeam").mouseenter((event) => {
            $(event.target).animate({ opacity: '1' }, "slow").find(".fa-clone").on("click", async (event) => {
                $(".allTeam").hide("slow");
                var $id = $(event.target).parent().parent().attr('id');
                var player = await this.teamPageData.getPlayerData($id);


                var $popUpPlayer = $("<div>").attr("id", "blabla").addClass("popUpPlayer").appendTo("#page-wrapper").css("display", "none");

                $("#page-wrapper").find("#blabla").css("display", "grid");;

                // this.renderAndGetPlayer = async function (id) {


                $(".team-pageWrapper").css("backgroundColor", "rgba(163, 146, 97)");

                var $teamTopDiv = $("<div>").appendTo($popUpPlayer).addClass("team-top-div");
                var $teamTopLeft = $("<div>").appendTo($teamTopDiv).addClass("team-top-left");
                var $teamTopImg = $("<img>").appendTo($teamTopLeft).addClass("team-top-left-img");
                var $teamTopRight = $("<div>").appendTo($teamTopDiv).addClass("team-top-right");

                $("<div>").appendTo($teamTopDiv).addClass("team-popup-back").append($("<i>").attr("id", "team-popup-back").addClass("fas").addClass("fa-angle-left").on("click", (event) => {
                    $(".popUpPlayer").fadeOut("slow");
                    ($pageWrapper).empty()
                    this.teamRender();
                })).append($("<h5>").text(" Team ").css("padding", "0 15px").css("margin", "0")).append($("<h4>").text(" / " + player.name).css("margin", "0"));


                $($teamTopImg).attr("src", player.img);
                var $jerseyDivPrime = $("<div>").appendTo($teamTopRight).addClass("jersey-div-prime");
                var $jerseyDiv = $("<div>").appendTo($jerseyDivPrime).addClass("jersey-div");
                $("<img>").appendTo($jerseyDiv).addClass("jersey-img").attr("src", player.img1);
                $("<h6>").appendTo($jerseyDiv).addClass("jersey-num").text(player.jerseyNumber);
                $("<img>").appendTo($jerseyDiv).addClass("sign-img").attr("src", player.sign);
                $("<h2>").appendTo($teamTopRight).text(player.firstName);
                $("<h1>").appendTo($teamTopRight).text(player.lastName);
                $("<h3>").appendTo($teamTopRight).text(player.type);
                $("<h4>").appendTo($teamTopRight).text("Country: " + player.nationality);
                $("<h4>").appendTo($teamTopRight).text("Born: " + moment(player.birthDay).format('LL'));
                $("<h5>").appendTo($teamTopRight).text("Height: " + player.height);
                $("<h5>").appendTo($teamTopRight).text("Weight: " + player.weight);
                $("<h5>").appendTo($teamTopRight).text("Preferred foot: " + player.preferredFoot);

                var $playerStatistics = $("<div>").appendTo($popUpPlayer).addClass("player-statistics");
                $("<div>").appendTo($playerStatistics).addClass("player-statistics-first").text(player.lastName + " total statistics, last event on " + moment(player.lastEvent).format('LL'));
                $("<div>").appendTo($playerStatistics).addClass("player-statistics-second")
                    .append($("<div>").addClass("player-statistics-second-div").text("Substituted in: " + player.allSubstitutedIn).css("borderRight", "1px solid rgba(255, 255, 255, 0.952)"))
                    .append($("<div>").addClass("player-statistics-second-div").text("Substituted out: " + player.allSubstitutedOut));
                $("<div>").appendTo($playerStatistics).addClass("player-statistics-third")
                    .append($("<div>").addClass("player-statistics-third-div").text("All yellow cards: " + player.allYellowCards))
                    .append($("<div>").addClass("player-statistics-third-div").text("All yellow-red cards: " + player.allYellowRedCards).css("borderLeft", "1px solid rgba(255, 255, 255, 0.952)").css("borderRight", "1px solid rgba(255, 255, 255, 0.952)"))
                    .append($("<div>").addClass("player-statistics-third-div").text("All red cards: " + player.allRedCards));
                $("<div>").appendTo($playerStatistics).addClass("player-statistics-fourth")
                    .append($("<div>").addClass("player-statistics-fourth-div").text("All matches played: " + player.allMatchesPlayed))
                    .append($("<div>").addClass("player-statistics-fourth-div").text("All goals scored: " + player.allGoalsScored).css("borderLeft", "1px solid rgba(255, 255, 255, 0.952)").css("borderRight", "1px solid rgba(255, 255, 255, 0.952)"))
                    .append($("<div>").addClass("player-statistics-fourth-div").text("All assists: " + player.allAssists).css("borderRight", "1px solid rgba(255, 255, 255, 0.952)"))
                    .append($("<div>").addClass("player-statistics-fourth-div").text("All own goals: " + player.allOwnGoals));

                var $seasonStatistics = $("<div>").appendTo($popUpPlayer).addClass("season-statistics");
                $("<div>").appendTo($seasonStatistics).addClass("season-statistics-first").text("player stats");
                $("<div>").appendTo($seasonStatistics).addClass("season-statistics-second")
                    .append($("<div>").addClass("player-stats").text("Active"))
                    .append($("<div>").addClass("player-stats").text("Type"))
                    .append($("<div>").addClass("player-stats").text("Club"))
                    .append($("<div>").addClass("player-stats").text("Team country"))
                    .append($("<div>").addClass("player-stats").text("Jersey number"))
                    .append($("<div>").addClass("player-stats").text("Start date"))
                    .append($("<div>").addClass("player-stats").text("End date"));


                for (var k = 0; k < player.season.length; k++) {

                    $("<div>").appendTo($seasonStatistics).addClass("season-statistics-second")
                        .append($("<div>").addClass("player-stats").append($("<span>").addClass("active-player").addClass("isTrue" + k)))
                        .append($("<div>").addClass("player-stats").text(player.season[k].type))
                        .append($("<div>").addClass("player-stats").text(player.season[k].team.name))
                        .append($("<div>").addClass("player-stats").text(player.season[k].team.country))
                        .append($("<div>").addClass("player-stats").text(player.season[k].jersey_number))
                        .append($("<div>").addClass("player-stats").text(player.season[k].start_date))
                        .append($("<div>").addClass("player-stats").text(player.season[k].end_date));
                    if (player.season[k].active === "true") {
                        $(".isTrue" + k).css("backgroundColor", "green")
                    }

                };
            })
        });

        $(".popUpTeam").mouseleave((event) => {
            $(event.target).animate({ opacity: '0' }, "slow");
        });


    }


}