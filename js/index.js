$(document).ready(function () {
  //search 클릭
  $(".search").click(function () {
    $(".header-search").addClass("active");
  });
  $(".closeBtn").click(function () {
    $(".header-search").removeClass("active");
  });

  // 사이드 메뉴
  $(".moreBtn").click(function (e) {
    const id = e.target.id;
    if ($(`#${id}.dep2`).hasClass("on")) {
      $(`#${id}.dep2`).removeClass("on");
      $(`#${id}-1.dep3`).removeClass("on");
    } else {
      $(`#${id}.dep2`).addClass("on");
    }
  });

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

  $(".moreBtn2").click(function (e) {
    const id = e.target.id;

    if ($(`#${id}.dep3`).hasClass("on")) {
      $(`#${id}.dep3`).removeClass("on");
    } else {
      $(`#${id}.dep3`).addClass("on");
    }
  });
  $("#moreBtn5").click(function () {
    if ($(".login").hasClass("hide")) {
      $(".login").removeClass("hide");
    } else {
      $(".login").addClass("hide");
    }
  });
  $("#moreBtn4").click(function () {
    if ($(".login").hasClass("hide")) {
      $(".login").removeClass("hide");
    } else {
      $(".login").addClass("hide");
    }
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
