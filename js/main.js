const APP_CONFIG = {
  debug: true
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
  console.log('[Email -Gmail] \nnabidarang@gmail.com');


  // JQUERY script
  $(function () {
    let selector = ".section";
    let $slides = $(selector);
    let currentSlide = Math.floor($(document).scrollTop() / $(window).outerHeight());
    let isAnimating = false;

    const stopAnimation = function (){
      setTimeout(function () {
        isAnimating = false;
      }, 300);
    }

    const selectNav = function () {
      $(".nav_wrapper div").removeClass("nav_clicked");
      $(".nav_wrapper>div:nth-child(" + Number(currentSlide + 1) + ")").addClass("nav_clicked");
    };

    const setDummy = function () {
      switch (currentSlide) {
        case 0 :
          $("#dummyFirst").css({"opacity": "1"});
          $("#dummySecond").css({"opacity": "0"});
          break;

        case 1 :
          $("#dummySecond").css({"opacity": "1"});
          $("#dummyFirst").css({"opacity": "0"});
          break;
      }
    };

    const setLogo = function () {
      switch (currentSlide) {
        case 0 :
          $(".h_logo div:first-child").css({"opacity": "1"});
          $(".h_logo div:last-child").css({"opacity": "0"});
          break;

        case 1 :
          $(".h_logo div:first-child").css({"opacity": "0"});
          $(".h_logo div:last-child").css({"opacity": "1"});
          break;
      }
    };

    const setWheelGuide = function () {
      switch (currentSlide) {
        case 0 :
          $(".mouse_scroll").css({"opacity": "1"});
          break;

        case 1 :
          $(".mouse_scroll").css({"opacity": "0"});
          break;
      }
    };

    const checkAnimation = function () {
      stopAnimation();
      selectNav();
      setDummy();
      setLogo();
      setWheelGuide();
    };

    const bottomIsReached = $elem => {
      let rect = $elem[0].getBoundingClientRect();

      return rect.bottom <= $(window).height();
    };

    const topIsReached = $elem => {
      let rect = $elem[0].getBoundingClientRect();

      return rect.top >= 0;
    };

    const setProfileStyle = function () {
      let nameContainer = $("#nameContainer");
      let positionContainer = $("#positionContainer");

      nameContainer.html(nameContainer.text().replace(/./g, "<span>$&</span>").replace(/\s/g, "&nbsp;"));
      positionContainer.html(positionContainer.text().replace(/./g, "<span>$&</span>").replace(/\s/g, "&nbsp;"));
    };

    const addEventListener = {
      wheel: function () {
        document.addEventListener(
          "wheel",
          (event) => {
            let $currentSlide = $($slides[currentSlide]);

            if (isAnimating) {
              event.preventDefault();
              return;
            }

            let direction = -event.deltaY;

            if (direction < 0) {
              // next
              if (currentSlide + 1 >= $slides.length) return;
              if (!bottomIsReached($currentSlide)) return;

              event.preventDefault();
              currentSlide++;

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
            } else {
              // back
              if (currentSlide - 1 < 0) return;
              if (!topIsReached($currentSlide)) return;

              event.preventDefault();
              currentSlide--;

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
  });
})(jQuery);
