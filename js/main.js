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


  // ===============================
  // ======= Three.js script =======
  // ===============================

  let scene = new THREE.Scene();
  let camera = new THREE.PerspectiveCamera(100, window.innerWidth / window.innerHeight, 1, 100000);
  let renderer = new THREE.WebGLRenderer({antialias: true, alpha: true});
  let mouseX = 0, mouseY = 0;
  let limitCameraAngle = 20;
  let windowHalfX = window.innerWidth / 2;
  let windowHalfY = window.innerHeight / 2;


  // Render Lock Mesh
  const getLockMashes = function () {
//81359a
//3e4fd2
    //
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
  }


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

    let box1_line1 = new THREE.Line(geometry, material)
    let box1_line2 = new THREE.Line(geometry2, material2)
    let box1_line3 = new THREE.Line(geometry3, material3)
    let box1_line4 = new THREE.Line(geometry4, material4)

    let box2_line1 = new THREE.Line(geometry, material)
    let box2_line2 = new THREE.Line(geometry2, material2)
    let box2_line3 = new THREE.Line(geometry3, material3)
    let box2_line4 = new THREE.Line(geometry4, material4)

    let box3_line1 = new THREE.Line(geometry, material)
    let box3_line2 = new THREE.Line(geometry2, material2)
    let box3_line3 = new THREE.Line(geometry3, material3)
    let box3_line4 = new THREE.Line(geometry4, material4)

    box1_line1.position.set(-length*2.5 , 0, -length*2.5);
    box1_line2.position.set(-length*2.5 , 0, -length*2.5);
    box1_line3.position.set(-length*2.5 , 0, -length*2.5);
    box1_line4.position.set(-length*2.5 , 0, -length*2.5);

    box2_line1.position.set(length*2.5 , 0, -length*2.5);
    box2_line2.position.set(length*2.5 , 0, -length*2.5);
    box2_line3.position.set(length*2.5 , 0, -length*2.5);
    box2_line4.position.set(length*2.5 , 0, -length*2.5);

    box3_line1.position.set(0 , 0, length*2.5);
    box3_line2.position.set(0 , 0, length*2.5);
    box3_line3.position.set(0 , 0, length*2.5);
    box3_line4.position.set(0 , 0, length*2.5);

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
      -length*1.5, length*0.1, -length*2.5,
      length*1.5, length*0.1, -length*2.5,
    );
    positionChain2.push(
      -length*2.5, length*0.1, -length*1.5,
      -length, 0, length*2.5,
    );
    positionChain3.push(
      length*2.5, length*0.1, -length*1.5,
      length, 0, length*2.5,
    );

    geometryChain1.setAttribute('position', new THREE.Float32BufferAttribute(positionChain1, 3));
    geometryChain2.setAttribute('position', new THREE.Float32BufferAttribute(positionChain2, 3));
    geometryChain3.setAttribute('position', new THREE.Float32BufferAttribute(positionChain3, 3));

    let chain1 = new THREE.Line(geometryChain1, materialChain1)
    let chain2 = new THREE.Line(geometryChain2, materialChain2)
    let chain3 = new THREE.Line(geometryChain3, materialChain3)

    scene.add(chain1);
    scene.add(chain2);
    scene.add(chain3);
  }


  const render = function () {
    if (camera.position.x >= limitCameraAngle && mouseX < 0)
      camera.position.x = limitCameraAngle
    else if (camera.position.x >= limitCameraAngle && mouseX >= 0)
      camera.position.x += (-mouseX - camera.position.x) * .003;
    else if (camera.position.x <= -limitCameraAngle && mouseX > 0)
      camera.position.x = -limitCameraAngle
    else if (camera.position.x <= -limitCameraAngle && mouseX <= 0)
      camera.position.x += (-mouseX - camera.position.x) * .003;
    else
      camera.position.x += (-mouseX - camera.position.x) * .003;

    if (camera.position.y >= limitCameraAngle && -mouseY < 0)
      camera.position.y = limitCameraAngle
    else if (camera.position.y >= limitCameraAngle && -mouseY >= 0)
      camera.position.y += (mouseY - camera.position.y) * .003;
    else if (camera.position.y <= -limitCameraAngle && -mouseY > 0)
      camera.position.y = -limitCameraAngle
    else if (camera.position.y <= -limitCameraAngle && -mouseY <= 0)
      camera.position.y += (mouseY - camera.position.y) * .003;
    else
      camera.position.y += (mouseY - camera.position.y) * .003;

    camera.lookAt(scene.position);

    renderer.render(scene, camera);
  }


  const animate = function () {
    requestAnimationFrame(animate);

    render()
  }


  const onDocumentMouseMove = function (event) {
    mouseX = (event.clientX - windowHalfX);
    mouseY = (event.clientY - windowHalfY);
  }


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
  }


  // ===============================
  // ======== JQUERY script ========
  // ===============================

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


    const clearThreeScene = function () {
      while (scene.children.length > 0) {
        scene.remove(scene.children[0]);
      }
    }


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

    const setShowingThree = function () {
      switch (currentSlide) {
        case 2 :
        case 3 :
        case 4 :
        case 5 :
          $("#threeContainer").css({"opacity": "1"});
          break;


        default :
          $("#threeContainer").css({"opacity": "0"});
          break;
      }
    }

    const setThreeRender = function () {

      switch (currentSlide) {
        case 2 :
          clearThreeScene()
          getLockMashes()
          break;

        case 3 :
          clearThreeScene()
          getCoinMashes()
          break;

        case 4 :
          clearThreeScene()
          getLockMashes()
          break;

        case 5 :
          clearThreeScene()
          getLockMashes()
          break;
      }
    }


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
      setThreeRender();
      stopAnimation();
      hideNav();
      selectNav();
      setDummy();
      setLogo();
      setShowingThree();
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

      setAddEventListener();
      if (APP_CONFIG.debug) console.log("SET ADD EVENT LISTENER");

      setDummy();
      if (APP_CONFIG.debug) console.log("SET DUMMY");

      setLogo();
      if (APP_CONFIG.debug) console.log("SET LOGO");

      setShowingThree();
      if (APP_CONFIG.debug) console.log("SET 3D CONTAINER SHOW");

      setWheelGuide();
      if (APP_CONFIG.debug) console.log("SET WHEEL GUIDE");
    };


    // ===== site Initialize =====
    init();


    // ===== jQuery Element Event =====
    $("header").click(function () {
      currentSlide = 0;
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
