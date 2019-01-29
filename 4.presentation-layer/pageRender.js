moment.locale("en-gb");

function RenderPage() {
    this.pageData = new PageLogic();
    this.newsData = new RenderNews();
    this.teamData = new RenderTeam();
    this.seasonData = new RenderSeason();
    this.stadiumData = new RenderStadium();
    this.loginData = new LoginFormRender();
    this.fanshopData = new RenderFanshop();
    this.cartData = new RenderCart();

    this.renderAll = function () {

        this.renderNewNews();

        var loader = $(".loader")

        $(document).ready(function () {
            $(this).scrollTop(0);
        });
  

        $("#home-menu").parent().addClass("li-active");



        // home-header-menu

        $("#home-menu").on("click", (event) => {
            event.preventDefault();

            $("body").css("overflow-y", "hidden");

            $(loader).removeClass("loader-hide");

            $(document).ready(function () {
                $(this).scrollTop(0);
            });

            $("nav>ul>li").removeClass("li-active");
            $(event.target).parent().addClass("li-active");

            $("#page-wrapper").empty();
            $("#home-wrapper").css("display", "block");
            $("#main-div").empty();

            this.renderNewNews();

            setTimeout(() => {
                $(loader).addClass("loader-hide");
                $("body").css("overflow-y", "scroll");
            }, 2000)

        });

        $(window).on("scroll", function () {
            if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
                $("#header-bar").css("background-color", "rgba(0, 0, 0, 0.95)");
                $(".top-bar").css("display", "none");
                $(".log-in-div").remove();
                $("#logo-img").attr("src", "icons/Logo+tekst_Inter.png").css("width", "200px").css("height", "80px");

            } else {
                $("#header-bar").css("background-color", "rgba(0, 0, 0, 0.5)");
                $(".top-bar").css("display", "flex");
                $("#logo-img").attr("src", "icons/Logo+tekst.png").addClass("img-logo").css("width", "250px").css("height", "100px");;

            }
        });


        //header-search-bar
        $("#search-button").on("click", function () {

            var $search = $("<div>").appendTo("#bottom-bar").addClass("search-bar").animate({ width: '100%' }, "slow");
            $("<input>").attr("type", "text").attr("placeholder", "Type to search").appendTo($search).addClass("search-input").delay(500).animate({ width: '80%' }, "slow");
            $("<img>").attr("src", "icons/X.png").appendTo($search).addClass("exit-img").on("click", function () {
                $search.fadeOut("slow");
                setTimeout(function () {
                    $($search).remove();
                }, 2000);
            });
        });

        //home-slider-player
        $(".current").on("click", (event) => {
            $(event.target).animate({ opacity: '1' }, "slow");
        })

        $(".slider-div").mouseleave(function (event) {
            $(event.target).animate({ opacity: '0' }, "slow");
        });

        //back-to-top
        $(window).scroll(function () {
            var height = $(window).scrollTop();
            if (height > 100) {
                $('#back-to-top').fadeIn();
            } else {
                $('#back-to-top').fadeOut();
            }
        });

        $("#back-to-top").click(function (event) {
            event.preventDefault();
            $("html, body").animate({ scrollTop: 0 }, "slow");
            return false;
        });

        //header-news-menu
        $("#news-menu").on("click", (event) => {
            event.preventDefault();

            $("body").css("overflow-y", "hidden");

            $(loader).removeClass("loader-hide");

            $(document).ready(function () {
                $(this).scrollTop(0);
            });

            $("nav>ul>li").removeClass("li-active");
            $(event.target).parent().addClass("li-active");

            $("#page-wrapper").empty();
            $("#home-wrapper").css("display", "none");

            this.newsData.newsRender();

            setTimeout(() => {
                $(loader).addClass("loader-hide");
                $("body").css("overflow-y", "scroll");
            }, 2000)

        });

        //header-team-menu
        $("#team-menu").on("click", (event) => {
            event.preventDefault();

            $("body").css("overflow-y", "hidden");

            $(loader).removeClass("loader-hide");;

            $(document).ready(function () {
                $(this).scrollTop(0);
            });

            $("nav>ul>li").removeClass("li-active");
            $(event.target).parent().addClass("li-active");

            $("#page-wrapper").empty();
            $("#home-wrapper").css("display", "none");

            this.teamData.teamRender();

            setTimeout(() => {
                $(loader).addClass("loader-hide");
                $("body").css("overflow-y", "scroll");
            }, 2000)

        });
        //header-season-menu
        $("#season-menu").on("click", (event) => {
            event.preventDefault();

            $("body").css("overflow-y", "hidden");

            $(loader).removeClass("loader-hide");

            $(document).ready(function () {
                $(this).scrollTop(0);
            });

            $("nav>ul>li").removeClass("li-active");
            $(event.target).parent().addClass("li-active");

            $("#page-wrapper").empty();
            $("#home-wrapper").css("display", "none");

            var season = "sr:season:55737"

            this.seasonData.seasonRender(season);

            setTimeout(() => {
                $(loader).addClass("loader-hide");
                $("body").css("overflow-y", "scroll");
            }, 2000)
        });

        //header-stadium-menu
        $("#stadium-menu").on("click", (event) => {
            event.preventDefault();

            $("body").css("overflow-y", "hidden");

            $(loader).removeClass("loader-hide");

            $(document).ready(function () {
                $(this).scrollTop(0);
            });

            $("nav>ul>li").removeClass("li-active");
            $(event.target).parent().addClass("li-active");

            $("#page-wrapper").empty();
            $("#home-wrapper").css("display", "none");

            this.stadiumData.stadiumRender();

            setTimeout(() => {
                $(loader).addClass("loader-hide");
                $("body").css("overflow-y", "scroll");
            }, 2000);

        });

        //header-fanshop-menu
        $("#fanshop-menu").on("click", (event) => {
            event.preventDefault();

            $("body").css("overflow-y", "hidden");

            $(loader).removeClass("loader-hide");

            $(document).ready(function () {
                $(this).scrollTop(0);
            });

            $("nav>ul>li").removeClass("li-active");
            $(event.target).parent().addClass("li-active");

            $("#page-wrapper").empty();
            $("#home-wrapper").css("display", "none");

            this.fanshopData.fanshopRender();

            setTimeout(() => {
                $(loader).addClass("loader-hide");
                $("body").css("overflow-y", "scroll");
            }, 2000)

        });

        // Event login

        $("#logIn").on("click", (event) => {

            $("body").css("overflow", "hidden");

            this.loginData.renderForm();
        })

         // Event Cart

         $("#cart").on("click", (event) => {

            $("body").css("overflow", "hidden");

            this.cartData.cartRender();
        })

    }


    this.renderLeft = function () {
        var $leftContent = $("<div>").addClass("left-cont");

        $("<img>").addClass("img1").appendTo($leftContent).attr("src", this.data[0].image);
        $("<h5>").appendTo($leftContent).text("Author: " + this.data[0].author);
        $("<h2>").appendTo($leftContent).text(this.data[0].title);
        $("<h4>").appendTo($leftContent).text(this.data[0].content);
        $("<h6>").appendTo($leftContent).text(this.data[0].publishedAt);

        return $leftContent;
    }

    this.renderRight = function () {
        var $rightContent = $("<div>").addClass("right-cont");

        for (var i = 1; i < 6; i++) {
            var $line = $("<div>").appendTo($rightContent);
            $("<img>").appendTo($line).addClass("img").attr("src", this.data[i].image);

            var $lineContent = $("<div>").appendTo($line).css("marginLeft", "20px")
            $("<h3>").addClass("newsDiv").attr("id", "title").appendTo($lineContent).text(this.data[i].title);
            $("<h6>").addClass("newsDiv").attr("id", "title").appendTo($lineContent).text(moment(this.data[i].date).format('LL'));
        }
        return $rightContent;
    }

    this.renderNewNews = async function (){

        this.data = await this.pageData.getPageData();
    
        var $main = $("#main-div").addClass("mainCont");
    
        $("<h1>").text("Latest News").appendTo($main);
        $("<div>").addClass("content").appendTo($main).append($(this.renderLeft())).append($(this.renderRight()));
    
    }

}
