const APP_CONFIG = {
  debug: false,
  github: 'https://github.com/bisu8018',
  linkedin: 'https://www.linkedin.com/in/%ED%9D%AC%EC%9A%A9-%EB%B0%95-836022169/',
  velog: 'https://velog.io/@bisu8018',
  email: 'dean.huiyong.park@gmail.com'
};


(function () {
  "use strict";

  console.log('\n' +
    ' _______   _______     ___       __   __  \n' +
    '|       \\ |   ____|   /   \\     |  \\ |  | \n' +
    '|  .--.  ||  |__     /  ^  \\    |   \\|  | \n' +
    '|  |  |  ||   __|   /  /_\\  \\   |  . `  | \n' +
    '|  \'--\'  ||  |____ /  _____  \\  |  |\\   | \n' +
    '|_______/ |_______/__/     \\__\\ |__| \\__| \n\n\n' +
    '[Github]\n' + APP_CONFIG.github +
    '\n\n[Linkedin]\n' + APP_CONFIG.linkedin +
    '\n\n[Velog]\n' + APP_CONFIG.velog +
    '\n\n[Email - Gmail]\n' + APP_CONFIG.email
  );


  // ===============================
  // ======= Three.js script =======
  // ===============================

  let scene = new THREE.Scene();
  let camera = new THREE.PerspectiveCamera(90, window.innerWidth / window.innerHeight, 1, 100000);
  let renderer = new THREE.WebGLRenderer({antialias: true, alpha: true});
  let mouseX = 0, mouseY = 0;
  let limitCameraAngle = 20;
  let windowHalfX = window.innerWidth / 2;
  let windowHalfY = window.innerHeight / 2;


  // Render Lock Mesh
  const getLockMashes = function () {
    // body of lock
    let material = new THREE.LineBasicMaterial({color: 0xffffff});
    let material2 = new THREE.LineBasicMaterial({color: 0xffffff});
    let material3 = new THREE.LineBasicMaterial({color: 0xffffff});
    let material4 = new THREE.LineBasicMaterial({color: 0xffffff});
    let geometry = new THREE.BufferGeometry();
    let geometry2 = new THREE.BufferGeometry();
    let geometry3 = new THREE.BufferGeometry();
    let geometry4 = new THREE.BufferGeometry();
    let position = [];
    let position2 = [];
    let position3 = [];
    let position4 = [];

    let width = 8;
    let height = 6;
    let depth = 2;


    position.push(
      -width, -height, -depth,
      -width, height, -depth,

      -width, height, -depth,
      width, height, -depth,

      width, height, -depth,
      width, -height, -depth,

      width, -height, -depth,
      -width, -height, -depth,

      -width, -height, depth,
      -width, height, depth,

      -width, height, depth,
      width, height, depth,

      -width, height, depth,
      width, height, depth,

      width, height, depth,
      width, -height, depth,

      width, -height, depth,
      -width, -height, depth,

      -width, -height, -depth,
      -width, -height, depth,
    );
    position2.push(
      -width, height, -depth,
      -width, height, depth,
    );
    position3.push(
      width, height, -depth,
      width, height, depth,
    );
    position4.push(
      width, -height, -depth,
      width, -height, depth
    );

    geometry.setAttribute('position', new THREE.Float32BufferAttribute(position, 3));
    geometry2.setAttribute('position', new THREE.Float32BufferAttribute(position2, 3));
    geometry3.setAttribute('position', new THREE.Float32BufferAttribute(position3, 3));
    geometry4.setAttribute('position', new THREE.Float32BufferAttribute(position4, 3));

    scene.add(new THREE.Line(geometry, material));
    scene.add(new THREE.Line(geometry2, material2));
    scene.add(new THREE.Line(geometry3, material3));
    scene.add(new THREE.Line(geometry4, material4));


    // ring of lock
    let geometryRing = new THREE.TorusBufferGeometry(6, 1.3, 5, 10, 3.2);
    let materialRing = new THREE.MeshBasicMaterial({color: 0xffffff, wireframe: true});
    let torus = new THREE.Mesh(geometryRing, materialRing);
    torus.position.set(0, 6, 0);
    scene.add(torus);

    // key hole
    let geometryKeyHole = new THREE.CircleBufferGeometry(1.3, 15);
    let geometryKeyHoleBody = new THREE.CircleBufferGeometry(2, 0, 1.57);
    let materialKeyHole = new THREE.MeshBasicMaterial({color: 0xffffff, wireframe: true});
    let circle = new THREE.Mesh(geometryKeyHole, materialKeyHole);
    let triangle = new THREE.Mesh(geometryKeyHoleBody, materialKeyHole);
    circle.position.set(0, 0, 3);
    triangle.position.set(0, -2.5, 3);
    scene.add(circle);
    scene.add(triangle);
  };


  // Render Blockchain Mesh
  const getCoinMashes = function () {
    // Box
    let material = new THREE.LineBasicMaterial({color: 0xffffff});
    let material2 = new THREE.LineBasicMaterial({color: 0xffffff});
    let material3 = new THREE.LineBasicMaterial({color: 0xffffff});
    let material4 = new THREE.LineBasicMaterial({color: 0xffffff});
    let geometry = new THREE.BufferGeometry();
    let geometry2 = new THREE.BufferGeometry();
    let geometry3 = new THREE.BufferGeometry();
    let geometry4 = new THREE.BufferGeometry();
    let position = [];
    let position2 = [];
    let position3 = [];
    let position4 = [];

    let length = 3;


    position.push(
      -length, -length, -length,
      -length, length, -length,

      -length, length, -length,
      length, length, -length,

      length, length, -length,
      length, -length, -length,

      length, -length, -length,
      -length, -length, -length,

      -length, -length, length,
      -length, length, length,

      -length, length, length,
      length, length, length,

      -length, length, length,
      length, length, length,

      length, length, length,
      length, -length, length,

      length, -length, length,
      -length, -length, length,

      -length, -length, -length,
      -length, -length, length,
    );
    position2.push(
      -length, length, -length,
      -length, length, length,
    );
    position3.push(
      length, length, -length,
      length, length, length,
    );
    position4.push(
      length, -length, -length,
      length, -length, length
    );

    geometry.setAttribute('position', new THREE.Float32BufferAttribute(position, 3));
    geometry2.setAttribute('position', new THREE.Float32BufferAttribute(position2, 3));
    geometry3.setAttribute('position', new THREE.Float32BufferAttribute(position3, 3));
    geometry4.setAttribute('position', new THREE.Float32BufferAttribute(position4, 3));

    let box1_line1 = new THREE.Line(geometry, material);
    let box1_line2 = new THREE.Line(geometry2, material2);
    let box1_line3 = new THREE.Line(geometry3, material3);
    let box1_line4 = new THREE.Line(geometry4, material4);

    let box2_line1 = new THREE.Line(geometry, material);
    let box2_line2 = new THREE.Line(geometry2, material2);
    let box2_line3 = new THREE.Line(geometry3, material3);
    let box2_line4 = new THREE.Line(geometry4, material4);

    let box3_line1 = new THREE.Line(geometry, material);
    let box3_line2 = new THREE.Line(geometry2, material2);
    let box3_line3 = new THREE.Line(geometry3, material3);
    let box3_line4 = new THREE.Line(geometry4, material4);

    box1_line1.position.set(-length * 2.5, 0, -length * 2.5);
    box1_line2.position.set(-length * 2.5, 0, -length * 2.5);
    box1_line3.position.set(-length * 2.5, 0, -length * 2.5);
    box1_line4.position.set(-length * 2.5, 0, -length * 2.5);

    box2_line1.position.set(length * 2.5, 0, -length * 2.5);
    box2_line2.position.set(length * 2.5, 0, -length * 2.5);
    box2_line3.position.set(length * 2.5, 0, -length * 2.5);
    box2_line4.position.set(length * 2.5, 0, -length * 2.5);

    box3_line1.position.set(0, 0, length * 2.5);
    box3_line2.position.set(0, 0, length * 2.5);
    box3_line3.position.set(0, 0, length * 2.5);
    box3_line4.position.set(0, 0, length * 2.5);

    scene.add(box1_line1);
    scene.add(box1_line2);
    scene.add(box1_line3);
    scene.add(box1_line4);

    scene.add(box2_line1);
    scene.add(box2_line2);
    scene.add(box2_line3);
    scene.add(box2_line4);

    scene.add(box3_line1);
    scene.add(box3_line2);
    scene.add(box3_line3);
    scene.add(box3_line4);

    // Chain
    let materialChain1 = new THREE.LineBasicMaterial({color: 0xffffff});
    let materialChain2 = new THREE.LineBasicMaterial({color: 0xffffff});
    let materialChain3 = new THREE.LineBasicMaterial({color: 0xffffff});
    let geometryChain1 = new THREE.BufferGeometry();
    let geometryChain2 = new THREE.BufferGeometry();
    let geometryChain3 = new THREE.BufferGeometry();
    let positionChain1 = [];
    let positionChain2 = [];
    let positionChain3 = [];

    positionChain1.push(
      -length * 1.5, length * 0.1, -length * 2.5,
      length * 1.5, length * 0.1, -length * 2.5,
    );
    positionChain2.push(
      -length * 2.5, length * 0.1, -length * 1.5,
      -length, 0, length * 2.5,
    );
    positionChain3.push(
      length * 2.5, length * 0.1, -length * 1.5,
      length, 0, length * 2.5,
    );

    geometryChain1.setAttribute('position', new THREE.Float32BufferAttribute(positionChain1, 3));
    geometryChain2.setAttribute('position', new THREE.Float32BufferAttribute(positionChain2, 3));
    geometryChain3.setAttribute('position', new THREE.Float32BufferAttribute(positionChain3, 3));

    let chain1 = new THREE.Line(geometryChain1, materialChain1);
    let chain2 = new THREE.Line(geometryChain2, materialChain2);
    let chain3 = new THREE.Line(geometryChain3, materialChain3);

    scene.add(chain1);
    scene.add(chain2);
    scene.add(chain3);
  };


  // Render Document Mesh
  const getDocumentMashes = function () {
    // document
    let material = new THREE.LineBasicMaterial({color: 0xffffff});
    let geometry = new THREE.BufferGeometry();
    let position = [];

    let width = 10;
    let height = 14;
    let depth = 0.5;


    position.push(
      -width, -height, -depth,
      -width, height, -depth,

      -width, height, -depth,
      width, height, -depth,

      width, height, -depth,
      width, -height, -depth,

      width, -height, -depth,
      -width, -height, -depth,

      -width, -height, depth,
      -width, height, depth,

      -width, height, depth,
      width, height, depth,

      -width, height, depth,
      width, height, depth,

      width, height, depth,
      width, -height, depth,

      width, -height, depth,
      -width, -height, depth,

      -width, -height, -depth,
      -width, -height, depth,
    );

    geometry.setAttribute('position', new THREE.Float32BufferAttribute(position, 3));

    scene.add(new THREE.Line(geometry, material));

    // Line
    let materialLine1 = new THREE.LineBasicMaterial({color: 0xffffff});
    let materialLine2 = new THREE.LineBasicMaterial({color: 0xffffff});
    let materialLine3 = new THREE.LineBasicMaterial({color: 0xffffff});
    let materialLine4 = new THREE.LineBasicMaterial({color: 0xffffff});
    let geometryLine1 = new THREE.BufferGeometry();
    let geometryLine2 = new THREE.BufferGeometry();
    let geometryLine3 = new THREE.BufferGeometry();
    let geometryLine4 = new THREE.BufferGeometry();
    let positionLine1 = [];
    let positionLine2 = [];
    let positionLine3 = [];
    let positionLine4 = [];

    positionLine1.push(
      -width * 0.8, height * 0.7, depth,
      width * 0.8, height * 0.7, depth
    );
    positionLine2.push(
      -width * 0.8, height * 0.5, depth,
      width * 0.8, height * 0.5, depth
    );
    positionLine3.push(
      -width * 0.8, height * 0.3, depth,
      width * 0.8, height * 0.3, depth
    );
    positionLine4.push(
      -width * 0.8, height * 0.1, depth,
      width * 0.8, height * 0.1, depth
    );

    geometryLine1.setAttribute('position', new THREE.Float32BufferAttribute(positionLine1, 3));
    geometryLine2.setAttribute('position', new THREE.Float32BufferAttribute(positionLine2, 3));
    geometryLine3.setAttribute('position', new THREE.Float32BufferAttribute(positionLine3, 3));
    geometryLine4.setAttribute('position', new THREE.Float32BufferAttribute(positionLine4, 3));

    let line1 = new THREE.Line(geometryLine1, materialLine1);
    let line2 = new THREE.Line(geometryLine2, materialLine2);
    let line3 = new THREE.Line(geometryLine3, materialLine3);
    let line4 = new THREE.Line(geometryLine4, materialLine4);

    scene.add(line1);
    scene.add(line2);
    scene.add(line3);
    scene.add(line4);
  };


  // Render Mail Mesh
  const getMailMashes = function () {
    // mail
    let material = new THREE.LineBasicMaterial({color: 0xffffff});
    let geometry = new THREE.BufferGeometry();
    let position = [];

    let width = 10;
    let height = 6;
    let depth = 0.5;


    position.push(
      -width, -height, -depth,
      -width, height, -depth,

      -width, height, -depth,
      width, height, -depth,

      width, height, -depth,
      width, -height, -depth,

      width, -height, -depth,
      -width, -height, -depth,

      -width, -height, depth,
      -width, height, depth,

      -width, height, depth,
      width, height, depth,

      -width, height, depth,
      width, height, depth,

      width, height, depth,
      width, -height, depth,

      width, -height, depth,
      -width, -height, depth,

      -width, -height, -depth,
      -width, -height, depth,
    );

    geometry.setAttribute('position', new THREE.Float32BufferAttribute(position, 3));

    scene.add(new THREE.Line(geometry, material));

    // Line
    let materialLine1 = new THREE.LineBasicMaterial({color: 0xffffff});
    let materialLine2 = new THREE.LineBasicMaterial({color: 0xffffff});
    let geometryLine1 = new THREE.BufferGeometry();
    let geometryLine2 = new THREE.BufferGeometry();
    let positionLine1 = [];
    let positionLine2 = [];

    positionLine1.push(
      -width, height, depth,
      0, -height * 0.25, depth
    );
    positionLine2.push(
      width, height, depth,
      0, -height * 0.25, depth
    );

    geometryLine1.setAttribute('position', new THREE.Float32BufferAttribute(positionLine1, 3));
    geometryLine2.setAttribute('position', new THREE.Float32BufferAttribute(positionLine2, 3));

    let line1 = new THREE.Line(geometryLine1, materialLine1);
    let line2 = new THREE.Line(geometryLine2, materialLine2);

    scene.add(line1);
    scene.add(line2);
  };


  const render = function () {
    if (camera.position.x >= limitCameraAngle && mouseX < 0)
      camera.position.x = limitCameraAngle;
    else if (camera.position.x >= limitCameraAngle && mouseX >= 0)
      camera.position.x += (-mouseX - camera.position.x) * .003;
    else if (camera.position.x <= -limitCameraAngle && mouseX > 0)
      camera.position.x = -limitCameraAngle;
    else if (camera.position.x <= -limitCameraAngle && mouseX <= 0)
      camera.position.x += (-mouseX - camera.position.x) * .003;
    else
      camera.position.x += (-mouseX - camera.position.x) * .003;

    if (camera.position.y >= limitCameraAngle && -mouseY < 0)
      camera.position.y = limitCameraAngle;
    else if (camera.position.y >= limitCameraAngle && -mouseY >= 0)
      camera.position.y += (mouseY - camera.position.y) * .003;
    else if (camera.position.y <= -limitCameraAngle && -mouseY > 0)
      camera.position.y = -limitCameraAngle;
    else if (camera.position.y <= -limitCameraAngle && -mouseY <= 0)
      camera.position.y += (mouseY - camera.position.y) * .003;
    else
      camera.position.y += (mouseY - camera.position.y) * .003;

    camera.lookAt(scene.position);

    renderer.render(scene, camera);
  };


  const animate = function () {
    requestAnimationFrame(animate);

    render()
  };


  const onDocumentMouseMove = function (event) {
    mouseX = (event.clientX - windowHalfX);
    mouseY = (event.clientY - windowHalfY);
  };


  function onWindowResize() {
    windowHalfX = window.innerWidth / 2;
    windowHalfY = window.innerHeight / 2;

    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();

    renderer.setSize(window.innerWidth, window.innerHeight);
  }


  const initThreeJs = function () {
    camera.position.set(0, 0, 40);
    camera.lookAt(0, 0, 0);

    renderer.setSize(window.innerWidth, window.innerHeight);

    document.getElementById("threeContainer").appendChild(renderer.domElement);

    document.addEventListener('mousemove', onDocumentMouseMove, false);
    document.addEventListener('mousemove', onWindowResize, false);
  };


  // ===============================
  // ======== JQUERY script ========
  // ===============================

  $(function () {
    let selector = ".section";
    let $slides = $(selector);
    let currentSlide = Math.floor($(document).scrollTop() / $(window).outerHeight());
    let isAnimating = false;
    let isInit = false;
    let touchmoveStart = {x: 0, y: 0};
    let isTouchEnd = true;

    const stopAnimation = function () {
      setTimeout(function () {
        isAnimating = false;
      }, 650);
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


    const clearThreeScene = function () {
      while (scene.children.length > 0) {
        scene.remove(scene.children[0]);
      }
    };


    const selectNav = function () {
      $(".nav_wrapper div").removeClass("nav_clicked");
      $(".nav_wrapper>div:nth-child(" +
        Number(getCollectNumber(currentSlide) + 1)
        + ")").addClass("nav_clicked");
    };


    const hideNav = function () {
      $("#nav").css({"opacity": (currentSlide === 0 || currentSlide === 6 ? "0" : "1")})
    };


    const setDummy = function () {
      if (currentSlide === 0 || currentSlide === 1)
        $("#dummyBase").css({"background": $("#dummy_1").css("background")});
      else if (currentSlide === 2 || currentSlide === 3 || currentSlide === 4 || currentSlide === 5)
        $("#dummyBase").css({"background": $("#dummy_3").css("background")});
      else if (currentSlide === 6)
        $("#dummyBase").css({"background": $("#dummy_7").css("background")});

      for (let i = 1; i <= $(".dummy").length - 1; ++i) {
        $("#dummy_" + i).css({"opacity": "0"});
      }

      $("#dummy_" + Number(currentSlide + 1)).css({"opacity": "1"});
    };


    const setLogo = function () {
      if (currentSlide === 0) {
        $(".h_logo div:first-child").css({"opacity": "1"});
        $(".h_logo div:last-child").css({"opacity": "0"});
      } else {
        $(".h_logo div:first-child").css({"opacity": "0"});
        $(".h_logo div:last-child").css({"opacity": "1"});
      }
    };


    const showLang = function () {
      if (currentSlide === 0)
        $(".h_languageSelector").css({"opacity": "0"});
      else
        $(".h_languageSelector").css({"opacity": "1"});
    };

    const setShowingThree = function () {
      switch (currentSlide) {
        case 2 :
        case 3 :
        case 4 :
        case 5 :
          setTimeout(function () {
            $("#threeContainer").css({"opacity": "1"});
          }, 400);
          break;


        default :
          $("#threeContainer").css({"opacity": "0"});
          break;
      }
    };

    const setThreeRender = function () {
      $(".meshCanvas").css({"opacity": "0"});

      setTimeout(function () {
        switch (currentSlide) {
          case 2 :
            clearThreeScene();
            getDocumentMashes();
            break;

          case 3 :
            clearThreeScene();
            getCoinMashes();
            break;

          case 4 :
            clearThreeScene();
            getLockMashes();
            break;

          case 5 :
            clearThreeScene();
            getMailMashes();
            break;
        }
      }, 400)
    };


    const setWheelGuide = function () {
      switch (currentSlide) {
        case 0 :
          $("#mouseScrollContainer").css({"display": "block"});
          setTimeout(function () {
            $("#mouseScrollContainer").css({"opacity": "1"});
          }, 400);
          break;

        case 1 :
        default :
          $("#mouseScrollContainer").css({"opacity": "0"});
          setTimeout(function () {
            $("#mouseScrollContainer").css({"display": "none"});
          }, 400);
          break;
      }
    };


    const setToTopBtn = function () {
      switch (currentSlide) {
        case 6 :
          $("#toTopContainer").css({"display": "block"});
          setTimeout(function () {
            $("#toTopContainer").css({"opacity": "1"});
          }, 400);
          break;

        default :
          $("#toTopContainer").css({"opacity": "0"});
          setTimeout(function () {
            $("#toTopContainer").css({"display": "none"});
          }, 400);
          break;
      }
    };


    const checkAnimation = function () {
      setThreeRender();
      stopAnimation();
      hideNav();
      selectNav();
      setDummy();
      setLogo();
      showLang();
      setShowingThree();
      setWheelGuide();
      setToTopBtn();
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
        500,
        checkAnimation
      );
    };

    const scrollToOthers = function (event) {
      let $currentSlide = $($slides[currentSlide]);

      if (isAnimating || !isInit) {
        event.preventDefault();
        return;
      }

      let directionY = -event.deltaY;

      if (directionY < -20) {
        // next
        if (currentSlide + 1 >= $slides.length) return;
        if (!bottomIsReached($currentSlide)) return;

        event.preventDefault();
        currentSlide++;

        scrollToTop();
      } else if(directionY > 20) {
        // back
        if (currentSlide - 1 < 0) return;
        if (!topIsReached($currentSlide)) return;

        event.preventDefault();
        currentSlide--;

        scrollToTop();
      }
    };

    const touchMoveToOthers = function (event) {
      let $currentSlide = $($slides[currentSlide]);

      if (isAnimating || !isInit || isTouchEnd) {
        event.preventDefault();
        return;
      }

      let directionY = Number(event.touches[0].screenY - touchmoveStart.y);

      if (directionY < -20) {
        // next
        if (currentSlide + 1 >= $slides.length) return;
        if (!bottomIsReached($currentSlide)) return;

        isTouchEnd = true;
        event.preventDefault();
        currentSlide++;

        scrollToTop();
      } else if (directionY > 20) {
        // back
        if (currentSlide - 1 < 0) return;
        if (!topIsReached($currentSlide)) return;

        isTouchEnd = true;
        event.preventDefault();
        currentSlide--;

        scrollToTop();
      }
    };


    const addEventListener = {
      wheel: function () {
        document.addEventListener(
          "wheel",
          function (event) {
            scrollToOthers(event)
          },
          {passive: false}
        )
      },
      touchmove: function () {
        document.addEventListener(
          "touchmove",
          function (event) {
            touchMoveToOthers(event)
          },
          {passive: false}
        )
      },
      touchstart: function () {
        document.addEventListener(
          "touchstart",
          function (event) {
            isTouchEnd = false;
            touchmoveStart.y = event.touches[0].screenY;
          },
          {passive: false}
        )
      },
      resize: function () {
        window.onresize = function (event) {
          if (!isInit) drawLines();
        };
      }
    };

    const setWheelAddEventListener = function () {
      addEventListener.wheel();
    };

    const setTouchAddEventListener = function () {
      addEventListener.touchstart();
      addEventListener.touchmove();
    };

    const setResizeAddEventListener = function () {
      addEventListener.resize();
    };

    const getHeight = function () {
      return window.innerHeight
        || document.documentElement.clientHeight
        || document.body.clientHeight;
    };

    const drawLines = function () {
      const lines = document.getElementsByClassName('line');

      if (lines.length)
        for (let i = 0; i < lines.length; i++) {
          document.body.removeChild(lines[i]);
        }

      for (let i = 0; i < getHeight() / 10; i++) {
        const line = document.createElement("div");
        line.className = `line line-${i}`;
        line.style.top = `${i * 10}px`;
        const time = Math.random() * 5;
        line.style.animation = `lines ${time}s infinite`;
        $("#loadingDummy").append(line);
      }
    };

    const checkImgLoaded = function () {
      window.onload = function () {
        $('.loadingPage').css({'display': 'none'});
        $('.loadingDummy').css({'display': 'none'});

        isInit = true;
      };
    };

    const init = function () {
      if (APP_CONFIG.debug) console.log("\n\n============\nSTART INIT");

      drawLines();
      if (APP_CONFIG.debug) console.log("SET LOADING PAGE");

      setResizeAddEventListener();
      if (APP_CONFIG.debug) console.log("SET ADD RESIZE EVENT LISTENER");

      checkImgLoaded();
      if (APP_CONFIG.debug) console.log("SET CHECKING AVATAR LOADED");

      initThreeJs();
      animate();
      setThreeRender();
      if (APP_CONFIG.debug) console.log("SET 3D RENDERING");

      setProfileStyle();
      if (APP_CONFIG.debug) console.log("SET PROFILE STYLED");

      selectNav();
      if (APP_CONFIG.debug) console.log("SET NAV SELECTED");

      hideNav();
      if (APP_CONFIG.debug) console.log("SET NAV HIDE");

      setDummy();
      if (APP_CONFIG.debug) console.log("SET DUMMY");

      setLogo();
      if (APP_CONFIG.debug) console.log("SET LOGO");

      showLang();
      if (APP_CONFIG.debug) console.log("SET LANGUAGE SELECTOR SHOW");

      setShowingThree();
      if (APP_CONFIG.debug) console.log("SET 3D CONTAINER SHOW");

      setWheelGuide();
      if (APP_CONFIG.debug) console.log("SET WHEEL GUIDE");

      setToTopBtn();
      if (APP_CONFIG.debug) console.log("SET TO TOP BUTTON");

      setWheelAddEventListener();
      setTouchAddEventListener();
      if (APP_CONFIG.debug) console.log("SET ADD EVENT LISTENER");
    };


    // ===== site Initialize =====

    init();

    // ===== jQuery Element Event =====
    $(".h_logo").click(function () {
      currentSlide = 0;
      scrollToTop();
    });

    $("#toTopContainer div").click(function () {
      currentSlide = 0;
      scrollToTop();
    });

    $("#mouseScroll").click(function () {
      currentSlide = 1;
      scrollToTop();
    });

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
