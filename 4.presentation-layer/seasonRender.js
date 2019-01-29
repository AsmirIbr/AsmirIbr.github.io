function RenderSeason() {
    this.seasonPageData = new PageLogic();

    this.seasonRender = async function (season) {
        var table = await this.seasonPageData.getTableData(season);

        var $pageWrapper = $("#page-wrapper").addClass("season-pageWrapper").removeClass("team-pageWrapper").removeClass("news-pageWrapper");;

        $("<div>").appendTo($pageWrapper).addClass("season-img");
        var $allSeasons = $("<div>").appendTo($pageWrapper).addClass("allSeasons");


        var $selectSeason = $("<div>").appendTo($allSeasons).addClass("select-pre-season")
        $("<select>").addClass("select-season").attr("id", "select-season").appendTo($selectSeason)
            .append($("<option>").attr("value", "sr:season:55737").attr("disabled", "disabled").text("Select a season"))
            .append($("<option>").attr("value", "sr:season:55737").attr("selected", "true").text("Seria A 18/19"))
            .append($("<option>").attr("value", "sr:season:42720").text("Seria A 17/18"))
            .append($("<option>").attr("value", "sr:season:33771").text("Seria A 16/17"))
            .append($("<option>").attr("value", "sr:season:10900").text("Seria A 15/16"))
            .append($("<option>").attr("value", "sr:season:8618").text("Seria A 14/15"));

        $("<input>").appendTo($selectSeason).addClass("submit-season").attr("id", "submit-button").attr("type", "submit")
            .on("click", async (event) => {
                var thatSeason = $("#select-season").val();

                $($pageWrapper).empty();

                this.seasonRender(thatSeason);

            });



        var $thatSeason = $("<div>").appendTo($allSeasons).addClass("that-season");
        $("<h3>").appendTo($thatSeason).text(table.currentSeason);
        $("<h5>").appendTo($thatSeason).text("Season start date: " + moment(table.seasonStartDate).format('LL') + " / Season end date: " + moment(table.seasonEndDate).format('LL'));

        var $seasonNav = $("<div>").appendTo($allSeasons).addClass("season-nav");
        $("<span>").appendTo($seasonNav).addClass("season-total").attr("id", "seasonTotal").text(table.standingsTotalName);
        $("<span>").appendTo($seasonNav).addClass("season-total").attr("id", "seasonHome").text(table.standingsHomeName);
        $("<span>").appendTo($seasonNav).addClass("season-total").attr("id", "seasonAway").text(table.standingsAwayName);

        var $allSeasonsImg = $("<div>").appendTo($allSeasons).addClass("allSeasons-img")

        $("<tr>").appendTo($allSeasonsImg).addClass("tr-header")
            .append($("<th>").text("#").append($("<h5>").text("Rank").addClass("tooltip-outcome")))
            .append($("<th>").text("Team").append($("<h5>")))
            .append($("<th>").text("P").append($("<h5>").text("Played").addClass("tooltip-outcome")))
            .append($("<th>").text("W").append($("<h5>").text("Win").addClass("tooltip-outcome")))
            .append($("<th>").text("D").append($("<h5>").text("Draw").addClass("tooltip-outcome")))
            .append($("<th>").text("L").append($("<h5>").text("Loss").addClass("tooltip-outcome")))
            .append($("<th>").text("F").append($("<h5>").text("Goals for").addClass("tooltip-outcome")))
            .append($("<th>").text("A").append($("<h5>").text("Goals against").addClass("tooltip-outcome")))
            .append($("<th>").text("GD").append($("<h5>").text("Goal difference").addClass("tooltip-outcome")))
            .append($("<th>").text("P").append($("<h5>").text("Points").addClass("tooltip-outcome")));

        for (var i = 0; i < table.teamStandingsTotal.length; i++) {
            $("<tr>").appendTo($allSeasonsImg).addClass("tr-line").addClass("isEven" + i)
                .append($("<td>").text(table.teamStandingsTotal[i].rank))
                .append($("<td>").text(table.teamStandingsTotal[i].team.name))
                .append($("<td>").text(table.teamStandingsTotal[i].played))
                .append($("<td>").text(table.teamStandingsTotal[i].win))
                .append($("<td>").text(table.teamStandingsTotal[i].draw))
                .append($("<td>").text(table.teamStandingsTotal[i].loss))
                .append($("<td>").text(table.teamStandingsTotal[i].goals_for))
                .append($("<td>").text(table.teamStandingsTotal[i].goals_against))
                .append($("<td>").text(table.teamStandingsTotal[i].goal_diff))
                .append($("<td>").text(table.teamStandingsTotal[i].points));

            if (i % 2 != 0) {
                $(".isEven" + i).css("backgroundColor", "rgba(128, 128, 128, 0.536)")
            }

            if (table.teamStandingsTotal[i].current_outcome === "Champions League") {
                $(".isEven" + i).find("td").first().css("backgroundColor", "forestgreen")
                    .append($("<h5>").text(table.teamStandingsTotal[i].current_outcome).addClass("tooltip-outcome"))
            }

            if (table.teamStandingsTotal[i].current_outcome === "Champions League Qualification") {
                $(".isEven" + i).find("td").first().css("backgroundColor", "seagreen")
                    .append($("<h5>").text(table.teamStandingsTotal[i].current_outcome).addClass("tooltip-outcome"))
            }

            if (table.teamStandingsTotal[i].current_outcome === "Europa League") {
                $(".isEven" + i).find("td").first().css("backgroundColor", "midnightblue")
                    .append($("<h5>").text(table.teamStandingsTotal[i].current_outcome).addClass("tooltip-outcome"))
            }

            if (table.teamStandingsTotal[i].current_outcome === "Europa League Qualification") {
                $(".isEven" + i).find("td").first().css("backgroundColor", "royalblue")
                    .append($("<h5>").text(table.teamStandingsTotal[i].current_outcome).addClass("tooltip-outcome"))
            }

            if (table.teamStandingsTotal[i].current_outcome === "Relegation") {
                $(".isEven" + i).find("td").first().css("backgroundColor", "red")
                    .append($("<h5>").text(table.teamStandingsTotal[i].current_outcome).addClass("tooltip-outcome"))
            }

            if (table.teamStandingsTotal[i].current_outcome === "UEFA Cup") {
                $(".isEven" + i).find("td").first().css("backgroundColor", "orange")
                    .append($("<h5>").text(table.teamStandingsTotal[i].current_outcome).addClass("tooltip-outcome"))
            }
        }
        $("<h6>").appendTo($allSeasons).addClass("season-rule").text(table.standingsRule);

        $("#seasonTotal").on("click", (event) => {
            $(".tr-line").remove();
            $(".season-rule").remove();

            var $allSeasonsImg = $("<div>").appendTo($allSeasons).addClass("allSeasons-img")

            for (var i = 0; i < table.teamStandingsTotal.length; i++) {
                $("<tr>").appendTo($allSeasonsImg).addClass("tr-line").addClass("isEven" + i)
                    .append($("<td>").text(table.teamStandingsTotal[i].rank))
                    .append($("<td>").text(table.teamStandingsTotal[i].team.name))
                    .append($("<td>").text(table.teamStandingsTotal[i].played))
                    .append($("<td>").text(table.teamStandingsTotal[i].win))
                    .append($("<td>").text(table.teamStandingsTotal[i].draw))
                    .append($("<td>").text(table.teamStandingsTotal[i].loss))
                    .append($("<td>").text(table.teamStandingsTotal[i].goals_for))
                    .append($("<td>").text(table.teamStandingsTotal[i].goals_against))
                    .append($("<td>").text(table.teamStandingsTotal[i].goal_diff))
                    .append($("<td>").text(table.teamStandingsTotal[i].points));

                if (i % 2 != 0) {
                    $(".isEven" + i).css("backgroundColor", "rgba(128, 128, 128, 0.536)");
                }

                if (table.teamStandingsTotal[i].current_outcome === "Champions League") {
                    $(".isEven" + i).find("td").first().css("backgroundColor", "forestgreen")
                        .append($("<h5>").text(table.teamStandingsTotal[i].current_outcome).addClass("tooltip-outcome"))
                }

                if (table.teamStandingsTotal[i].current_outcome === "Champions League Qualification") {
                    $(".isEven" + i).find("td").first().css("backgroundColor", "seagreen")
                        .append($("<h5>").text(table.teamStandingsTotal[i].current_outcome).addClass("tooltip-outcome"))
                }

                if (table.teamStandingsTotal[i].current_outcome === "Europa League") {
                    $(".isEven" + i).find("td").first().css("backgroundColor", "midnightblue")
                        .append($("<h5>").text(table.teamStandingsTotal[i].current_outcome).addClass("tooltip-outcome"))
                }

                if (table.teamStandingsTotal[i].current_outcome === "Europa League Qualification") {
                    $(".isEven" + i).find("td").first().css("backgroundColor", "royalblue")
                        .append($("<h5>").text(table.teamStandingsTotal[i].current_outcome).addClass("tooltip-outcome"))
                }

                if (table.teamStandingsTotal[i].current_outcome === "Relegation") {
                    $(".isEven" + i).find("td").first().css("backgroundColor", "red")
                        .append($("<h5>").text(table.teamStandingsTotal[i].current_outcome).addClass("tooltip-outcome"))
                }

                if (table.teamStandingsTotal[i].current_outcome === "UEFA Cup") {
                    $(".isEven" + i).find("td").first().css("backgroundColor", "orange")
                        .append($("<h5>").text(table.teamStandingsTotal[i].current_outcome).addClass("tooltip-outcome"))
                }
            }
            $("<h6>").appendTo($allSeasons).addClass("season-rule").text(table.standingsRule);
        })

        $("#seasonHome").on("click", async (event) => {
            $(".tr-line").remove();
            $(".season-rule").remove();

            var $allSeasonsImg = $("<div>").appendTo($allSeasons).addClass("allSeasons-img")

            for (var i = 0; i < table.teamStandingsHome.length; i++) {
                $("<tr>").appendTo($allSeasonsImg).addClass("tr-line").addClass("isEven" + i)
                    .append($("<td>").text(table.teamStandingsHome[i].rank))
                    .append($("<td>").text(table.teamStandingsHome[i].team.name))
                    .append($("<td>").text(table.teamStandingsHome[i].played))
                    .append($("<td>").text(table.teamStandingsHome[i].win))
                    .append($("<td>").text(table.teamStandingsHome[i].draw))
                    .append($("<td>").text(table.teamStandingsHome[i].loss))
                    .append($("<td>").text(table.teamStandingsHome[i].goals_for))
                    .append($("<td>").text(table.teamStandingsHome[i].goals_against))
                    .append($("<td>").text(table.teamStandingsHome[i].goal_diff))
                    .append($("<td>").text(table.teamStandingsHome[i].points));

                if (i % 2 != 0) {
                    $(".isEven" + i).css("backgroundColor", "rgba(128, 128, 128, 0.536)")
                }
            }
            $("<h6>").appendTo($allSeasons).addClass("season-rule").text(table.standingsRule);
        })

        $("#seasonAway").on("click", (event) => {
            $(".tr-line").remove();
            $(".season-rule").remove();

            var $allSeasonsImg = $("<div>").appendTo($allSeasons).addClass("allSeasons-img")

            for (var i = 0; i < table.teamStandingsAway.length; i++) {
                $("<tr>").appendTo($allSeasonsImg).addClass("tr-line").addClass("isEven" + i)
                    .append($("<td>").text(table.teamStandingsAway[i].rank))
                    .append($("<td>").text(table.teamStandingsAway[i].team.name))
                    .append($("<td>").text(table.teamStandingsAway[i].played))
                    .append($("<td>").text(table.teamStandingsAway[i].win))
                    .append($("<td>").text(table.teamStandingsAway[i].draw))
                    .append($("<td>").text(table.teamStandingsAway[i].loss))
                    .append($("<td>").text(table.teamStandingsAway[i].goals_for))
                    .append($("<td>").text(table.teamStandingsAway[i].goals_against))
                    .append($("<td>").text(table.teamStandingsAway[i].goal_diff))
                    .append($("<td>").text(table.teamStandingsAway[i].points));

                if (i % 2 != 0) {
                    $(".isEven" + i).css("backgroundColor", "rgba(128, 128, 128, 0.536)")
                }
            }
            $("<h6>").appendTo($allSeasons).addClass("season-rule").text(table.standingsRule);
        })

        var $moreStatistics = $("<div>").appendTo($pageWrapper).addClass("more-statistics-loader");
        $("<div>").appendTo($moreStatistics).addClass("more-statistics-loader")
            .append($("<h3>").text("Load for more statistics"))
            .append($("<img>").attr("src", "loader/loaderTeam.png").addClass("loader-season"));

        // STATISTICS

        $(".loader-season").on("click", async (event) => {
            $(".loader-season").addClass("loader-season-rotate");

            var statistics = await this.seasonPageData.getTeamStatistics(season);
            
            $(".loader-season").removeClass("loader-season-rotate")

            $(".more-statistics").remove();

            $(".statistics-div-img").remove();

            var $statisticsDiv = $("<div>").appendTo($pageWrapper).addClass("statistics-div-img").css("paddingTop", "5px");

            var $statisticsDivStats = $("<div>").appendTo($statisticsDiv).addClass("statistics-div-img");

            $("<tr>").appendTo($statisticsDivStats).css("backgroundColor", "rgba(128, 128, 128, 0.337)")
                .append($("<th>").text("#"))
                .append($("<th>").text("Total"))
                .append($("<th>").text("Matches played"))

            for (var j = 0; j < statistics.stats.length; j++) {
                $("<tr>").appendTo($statisticsDivStats).addClass("isEven" + j)
                    .append($("<td>").text(statistics.stats[j].name))
                    .append($("<td>").text(statistics.stats[j].total))
                    .append($("<td>").text(statistics.stats[j].matches));

                    if (j % 2 != 0) {
                        $(".isEven" + j).css("backgroundColor", "rgba(128, 128, 128, 0.336)")
                    }
            }


            var $statisticsDivConceded = $("<div>").appendTo($statisticsDiv).addClass("statistics-div-img");
            $("<tr>").appendTo($statisticsDivConceded).css("backgroundColor", "(128, 128, 128, 0.336)")
                .append($("<th>").text("Goal time conceded"))
                .append($("<th>").text("Total: " + statistics.goalTimeConceded.total + " matches"));

            $("<tr>").appendTo($statisticsDivConceded)
                .append($("<th>").text("Period").css("backgroundColor", "rgba(128, 128, 128, 0.336)"))
                .append($("<th>").text("Total goals").css("backgroundColor", "rgba(128, 128, 128, 0.336)"))

            for (var k = 0; k < statistics.goalTimeConceded.period.length; k++) {
                $("<tr>").appendTo($statisticsDivConceded).addClass("isEven" + k)
                    .append($("<td>").text(statistics.goalTimeConceded.period[k].name))
                    .append($("<td>").text(statistics.goalTimeConceded.period[k].value))

                    if (k % 2 != 0) {
                        $(".isEven" + k).css("backgroundColor", "rgba(128, 128, 128, 0.336)")
                    }
            }


            var $statisticsDivScored = $("<div>").appendTo($statisticsDiv).addClass("statistics-div-img");
            $("<tr>").appendTo($statisticsDivScored).css("backgroundColor", "(128, 128, 128, 0.336)")
                .append($("<th>").text("Goal time scored"))
                .append($("<th>").text("Total: " + statistics.goalTimeScored.total + " matches"));

            $("<tr>").appendTo($statisticsDivScored)
                .append($("<th>").text("Period").css("backgroundColor", "rgba(128, 128, 128, 0.336)"))
                .append($("<th>").text("Total goals").css("backgroundColor", "rgba(128, 128, 128, 0.336)"))

            for (var l = 0; l < statistics.goalTimeScored.period.length; l++) {
                $("<tr>").appendTo($statisticsDivScored).addClass("isEven" + l)
                    .append($("<td>").text(statistics.goalTimeScored.period[l].name))
                    .append($("<td>").text(statistics.goalTimeScored.period[l].value))

                    if (l % 2 != 0) {
                        $(".isEven" + l).css("backgrondColor", "rgba(128, 128, 128, 0.336)")
                    }
            }


            var $statisticsDivPlayers = $("<div>").appendTo($statisticsDiv).addClass("statistics-div-img");

            $("<tr>").appendTo($statisticsDivPlayers).css("backgroundColor", "rgba(128, 128, 128, 0.336)")
                .append($("<th>").text("Player name"))
                .append($("<th>").text("Matches played"))

            for (var m = 0; m < statistics.playerStats.length; m++) {
                $("<tr>").appendTo($statisticsDivPlayers).addClass("isEven" + m)
                    .append($("<td>").text(statistics.playerStats[m].name))
                    .append($("<td>").text(statistics.playerStats[m].matches_played))

                    if (m % 2 != 0) {
                        $(".isEven" + m).css("backgroundColor", "rgba(128, 128, 128, 0.336)")
                    }
            }



        })




    }

}