function TeamRepository() {

    this.getTeamStatistics = async function (season) {
        var result = null;

        var key = "h5a88tvkth6ed5ms35davy6e";
       

        try {
            var url = await fetch("https://api.sportradar.us/soccer-t3/eu/en/tournaments/" + season + "/teams/sr:competitor:2697/statistics.json?api_key=" + key); // za statistika
            var response = await url;
            result = await response.json();
            console.log("team repo:", result)

            return new Team(result, season);

        } catch (error) {
            return result;
        }
    }

    this.getTable = async function (season) {
        var result = null;

        var key = "h5a88tvkth6ed5ms35davy6e";
       

        try {
            var url = await fetch("https://api.sportradar.us/soccer-t3/eu/en/tournaments/" + season + "/standings.json?api_key=" + key);  // za tabela za sezoni
            var response = await url;
            result = await response.json();

            // console.log("team repo:", result.season.name)

            return new Table(result);

        } catch (error) {
            return result;
        }
    }
}

