function RenderFanshop() {
    
    this.fanshopPageData = new PageLogic();
  
    this.fanshopRender = () => {

        var fanshopData = this.fanshopPageData.getItemsData();
        
        var $pageWrapper = $("#page-wrapper").addClass("fanshop-pageWrapper").removeClass("season-pageWrapper").removeClass("team-pageWrapper").removeClass("news-pageWrapper");

        $("<div>").appendTo($pageWrapper).addClass("fanshop-img")
        .append($("<img>").attr("src", "logo/inter-store-logo.png").addClass("fanshop-img1"));

        var $allFanshop = $("<div>").appendTo($pageWrapper).addClass("allFanshop");

        $("<div>").addClass("categories-div").appendTo($allFanshop)
        .append($("<select>").attr("id", "categories")
        .append($("<option>").attr("value", "all-categories").attr("selected", "true").text("All Categories"))
        .append($("<option>").attr("value", "match-kits").text("Match Kits"))
        .append($("<option>").attr("value", "accessories").text("Accessories"))
        .append($("<option>").attr("value", "gifts").text("Gifts")))

        .append($("<button>").attr("id", "select-categories").text("Select")
        .on("click", (event) => {
            
            // $($itemsHolder).empty();

            var value = $("#categories").val();
            if(value === "all-categories"){
                $(".item-matchKits").removeClass("active-none");
                $(".item-accessories").removeClass("active-none");
                $(".item-gift").removeClass("active-none");
            } else if(value === "match-kits"){
                $(".item-matchKits").removeClass("active-none");
                $(".item-accessories").addClass("active-none");
                $(".item-gift").addClass("active-none");
            } else if(value === "accessories"){
                $(".item-matchKits").addClass("active-none");
                $(".item-accessories").removeClass("active-none");
                $(".item-gift").addClass("active-none");
            } else{
                $(".item-accessories").addClass("active-none");
                $(".item-matchKits").addClass("active-none");
                $(".item-gift").removeClass("active-none");
            }
             
        }));

        var $itemsHolder = $("<div>").addClass("item-holder").appendTo($allFanshop);
        this.renderMatchKits(fanshopData, $itemsHolder);
        this.renderAccessories(fanshopData, $itemsHolder);
        this.renderGifts(fanshopData, $itemsHolder);
        
    }

    this.renderMatchKits = (fanshopData, $itemsHolder) => {
        for(let i = 0; i < fanshopData.matchKits.length; i++){
            $("<div>").appendTo($itemsHolder).addClass("item item-matchKits").attr("id", fanshopData.matchKits[i].id).attr("isCart", fanshopData.matchKits[i].isCart)
            .append($("<img>").attr("src", fanshopData.matchKits[i].image))
            .append($("<h4>").text(fanshopData.matchKits[i].name))
            .append($("<h3>").text("€" + fanshopData.matchKits[i].price))
            .append($("<button>").text("Add to cart")
            .on("click", (event) => {

                var itemId = $(event.target).parent()[0].id;

                $(event.target).parent()[0].attributes[2].nodeValue = true;
                var addedToCart = this.fanshopPageData.postCartItems(fanshopData.all, itemId);

                if(addedToCart === true){
                    // $("<div>").appendTo(".input").addClass("cart-point")
                    $(event.target).text("Added to cart");
                }
            }));
        }
    }

    this.renderAccessories = (fanshopData, $itemsHolder) => {
        for(let i = 0; i < fanshopData.accessories.length; i++){
            $("<div>").appendTo($itemsHolder).addClass("item item-accessories").attr("id", fanshopData.accessories[i].id).attr("isCart", fanshopData.accessories[i].isCart)
            .append($("<img>").attr("src", fanshopData.accessories[i].image))
            .append($("<h4>").text(fanshopData.accessories[i].name))
            .append($("<h3>").text("€" + fanshopData.accessories[i].price))
            .append($("<button>").text("Add to cart")
            .on("click", (event) => {
                var itemId = $(event.target).parent()[0].id;

                $(event.target).parent()[0].attributes[2].nodeValue = true;
                var addedToCart = this.fanshopPageData.postCartItems(fanshopData.matchKits, itemId);

                if(addedToCart === true){
                    // $("<div>").appendTo(".input").addClass("cart-point")
                    $(event.target).text("Added to cart")
                }
                
                
            }));
        }
    }

    this.renderGifts = (fanshopData, $itemsHolder) => {
        for(let i = 0; i < fanshopData.gift.length; i++){
            $("<div>").appendTo($itemsHolder).addClass("item item-gift").attr("id", fanshopData.gift[i].id).attr("isCart", fanshopData.gift[i].isCart)
            .append($("<img>").attr("src", fanshopData.gift[i].image))
            .append($("<h4>").text(fanshopData.gift[i].name))
            .append($("<h3>").text("€" + fanshopData.gift[i].price))
            .append($("<button>").text("Add to cart")
            .on("click", (event) => {
                var itemId = $(event.target).parent()[0].id;

                $(event.target).parent()[0].attributes[2].nodeValue = true;
                var addedToCart = this.fanshopPageData.postCartItems(fanshopData.matchKits, itemId);

                if(addedToCart === true){
                    // $("<div>").appendTo(".input").addClass("cart-point")
                    $(event.target).text("Added to cart")
                }
            }));
        }
    }
}