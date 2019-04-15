function TeamRepository() {

    this.getTeamStatistics = async function (season) {
        var result = null;
       
        try {
            var url = await fetch(`https://18.217.224.98:3000/teamstats/${season}`); // za statistika
            var response = await url;
            result = await response.json();
            // console.log("team repo:", result)

            return new Team(result, season);

        } catch (error) {
            return result;
        }
    }

    this.getTable = async function (season) {
        var result = null;

       

        try {
            var url = await fetch(`https://18.217.224.98:3000/table/${season}`);
            var response = await url;
            result = await response.json();

            // console.log("team repo:", result.season.name)

            return new Table(result);

        } catch (error) {
            return result;
        }
    }
}

