$(function () {
    //nav
    $(".nav>ul>li").mouseover(function () {
        $(this).find(".sub").stop().slideDown(500);
    });
    $(".nav>ul>li").mouseleave(function () {
        $(this).find(".sub").stop().slideUp(500);
    });

    //slider
    $(".slider>ul>li").hide();
    $(".slider>ul>li:first-child").show();
    setInterval(function () {
        $(".slider>ul>li:first-child").fadeOut(500).next("li").fadeIn(500).end().appendTo(".slider>ul");
    }, 3000);

    //tab
    const tabBtn = $(".tabBtn>ul>li");
    const tabCont = $(".tabCont>article");
    tabCont.hide().eq(0).show();
    tabBtn.click(function () {
        let target = $(this);
        let index = target.index();
        tabCont.hide().eq(index).show();
        // console.log(index);
        tabBtn.toggleClass("active");
    });

    //layer
    $(".tabCont>.notice>ul>li:first-child>a").click(function (e) {
        e.preventDefault();
        $(".layer").show();
    });
    $(".layer>button").click(function (e) {
        e.preventDefault();
        $(".layer").hide();
    });
})