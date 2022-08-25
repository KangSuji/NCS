$(document).ready(function () {
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
});
