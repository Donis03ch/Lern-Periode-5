$(".menu .icon").click(function () {
    $(".icon").removeClass("active");
    $(this).addClass("active");

    $(".contents").css("display" , "done");
    var contentIndex = $(".icon").index(this);
    $(".content .contents").eq(contentIndex).css("display", "grid" );
});

$(".category").click(function () {
    $(".category").removeClass("active");
    $(this).addClass("active");
})
