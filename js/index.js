$(document).ready(function () {
  //네비게이션 메뉴 켜지면 스크롤 금지
  $(".nav-dim").on("scroll touchmove mousewheel", function (event) {
    event.preventDefault();
    event.stopPropagation();
    return false;
  });
  $(".navigation").on("scroll touchmove mousewheel", function (event) {
    event.preventDefault();
    event.stopPropagation();
    return false;
  });

  //바운스 이미지 클릭시
  $(".bounce img").click(function () {
    $("html, body").animate({ scrollTop: $(".main-slide").offset().top + 100 }, 500);
  });

  // 스크롤시 햄버거 색상변경 및 로고,검색 hidden
  let scroll_pos = 0;

  $(document).scroll(function () {
    scroll_pos = $(this).scrollTop();
    //btn-menu-main-m
    if (scroll_pos > $(".main-slide").offset().top - 100) {
      $(".header").addClass("change");
      $(".main-visual").css({ position: "static" });
    } else if (scroll_pos < $(".main-slide").offset().top - 150) {
      $(".header").removeClass("change");
      $(".main-visual").css({ position: "sticky" });
    }
  });

  //search 클릭
  $(".search").click(function () {
    $(".header-search").addClass("active");
  });
  $(".closeBtn").click(function () {
    $(".header-search").removeClass("active");
  });

  //햄버거 클릭시 나오게
  $(".hamburger").click(function () {
    $(".navigation").css({ width: "50%" });
    $(".nav-dim").css({ width: "100vw" });
  });
  $(".hamburgerX").click(function () {
    $(".navigation").css({ width: "0%" });
    $(".nav-dim").css({ width: "0vw" });
  });

  //네비게이션 메뉴
  $(".dep1-1").on("mouseenter", function (event) {
    event.preventDefault();
    $(`.dep1-1 > .dep2`).addClass("on");
    $(`.dep1-1 .moreBtn > span`).attr("class", "lnr lnr-chevron-up");
  });

  $(".dep1-1").on("mouseleave", function (event) {
    event.preventDefault();
    $(`.dep1-1 .dep2`).removeClass("on");
    $(`.dep1-1 .moreBtn > span`).attr("class", "lnr lnr-chevron-down");
  });

  $(".dep2-1").on("mouseenter", function (event) {
    event.preventDefault();
    $(`.dep2-1 > .dep2`).addClass("on");
    $(`.dep2-1 .moreBtn > span`).attr("class", "lnr lnr-chevron-up");
  });

  $(".dep2-1").on("mouseleave", function (event) {
    event.preventDefault();
    $(`.dep2-1 .dep2`).removeClass("on");
    $(`.dep2-1 .moreBtn > span`).attr("class", "lnr lnr-chevron-down");
  });

  $(".dep3-1").on("mouseenter", function (event) {
    event.preventDefault();
    $(`.dep3-1 > .dep2`).addClass("on");
    $(`.dep3-1 .moreBtn > span`).attr("class", "lnr lnr-chevron-up");
  });

  $(".dep3-1").on("mouseleave", function (event) {
    event.preventDefault();
    $(`.dep3-1 .dep2`).removeClass("on");
    $(`.dep3-1 .moreBtn > span`).attr("class", "lnr lnr-chevron-down");
  });

  //dep3
  /*
  $("#more-3").on("mouseenter", function (event) {
    event.preventDefault();
    $(`.dep3-3 > .dep3`).addClass("on");
    $(`.dep3-3 .moreBtn_2 > span`).attr("class", "lnr lnr-chevron-down");
  });

  $(".dep3-3").on("mouseleave", function (event) {
    event.preventDefault();
    $(`.dep3-3 .dep3`).removeClass("on");
    $(`.dep3-3 .moreBtn_2 > span`).attr("class", "lnr lnr-chevron-up");
  });
  $("#more-4").on("mouseenter", function (event) {
    event.preventDefault();
    $(`.dep3-4 > .dep3`).addClass("on");
    $(`.dep3-4 .moreBtn_2 > span`).attr("class", "lnr lnr-chevron-down");
  });

  $(".dep3-4").on("mouseleave", function (event) {
    event.preventDefault();
    $(`.dep3-4 .dep3`).removeClass("on");
    $(`.dep3-4 .moreBtn_2 > span`).attr("class", "lnr lnr-chevron-up");
  });

*/

  $("#more-3").on("click", function (event) {
    event.preventDefault();
    if ($(".dep3-3 > .dep3").hasClass("on")) {
      $(`.dep3-3 .dep3`).removeClass("on");
      $(`.dep3-3 .moreBtn_2 > span`).attr("class", "lnr lnr-chevron-up");
    } else {
      $(`.dep3-3 > .dep3`).addClass("on");
      $(`.dep3-3 .moreBtn_2 > span`).attr("class", "lnr lnr-chevron-down");
    }
  });
  $("#more-4").on("click", function (event) {
    event.preventDefault();
    if ($(".dep3-4 > .dep3").hasClass("on")) {
      $(`.dep3-4 .dep3`).removeClass("on");
      $(`.dep3-4 .moreBtn_2 > span`).attr("class", "lnr lnr-chevron-up");
    } else {
      $(`.dep3-4 > .dep3`).addClass("on");
      $(`.dep3-4 .moreBtn_2 > span`).attr("class", "lnr lnr-chevron-down");
    }
  });

  $(".dep4-1").on("mouseenter", function (event) {
    event.preventDefault();
    $(`.dep4-1 > .dep2`).addClass("on");
    $(".login").addClass("hide");
    $(`.dep4-1 .moreBtn > span`).attr("class", "lnr lnr-chevron-up");
  });
  $(".dep4-1").on("mouseleave", function (event) {
    event.preventDefault();
    $(`.dep4-1 .dep2`).removeClass("on");
    $(".login").removeClass("hide");
    $(`.dep4-1 .moreBtn > span`).attr("class", "lnr lnr-chevron-down");
  });
  $(".dep5-1").on("mouseenter", function (event) {
    event.preventDefault();
    $(`.dep5-1 > .dep2`).addClass("on");
    $(".login").addClass("hide");
    $(`.dep5-1 .moreBtn > span`).attr("class", "lnr lnr-chevron-up");
  });

  $(".dep5-1").on("mouseleave", function (event) {
    event.preventDefault();
    $(`.dep5-1 .dep2`).removeClass("on");
    $(".login").removeClass("hide");
    $(`.dep5-1 .moreBtn > span`).attr("class", "lnr lnr-chevron-down");
  });

  // 메뉴 호버 색상적용
  $(".dep2 > li").each(function () {
    $(this).mouseenter(function () {
      $(this).addClass("over");
    });
    $(this).mouseleave(function () {
      $(this).removeClass("over");
    });
  });

  $(".dep3 > li").each(function () {
    $(this).mouseenter(function () {
      $(this).addClass("over");
    });
    $(this).mouseleave(function () {
      $(this).removeClass("over");
    });
  });

  //grade 부분 슬라이드
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
  $(document).scroll(function () {
    scroll_pos = $(this).scrollTop();
    if (scroll_pos > $(".main-slide").offset().top - 310) {
      $("#img1").css({ animation: "zoom-out 1s linear" });
    }
  });

  //grade 클릭 시 이미지 바꾸기
  $("#Grade10").click(function () {
    $("#img1").css("animation-play-state", "running");
    const img1Arr = ["KOREA", "FRANCE", "AUSTRALIA", "TAIWAN"];
    swiper.slideTo(0, 100);
    $("#Grade10").addClass("btnActive");
    $("#Grade11").removeClass("btnActive");
    $("#Grade12").removeClass("btnActive");
    for (let i = 1; i < 5; i++) {
      $(`#img${i}`).css({ background: `url(./images/grade10_${i}.jpg)` });
      $(`#img${i} .img-dim-text`).text(img1Arr[i - 1]);
    }
  });
  $("#Grade11").click(function () {
    $("#img1").css("animation-play-state", "running");
    const img2Arr = ["ITALY", "UAE", "MALAYSIA", "ISRAEL"];
    swiper.slideTo(0, 100);
    $("#Grade11").addClass("btnActive");
    $("#Grade10").removeClass("btnActive");
    $("#Grade12").removeClass("btnActive");
    for (let i = 1; i < 5; i++) {
      $(`#img${i}`).css({ background: `url(./images/grade11_${i}.jpg)` });
      $(`#img${i} .img-dim-text`).text(img2Arr[i - 1]);
    }
    $("#img1").css({
      animation: "zoom-out 1s linear",
    });
  });
  $("#Grade12").click(function () {
    $("#img1").css("animation-play-state", "running");
    const img3Arr = ["USA", "MEXICO", "KENTA", "CZECH"];
    swiper.slideTo(0, 100);
    $("#Grade12").addClass("btnActive");
    $("#Grade10").removeClass("btnActive");
    $("#Grade11").removeClass("btnActive");
    for (let i = 1; i < 5; i++) {
      $(`#img${i}`).css({ background: `url(./images/grade12_${i}.jpg)` });
      $(`#img${i} .img-dim-text`).text(img3Arr[i - 1]);
    }
  });
  //grade 버튼 색상
  if ($("#Grade10").hasClass("btnActive")) {
    const img1Arr = ["KOREA", "FRANCE", "AUSTRALIA", "TAIWAN"];
    for (let i = 1; i < 5; i++) {
      $(`#img${i}`).css({ background: `url(./images/grade10_${i}.jpg)` });
      $(`#img${i} .img-dim-text`).text(img1Arr[i - 1]);
    }
  }

  for (let i = 1; i < 5; i++) {
    $(`#img${i}`).mouseenter(function () {
      $(`#img${i} .img-dim`).css({ visibility: "visible" });
    });
    $(`#img${i}`).mouseleave(function () {
      $(`#img${i} .img-dim`).css({ visibility: "hidden" });
    });
  }

  //what's on 슬라이드
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

  //what text hover
  $(".what-text-more").each(function () {
    $(this).mouseenter(function (e) {
      $(this).addClass("plus4px");
    });
  });
  $(".what-text-more").each(function () {
    $(this).mouseleave(function (e) {
      $(this).removeClass("plus4px");
    });
  });
});
