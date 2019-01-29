async function main() {

    var renderer = await new RenderPage();

        renderer.renderAll();

        $(document).on('ready', function () {

            $(".center").slick({
                dots: true,
                infinite: true,
                centerMode: true,
                slidesToShow: 3,
                // autoplay: true,
                // autoplaySpeed: 1500,
            });

        });
	
    await $(".loader");
    setTimeout(function () {
        $(".loader").addClass("loader-hide");
        $("body").css("overflow-y", "scroll");
    }, 2000);
}


main();
