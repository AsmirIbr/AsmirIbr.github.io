function PlayerRepository() {

    this.getPlayer = async function (id) {
        var result = null;
        var key = "97c4jrzgb9p2m3mqgj9sjcp5";
        // var key = "h5a88tvkth6ed5ms35davy6e";
       

        try {
            var url = await fetch(`https://api.sportradar.us/soccer-t3/eu/en/players/${id}/profile.json?api_key=${key}`);
            var response = await url;
            result = await response.json();

            console.log("player repo: ",result);
            

            return new Player(result, id);

        } catch (error) {
            return result;
        }
    }

}
