function PlayerRepository() {

    this.getPlayer = async function (id) {
        var result = null;
       

        try {
            var url = await fetch(`http://18.217.224.98:3000/player/${id}`);
            var response = await url;
            result = await response.json();

            console.log("player repo: ",result);
            

            return new Player(result, id);

        } catch (error) {
            return result;
        }
    }

}
