const APP_CONFIG = {
  debug: false
};


(function () {
  "use strict";

  console.log('\n' +
    ' _______   _______     ___       __   __  \n' +
    '|       \\ |   ____|   /   \\     |  \\ |  | \n' +
    '|  .--.  ||  |__     /  ^  \\    |   \\|  | \n' +
    '|  |  |  ||   __|   /  /_\\  \\   |  . `  | \n' +
    '|  \'--\'  ||  |____ /  _____  \\  |  |\\   | \n' +
    '|_______/ |_______/__/     \\__\\ |__| \\__| \n\n\n');
  console.log('[Github] \nhttps://github.io/bisu8018');
  console.log('[Linkedin]\nhttps://www.linkedin.com/in/%ED%9D%AC%EC%9A%A9-%EB%B0%95-836022169/');
  console.log('[Velog]\nhttps://velog.io/@bisu8018');
  console.log('[Email - Naver] \nbisu8018@naver.com');
  console.log('[Email - Gmail] \nnabidarang@gmail.com');


  // JQUERY script
  $(function () {
    let selector = ".section";
    let $slides = $(selector);
    let currentSlide = Math.floor($(document).scrollTop() / $(window).outerHeight());
    let isAnimating = false;

    const stopAnimation = function () {
      setTimeout(function () {
        isAnimating = false;
      }, 300);
    };

    const getCollectNumber = function (currentSlide) {
      switch (currentSlide) {
        case 0:
        case 1:
          return currentSlide;

        case 2:
        case 3:
        case 4:
        case 5:
          return 2;

        default:
          return 3
      }
    };

    const selectNav = function () {
      $(".nav_wrapper div").removeClass("nav_clicked");
      $(".nav_wrapper>div:nth-child(" +
        Number(getCollectNumber(currentSlide) + 1)
        + ")").addClass("nav_clicked");
    };

    const hideNav = function () {
      $("#nav").css({"opacity": (currentSlide === 0 ? "0" : "1")})
    };

    const setDummy = function () {
      if (currentSlide === 0 || currentSlide === 1)
        $("#dummyBase").css({"background": $("#dummy_1").css("background")})
      else if (currentSlide === 2 || currentSlide === 3 || currentSlide === 4 || currentSlide === 5)
        $("#dummyBase").css({"background": $("#dummy_3").css("background")})

      for (let i = 1; i <= $(".dummy").length - 1; ++i) {
        $("#dummy_" + i).css({"opacity": "0"});
      }

      $("#dummy_" + Number(currentSlide + 1)).css({"opacity": "1"});
    };

    const setLogo = function () {
      switch (currentSlide) {
        case 0 :
          $(".h_logo div:first-child").css({"opacity": "1"});
          $(".h_logo div:last-child").css({"opacity": "0"});
          break;

        case 1 :
        default :
          $(".h_logo div:first-child").css({"opacity": "0"});
          $(".h_logo div:last-child").css({"opacity": "1"});
          break;
      }
    };

    const setWheelGuide = function () {
      switch (currentSlide) {
        case 0 :
          $(".mouse_scroll").css({"display": "block"});
          setTimeout(function () {
            $(".mouse_scroll").css({"opacity": "1"});
          }, 500);
          break;

        case 1 :
        default :
          $(".mouse_scroll").css({"opacity": "0"});
          setTimeout(function () {
            $(".mouse_scroll").css({"display": "none"});
          }, 500);
          break;
      }
    };

    const checkAnimation = function () {
      stopAnimation();
      hideNav();
      selectNav();
      setDummy();
      setLogo();
      setWheelGuide();
    };

    const bottomIsReached = function ($elem) {
      let rect = $elem[0].getBoundingClientRect();

      return rect.bottom <= $(window).height();
    };

    const topIsReached = function ($elem) {
      let rect = $elem[0].getBoundingClientRect();

      return rect.top >= 0;
    };

    const setProfileStyle = function () {
      let nameContainer = $("#nameContainer");
      let positionContainer = $("#positionContainer");

      nameContainer.html(nameContainer.text().replace(/./g, "<span>$&</span>").replace(/\s/g, "&nbsp;"));
      positionContainer.html(positionContainer.text().replace(/./g, "<span>$&</span>").replace(/\s/g, "&nbsp;"));
    };

    const scrollToTop = function () {
      let $slide = $($slides[currentSlide]);
      let offsetTop = $slide.offset().top;

      isAnimating = true;

      $("html, body").animate(
        {
          scrollTop: offsetTop
        },
        1000,
        checkAnimation
      );
    };

    const addEventListener = {
      wheel: function () {
        document.addEventListener(
          "wheel",
          function (event) {
            let $currentSlide = $($slides[currentSlide]);

            if (isAnimating) {
              event.preventDefault();
              return;
            }

            let directionY = -event.deltaY;

            if (directionY < 0) {
              // next
              if (currentSlide + 1 >= $slides.length) return;
              if (!bottomIsReached($currentSlide)) return;

              event.preventDefault();
              currentSlide++;

              scrollToTop();
            } else {
              // back
              if (currentSlide - 1 < 0) return;
              if (!topIsReached($currentSlide)) return;

              event.preventDefault();
              currentSlide--;

              scrollToTop();
            }
          },
          {passive: false}
        )
      }
    };

    const setAddEventListener = function () {
      addEventListener.wheel();
    };

    const init = function () {
      if (APP_CONFIG.debug) console.log("\n\n============\nSTART INIT");

      setProfileStyle();
      if (APP_CONFIG.debug) console.log("SET PROFILE STYLED");

      selectNav();
      if (APP_CONFIG.debug) console.log("SET NAV SELECTED");

      hideNav();
      if (APP_CONFIG.debug) console.log("SET NAV HIDE");

      setAddEventListener();
      if (APP_CONFIG.debug) console.log("SET ADD EVENT LISTENER");

      setDummy();
      if (APP_CONFIG.debug) console.log("SET DUMMY");

      setLogo();
      if (APP_CONFIG.debug) console.log("SET LOGO");

      setWheelGuide();
      if (APP_CONFIG.debug) console.log("SET WHEEL GUIDE");
    };

    init();

    $("#navHome").click(function () {
      currentSlide = 0;
      scrollToTop();
    });

    $("#navAbout").click(function () {
      currentSlide = 1;
      scrollToTop();
    });

    $("#navProject").click(function () {
      currentSlide = 2;
      scrollToTop();
    });

    $("#navContact").click(function () {
      currentSlide = 6;
      scrollToTop();
    });

  });
})(jQuery);
