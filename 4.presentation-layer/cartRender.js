function RenderCart(){
    this.cartPageData = new PageLogic();

    this.cartRender = () => {

        var cartData = this.cartPageData.getCartItems();

        console.log(cartData);
        
        var $popUpCart = $("<div>").appendTo($(".top-bar").parent()).addClass("popUp-login").attr("id", "login-popUp");
        var $cartDiv = $("<div>").appendTo($popUpCart).animate({ width: '60%' }, "slow").addClass("log-in-div");
    }
}