function PlayerRepository() {

    this.getPlayer = async function (id) {
        var result = null;
        try {
            var url = await fetch(`https://interfanpage.herokuapp.com/players/${id}`);
            var response = await url;
            result = await response.json();

            console.log("player repo: ",result);
            

            return new Player(result, id);

        } catch (error) {
            return result;
        }
    }

}
