function TeamRepository() {

    this.getTeamStatistics = async function (season) {
        var result = null;
       
        try {
            var url = await fetch(`http://18.223.99.198:3000/teamstats/${season}`); // za statistika
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

        // $.ajax({
        //     method: 'GET',
        //     crossDomain:true,
        //     url: `http://18.223.99.198:3000/table/${season}`,
        //     data: JSON.stringify(),
        // }).then(function(success){
        //     console.log(success)
        //    return new Table(success);
        // },function(error){
        //     console.log(error)
        // });

        $.ajax({
            url: `http://18.223.99.198:3000/table/${season}`,
            contentType: 'application/json; charset: utf-8',
            dataType: 'json',
            data: JSON.stringify(),
            type: 'GET',
            success: ((res) =>{
                console.log("Result: ", res)
                // for (let i = 0; i < 7; i++) {
                //    $(".chat").append($("<div>").html(res[i].msg));
                  
                // } 
                // res.forEach(message => {
                //   console.log(message.msg)
                //   $(".chat").append($("<div>").html(message.msg));
                // });
                // $(".chat").html()
            }),
            error: ((error) =>{
                console.log("Error: ", error);
            })
        });


        // var url = `18.223.99.198:3000/table/${season}`
        // try {
        //     var url = await fetch("http://" + url);
        //     var response = await url;
        //     result = await response.json();

        //     console.log("team repo:", result.season.name)

        //     return new Table(result);

        // } catch (error) {
        //     return result;
        // }
    }
}

