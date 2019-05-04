function TeamRepository() {

    this.getTeamStatistics = async function (season) {
        var result = null;
       
        try {
            var url = await fetch(`https://interfanpage.herokuapp.com/statistics/${season}`); // za statistika
            var response = await url;
            result = await response.json();
            console.log(result)

            return new Team(result, season);

        } catch (error) {
            return result;
        }
    }

    this.getTable = async function (season) {
        var result = null;

        $.ajax({
            method: 'GET',
            crossDomain:true,
            url: `https://interfanpage.herokuapp.com/season/${season}`,
            data: JSON.stringify(),
        }).then(function(success){
            console.log(success)
           return new Table(success);
        },function(error){
            console.log(error)
        });

        //  $.ajax({
        //             method: 'GET',
        //             crossDomain:true,
        //             url: `http://18.223.99.198:3000/table/${season}`,
        //             data: JSON.stringify(),
        //         }).then(function(success){
        //             // responseText.innerHTML = success;
        //             console.log(success)
        //         },function(error){
        //             console.log(error)
        //         });

        // try {
        //     var url = await fetch(`https://interfanpage.herokuapp.com/season/${season}`);
        //     var response = await url;
        //     result = await response.json();

        //     // console.log(result)

        //     return new Table(result);

        // } catch (error) {
        //     return result;
        // }
    }
}

