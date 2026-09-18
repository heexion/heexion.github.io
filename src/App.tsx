import "./App.css";

function App() {
  return (
    <main>
      {/* HOME */}
      <section className="hero">
        <div className="hero-content">
          <p className="eyebrow">FRONTEND DEVELOPER</p>

          <h1>
            사용자의 문제를 발견하고,
            <br />
            서비스의 흐름으로 해결합니다.
          </h1>

          <p className="hero-description">
            React와 TypeScript를 기반으로 웹 서비스를 개발합니다.
            <br />
            기능 구현에 그치지 않고 사용자 흐름과 서비스 구조를 함께 고민합니다.
          </p>

          <div className="hero-links">
            <a href="#projects">Projects</a>
            <a
              href="https://github.com/heexion"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="section" id="about">
        <p className="section-number">01</p>
        <h2>About Me</h2>

        <div className="strength-grid">
          <article>
            <span>01</span>
            <h3>User Flow</h3>
            <p>
              단순히 화면을 구현하는 데 그치지 않고 사용자가 서비스를
              이용하는 전체 흐름을 고려합니다.
            </p>
          </article>

          <article>
            <span>02</span>
            <h3>Problem Solving</h3>
            <p>
              문제의 현상만 해결하기보다 원인을 분석하고 적절한 해결 방법을
              찾는 과정을 중요하게 생각합니다.
            </p>
          </article>

          <article>
            <span>03</span>
            <h3>Collaboration</h3>
            <p>
              PM과 개발 역할을 수행한 경험을 바탕으로 기획, 디자인, 개발의
              요구사항을 조율하며 협업합니다.
            </p>
          </article>
        </div>
      </section>

      {/* TECH */}
      <section className="section">
        <p className="section-number">02</p>
        <h2>Tech Stack</h2>

        <div className="tech-list">
          <span>React</span>
          <span>TypeScript</span>
          <span>JavaScript</span>
          <span>HTML</span>
          <span>CSS</span>
          <span>REST API</span>
          <span>Git</span>
          <span>GitHub</span>
        </div>
      </section>

      {/* PROJECTS */}
      <section className="section" id="projects">
        <p className="section-number">03</p>
        <h2>Projects</h2>

        <div className="featured-project">
          <div className="project-placeholder">
            INNINGLOG
          </div>

          <div className="project-content">
            <p className="project-type">FEATURED PROJECT</p>
            <h3>InningLog</h3>
            <p className="project-period">2026.03 — Present</p>

            <p className="project-description">
              야구 관람 경험을 기록하고 공유하는 서비스입니다.
              PM과 Web Lead를 맡아 서비스 기획부터 프론트엔드 개발까지
              참여하고 있습니다.
            </p>

            <p className="project-role">PM · Web Lead</p>

            <div className="project-tech">
              <span>React</span>
              <span>TypeScript</span>
              <span>PWA</span>
              <span>REST API</span>
              <span>FCM</span>
            </div>
          </div>
        </div>

        <div className="project-grid">
          <article className="project-card">
            <p>PM · Web Developer</p>
            <h3>ORE</h3>
            <span>2026.03 — Present</span>
            <p>
              전자·가전제품의 등록부터 보증, 수리, 판매 및 소유권 이전까지
              제품 생애주기를 관리하는 서비스입니다.
            </p>
          </article>

          <article className="project-card">
            <p>Web Developer</p>
            <h3>POSiT!</h3>
            <span>2025.12 — 2026.02</span>
            <p>
              프로젝트의 핵심 기능과 담당 개발 내용을 추가할 예정입니다.
            </p>
          </article>

          <article className="project-card">
            <p>Android Lead</p>
            <h3>냠코치</h3>
            <span>2025.06 — 2025.08</span>
            <p>
              Android 개발을 담당한 프로젝트로 주요 기능과 개발 경험을
              추가할 예정입니다.
            </p>
          </article>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section className="section">
        <p className="section-number">04</p>
        <h2>Experience</h2>

        <div className="experience">
          <div>
            <p className="experience-type">FIELD TRAINING</p>
            <h3>여행 플랫폼 현장실습</h3>
          </div>

          <div className="experience-description">
            <p>
              여행 플랫폼 앱, 관리자 페이지, 파트너 앱의 기능을 테스트하고
              화면 설계와 실제 구현 결과를 비교하여 기능 누락과 UI/UX
              문제를 분석했습니다.
            </p>

            <div className="metrics">
              <div>
                <strong>22</strong>
                <span>오류 및 개선사항</span>
              </div>
              <div>
                <strong>4</strong>
                <span>추천 영역</span>
              </div>
              <div>
                <strong>22</strong>
                <span>평가 기준</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section className="contact">
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