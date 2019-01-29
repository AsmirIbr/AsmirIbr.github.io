function RenderNews() {
    this.newsPageData = new PageLogic();

    this.newsRender = async function () {
        this.data = await this.newsPageData.getPageData();
       

        var $pageWrapper = $("#page-wrapper").addClass("news-pageWrapper").removeClass("team-pageWrapper");

        $("<div>").appendTo($pageWrapper).addClass("news-img");

        var $preNews = $("<div>").appendTo($pageWrapper).css("display", "flex");
        var $allNews = $("<div>").appendTo($preNews).addClass("all-news");

        for (var j = 0; j < this.data.length; j++) {
            var $oneNews = $("<div>").addClass("news-cont").appendTo($allNews);

            $("<img>").addClass("img1").appendTo($oneNews).attr("src", this.data[j].image);
            $("<h5>").appendTo($oneNews).text("By: " + this.data[j].author);
            $("<h2>").appendTo($oneNews).text(this.data[j].title);
            $("<h4>").appendTo($oneNews).text(this.data[j].description);
            $("<h6>").appendTo($oneNews).text(moment(this.data[j].date).format('LL'));

            $("<button>").attr("id", j).addClass("read-more").appendTo($oneNews).text("Read more").addClass("read-more-button");
        }

        var $frontNews = $("<div>").appendTo($preNews).addClass("front-news");

        $("<img>").addClass("img1").appendTo($frontNews).attr("src", this.data[0].image);
        $("<h5>").appendTo($frontNews).text("By: " + this.data[0].author);
        $("<h2>").appendTo($frontNews).text(this.data[0].title);
        $("<h4>").appendTo($frontNews).text(this.data[0].content);
        $("<h4>").appendTo($frontNews).text(this.data[0].content);
        $("<h4>").appendTo($frontNews).text(this.data[0].content);
        $("<h4>").appendTo($frontNews).text(this.data[0].content);
        $("<h6>").appendTo($frontNews).text(moment(this.data[0].date).format('LL'));

        var $fixmeTop = $($frontNews).offset().top;       // get initial position of the element

        $(window).scroll(function () {                  // assign scroll event listener

            var currentScroll = $(window).scrollTop(); // get current position

            if (currentScroll >= $fixmeTop) {           // apply position: fixed if you
                $($frontNews).css({                      // scroll to that element or below it
                    position: 'fixed',
                    top: '110px',
                    left: '635px'
                });
            } else {                                   // apply position: static
                $($frontNews).css({                      // if you scroll above it
                    position: 'absolute',
                    top: '730px',
                    left: '635px'
                });
            }

        });


        $(".read-more").on("click", (event) => {
            var id = event.target.id

            $($frontNews).html("");

            $($frontNews).appendTo($preNews).addClass("front-news");
            $("<img>").addClass("img1").appendTo($frontNews).attr("src", this.data[id].image);
            $("<h5>").appendTo($frontNews).text("By: " + this.data[id].author);
            $("<h2>").appendTo($frontNews).text(this.data[id].title);
            $("<h4>").appendTo($frontNews).text(this.data[id].content);
            $("<h4>").appendTo($frontNews).text(this.data[id].content);
            $("<h4>").appendTo($frontNews).text(this.data[id].content);
            $("<h4>").appendTo($frontNews).text(this.data[id].content);
            $("<h6>").appendTo($frontNews).text(moment(this.data[id].date).format('LL'));
        })

    }

}