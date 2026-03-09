import FadeInSection from "@/components/FadeInSection";

const HeroSection = () => (
  <section
    style={{
      width: "92%",
      maxWidth: 1200,
      margin: "0 auto",
      padding: 0,
      position: "relative",
    }}
  >
    <div
      style={{
        background: "rgba(255,255,255,0.85)",
        border: "1px solid rgba(28,28,30,0.12)",
        borderRadius: 18,
        boxShadow: "0 2px 20px rgba(0,0,0,0.08), inset 0 1px 0 rgba(255,255,255,0.9)",
        padding: "24px 40px 28px",
        position: "relative",
      }}
    >
      {/* macOS traffic light dots */}
      <div style={{ display: "flex", gap: 6, marginBottom: 20 }}>
        {["#ff5f57", "#ffbd2e", "#28c840"].map((c) => (
          <div
            key={c}
            style={{
              width: 10,
              height: 10,
              borderRadius: "50%",
              background: c,
            }}
          />
        ))}
      </div>

      <p
        style={{
          fontSize: "clamp(0.7rem,1.4vw,0.85rem)",
          fontWeight: 600,
          letterSpacing: "0.18em",
          textTransform: "uppercase",
          color: "rgba(77,184,255,0.7)",
          marginBottom: 14,
        }}
      >
        Дистанционный автономный комплекс
      </p>

      <h1
        style={{
          fontSize: "clamp(2rem,5vw,3.6rem)",
          fontWeight: 800,
          letterSpacing: "-0.04em",
          lineHeight: 1.05,
          color: "#1c1c1e",
          marginBottom: 20,
        }}
      >
        АнтиСистема —{" "}
        <span
          style={{
            background: "linear-gradient(135deg,#29a3e6,#4db8ff,#66ccff)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          новый способ жить
        </span>
      </h1>

      <div style={{ width: 48, height: 3, background: "linear-gradient(90deg,#29a3e6,#66ccff)", borderRadius: 2 }} />
    </div>
  </section>
);

const funnelSections = [
  {
    num: "01", question: "Что это такое?",
    text: "АнтиСистема — это дистанционный автономный комплекс очищающий от всего негатива на всех уровнях, восстанавливающий сферы жизни и формирующий защиты состоящий из миллиарда процессов.",
    detail: "/details",
  },
  {
    num: "02", question: "Как это работает?",
    text: "АнтиСистема работает как антивирус с программным кодом на уровне нашей реальности и её глубин. Это миллиарды процессов каждый из которых выполняет свою определённую задачу собираясь по крупицам и приводя к глобальным результатам.",
    detail: "/details",
  },
  {
    num: "03", question: "Что нужно делать?",
    text: "Ничего. Никаких упражнений, практик или медитаций. Вся работа происходит полностью автономно. Все результаты идут сами собой, постепенно, но важно читать базу знаний.",
    detail: "/knowledge",
  },
  {
    num: "04", question: "Что входит в комплекс?",
    list: ["Процесс очищения и удаления", "Восстановление и перестройка тела", "Автономные защиты", "Развитие энергетических способностей — управление своей судьбой"],
    detail: "/details",
  },
  {
    num: "05", question: "Что даёт?",
    text: "Возвращает человека в естественное состояние 100% здоровья, здоровые отношения, финансовый успех и полный контроль над своей жизнью.",
    detail: "/details",
  },
  {
    num: "06", question: "Как запустить?",
    text: "Вас видно. Вы излучаете индивидуальную энергетическую частоту как ВайФай. Достаточно вашего намерения — и мы запустим процесс моментально.",
    detail: "/details",
  },
  {
    num: "07", question: "Как начать?",
    text: "Пиши «готов» и пробуй 31 день новой жизни.",
    cta: true,
  },
];

const Index = () => (
  <div style={{ position: "relative", zIndex: 1 }}>
    <HeroSection />

    <section style={{ maxWidth: 720, margin: "0 auto", padding: "0 24px 140px" }}>
      {funnelSections.map((s, i) => (
        <FadeInSection key={i}>
          <div
            style={{
              position: "relative",
              overflow: "hidden",
              background: "rgba(255,255,255,0.55)",
              backdropFilter: "blur(18px)",
              WebkitBackdropFilter: "blur(18px)",
              border: "1px solid rgba(77,184,255,0.1)",
              borderRadius: 18,
              padding: "48px 44px 40px",
              marginBottom: 28,
              boxShadow: "0 2px 20px rgba(0,80,180,0.04),0 1px 0 rgba(255,255,255,0.85) inset",
              transition: "box-shadow .3s,border-color .3s",
            }}
          >
            {/* Giant background number */}
            <span
              style={{
                position: "absolute",
                top: -18,
                right: 20,
                fontSize: "8rem",
                fontWeight: 900,
                lineHeight: 1,
                color: "rgba(77,184,255,0.045)",
                pointerEvents: "none",
                userSelect: "none",
              }}
            >
              {s.num}
            </span>

            {/* Small label */}
            <span
              style={{
                fontSize: "0.7rem",
                fontWeight: 700,
                letterSpacing: "0.14em",
                color: "rgba(41,163,230,0.55)",
                textTransform: "uppercase",
              }}
            >
              {s.num}
            </span>

            {/* Question */}
            <h2
              style={{
                fontSize: "clamp(1.3rem,2.5vw,1.7rem)",
                fontWeight: 800,
                letterSpacing: "-0.02em",
                color: "#0a0a12",
                margin: "10px 0 14px",
                lineHeight: 1.2,
              }}
            >
              {s.question}
            </h2>

            {s.text && (
              <p
                style={{
                  fontSize: "clamp(0.95rem,1.4vw,1.08rem)",
                  lineHeight: 1.85,
                  color: "rgba(10,10,18,0.62)",
                  marginBottom: 18,
                }}
              >
                {s.text}
              </p>
            )}

            {s.list && (
              <ul style={{ listStyle: "none", padding: 0, margin: "0 0 18px" }}>
                {s.list.map((item, j) => (
                  <li
                    key={j}
                    style={{
                      display: "flex",
                      alignItems: "baseline",
                      gap: 10,
                      fontSize: "clamp(0.95rem,1.4vw,1.08rem)",
                      lineHeight: 1.85,
                      color: "rgba(10,10,18,0.62)",
                    }}
                  >
                    <span style={{ color: "#29a3e6", fontWeight: 700 }}>·</span>
                    {item}
                  </li>
                ))}
              </ul>
            )}

            <div style={{ marginTop: 6 }}>
              {!s.cta && (
                <a
                  href={s.detail}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 5,
                    fontSize: "0.85rem",
                    fontWeight: 600,
                    color: "rgba(41,163,230,0.6)",
                    textDecoration: "none",
                    transition: "color .2s,gap .25s",
                  }}
                  onMouseEnter={e => { const el = e.currentTarget as HTMLAnchorElement; el.style.color="#29a3e6"; el.style.gap="10px"; }}
                  onMouseLeave={e => { const el = e.currentTarget as HTMLAnchorElement; el.style.color="rgba(41,163,230,0.6)"; el.style.gap="5px"; }}
                >
                  Читать подробнее →
                </a>
              )}
              {s.cta && (
                <a
                  href="https://t.me/antisistemacom"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "inline-block",
                    padding: "16px 38px",
                    background: "linear-gradient(135deg,#29a3e6,#4db8ff)",
                    color: "#fff",
                    fontWeight: 700,
                    fontSize: "1.05rem",
                    borderRadius: 14,
                    textDecoration: "none",
                    boxShadow: "0 0 32px rgba(77,184,255,.22),0 6px 20px rgba(0,80,180,.13)",
                    transition: "transform .25s,box-shadow .3s",
                  }}
                  onMouseEnter={e => { const el = e.currentTarget as HTMLAnchorElement; el.style.transform="scale(1.05)"; el.style.boxShadow="0 0 52px rgba(77,184,255,.4),0 10px 30px rgba(0,80,180,.2)"; }}
                  onMouseLeave={e => { const el = e.currentTarget as HTMLAnchorElement; el.style.transform="scale(1)"; el.style.boxShadow="0 0 32px rgba(77,184,255,.22),0 6px 20px rgba(0,80,180,.13)"; }}
                >
                  Написать в Telegram →
                </a>
              )}
            </div>
          </div>
        </FadeInSection>
      ))}
    </section>
  </div>
);

export default Index;
