function TeamRepository() {

    this.getTeamStatistics = async function (season) {
        var result = null;

        $.ajax({
            method: 'GET',
            crossDomain:true,
            url: `http://18.217.224.98:3000/teamstats/${season}`,
            data: 'xml',
        }).then(async(success) => {
            result = await success.json();
        },function(error){
            // responseText.innerHTML = 'Не постои уред со таков сериски број, обидете се повторно';
        });
       
        // try {
        //     var url = await fetch(`http://18.217.224.98:3000/teamstats/${season}`); // za statistika
        //     var response = await url;
        //     result = await response.json();
        //     // console.log("team repo:", result)

        //     return new Team(result, season);

        // } catch (error) {
        //     return result;
        // }
    }

    this.getTable = async function (season) {
        var result = null;


        $.ajax({
            method: 'GET',
            crossDomain:true,
            url: `http://18.217.224.98:3000/table/${season}`,
            data: 'xml',

        }).then(async(success) => {
            console.log(result, success)
            result = await success.json();
            
        },function(error){
            console.log(error)
            // responseText.innerHTML = 'Не постои уред со таков сериски број, обидете се повторно';
        });

        // try {
        //     var url = await fetch(`http://18.217.224.98:3000/table/${season}`);
        //     var response = await url;
        //     result = await response.json();

        //     // console.log("team repo:", result.season.name)

        //     return new Table(result);

        // } catch (error) {
        //     return result;
        // }
    }
}

