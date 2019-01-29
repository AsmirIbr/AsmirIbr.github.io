function RenderStadium() {
    this.stadiumPageData = new PageLogic();


    this.stadiumRender = async function () {

        var $pageWrapper = $("#page-wrapper").addClass("stadium-pageWrapper").removeClass("season-pageWrapper").removeClass("team-pageWrapper").removeClass("news-pageWrapper");;

        $("<div>").appendTo($pageWrapper).addClass("stadium-img");
        var $allStadium = $("<div>").appendTo($pageWrapper).addClass("allStadium");

        $("<h1>").appendTo($allStadium).text("Stadio Giuseppe Meazza").addClass("stadium-name");

        var $tableStadium = $("<table>").appendTo($allStadium).addClass("table-stadium")

        $("<tr>").appendTo($tableStadium).addClass("tr-line-stadium")
            .append($("<th>").text("Capacity"))
            .append($("<th>").text("81 277").css("fontSize", "25px"));

        $("<tr>").appendTo($tableStadium).addClass("tr-line-stadium")
            .append($("<th>").text(""))
            .append($("<th>").text("5200 (300 in skyboxes) (Business seats)").css("fontSize", "12px"));

        $("<tr>").appendTo($tableStadium).addClass("tr-line-stadium")
            .append($("<th>").text(""))
            .append($("<th>").text("223 (Press seats)").css("fontSize", "12px"));

        $("<tr>").appendTo($tableStadium).addClass("tr-line-stadium")
            .append($("<th>").text(""))
            .append($("<th>").text("244 (Disabled seats)").css("fontSize", "12px"));

        $("<tr>").appendTo($tableStadium).addClass("tr-line-stadium")
            .append($("<th>").text("Country"))
            .append($("<th>").append($("<img>").attr("src", "icons/flag.png").addClass("img-italy")).append($("<span>").html(" Italy")));

        $("<tr>").appendTo($tableStadium).addClass("tr-line-stadium")
            .append($("<th>").text("City"))
            .append($("<th>").text("Milan"));

        $("<tr>").appendTo($tableStadium).addClass("tr-line-stadium")
            .append($("<th>").text("Clubs"))
            .append($("<th>").text("Internazionale FC Milano, AC Milan").css("fontSize", "14px"));

        $("<tr>").appendTo($tableStadium).addClass("tr-line-stadium")
            .append($("<th>").text("Floodlights"))
            .append($("<th>").text("3600 lux"));

        $("<tr>").appendTo($tableStadium).addClass("tr-line-stadium")
            .append($("<th>").text("Inauguration"))
            .append($("<th>").text("19.09.1926 (AC Milan - Inter FC 3-6)"));

        $("<tr>").appendTo($tableStadium).addClass("tr-line-stadium")
            .append($("<th>").text("Construction"))
            .append($("<th>").text("1925 - 1926"));

        $("<tr>").appendTo($tableStadium).addClass("tr-line-stadium")
            .append($("<th>").text("Renovations"))
            .append($("<th>").text("1955, 1990, 2011-2015"));

        $("<tr>").appendTo($tableStadium).addClass("tr-line-stadium")
            .append($("<th>").text("Design"))
            .append($("<th>").text("Alberto Cugini, Ulisse Stacchini"));

        $("<tr>").appendTo($tableStadium).addClass("tr-line-stadium")
            .append($("<th>").text("Address").attr("id", "map-append"))
            .append($("<th>").text("Via Piccolomini 5, 20151 Milan").addClass("map-stadium").on("click", (event) => {

                var $mapDiv = $("<div>").appendTo("#map-append");

                $("<div>").appendTo($mapDiv).addClass("maps").html("<iframe src=https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2797.5201045417953!2d9.124054715557953!3d45.47947027910114!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4786c196607a6f8f%3A0x9aee39a9c7a4f2ed!2zVmlhIGRlaSBQaWNjb2xvbWluaSwgNSwgMjAxNTEgTWlsYW5vIE1JLCDQmNGC0LDQu9C40ZjQsA!5e0!3m2!1smk!2smk!4v1547475893061 width=400 height=300 frameborder=0 style=border:0 allowfullscreen></iframe>");
                $("<div>").appendTo($mapDiv).text("Tap to remove").addClass("remove-text")
                    .append($("<img>").attr("src", "icons/X.png").addClass("remove-map").on("click", (event) => {

                        $(event.target).parent().parent().fadeOut("slow");
                        setTimeout((event) => {
                            $(event.target).parent().parent().remove();
                        }, 2000)

                    }));
            }));

        var $gallery = $("<div>").appendTo($pageWrapper);

        $("<h2>").appendTo($gallery).text("Gallery").addClass("gallery-name");

        var $galleryPics = $("<div>").appendTo($gallery).addClass("gallery-pics");

        var picture = await this.stadiumPageData.getGalleryPictures();

        for (let i = 0; i < picture.length; i++) {
            $("<img>").appendTo($galleryPics).addClass("img-popup").attr("id", i).css("position", "relative").attr("src", picture[i].link).on("click", (event) => {

                var popUpId = event.target.id;
                $("body").css("overflow", "hidden");

                $(event.target).parent().append($("<div>").addClass("popUp-pics")
                    .append($("<div>").addClass("left-arrow-pics")
                        .append($("<i>").addClass("fas").addClass("fa-chevron-circle-left").addClass("arrow-pics").on("click", (event) => {

                            if (popUpId < 0) {
                                popUpId = picture.length - 1;
                                $(".current-popUp").attr("src", picture[popUpId--].link);
                            } else {
                                $(".current-popUp").attr("src", picture[popUpId--].link);
                            }
                        })))
                    .append($("<img>").addClass("current-popUp").attr("src", picture[event.target.id].link))
                    .append($("<div>").addClass("right-arrow-pics")
                        .append($("<i>").addClass("fas").addClass("fa-chevron-circle-right").addClass("arrow-pics").on("click", (event) => {

                            if (popUpId > picture.length - 1) {
                                popUpId = 0;
                                $(".current-popUp").attr("src", picture[popUpId++].link);
                            } else {
                                $(".current-popUp").attr("src", picture[popUpId++].link);
                            }

                        })))
                    .append($("<div>").addClass("remove-popUp-pics")
                        .append($("<i>").addClass("fas").addClass("fa-times-circle").addClass("remove-popUp-X").on("click", (event) => {

                            $(".popUp-pics").fadeOut("slow");
                            $("body").css("overflow", "scroll");
                            
                            setTimeout(() => {
                                $(".popUp-pics").remove();
                            }, 2000)


                        }))))

            });
        }


    }
}