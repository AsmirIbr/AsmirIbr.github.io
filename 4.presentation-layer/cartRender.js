function RenderCart() {
    this.cartPageData = new PageLogic();

    this.cartRender = () => {

        var $popUpCart = $("<div>").appendTo($(".top-bar").parent()).addClass("popUp-login").attr("id", "cart-popUp");
        var $cartDiv = $("<div>").appendTo($popUpCart).animate({ width: '60%' }, "slow").addClass("log-in-div cart-background");

        $("<div>").appendTo($cartDiv).addClass("title-cart")
            .append($("<div>").text("Item"))
            .append($("<div>").text("Quantity"))
            .append($("<div>").text("Price"));

        var total = 0;

        if (window.cart.length > 0) {

            var $productHolder = $("<div>").appendTo($cartDiv).addClass("product-holder");

            for (let i = 0; i < window.cart.length; i++) {

                $("<div>").appendTo($productHolder).addClass("product-line").attr("id", window.cart[i].id).attr("isCart", window.cart[i].isCart)
                    .append($("<img>").attr("src", window.cart[i].image))
                    .append($("<div>").addClass("cart-name-holder")
                        .append($("<h5>").text(window.cart[i].name)))
                    .append($("<div>").addClass("cart-input-holder")
                        .append($("<input>").attr("id", "quantity" + i).attr("type", "number").attr("min", "1").attr("max", "10").attr("value", "1")
                        ))

                    .append($("<h4>").text("€ " + window.cart[i].price).attr("price", window.cart[i].price).attr("id", "price" + i))
                    .append($("<img>").attr("src", "cart/close1.png").addClass("close-item-line")
                        .on("click", () => {

                            var itemId = $(event.target).parent()[0].id;

                            $(event.target).parent()[0].attributes[2].nodeValue = false;

                            var removeFromCart = this.cartPageData.removeCartItem(itemId);

                            if (removeFromCart === true) {
                                $("#" + itemId).animate({ height: "0" }, "slow");

                                var item = $("#" + itemId)
                                var regexP = /.*\€ (.*)/gmi;
                                var regexPLine = /.*\€ (.*)/gmi;
                                var oldTotal = $("#total-price").html()
                                var regexPrice = regexP.exec(oldTotal);
                                var oldLinePrice = ($("#" + itemId).find("h4").html());
                                var getProductLinePrice = regexPLine.exec(oldLinePrice);

                                var newPrice = parseFloat(regexPrice[1]) - parseFloat(getProductLinePrice[1]);
                                $("#total-price").text("€ " + newPrice)

                                setTimeout(() => {
                                    $("#" + itemId).remove();
                                }, 500);

                                if (window.cart.length === 0) {
                                    $(".fa-shopping-cart").removeClass("cart-has-item");
                                    $("#cart-popUp").fadeOut("slow");
                                    $(".item button").text("Add to cart")
                                    $("body").css("overflow", "scroll");
                                    setTimeout(() => {
                                        $("#cart-popUp").remove();
                                    }, 400);
                                }
                            }
                        }));

                total += parseInt(window.cart[i].price);
            }

            $(".cart-input-holder [type='number']").keypress((e) => {
                e.preventDefault();
            });

            $(".cart-input-holder input[type=number]")
                .on("change", (event) => {
                    var newTotal = 0;

                    var inputValue = $(event.target).val();
                    var inputSibling = $(event.target).parent().siblings("h4");
                    var firstPrice = $(event.target).parent().siblings("h4").attr("price")
                    var updatePrice = inputValue * parseInt(firstPrice)
                    inputSibling.text("€ " + updatePrice);

                    for (let j = 0; j < window.cart.length; j++) {
                        var regexP = /.*\€ (.*)/gmi;
                        var regexPrice = regexP.exec($("#price" + j).text());

                        var getTotalPrice = regexPrice[1];
                        newTotal += parseInt(getTotalPrice);
                        $("#total-price").text("€ " + newTotal);

                    }
                })


        } else {
            $("<div>").appendTo($cartDiv).addClass("empty-product")
                .append($("<h1>").html("Empty cart"));
        }

        $("<div>").addClass("total-price").appendTo($cartDiv)
            .append($("<div>")
                .append($("<h4>").text("TOTAL PRICE")))
            .append($("<div>")
                .append($("<h4>").text("€ " + total).attr("id", "total-price")));

        $("<div>").addClass("checkout-div").appendTo($cartDiv)
            .append($("<button>").text("Back to Fanpage").addClass("checkout-button")
                .on("click", () => {
                    $("#cart-popUp").fadeOut("slow");
                    $("body").css("overflow", "scroll");
                    setTimeout(() => {
                        $("#cart-popUp").remove();
                    }, 500);
                }))
            .append($("<button>").text("Checkout").attr("id", "checkout").addClass("checkout-button").css("color", "rgb(66, 134, 244)"))
            .on("click", (event) => {

                if(window.cart.length > 0){

                $(".cart-background").animate({ height: "0" }, "slow").fadeOut("slow");

                setTimeout(() => {
                    var finalPay = $("#total-price").html();

                    $("<div>").appendTo("#cart-popUp").addClass("checkout-popUp").hide().fadeIn("slow").animate({ height: "80%" }, "slow");

                    $("<h1>").appendTo(".checkout-popUp").text("Payment Details")

                    $("<h4>").appendTo(".checkout-popUp").text("Card number")
                    $("<input>").attr("type", "tel").appendTo(".checkout-popUp").attr("placeholder", "xxxx-xxxx-xxxx-xxxx").attr("maxlength", "16").attr("placeholder", "Card Number")
                        .blur(function () {
                            $(this).val(function (i, v) {
                                var v = v.replace(/[^\d]/g, '').match(/.{1,4}/g);
                                return v ? v.join('-') : '';
                            })
                        })

                    $("<div>").appendTo(".checkout-popUp")
                        .append($("<div>")
                            .append($("<h4>").text("Expiry date"))
                            .append($("<div>").addClass("Cvc-code").html("<input type=number placeholder=MM  maxlength=2> / <input type=number placeholder=YY maxlength=2>")))
                        .append($("<div>").addClass("Cvc-code")
                            .append($("<h4>").text("CVC Code"))
                            .append($("<div>").html("<input type=text maxlength=3>")))

                    $("<div>").appendTo(".checkout-popUp").addClass("final-pay").html("<h3>Final payment</h3> <h3>" + finalPay + "</h3>")
              
                    $("<div>").appendTo(".checkout-popUp")
                    .append($("<div>").addClass("pay").html("<h4>Later</h4>")
                    .on("click", (event) => {
                        $(".checkout-popUp").fadeOut("slow");

                        setTimeout(() => {
                            $(".cart-background").fadeIn("slow").animate({height: "80%"}, "slow");
                            $(".checkout-popUp").remove();
                        }, 800);
                    }))
                    .append($("<div>").addClass("pay").html("<h4>PAY</h4>"));

                }, 1200);



                }

            })

    }
}