import "./App.css";

import inninglogLogo from "./assets/inninglog_logo.svg";
import inninglogMain from "./assets/inninglog_main.jpg";
import inninglogTeam from "./assets/inninglog_team.jpg";

import oreLogo from "./assets/ore_logo.svg";
import oreMain from "./assets/ore_main.jpg";
import oreProduct from "./assets/ore_product.jpg";

import positLogo from "./assets/posit_logo.svg";
import positMain from "./assets/posit_main.jpg";
import positGuest from "./assets/posit_guest.jpg";

import nyamLogo from "./assets/nyam_logo.svg";
import nyamHome from "./assets/nyam_home.jpg";
import nyamOnboarding from "./assets/nyam_on.jpg";

import {
  SiTypescript,
  SiJavascript,
  SiKotlin,
  SiHtml5,
  SiCss,
  SiReact,
  SiVite,
  SiTailwindcss,
  SiAxios,
  SiGit,
  SiGithub,
  SiFigma,
  SiJira,
  SiNotion,
  SiAndroid,
} from "react-icons/si";

import { TbApi } from "react-icons/tb";
import { PiDatabase } from "react-icons/pi";

import { useScrollReveal } from "./useScrollReveal";

const profile = [
  ["Name", "강민희"],
  ["Birth", "2003.09.01"],
  ["Major", "건국대학교 스마트ICT융합공학과"],
  ["Minor", "문화콘텐츠학"],
];

const stackGroups = [
  {
    title: "Language",
    description: "서비스 구현에 사용하는 언어",
    items: [
      {
        name: "TypeScript",
        icon: SiTypescript,
        color: "#3178C6",
      },
      {
        name: "JavaScript",
        icon: SiJavascript,
        color: "#F7DF1E",
      },
      {
        name: "Kotlin",
        icon: SiKotlin,
        color: "#7F52FF",
      },
      {
        name: "HTML5",
        icon: SiHtml5,
        color: "#E34F26",
      },
      {
        name: "CSS3",
        icon: SiCss,
        color: "#1572B6",
      },
    ],
  },
  {
    title: "Frontend",
    description: "웹 화면과 데이터 흐름 구현",
    items: [
      {
        name: "React",
        icon: SiReact,
        color: "#61DAFB",
      },
      {
        name: "Vite",
        icon: SiVite,
        color: "#646CFF",
      },
      {
        name: "Tailwind CSS",
        icon: SiTailwindcss,
        color: "#06B6D4",
      },
      {
        name: "Zustand",
        icon: PiDatabase,
        color: "#B78655",
      },
      {
        name: "Axios",
        icon: SiAxios,
        color: "#5A29E4",
      },
      {
        name: "TanStack Query",
        icon: TbApi,
        color: "#FF4154",
      },
    ],
  },
  {
    title: "Mobile",
    description: "네이티브 Android 앱 개발",
    items: [
      {
        name: "Android",
        icon: SiAndroid,
        color: "#3DDC84",
      },
      {
        name: "Jetpack Compose",
        icon: SiKotlin,
        color: "#7F52FF",
      },
    ],
  },
  {
    title: "Tools & Collaboration",
    description: "설계와 협업, 버전 관리",
    items: [
      {
        name: "Git",
        icon: SiGit,
        color: "#F05032",
      },
      {
        name: "GitHub",
        icon: SiGithub,
        color: "#F5F5F5",
      },
      {
        name: "Figma",
        icon: SiFigma,
        color: "#F24E1E",
      },
      {
        name: "Jira",
        icon: SiJira,
        color: "#2684FF",
      },
      {
        name: "Notion",
        icon: SiNotion,
        color: "#F5F5F5",
      },
    ],
  },
];

const projects = [
  {
    number: "01",
    name: "InningLog",
    logo: inninglogLogo,
    period: "2026.03 — Present",
    role: "PM · Web Lead",
    screenType: "mobile",
    status:
    "현재 개발 중인 프로젝트로 일부 화면과 기능은 구현 및 연동을 진행하고 있습니다.",

    description:
      "야구 관람 기록을 남기고 친구와 공유하는 React 기반 PWA 서비스입니다. 기획과 웹 개발을 함께 맡아 인증부터 사용자 관계 기능까지 서비스의 핵심 흐름을 연결했습니다.",

    screens: [
      {
        src: inninglogMain,
        alt: "InningLog 메인 화면",
        caption: "경기 일정 및 기록",
      },
      {
        src: inninglogTeam,
        alt: "InningLog 팀 선택 화면",
        caption: "선호 구단 설정",
      },
    ],

    facts: [
      {
        value: "6명",
        label: "Team",
      },
      {
        value: "PM · Lead",
        label: "담당 역할",
      },
      {
        value: "5개",
        label: "핵심 기능 영역",
      },
    ],

    contributions: [
      "Google OAuth와 REST API를 연동한 로그인·온보딩 흐름 구현",
      "프로필 조회·수정, 선호 구단 설정과 이미지 등록 기능 개발",
      "친구 검색·요청·수락, 알림과 사용자별 타임라인 API 연동",
      "FCM 토큰 발급·권한 확인·서버 등록 로직을 역할별로 분리",
      "PM·Web Lead로서 기능 우선순위와 프론트엔드 개발 일정 관리",
    ],

    challenges: [
      {
        title: "PWA와 Firebase Service Worker 충돌",
        problem:
          "PWA용 Service Worker와 Firebase Messaging Service Worker가 각각 등록되면서 푸시 알림 처리와 캐싱 동작이 충돌했습니다.",
        solution:
          "두 Service Worker의 역할과 등록 범위를 분석하고 Firebase 메시징 등록 흐름을 분리해 PWA 기능과 푸시 알림이 함께 동작하도록 구조를 조정했습니다.",
      },
      {
        title: "로그인과 푸시 등록의 오류 범위 분리",
        problem:
          "알림 권한 거부나 FCM 토큰 발급 실패가 로그인 과정 전체의 실패로 처리될 가능성이 있었습니다.",
        solution:
          "인증과 푸시 설치 정보 등록을 별도 흐름으로 분리하고 사용자 정보와 토큰이 준비된 경우에만 서버 등록을 요청하도록 조건을 구성했습니다.",
      },
    ],

    tech: [
      "React",
      "TypeScript",
      "PWA",
      "Axios",
      "FCM",
    ],

    link: "https://github.com/Inning-Log/Front",
  },

  {
    number: "02",
    name: "ORE",
    logo: oreLogo,
    period: "2026.03 — Present",
    role: "PM · Web Developer",
    screenType: "web",
    status:
      "현재 1차 MVP는 개발 완료했으며, 가족 관리·판매 지원·소유권 이전 등 2차 MVP 기능은 기획 단계입니다.",

    description:
      "전자·가전제품의 등록, 보증과 수리 정보를 제품 단위로 연결해 구매 이후의 관리 과정을 지원하는 제품 생애주기 플랫폼입니다.",

    screens: [
      {
        src: oreMain,
        alt: "ORE 메인 대시보드 화면",
        caption: "제품 관리 대시보드",
      },
      {
        src: oreProduct,
        alt: "ORE 제품 상세 화면",
        caption: "제품 상세 및 이력 관리",
      },
    ],

    facts: [
      {
        value: "3명",
        label: "Team",
      },
      {
        value: "PM · Web",
        label: "담당 역할",
      },
      {
        value: "2차",
        label: "MVP 개발 중",
      },
    ],

    contributions: [
      "사용자 문제와 요구사항을 정의하고 1·2차 MVP 기능 범위와 우선순위 설정",
      "제품 등록·보증·수리 이력을 제품 중심으로 연결하는 1차 MVP 흐름 설계",
      "제품 등록·상세 조회와 수리·보증 관리 화면 개발",
      "가족 관리·판매 지원·소유권 이전 기능을 2차 MVP 범위로 기획",
      "Zustand 상태 관리와 Axios API 모듈을 활용한 웹 화면 개발",
      "챗봇 세션·메시지 상태와 응답 이후 자동 스크롤 인터랙션 구현",
    ],

    challenges: [
        {
          title: "제품 중심의 정보 구조 설계",
          problem:
            "제품 등록, 보증과 수리 정보가 기능별로 분리되면 사용자가 하나의 제품에 대한 관리 이력을 연속적으로 확인하기 어려웠습니다.",
          solution:
            "제품을 중심 데이터로 두고 등록 정보와 보증·수리 데이터를 연결했습니다. 제품 상세 화면을 기준으로 관련 정보를 확인할 수 있도록 화면과 데이터 흐름을 구성했습니다.",
        },
        {
          title: "비동기 챗봇 응답과 화면 상태 관리",
          problem:
            "사용자 메시지와 서버 응답이 비동기로 추가되면서 로딩 상태, 세션별 메시지와 스크롤 위치를 일관되게 관리해야 했습니다.",
          solution:
            "챗봇 세션과 메시지 상태를 분리하고 요청 상태에 따른 UI를 구성했습니다. 응답이 추가된 이후 최신 메시지로 이동하도록 자동 스크롤을 구현했습니다.",
        },
      ],

    tech: [
      "React",
      "TypeScript",
      "Zustand",
      "Axios",
      "Chart.js",
    ],

    link: "https://github.com/ORE-OwnRepairExtend/Front",
  },

  {
    number: "03",
    name: "POSiT!",
    logo: positLogo,
    period: "2025.12 — 2026.02",
    role: "Web Developer",
    screenType: "mobile",

    description:
      "게스트의 짧은 아이디어를 매장 사장님이 채택하면 쿠폰 보상으로 이어지는 위치 기반 아이디어 제안 서비스입니다.",

    screens: [
      {
        src: positMain,
        alt: "POSiT 메인 화면",
        caption: "사장님_홈화면",
      },
      {
        src: positGuest,
        alt: "POSiT 게스트 아이디어 화면",
        caption: "게스트_위치 기반 매장 탐색",
      },
    ],

    facts: [
      {
        value: "8명",
        label: "Team",
      },
      {
        value: "Web",
        label: "담당 역할",
      },
      {
        value: "2개",
        label: "사용자 역할",
      },
    ],

    contributions: [
      "게스트와 사장님 역할에 따라 분리된 화면과 라우팅 구조 개발",
      "위치 기반 매장 탐색과 Naver Map 기반 매장 조회 흐름 구현",
      "아이디어 작성·이미지 첨부와 대기·채택 상태 화면 구성",
      "사장님의 아이디어 채택·거절과 쿠폰 발행·관리 흐름 연동",
      "TanStack Query 기반 목록 조회·무한 스크롤과 API 상태 처리",
    ],

    challenges: [
      {
        title: "게스트와 사장님의 서로 다른 서비스 흐름",
        problem:
          "동일한 서비스 안에서 게스트는 아이디어를 작성하고 사장님은 아이디어를 검토·채택하는 서로 다른 화면과 권한이 필요했습니다.",
        solution:
          "사용자 유형에 따라 라우트와 공통 레이아웃을 분리하고 각 역할의 홈·아이디어·쿠폰 흐름을 독립적으로 구성했습니다.",
      },
      {
        title: "목록 데이터의 중복 요청과 페이지 상태 관리",
        problem:
          "매장·아이디어·쿠폰 목록을 추가로 불러오는 과정에서 중복 요청과 페이지 데이터 관리가 복잡해질 수 있었습니다.",
        solution:
          "TanStack Query와 공통 무한 스크롤 훅을 사용해 페이지 요청, 다음 데이터 존재 여부와 로딩 상태를 일관된 구조로 관리했습니다.",
      },
    ],

    tech: [
      "React",
      "TypeScript",
      "TanStack Query",
      "Zustand",
      "Naver Map",
    ],

    link: "https://github.com/heexion/KUIT_6th_Posit",
  },

  {
    number: "04",
    name: "냠코치",
    logo: nyamLogo,
    period: "2025.06 — 2025.08",
    role: "Android Lead",
    screenType: "mobile",

    description:
      "식단과 운동을 기록하고 목표 대비 섭취 현황과 개인화 피드백을 제공하는 Native Android 다이어트 코칭 앱입니다.",

    screens: [
      {
        src: nyamHome,
        alt: "냠코치 홈 화면",
        caption: "영양 현황 및 맞춤 피드백",
      },
      {
        src: nyamOnboarding,
        alt: "냠코치 온보딩 화면",
        caption: "식단 기록",
      },
    ],

    facts: [
      {
        value: "8명",
        label: "Team",
      },
      {
        value: "Lead",
        label: "담당 역할",
      },
      {
        value: "4개",
        label: "핵심 기능 영역",
      },
    ],

    contributions: [
      "Android 개발 일정과 파트별 기능 구현 과정 조율",
      "소셜 로그인 이후 사용자 정보 입력·서버 전송 온보딩 흐름 구현",
      "서비스 이용에 필요한 알림 등 앱 권한 요청 과정 개선",
      "식단·운동 데이터가 비어 있는 상황을 점검하고 방어 로직 적용",
      "화면 이동과 사용자 흐름 오류를 수정하고 주요 기능 통합 QA 수행",
    ],

    challenges: [],

    tech: [
      "Kotlin",
      "Android",
      "Jetpack Compose",
      "Retrofit",
      "Room",
    ],

    link: "https://github.com/heexion/KUIT-KAC",
  },
];

const strengths = [
  {
    number: "01",
    title: "User Flow",
    description:
      "화면 하나보다 사용자가 서비스를 이용해 목표를 달성하기까지의 전체 흐름을 설계합니다.",
  },
  {
    number: "02",
    title: "Problem Solving",
    description:
      "현상을 임시로 가리기보다 재현 조건과 원인을 확인하고 구조적으로 해결합니다.",
  },
  {
    number: "03",
    title: "Collaboration",
    description:
      "PM과 개발 경험을 바탕으로 요구사항을 구현 단위로 구체화하고 진행 상황을 공유합니다.",
  },
];

const experienceProcess = [
  {
    number: "01",
    title: "Analyze",
    description:
      "SRS·Figma와 실제 서비스를 비교해 기능 누락과 사용자 흐름의 문제를 분석했습니다.",
  },
  {
    number: "02",
    title: "Plan",
    description:
      "날씨 정보, 동선 최적화와 개인화 추천 등 신규 기능의 요구사항을 정의했습니다.",
  },
  {
    number: "03",
    title: "Design",
    description:
      "추천 영역별 필터, 평가 기준, 가중치와 예외 처리 규칙을 설계했습니다.",
  },
  {
    number: "04",
    title: "Verify",
    description:
      "기획 내용을 Jira와 문서로 전달하고 수정된 기능의 반영 여부를 재검증했습니다.",
  },
];

function App() {
  useScrollReveal();

  return (
    <main>
      <nav className="top-nav" aria-label="주요 메뉴">
        <a className="nav-logo" href="#top">
          MH.
        </a>

        <div>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#experience">Experience</a>
        </div>
      </nav>

      {/* HERO */}
      <section className="hero" id="top">
        <div className="hero-content">
          <p className="eyebrow hero-enter">
            FRONTEND DEVELOPER · KANG MIN HEE
          </p>

          <h1 className="hero-enter delay-1">
            사용자의 문제를 발견하고
            <br />
            <em>서비스의 흐름</em>으로 해결합니다.
          </h1>

          <p className="hero-description hero-enter delay-2">
            React와 TypeScript를 기반으로 웹 서비스를 개발합니다.
            <br />
            기능 구현을 넘어 사용자 흐름과 서비스 구조까지 고민합니다.
          </p>

          <div className="hero-links hero-enter delay-3">
            <a className="primary-link" href="#projects">
              프로젝트 보기
            </a>

            <a
              href="https://github.com/heexion"
              target="_blank"
              rel="noreferrer"
            >
              GitHub ↗
            </a>
          </div>
        </div>

        <div className="scroll-cue" aria-hidden="true">
          <span />
          SCROLL
        </div>
      </section>

      {/* ABOUT */}
      <section className="section" id="about">
        <div className="section-heading" data-reveal>
          <p className="section-number">01</p>
          <h2>About Me</h2>
        </div>

        <div className="profile-layout">
          <p className="about-copy" data-reveal>
            아이디어를 사용자 흐름으로 설계하고
            <br />
            웹 서비스로 구현합니다.
          </p>

          <dl className="profile-list" data-reveal>
            {profile.map(([label, value]) => (
              <div key={label}>
                <dt>{label}</dt>
                <dd>{value}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="strength-grid">
          {strengths.map((strength) => (
            <article key={strength.number} data-reveal>
              <span>{strength.number}</span>
              <h3>{strength.title}</h3>
              <p>{strength.description}</p>
            </article>
          ))}
        </div>
      </section>

      {/* TECH STACK */}
      <section className="section tech-section">
        <div className="section-heading" data-reveal>
          <p className="section-number">02</p>
          <h2>Tech Stack</h2>
        </div>

        <div className="stack-grid">
          {stackGroups.map((group, index) => (
            <article
              className="stack-card"
              key={group.title}
              data-reveal
            >
              <div className="stack-card-heading">
                <span className="stack-index">
                  0{index + 1}
                </span>

                <div>
                  <h3>{group.title}</h3>
                  <p>{group.description}</p>
                </div>
              </div>

              <div className="tech-list">
                {group.items.map((item) => {
                  const Icon = item.icon;

                  return (
                    <div
                      className="tech-item"
                      key={item.name}
                    >
                      <div
                        className="tech-icon"
                        style={{ color: item.color }}
                      >
                        <Icon aria-hidden="true" />
                      </div>

                      <span>{item.name}</span>
                    </div>
                  );
                })}
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* PROJECTS */}
      <section
        className="section projects-section"
        id="projects"
      >
        <div className="section-heading" data-reveal>
          <p className="section-number">03</p>
          <h2>Projects</h2>
        </div>

        <div className="projects">
          {projects.map((project) => (
            <article
              className="project"
              key={project.name}
              data-reveal
            >
              <div className="project-header">
                <div className="project-title-group">
                  <p className="project-number">
                    PROJECT {project.number}
                  </p>

                  <div className="project-name">
                    <img
                      src={project.logo}
                      alt=""
                      className="project-title-logo"
                    />

                    <h3>{project.name}</h3>
                  </div>

                  <p className="project-period">
                    {project.period}
                  </p>
                </div>

                <a
                  className="project-github"
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub ↗
                </a>
              </div>

              <div className="project-overview">
                <div>
                  <p className="project-role">
                    {project.role}
                  </p>

                  <p className="project-description">
                    {project.description}
                  </p>

                  {project.status && (
                    <p className="project-status">
                      {project.status}
                    </p>
                    )}
                </div>

                <div className="project-facts">
                  {project.facts.map((fact) => (
                    <div key={fact.label}>
                      <strong>{fact.value}</strong>
                      <span>{fact.label}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div
                className={`project-screens project-screens-${project.screenType}`}
              >
                {project.screens.map((screen) => (
                  <figure
                    className="project-screen"
                    key={screen.src}
                  >
                    <div className="screen-image">
                      <img
                        src={screen.src}
                        alt={screen.alt}
                        loading="lazy"
                      />
                    </div>

                    <figcaption>
                      {screen.caption}
                    </figcaption>
                  </figure>
                ))}
              </div>

              <div className="project-details">
                <div className="project-contributions">
                  <h4>What I did</h4>

                  <ul>
                    {project.contributions.map(
                      (contribution) => (
                        <li key={contribution}>
                          {contribution}
                        </li>
                      )
                    )}
                  </ul>
                </div>

                {project.challenges.length > 0 && (
            <div className="project-challenges">
              <div className="challenge-heading">
                <p>TECHNICAL CHALLENGE</p>
                <h4>
                  문제를 발견하고
                  <br />
                  구조적으로 해결했습니다.
                </h4>
              </div>

              <div className="challenge-list">
                {project.challenges.map(
                  (challenge, index) => (
                    <article
                      className="challenge-card"
                      key={challenge.title}
                    >
                      <div className="challenge-title">
                        <span>0{index + 1}</span>
                        <h5>{challenge.title}</h5>
                      </div>

                      <div className="challenge-content">
                        <div className="challenge-problem">
                          <span className="challenge-label">
                            PROBLEM
                          </span>

                          <p>{challenge.problem}</p>
                        </div>

                        <div
                          className="challenge-arrow"
                          aria-hidden="true"
                        >
                          →
                        </div>

                        <div className="challenge-solution">
                          <span className="challenge-label">
                            SOLUTION
                          </span>

                          <p>{challenge.solution}</p>
                        </div>
                      </div>
                    </article>
                  )
                )}
              </div>
            </div>
          )}
              </div>

              <div className="project-tech">
                {project.tech.map((tech) => (
                  <span key={tech}>{tech}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* EXPERIENCE */}
      <section className="section" id="experience">
        <div className="section-heading" data-reveal>
          <p className="section-number">04</p>
          <h2>Experience</h2>
        </div>

        <article className="experience" data-reveal>
          <div className="experience-title">
            <p className="experience-type">
              FIELD TRAINING
            </p>

            <h3>
              마니투어
              <br />
              여행 플랫폼 현장실습
            </h3>

            <p className="experience-position">
              Service QA · UX Planning
            </p>

            <p className="experience-period">
              2026.07 — 2026.08
            </p>
          </div>

          <div className="experience-content">
            <h4>
              서비스의 문제를 발견하고
              <br />
              새로운 기능과 추천 구조를 설계했습니다.
            </h4>

            <p className="experience-summary">
              여행 플랫폼 앱·어드민·파트너 앱을 테스트해 오류와
              UI·UX 개선사항을 도출했습니다. 발견한 문제를 재현
              가능한 업무로 정리하는 데서 그치지 않고 날씨 정보,
              동선 최적화와 개인화 추천 기능을 기획했습니다.
              사용자 취향과 여행 조건을 반영할 수 있도록 추천
              영역별 필터, 평가 기준과 가중치를 설계했습니다.
            </p>

            <div className="experience-process">
              {experienceProcess.map((process) => (
                <div key={process.number}>
                  <span>{process.number}</span>
                  <h5>{process.title}</h5>
                  <p>{process.description}</p>
                </div>
              ))}
            </div>

            <div className="experience-detail">
              <h4>Contribution</h4>

              <ul>
                <li>
                  여행 앱·어드민·파트너 앱의 오류 및 UI·UX
                  개선사항 22건 도출
                </li>

                <li>
                  오류 재현 과정을 기록하고 외부 개발자 회의
                  결과를 Jira 업무로 정리한 뒤 수정 기능 재검증
                </li>

                <li>
                  여행 일정별 날씨 정보, 동선 최적화와 개인화
                  추천 등 신규 기능 기획
                </li>

                <li>
                  검색 진입 화면, 해시태그, 카테고리와 포스팅
                  화면의 사용자 흐름 개선안 설계
                </li>

                <li>
                  홈 상품·포스팅, 일정 상품 리스트·지도 등 4개
                  영역의 개인화 추천 구조 설계
                </li>

                <li>
                  사용자 취향·지역·동행·행동 데이터를 반영한
                  22개 평가 기준과 영역별 가중치 정의
                </li>

                <li>
                  판매 상태·날짜·일정 중복·동행 조건·3km 거리
                  등 필수 필터와 추천 예외 처리 규칙 설계
                </li>

                <li>
                  시간 감쇠, 반복 노출 방지, 탐색 추천 20%와
                  AI 재정렬을 포함한 추천 운영 기준 정의
                </li>
              </ul>
            </div>

            <div className="recommendation-summary">
              <p className="recommendation-label">
                PERSONALIZATION LOGIC
              </p>

              <h4>
                사용자 데이터와 여행 맥락을 반영한
                <br />
                단계별 추천 구조를 설계했습니다.
              </h4>

              <div className="recommendation-flow">
                <div>
                  <span>01</span>
                  <strong>Filter</strong>
                  <p>
                    판매 상태·날짜·거리·동행 조건으로 추천
                    불가능한 후보 제외
                  </p>
                </div>

                <div>
                  <span>02</span>
                  <strong>Score</strong>
                  <p>
                    취향·지역·행동·동행 유형을 기준으로 후보별
                    적합도 계산
                  </p>
                </div>

                <div>
                  <span>03</span>
                  <strong>Re-rank</strong>
                  <p>
                    적합성·다양성·현재 여행 맥락을 반영해 AI가
                    후보 순위 재정렬
                  </p>
                </div>

                <div>
                  <span>04</span>
                  <strong>Display</strong>
                  <p>
                    추천 위치별 기준에 따라 최종 결과를 사용자
                    화면에 노출
                  </p>
                </div>
              </div>
            </div>

            <div className="metrics">
              <div>
                <strong>22</strong>
                <span>ISSUES & IMPROVEMENTS</span>
              </div>

              <div>
                <strong>3</strong>
                <span>NEW FEATURES</span>
              </div>

              <div>
                <strong>4</strong>
                <span>RECOMMENDATION AREAS</span>
              </div>

              <div>
                <strong>22</strong>
                <span>EVALUATION CRITERIA</span>
              </div>
            </div>
          </div>
        </article>
      </section>

      {/* CONTACT */}
      <section className="contact" data-reveal>
        <p>05 · CONTACT</p>

        <h2>
          함께 문제를 해결할
          <br />
          기회를 기다리고 있습니다.
        </h2>

        <a
          href="https://github.com/heexion"
          target="_blank"
          rel="noreferrer"
        >
          GitHub →
        </a>
      </section>
    </main>
  );
}

export default App;