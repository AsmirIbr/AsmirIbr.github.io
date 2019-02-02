function PageLogic() {
        this.newsRepo = new NewsRepository();
        this.teamRepo = new TeamRepository();
        this.playerRepo = new PlayerRepository();
        this.galleryRepo = new GalleryRepository();
        this.userRepo = new UserRepository();
        this.storeRepo = new StoreRepository();

        var cart = null;

        this.getPageData = async function () {

                var news = await this.newsRepo.getNews();
                news.concat(await this.newsRepo.getSecondNews());

                return news;
        }

        this.getPlayerData = async function (id) {

                var player = await this.playerRepo.getPlayer(id);
                return player;
        }

        this.getTableData = async function (season) {

                var table = await this.teamRepo.getTable(season);
                return table;
        }

        this.getTeamStatistics = async function (season) {

                var teamStatistics = await this.teamRepo.getTeamStatistics(season);
                return teamStatistics;
        }



        this.getGalleryPictures = async function () {
                var pictures = [];

                for (let i = 0; i < 24; i++) {
                        var galleryPicutres = await this.galleryRepo.getPictures(i);

                        pictures.push(galleryPicutres);
                }

                return pictures;
        }

        this.postUserData = function (name, email, pass) {

                var user = new User(name, email, pass);

                var postData = this.userRepo.postUser(user);

                return postData;
        }

        this.getUserData = function (email, pass) {

                var getData = this.userRepo.getUser(email);

                if (getData === null) {
                        return false
                } else {
                        if (getData.pass === pass) {

                                return getData.name;

                        } else {
                                return false;
                        }
                }

        }

        this.resetPassword = function (email) {

                return !!this.userRepo.getUser(email);

        }

        this.postNewPassword = function (newPass, email) {

                var getData = this.userRepo.getUser(email);

                getData.pass = newPass;

                var postData = this.userRepo.postUser(getData);

                return postData;

        }

        this.getItemsData = function () {

                return this.storeRepo.getItems();

        }

        this.postCartItems = function (fanshopData, itemId) {

                for (let index = 0; index < fanshopData.length; index++) {

                        if (fanshopData[index].id === itemId) {

                                if (!fanshopData[index].isCart === true) {

                                        fanshopData[index].isCart = true;
                                        this.storeRepo.postItemForCart(fanshopData[index]);                         
                                }
                        }
                }

                return true;
        }

        this.removeCartItem = function (itemId) {
                
                for (let index = 0; index < window.cart.length; index++) {

                        if (window.cart[index].id === itemId) {

                                window.cart[index].isCart = false;
                                this.storeRepo.removeItemForCart(index);                           
                        }
                }

                return true;
        }
}




