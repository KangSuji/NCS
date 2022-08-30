$(document).ready(function () {
  $(".bounce img").click(function () {
    $("html, body").animate({ scrollTop: $(".main-slide").offset().top - 50 }, 500);
  });
  //search 클릭
  $(".search").click(function () {
    $(".header-search").addClass("active");
  });
  $(".closeBtn").click(function () {
    $(".header-search").removeClass("active");
  });

  $(".dep1-1").on("mouseenter", function (event) {
    event.preventDefault();
    $(`.dep1-1 > .dep2`).addClass("on");
    $(`.dep1-1 > .dep2`).show();
    $(`.dep1-1 .moreBtn > span`).attr("class", "lnr lnr-chevron-up");
  });

  $(".dep1-1").on("mouseleave", function (event) {
    event.preventDefault();
    $(`.dep1-1 .dep2`).removeClass("on");
    $(`.dep1-1 > .dep2`).hide();
    $(`.dep1-1 .moreBtn > span`).attr("class", "lnr lnr-chevron-down");
  });

  $(".dep2-1").on("mouseenter", function (event) {
    event.preventDefault();
    $(`.dep2-1 > .dep2`).addClass("on");
    $(`.dep2-1 > .dep2`).show();
    $(`.dep2-1 .moreBtn > span`).attr("class", "lnr lnr-chevron-up");
  });

  $(".dep2-1").on("mouseleave", function (event) {
    event.preventDefault();
    $(`.dep2-1 .dep2`).removeClass("on");
    $(`.dep2-1 > .dep2`).hide();
    $(`.dep2-1 .moreBtn > span`).attr("class", "lnr lnr-chevron-down");
  });

  $(".dep3-1").on("mouseenter", function (event) {
    event.preventDefault();
    $(`.dep3-1 > .dep2`).addClass("on");
    $(`.dep3-1 > .dep2`).show();
    $(`.dep3-1 .moreBtn > span`).attr("class", "lnr lnr-chevron-up");
  });

  $(".dep3-1").on("mouseleave", function (event) {
    event.preventDefault();
    $(`.dep3-1 .dep2`).removeClass("on");
    $(`.dep3-1 > .dep2`).hide();
    $(`.dep3-1 .moreBtn > span`).attr("class", "lnr lnr-chevron-down");
  });
  $("#more-3").on("mouseenter", function (event) {
    event.preventDefault();
    $(`.dep3-3 > .dep3`).addClass("on");
    $(`.dep3-3 > .dep3`).show();
    $(`.dep3-3 .moreBtn_2 > span`).attr("class", "lnr lnr-chevron-down");
  });

  $(".dep3").on("mouseleave", function (event) {
    event.preventDefault();
    $(`.dep3-3 .dep3`).removeClass("on");
    $(`.dep3-3 > .dep3`).hide();
    $(`.dep3-3 .moreBtn_2 > span`).attr("class", "lnr lnr-chevron-up");
  });
  $("#more-4").on("mouseenter", function (event) {
    event.preventDefault();
    $(`.dep3-4 > .dep3`).addClass("on");
    $(`.dep3-4 > .dep3`).show();
    $(`.dep3-4 .moreBtn_2 > span`).attr("class", "lnr lnr-chevron-down");
  });

  $(".dep3-4").on("mouseleave", function (event) {
    event.preventDefault();
    $(`.dep3-4 .dep3`).removeClass("on");
    $(`.dep3-4 > .dep3`).hide();
    $(`.dep3-4 .moreBtn_2 > span`).attr("class", "lnr lnr-chevron-up");
  });
  $(".dep4-1").on("mouseenter", function (event) {
    event.preventDefault();
    $(`.dep4-1 > .dep2`).addClass("on");
    $(`.dep4-1 > .dep2`).show();
    $(`.dep4-1 .moreBtn > span`).attr("class", "lnr lnr-chevron-up");
  });

  $(".dep4-1").on("mouseleave", function (event) {
    event.preventDefault();
    $(`.dep4-1 .dep2`).removeClass("on");
    $(`.dep4-1 > .dep2`).hide();
    $(`.dep4-1 .moreBtn > span`).attr("class", "lnr lnr-chevron-down");
  });
  $(".dep5-1").on("mouseenter", function (event) {
    event.preventDefault();

    $(`.dep5-1 > .dep2`).addClass("on");
    $(`.dep5-1 > .dep2`).show();
    $(`.dep5-1 .moreBtn > span`).attr("class", "lnr lnr-chevron-up");
  });

  $(".dep5-1").on("mouseleave", function (event) {
    event.preventDefault();
    $(`.dep5-1 .dep2`).removeClass("on");
    $(`.dep5-1 > .dep2`).hide();
    $(`.dep5-1 .moreBtn > span`).attr("class", "lnr lnr-chevron-down");
  });

  // 호버 색상적용

  $(".dep2 > li").each(function () {
    if ($(this).parents().parents().hasClass("dep3-1")) {
      return;
    } else {
      $(this).mouseenter(function () {
        $(this).addClass("over");
      });
      $(this).mouseleave(function () {
        $(this).removeClass("over");
      });
    }
  });

  $(".dep3 > li").each(function () {
    $(this).mouseenter(function () {
      $(this).addClass("over");
    });
    $(this).mouseleave(function () {
      $(this).removeClass("over");
    });
  });

  $(".hamburger").click(function () {
    $(".navigation").css({ width: "50%" });
  });
  $(".hamburgerX").click(function () {
    $(".navigation").css({ width: "0%" });
  });

  var swiper = new Swiper(".mySwiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
      rotate: 0,
      stretch: 400,
      depth: 200,
      modifier: 1,
      slideShadows: true,
    },
    pagination: {
      el: ".img-pagination",
      clickable: true,
    },
  });

  $("#Grade10").click(function () {
    swiper.slideTo(0, 100);
    $("#Grade10").addClass("btnActive");
    $("#Grade11").removeClass("btnActive");
    $("#Grade12").removeClass("btnActive");
    for (let i = 1; i < 5; i++) {
      $(`#img${i}`).css({ background: `url(./images/grade10_${i}.jpg)` });
    }
  });
  $("#Grade11").click(function () {
    swiper.slideTo(0, 100);
    $("#Grade11").addClass("btnActive");
    $("#Grade10").removeClass("btnActive");
    $("#Grade12").removeClass("btnActive");
    for (let i = 1; i < 5; i++) {
      $(`#img${i}`).css({ background: `url(./images/grade11_${i}.jpg)` });
    }
  });
  $("#Grade12").click(function () {
    swiper.slideTo(0, 100);
    $("#Grade12").addClass("btnActive");
    $("#Grade10").removeClass("btnActive");
    $("#Grade11").removeClass("btnActive");
    for (let i = 1; i < 5; i++) {
      $(`#img${i}`).css({ background: `url(./images/grade12_${i}.jpg)` });
    }
  });
  if ($("#Grade10").hasClass("btnActive")) {
    for (let i = 1; i < 5; i++) {
      $(`#img${i}`).css({ background: `url(./images/grade10_${i}.jpg)` });
    }
  }
  $(".what-img-wrap").slick({
    centerMode: true,
    slidesToShow: 3,
    initialSlide: 1,
    infinite: true,
    swipeToSlide: true,
    speed: 1300,
    nextArrow: $(".next"),
    prevArrow: $(".prev"),
  });
});
