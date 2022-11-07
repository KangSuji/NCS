$(document).ready(function () {
  $(".sub04-row-dep1").each("click", function () {
    $(this).next(".sub04-row-dep2").css({ hegiht: "0" });
  });
  //네비게이션 메뉴 켜지면 스크롤 금지
  $(".nav-dim").on("scroll touchmove mousewheel", function (event) {
    event.preventDefault();
    event.stopPropagation();
    return false;
  });
  /* $(".navigation").on("scroll touchmove mousewheel", function (event) {
    event.preventDefault();
    event.stopPropagation();
    return false;
  });*/

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
    } else if (scroll_pos < $(".main-slide").offset().top - 150) {
      $(".header").removeClass("change");
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
    $(".navigation").css({ width: "100%" });
    $(".nav-dim").css({ width: "100vw" });
  });
  $(".hamburgerX").click(function () {
    $(".navigation").css({ width: "0%" });
    $(".nav-dim").css({ width: "0vw" });
  });

  //네비게이션 메뉴

  //네비게이션 메뉴
  var windowWidth = $(window).width();

  if (windowWidth < 600) {
    //창 가로 크기가 600 미만일 경우
    $(".dep1 > li").each(function () {
      $(this)
        .children("div")
        .click(function () {
          $(this).parent().siblings().children().next("ul.dep2").removeClass("on");
          $(this).parent().siblings().children().children(".moreBtn").children("span").attr("class", "lnr lnr-chevron-down");
          $(this).next("ul.dep2").toggleClass("on");
          if ($(this).next("ul.dep2").hasClass("on")) {
            $(this).children(".moreBtn").children("span").attr("class", "lnr lnr-chevron-up");
          } else {
            $(this).children(".moreBtn").children("span").attr("class", "lnr lnr-chevron-down");
          }
        });
    });
  } else {
    $(".dep1 > li").each(function () {
      $(this).hover(function () {
        $(this).children().children().children("ul.dep3").removeClass("on");
        $(this).children(".dep2").children("li").children(".dep3-wrap").children(".moreBtn_2").children("span").attr("class", "lnr lnr-chevron-down");
        $(this).children("ul.dep2").toggleClass("on");
        if ($(this).children("ul.dep2").hasClass("on")) {
          $(this).children(".dep1-wrap").children(".moreBtn").children("span").attr("class", "lnr lnr-chevron-up");
        } else {
          $(this).children(".dep1-wrap").children(".moreBtn").children("span").attr("class", "lnr lnr-chevron-down");
        }
      });
    });
  }
  $(".dep2 > li").each(function () {
    $(this)
      .children("div")
      .click(function () {
        $(this).parent().siblings().children().next("ul.dep3").removeClass("on");
        $(this).next("ul.dep3").toggleClass("on");
        if ($(this).next("ul.dep3").hasClass("on")) {
          $(this).children(".moreBtn_2").children("span").attr("class", "lnr lnr-chevron-up");
        } else {
          $(this).children(".moreBtn_2").children("span").attr("class", "lnr lnr-chevron-down");
        }
      });
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
    navigation: {
      // 네비게이션 설정
      nextEl: ".dimNext", // 다음 버튼 클래스명
      prevEl: ".dimPrev", // 이번 버튼 클래스명
    },
    breakpoints: {
      1200: {
        coverflowEffect: {
          rotate: 0,
          stretch: 325,
          depth: 200,
          modifier: 1,
          slideShadows: true,
        },
      },
    },
  });
  $(document).scroll(function () {
    scroll_pos = $(this).scrollTop();
    if (scroll_pos > $(".main-slide").offset().top - 310) {
      $("#img1").css({ animation: "zoom-out 1s linear" });
      //move01();
    }
    if (scroll_pos > $(".map").offset().top - 310) {
      move01();
    }
  });

  //grade 클릭 시 이미지 바꾸기
  $("#Grade10").click(function () {
    move01();
    $("#img1").css("animation-play-state", "running");
    const img1Arr = ["KOREA", "AUSTRALIA", "FRANCE"];
    swiper.slideTo(0, 100);
    $("#Grade10").addClass("btnActive");
    $("#Grade11").removeClass("btnActive");
    $("#Grade12").removeClass("btnActive");
    for (let i = 1; i < 4; i++) {
      $(`#img${i}`).css({ "background-image": `url(./images/grade10_${i}.jpg)` });
      $(`#img${i} .img-dim-text`).text(img1Arr[i - 1]);
    }

    $("#g-10").css({ display: "block" });
    $("#g-11").css({ display: "none" });
    $("#g-12").css({ display: "none" });
    $(".map-tit").text("Take a glance: Grade 10");
  });
  $("#Grade11").click(function () {
    move_11_01();
    $("#img1").css("animation-play-state", "running");
    const img2Arr = ["MEXICO", "ISRAEL", "THAILAND"];
    swiper.slideTo(0, 100);
    $("#Grade11").addClass("btnActive");
    $("#Grade10").removeClass("btnActive");
    $("#Grade12").removeClass("btnActive");
    for (let i = 1; i < 4; i++) {
      $(`#img${i}`).css({ "background-image": `url(./images/grade11_${i}.jpg)` });
      $(`#img${i} .img-dim-text`).text(img2Arr[i - 1]);
    }
    $("#img1").css({
      animation: "zoom-out 1s linear",
    });
    $("#g-11").css({ display: "block" });
    $("#g-10").css({ display: "none" });
    $("#g-12").css({ display: "none" });
    $(".map-tit").text("Take a glance: Grade 11");
  });
  $("#Grade12").click(function () {
    move_12_01();
    $("#img1").css("animation-play-state", "running");
    const img3Arr = ["USA", "KENYA", "CZECH"];
    swiper.slideTo(0, 100);
    $("#Grade12").addClass("btnActive");
    $("#Grade10").removeClass("btnActive");
    $("#Grade11").removeClass("btnActive");
    for (let i = 1; i < 4; i++) {
      $(`#img${i}`).css({ "background-image": `url(./images/grade12_${i}.jpg)` });
      $(`#img${i} .img-dim-text`).text(img3Arr[i - 1]);
    }
    $("#g-12").css({ display: "block" });
    $("#g-10").css({ display: "none" });
    $("#g-11").css({ display: "none" });
    $(".map-tit").text("Take a glance: Grade 12");
  });
  //grade 버튼 색상
  if ($("#Grade10").hasClass("btnActive")) {
    const img1Arr = ["KOREA", "AUSTRALIA", "FRANCE"];
    for (let i = 1; i < 4; i++) {
      $(`#img${i}`).css({ "background-image": `url(./images/grade10_${i}.jpg)` });
      $(`#img${i} .img-dim-text`).text(img1Arr[i - 1]);
    }
  }

  for (let i = 1; i < 4; i++) {
    $(`#img${i}`).mouseenter(function () {
      $(`#img${i} .img-dim`).css({ visibility: "visible" });
    });
    $(`#img${i}`).mouseleave(function () {
      $(`#img${i} .img-dim`).css({ visibility: "hidden" });
    });
  }

  //grade9 슬라이드
  $(".grade9-img-wrap").slick({
    infinite: true,
    speed: 300,
    fade: true,
    cssEase: "linear",
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  });

  //what's on 슬라이드
  $(".what-img-wrap").slick({
    centerMode: true,
    slidesToShow: 3,
    initialSlide: 1,
    infinite: false,
    swipeToSlide: true,
    speed: 1300,
    nextArrow: $(".next"),
    prevArrow: $(".prev"),
    responsive: [
      {
        breakpoint: 1480,
        settings: {
          centerMode: false,
          slidesToShow: 2,
          variableWidth: true,
        },
      },
    ],
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
//map.js

spd = 200;
function move01() {
  $("#ko1").fadeIn(spd, function () {
    $(".kodot").fadeIn(spd, function () {
      $("#ko-line").fadeIn(spd, function () {
        $("#ko-line").css("height", "14.3%");
        $("#ko2,#ko3")
          .delay(500)
          .fadeIn(spd, function () {
            $(".ko-text").fadeIn(spd, function () {
              $(".line_1to2").attr("class", "line_1to2 dash01");
              move02();
            });
          });
      });
    });
  });
}
function move02() {
  $("#aust1")
    .delay(500)
    .fadeIn(spd, function () {
      $(".austdot").fadeIn(spd, function () {
        $("#aust-line").fadeIn(spd, function () {
          $("#aust-line").css("width", "6%");
          $("#aust2,#aust3")
            .delay(500)
            .fadeIn(spd, function () {
              $(".aust-text").fadeIn(spd, function () {
                $(".line_2to3").attr("class", "line_2to3 dash02");
                move03();
              });
            });
        });
      });
    });
}
function move03() {
  $("#france1")
    .delay(2000)
    .fadeIn(spd, function () {
      $(".francedot").fadeIn(spd, function () {
        $("#france-line1").fadeIn(spd, function () {
          $("#france-line1").css("width", "4%");
          $("#france-line2")
            .delay(500)
            .fadeIn(spd, function () {
              $("#france-line2").css("height", "32.8%");
              $("#france2,#france3")
                .delay(500)
                .fadeIn(spd, function () {
                  $(".france-text").fadeIn(spd, function () {});
                });
            });
        });
      });
    });
}

function move_11_01() {
  $("#mexico1")
    .delay(1000)
    .fadeIn(spd, function () {
      $(".mexicodot2").fadeIn(spd, function () {
        $("#mexico-line1").fadeIn(spd, function () {
          $("#mexico-line1").css("width", "19%");
          $("#mexico-line2")
            .delay(500)
            .fadeIn(spd, function () {
              $("#mexico-line2").css("height", "5.6%");
              $("#mexico2,#mexico3")
                .delay(500)
                .fadeIn(spd, function () {
                  $(".mexico-text").fadeIn(spd, function () {
                    $(".grade11-line_1to2").attr("class", "grade11-line_1to2 dash01");
                    move_11_02();
                  });
                });
            });
        });
      });
    });
}
function move_11_02() {
  $("#israel1")
    .delay(1500)
    .fadeIn(spd, function () {
      $(".israedot").fadeIn(spd, function () {
        $("#italy-line2").fadeIn(spd, function () {
          $("#italy-line2").css("height", "21%");
          $("#italy-line1")
            .delay(500)
            .fadeIn(spd, function () {
              $("#italy-line1").css("width", "10%");
              $("#israel2,#israel3")
                .delay(500)
                .fadeIn(spd, function () {
                  $(".israel-text").fadeIn(spd, function () {
                    $(".g11_line_2to3").attr("class", "g11_line_2to3 dash01");
                    move_11_03();
                  });
                });
            });
        });
      });
    });
}
function move_11_03() {
  $("#thai1")
    .delay(500)
    .fadeIn(spd, function () {
      $(".thaidot").fadeIn(spd, function () {
        $("#thai-line1").fadeIn(spd, function () {
          $("#thai-line1").css("width", "8%");
          $("#thai-line2")
            .delay(500)
            .fadeIn(spd, function () {
              $("#thai-line2").css("height", "15%");
              $("#thai2, #thai3")
                .delay(500)
                .fadeIn(spd, function () {
                  $(".thai-text").fadeIn(spd, function () {
                    $(".g11_line_3to4").attr("class", "g11_line_3to4 dash01");
                  });
                });
            });
        });
      });
    });
}

function move_12_01() {
  $("#usa1,#usa5")
    .delay(1000)
    .fadeIn(spd, function () {
      $(".mexicodot1").fadeIn(spd, function () {
        $("#usa-line3").fadeIn(spd, function () {
          $("#usa-line3").css("height", "10%");
          $("#usa-line2")
            .delay(500)
            .fadeIn(spd, function () {
              $("#usa-line2").css("width", "5%");
              $("#usa-line1")
                .delay(500)
                .fadeIn(spd, function () {
                  $("#usa-line1").css("height", "6%");
                  $("#usa2,#usa3")
                    .delay(500)
                    .fadeIn(spd, function () {
                      $(".usa-text").fadeIn(spd, function () {
                        $(".g12_line_1to2").attr("class", "g12_line_1to2 dash01");
                        move_12_03();
                      });
                    });
                });
            });
        });
      });
    });
}

function move_12_03() {
  $("#kenya1")
    .delay(1600)
    .fadeIn(spd, function () {
      $(".kenyadot").fadeIn(spd, function () {
        $("#kenya-line1").fadeIn(100, function () {
          $("#kenya-line1").css("height", "17.3%");
          $("#kenya-line2")
            .delay(500)
            .fadeIn(spd, function () {
              $("#kenya-line2").css("width", "4%");
              $("#kenya2,#kenya3")
                .delay(500)
                .fadeIn(spd, function () {
                  $(".kenya-text").fadeIn(100, function () {
                    $(".g12_line_3to4").attr("class", "g12_line_3to4 dash02");
                    move_12_04();
                  });
                });
            });
        });
      });
    });
}
function move_12_04() {
  $("#czech1")
    .delay(1600)
    .fadeIn(spd, function () {
      $(".czechdot").fadeIn(spd, function () {
        $("#czech-line1").fadeIn(spd, function () {
          $("#czech-line1").css("height", "17.6%");
          $("#czech-line2")
            .delay(500)
            .fadeIn(spd, function () {
              $("#czech-line2").css("width", "11%");
              $("#czech2,#czech3")
                .delay(500)
                .fadeIn(spd, function () {
                  $(".czech-text").fadeIn(spd, function () {});
                });
            });
        });
      });
    });
}
