function StoreRepository() {

    this.cart = ["ghf"];

    this.getItems = function () {

        var matchKits = [];
        matchKits.push(new Item("inter-home-jersey", "INTER HOME MATCH JERSEY 2018/19", "120", "store/kits/homeKit.jpg"));
        matchKits.push(new Item("inter-away-jersey", "INTER AWAY MATCH JERSEY 2018/19", "120", "store/kits/awayKit.jpg"));
        matchKits.push(new Item("inter-third-jersey", "INTER THIRD MATCH JERSEY 2018/19", "100", "store/kits/thirdKit.jpg"));
        matchKits.push(new Item("inter-goalkeeper-black-jersey", "INTER BLACK GOALKEEPER MATCH JERSEY 2018/19", "110", "store/kits/goalkeeperKit1.jpg"));
        matchKits.push(new Item("inter-goalkeeper-yellow-jersey", "INTER YELLOW GOALKEEPER MATCH JERSEY 2018/19", "110", "store/kits/goalkeeperKit2.jpg"));
        matchKits.push(new Item("inter-goalkeeper-green-jersey", "INTER GREEN GOALKEEPER MATCH JERSEY 2018/19", "110", "store/kits/goalkeeperKit3.jpg"));

        var accessories = [];
        accessories.push(new Item("inter-black-beanie", "INTER BLACK BEANIE 2018/2019", "20", "store/accessories/blackBeanie.jpg"));
        accessories.push(new Item("inter-striped-beanie", "INTER STRIPED BEANIE 2018/2019", "20", "store/accessories/stripedBeanie.jpg"));
        accessories.push(new Item("inter-logo-cap", "INTER BLACK LOGO CAP 2018/2019", "20", "store/accessories/interCap.jpg"));
        accessories.push(new Item("inter-supporter-ball", "INTER SUPPORTER BALL 2018/2019 SIZE 5", "19", "store/accessories/supporterBall.jpg"));
        accessories.push(new Item("inter-prestige-bal", "INTER PRESTIGE BALL 2018/2019 SIZE 5", "25", "store/accessories/interBall.jpg"));
        accessories.push(new Item("inter-stripes-scarf", "INTER VERTICAL STRIPES SCARF CACHEMIRE", "119", "store/accessories/stripesScarf.jpg"));

        var gift = [];
        gift.push(new Item("inter-calender-set", "INTER 2019 CALENDER SET", "14.90", "store/gift/interCalendar.jpg"));
        gift.push(new Item("inter-pen", "INTER PEN", "9.90", "store/gift/interPen.jpg"));
        gift.push(new Item("inter-talent-watch", "INTER BLACK TALENT WATCH", "95", "store/gift/talentWatch.jpg"));
        gift.push(new Item("inter-black-blue-watch", "INTER BLACK AND BLUE WATCH - UNISEX", "32.90", "store/gift/unisexWatch.jpg"));
        gift.push(new Item("inter-110years-pin", "INTER 110 YEARS PIN", "13.50", "store/gift/110yearsPin.jpg"));
        gift.push(new Item("inter-biscone-mug", "INTER BISCIONE PLASTIC MUG", "12.00", "store/gift/plasticMug.jpg"));
        gift.push(new Item("inter-home-minikit", "INTER HOME MINIKIT WITH SUCKER", "9.90", "store/gift/homeMinikit.jpg"));

        var all = matchKits.concat(accessories).concat(gift);

        var store = {
            matchKits: matchKits,
            accessories: accessories,
            gift: gift,
            all: all
        }

        return store;
    }

    this.postItemForCart = (itemId) => {
        this.cart.push(itemId);
        console.log("post repo", this.cart);
        return this.cart;
    }

    this.getItemsForCart = () => {
        console.log("get repo", this.cart);
        return this.cart;
    }
}