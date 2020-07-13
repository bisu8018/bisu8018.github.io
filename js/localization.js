const strings = new Map([

  // about
  [
    'a-text-1',
    {
      KOR: 'IT 경영학을 전공하였고, 사업 개발과 상품 기획의 관점을 이해 할 수 있는 개발자 입니다.',
      ENG: 'I majored in IT Business Administration and is a developer who can understand the Business Development and Product Planning.'
    }
  ],
  [
    'a-text-2',
    {
      KOR: '이러한 관점은 산출물의 질과 팀 퍼포먼스를 높이는데 큰 도움을 주고 있습니다.',
      ENG: 'This perspective has been a great help in improving output quality and team performance.'
    }
  ],
  [
    'a-text-3',
    {
      KOR: '언젠가 인류 발전에 기여하는 솔루션을 만드는 것이 목표입니다.',
      ENG: 'My goal is to make a solution that contributes to the development of humanity someday.'
    }
  ],
  [
    'a-text-4',
    {
      KOR: '이를 위해 꾸준한 개발자가 되려 노력하고 있습니다.',
      ENG: 'That\'s why I\'m constantly trying to be a developer that doesn\'t stop developing.'
    }
  ],

  // project
  [
    'p_infraware',
    {
      KOR: '인프라웨어',
      ENG: 'infraware'
    }
  ],
  [
    'p_frontend_developer',
    {
      KOR: '프론트엔드 개발자',
      ENG: 'front-end developer'
    }
  ],
  [
    'p_infaraware_date',
    {
      KOR: '2019 - 현재',
      ENG: '2019 - present'
    }
  ],
  [
    'p_infaraware_subject',
    {
      KOR: 'React js 기반, Polaris Office 엄브렐라 브랜드 문서 공유 플랫폼 Polaris Share 구축 프로젝트, 프론트 엔드 개발 담당',
      ENG: 'Based on React.js, Polaris Office Umbrella brand document sharing platform Polaris Share building project, front-end development'
    }
  ],
  [
    'p_infaraware_list_1',
    {
      KOR: 'ES6 ~ Lodash, 모던 자바스크립트 실무 활용',
      ENG: 'ES6 ~ Lodash, using modern JavaScript practice'
    }
  ],
  [
    'p_infaraware_list_2',
    {
      KOR: 'React js + Express 및 Next js 기반 반응형 CSR/SSR SPA 구축',
      ENG: 'React js + Express and Next js based reactive CSR/SSR SPA construction'
    }
  ],
  [
    'p_infaraware_list_3',
    {
      KOR: 'GraphQL ~ Apollo Client 적용',
      ENG: 'Apply GraphQL ~ Apollo Client'
    }
  ],
  [
    'p_infaraware_list_4',
    {
      KOR: 'Webpack 빌드 시스템 구축 및 프로젝트 구조 설계',
      ENG: 'Webpack build system construction and project structure design'
    }
  ],
  [
    'p_infaraware_list_5',
    {
      KOR: 'JEST, Enzyme 기반 TDD 진행',
      ENG: 'JEST, Enzyme based TDD progress'
    }
  ],
  [
    'p_infaraware_list_6',
    {
      KOR: 'SEO, Open Graph, oEmbed 적용 및 관리',
      ENG: 'SEO, Open Graph, oEmbed application and management'
    }
  ],
  [
    'p_infaraware_list_7',
    {
      KOR: 'SCSS 전처리기 적용 및 폰트, Sprite 이미지 등 Asset 관리',
      ENG: 'Asset management such as font, sprite image, and SCSS preprocessor applied'
    }
  ],
  [
    'p_infaraware_list_8',
    {
      KOR: 'AWS (EC2, ECS, EKS, Lambda, blue/green 배포 등등) 및 Docker + Kubernetes 적용',
      ENG: 'AWS (EC2, ECS, EKS, Lambda, blue/green distribution, etc.) and Docker + Kubernetes applied'
    }
  ],
  [
    'p_infaraware_list_9',
    {
      KOR: '폴라리스 오피스 ~ 폴라리스 쉐어 웹뷰 SDK 연동, 클라이언트 개발 담당',
      ENG: 'Polaris Office ~ Polaris Share webview SDK integration, client development'
    }
  ],
  [
    'p_skills',
    {
      KOR: '사용 기술',
      ENG: 'skills'
    }
  ],
  [
    'p_github',
    {
      KOR: '깃허브',
      ENG: 'github'
    }
  ],
  [
    'p_jakin',
    {
      KOR: '제이킨',
      ENG: 'jakin'
    }
  ],
  [
    'p_jakin_frontend_developer',
    {
      KOR: '프론트엔드 개발자',
      ENG: 'front-end developer'
    }
  ],
  [
    'p_jakin_subject',
    {
      KOR: 'Vue js 기반, P2P 가상화폐 거래소 구축 프로젝트, 프론트 엔드 개발 담당',
      ENG: 'Vue.js based, P2P cryptocurrency exchange construction project, front-end development'
    }
  ],
  [
    'p_jakin_list_1',
    {
      KOR: 'Vue js 기반 반응형 SPA 구축',
      ENG: 'Vue.js based reactive SPA construction'
    }
  ],
  [
    'p_jakin_list_2',
    {
      KOR: 'Webpack 빌드 시스템 구축 및 유지보수',
      ENG: 'Webpack build system construction and maintenance'
    }
  ],
  [
    'p_jakin_list_3',
    {
      KOR: '백 엔드 API 기반, 테스트 코드 작성',
      ENG: 'Backend API based, test code writing'
    }
  ],
  [
    'p_jakin_list_4',
    {
      KOR: '프론트 엔드 성능 튜닝',
      ENG: 'Front-end performance tuning'
    }
  ],
  [
    'p_jakin_list_5',
    {
      KOR: '프론트 엔드 관련 기술 문서 작성',
      ENG: 'Creating technical documents related to the front-end'
    }
  ],
  [
    'p_jakin_list_6',
    {
      KOR: ' CSS 및 디자인 라이브러리 공통화 작업 진행',
      ENG: 'Common work for CSS and design library'
    }
  ],
  [
    'p_inca',
    {
      KOR: '잉카 인터넷',
      ENG: 'inca internet'
    }
  ],
  [
    'p_inca_position',
    {
      KOR: '보안 솔루션 엔지니어',
      ENG: 'security solution engineer'
    }
  ],
  [
    'p_inca_subject',
    {
      KOR: '자사 솔루션 nProtect, 고객사 측 서버/클라이언트 단 구축 및 관리',
      ENG: 'In-house solution nProtect, customer server/client deployment and management'
    }
  ],
  [
    'p_inca_list_1',
    {
      KOR: '하나금융투자',
      ENG: 'Hana Financial Investment'
    }
  ],
  [
    'p_inca_list_2',
    {
      KOR: '삼성선물',
      ENG: 'Samsung Futures'
    }
  ],
  [
    'p_inca_list_3',
    {
      KOR: '국민은행',
      ENG: 'Kookmin bank'
    }
  ],
  [
    'p_inca_list_4',
    {
      KOR: '저축은행중앙회',
      ENG: 'fsb'
    }
  ],
  [
    'p_inca_list_5',
    {
      KOR: '농협카드',
      ENG: 'Nonghyup Card'
    }
  ],
  [
    'p_inca_list_6',
    {
      KOR: 'vp',
      ENG: 'vp'
    }
  ],
  [
    'p_inca_list_7',
    {
      KOR: 'kcp',
      ENG: 'kcp'
    }
  ],
  [
    'p_inca_list_8',
    {
      KOR: '세종대학교',
      ENG: 'Sejong University'
    }
  ],
  [
    'p_inca_list_9',
    {
      KOR: '대구교육대학교',
      ENG: 'Daegu University of Education'
    }
  ],
  [
    'p_inca_list_10',
    {
      KOR: '롯데멤버스',
      ENG: 'Lotte Members'
    }
  ],
  [
    'p_inca_list_11',
    {
      KOR: '현대캐피탈',
      ENG: 'Hyundai Commercial'
    }
  ],
  [
    'p_inca_list_12',
    {
      KOR: '한국교육학술정보원',
      ENG: 'Keris'
    }
  ],
  [
    'p_inca_list_13',
    {
      KOR: '한국철도공사',
      ENG: 'Korail'
    }
  ],
  [
    'p_myems',
    {
      KOR: '마이이엠에스',
      ENG: 'myems'
    }
  ],
  [
    'p_myems_position',
    {
      KOR: '풀스택 개발자',
      ENG: 'full stack developer'
    }
  ],
  [
    'p_myems_subject',
    {
      KOR: 'B2B / Admin EMS 웹 플랫폼 구축',
      ENG: 'B2B / Admin EMS web platform construction'
    }
  ],
  [
    'p_myems_list_1',
    {
      KOR: 'Javascript. jQuery 기반, B2B EMS 시스템 페이지 구축',
      ENG: 'Javascript. jQuery based, B2B EMS web system developing'
    }
  ],
  [
    'p_myems_list_2',
    {
      KOR: '우체국 우정사업본부 개발팀 협업, 서버 데이터 및 DB API 연동 작업',
      ENG: 'Collaboration with Korea Post office, Woojung Business Headquarters, interworking with server data and DB API'
    }
  ],
  [
    'p_myems_list_3',
    {
      KOR: '오라클 MySQL, RDBMS',
      ENG: 'Oracle MySQL, RDBMS'
    }
  ],
  [
    'p_myems_list_4',
    {
      KOR: 'Android 기반, 택배기사 업무용 APP 유지보수',
      ENG: 'Android based, home delivery APP maintenance'
    }
  ],
  [
    'p_myems_list_5',
    {
      KOR: '롯데 글로벌로지스 협업, 정산 프로세스 개발 담당',
      ENG: 'Development collaboration with Lotte Global Logis, Settlement Process Web Development'
    }
  ],
  [
    'c_github',
    {
      KOR: '깃허브',
      ENG: 'github'
    }
  ],
  [
    'c_linkedin',
    {
      KOR: '링크드인',
      ENG: 'linkedin'
    }
  ],
  [
    'c_velog',
    {
      KOR: '벨로그',
      ENG: 'velog'
    }
  ],
  [
    'c_email',
    {
      KOR: '이메일',
      ENG: 'email'
    }
  ],
  [
    'p_react',
    {
      KOR: 'react.js',
      ENG: 'react.js'
    }
  ],
  [
    'p_graphql',
    {
      KOR: '그래프QL',
      ENG: 'graphql'
    }
  ],
  [
    'p_apollo',
    {
      KOR: '아폴로',
      ENG: 'apollo'
    }
  ],
  [
    'p_webpack',
    {
      KOR: '웹팩',
      ENG: 'webpack'
    }
  ],
  [
    'p_next',
    {
      KOR: 'next.js',
      ENG: 'next.js'
    }
  ],
  [
    'p_type',
    {
      KOR: '타입스크립트',
      ENG: 'typescript'
    }
  ],
  [
    'p_jest',
    {
      KOR: 'jest',
      ENG: 'jest'
    }
  ],
  [
    'p_scss',
    {
      KOR: 'scss',
      ENG: 'scss'
    }
  ],
  [
    'p_vue',
    {
      KOR: 'vue.js',
      ENG: 'vue.js'
    }
  ],
  [
    'p_vuetify',
    {
      KOR: 'vuetify',
      ENG: 'vuetify'
    }
  ],
  [
    'p_jquery',
    {
      KOR: 'jQuery',
      ENG: 'jQuery'
    }
  ],
  [
    'p_java',
    {
      KOR: '자바',
      ENG: 'java'
    }
  ],
  [
    'p_javascript',
    {
      KOR: '자바스크립트',
      ENG: 'javascript'
    }
  ],
  [
    'p_android',
    {
      KOR: '안드로이드',
      ENG: 'android'
    }
  ],
  [
    'p_php',
    {
      KOR: 'php',
      ENG: 'php'
    }
  ],
  [
    'p_mysql',
    {
      KOR: 'mysql',
      ENG: 'mysql'
    }
  ],
  [
    'p_portfolio',
    {
      KOR: '포트폴리오',
      ENG: 'portfolio'
    }
  ],
  [
    '',
    {
      KOR: '',
      ENG: ''
    }
  ],
  [
    '',
    {
      KOR: '',
      ENG: ''
    }
  ],
  [
    '',
    {
      KOR: '',
      ENG: ''
    }
  ]
])

const Lang = {
  EN: 'EN',
  KO: 'KO',
  HK: 'HK',
  ZH: 'ZH'
}

function getCookie(cname) {
  let name = cname + '='

  if (typeof document !== 'undefined') {
    let decodedCookie = decodeURIComponent(document.cookie)
    let ca = decodedCookie.split(';')

    for (let i = 0; i < ca.length; i++) {
      let c = ca[i]
      while (c.charAt(0) === ' ') {
        c = c.substring(1)
      }
      if (c.indexOf(name) === 0) return c.substring(name.length, c.length)
    }
  }

  return ''
}

function setCookie(cname, cvalue, exdays) {
  let d = new Date()
  d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000)
  let expires = 'expires=' + d.toUTCString()

  if (typeof document !== 'undefined')
    document.cookie = cname + '=' + cvalue + '; ' + expires + '; path=/;'
}

function deleteCookie(name) {
  if (typeof document !== 'undefined')
    if (getCookie(name))
      document.cookie = name + '=;expires=Thu, 01-Jan-70 00:00:01 GMT'
}

function checkLocale() {
  let cookieLang = getCookie('language')

  // 쿠키 값이 있을 때
  if (cookieLang !== '')
    switch (cookieLang) {
      case 'en':
        return Lang.EN

      case 'ko':
      default:
        return Lang.KO
    }


  // 없을 때
  return Lang.KO
}

// let currentLang: Lang = Lang.EN;
let currentLang = checkLocale()

function psGetLang() {
  return currentLang
}

function psSetLang(lang) {
  currentLang = lang

  deleteCookie('language')

  switch (lang) {
    case Lang.EN:
      setCookie('language', 'en', 30)
      window.location.reload()
      break

    case Lang.KO:
    default:
      setCookie('language', 'ko', 30)
      window.location.reload()
      break
  }
}

function psString(key) {
  const _string = strings.get(key)

  if (_string !== undefined && _string !== null)
    switch (currentLang) {
      case Lang.EN:
        if (_string.ENG === '') return _string.KOR
        return _string.ENG

      case Lang.KO:
      default:
        return _string.KOR
    }
  else
    return '.' + key
}


$(function () {
  let localization = "._localization_";
  let $localization = $(localization);

  $localization.map(function (index,el) {
    $(el).text(psString($(el).data('lang')));
  })

  $("#languageSelectorKr").click(function (event) {
    psSetLang('KO')
  })

  $("#languageSelectorEn").click(function (event) {
    psSetLang('EN')
  })
})
