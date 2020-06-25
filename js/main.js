(function () {
  "use strict";

  console.log(' _______   _______     ___      .__   __. \n' +
    '|       \\ |   ____|   /   \\     |  \\ |  | \n' +
    '|  .--.  ||  |__     /  ^  \\    |   \\|  | \n' +
    '|  |  |  ||   __|   /  /_\\  \\   |  . `  | \n' +
    '|  \'--\'  ||  |____ /  _____  \\  |  |\\   | \n' +
    '|_______/ |_______/__/     \\__\\ |__| \\__| \n' +
    '                                          ')
  console.log('Github : https://github.io/bisu8018')
  console.log('Linkedin : https://www.linkedin.com/in/%ED%9D%AC%EC%9A%A9-%EB%B0%95-836022169/')
  console.log('Velog : https://velog.io/@bisu8018')
  console.log('Email (Naver) : bisu8018@naver.com')
  console.log('Email (Gmail) : nabidarang@gmail.com')

  $(function () {
    let nameContainer = $("#nameContainer")
    let positionContainer = $("#positionContainer")
    nameContainer.html(nameContainer.text().replace(/./g, "<span>$&</span>").replace(/\s/g, "&nbsp;"));
    positionContainer.html(positionContainer.text().replace(/./g, "<span>$&</span>").replace(/\s/g, "&nbsp;"));
  });
})();
