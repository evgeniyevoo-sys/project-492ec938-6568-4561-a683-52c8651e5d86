import FadeInSection from "@/components/FadeInSection";

const HeroSection = () => (
  <section className="relative flex items-center justify-center min-h-[92vh] px-6">
    {/* Warm glow behind card */}
    <div
      className="absolute rounded-full blur-[120px] opacity-30"
      style={{
        width: 420,
        height: 420,
        background: "radial-gradient(circle, #ff6a00 0%, #ff8c00 40%, transparent 70%)",
        top: "18%",
        left: "50%",
        transform: "translateX(-50%)",
      }}
    />

    <div
      className="relative max-w-2xl w-full text-center"
      style={{ padding: "clamp(48px, 8vw, 80px) clamp(24px, 5vw, 56px)" }}
    >
      <p
        className="uppercase tracking-[0.25em] mb-6"
        style={{
          fontSize: "clamp(0.65rem, 1.2vw, 0.8rem)",
          color: "rgba(255,138,0,0.8)",
          fontWeight: 500,
          letterSpacing: "0.25em",
        }}
      >
        Дистанционный автономный комплекс
      </p>

      <h1
        style={{
          fontSize: "clamp(2.4rem, 6vw, 4.2rem)",
          fontWeight: 800,
          letterSpacing: "-0.04em",
          lineHeight: 1.08,
          color: "#1a1a1a",
          marginBottom: "1.5rem",
        }}
      >
        АнтиСистема —{" "}
        <span
          style={{
            background: "linear-gradient(135deg, #ff6a00, #ff8c00)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          новый способ жить
        </span>
      </h1>

      <div className="mx-auto mt-8 w-16 h-[2px] rounded-full" style={{ background: "linear-gradient(90deg, transparent, #ff6a00, transparent)" }} />
    </div>
  </section>
);

const funnelSections = [
  {
    num: "01",
    question: "Что это такое?",
    text: "АнтиСистема — это дистанционный автономный комплекс очищающий от всего негатива на всех уровнях, восстанавливающий сферы жизни и формирующий защиты состоящий из миллиарда процессов.",
    detail: "/",
  },
  {
    num: "02",
    question: "Как это работает?",
    text: "АнтиСистема работает как антивирус с программным кодом на уровне нашей реальности и её глубин. Это миллиарды процессов каждый из которых выполняет свою определенную задачу собираясь по крупицам и заставляя работать и приводить к глобальным результатам.",
    detail: "/",
  },
  {
    num: "03",
    question: "Что нужно делать?",
    text: "Ничего. Никаких упражнений, практик или медитаций. Вся работа происходит полностью автономно. Все результаты идут сами собой, постепенно, но для общего понимания важно читать базу знаний.",
    detail: "/knowledge",
  },
  {
    num: "04",
    question: "Что входит в комплекс?",
    list: [
      "Процесс очищения и удаления",
      "Восстановление и перестройка тела",
      "Автономные защиты",
      "Развитие энергетических способностей — управление своей судьбой",
    ],
    detail: "/details",
  },
  {
    num: "05",
    question: "Что даёт?",
    text: "Возвращает человека в естественное состояние 100% здоровья, здоровые отношения, финансовый успех и полный контроль над своей жизнью и глубинное понимание своей сути.",
    detail: "/details",
  },
  {
    num: "06",
    question: "Как запустить?",
    text: "Вас видно. Вы излучаете индивидуальную энергетическую частоту как ВайФай. Достаточно вашего намерения — и мы запустим процесс моментально.",
    detail: "/details",
  },
  {
    num: "07",
    question: "Как начать?",
    text: "Пиши «готов» и пробуй 31 день новой жизни.",
    cta: true,
    detail: "/",
  },
];

const ReadMore = ({ href }: { href: string }) => (
  <a
    href={href}
    className="inline-flex items-center mt-5 text-sm font-medium transition-all duration-300"
    style={{ color: "rgba(180,80,0,0.7)", gap: 6 }}
    onMouseEnter={e => {
      (e.currentTarget as HTMLAnchorElement).style.color = "#ff6a00";
      (e.currentTarget as HTMLAnchorElement).style.gap = "10px";
    }}
    onMouseLeave={e => {
      (e.currentTarget as HTMLAnchorElement).style.color = "rgba(180,80,0,0.7)";
      (e.currentTarget as HTMLAnchorElement).style.gap = "6px";
    }}
  >
    Читать подробнее
    <span>→</span>
  </a>
);

const Index = () => {
  return (
    <main className="relative z-10">
      <HeroSection />

      <section className="max-w-3xl mx-auto px-6 pb-32 space-y-8">
        {funnelSections.map((section, i) => (
          <FadeInSection key={i} delay={i * 0.08}>
            <div
              className="relative rounded-2xl transition-all duration-300 cursor-default"
              style={{
                padding: "clamp(28px, 4vw, 44px)",
                background: "#fffcf8",
                border: "1px solid rgba(200,100,0,0.12)",
                boxShadow: "0 2px 24px rgba(180,80,0,0.06), 0 1px 0 rgba(255,255,255,0.9) inset",
              }}
              onMouseEnter={e => {
                const el = e.currentTarget as HTMLDivElement;
                el.style.boxShadow = "0 8px 40px rgba(255,100,0,0.1), 0 1px 0 rgba(255,255,255,0.9) inset";
                el.style.borderColor = "rgba(255,100,0,0.25)";
              }}
              onMouseLeave={e => {
                const el = e.currentTarget as HTMLDivElement;
                el.style.boxShadow = "0 2px 24px rgba(180,80,0,0.06), 0 1px 0 rgba(255,255,255,0.9) inset";
                el.style.borderColor = "rgba(200,100,0,0.12)";
              }}
            >
              {/* Accent bar left */}
              <div
                className="absolute left-0 top-6 bottom-6 w-[3px] rounded-full"
                style={{ background: "linear-gradient(180deg, #ff6a00, #ff8c00, transparent)" }}
              />

              {/* Number */}
              <span
                className="block mb-2 font-mono text-xs"
                style={{ color: "rgba(180,80,0,0.35)", fontWeight: 600 }}
              >
                {section.num}
              </span>

              {/* Question */}
              <h2
                className="mb-4"
                style={{
                  fontSize: "clamp(1.25rem, 2.5vw, 1.6rem)",
                  fontWeight: 700,
                  letterSpacing: "-0.02em",
                  color: "#1a1a1a",
                  lineHeight: 1.2,
                }}
              >
                {section.question}
              </h2>

              {/* Text */}
              {section.text && (
                <p
                  style={{
                    fontSize: "clamp(0.95rem, 1.4vw, 1.08rem)",
                    lineHeight: 1.85,
                    color: "rgba(40,30,20,0.7)",
                  }}
                >
                  {section.text}
                </p>
              )}

              {/* List */}
              {section.list && (
                <ul className="space-y-3 mt-2">
                  {section.list.map((item, j) => (
                    <li
                      key={j}
                      className="flex items-start gap-3"
                      style={{
                        fontSize: "clamp(0.95rem, 1.4vw, 1.08rem)",
                        lineHeight: 1.7,
                        color: "rgba(40,30,20,0.7)",
                      }}
                    >
                      <span className="mt-2 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: "#ff6a00" }} />
                      {item}
                    </li>
                  ))}
                </ul>
              )}

              {/* Read more */}
              {!section.cta && <ReadMore href={section.detail} />}

              {/* CTA */}
              {section.cta && (
                <div className="mt-8 flex justify-center">
                  <a
                    href="https://t.me/antisistema_bot"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-10 py-4 rounded-full text-white font-semibold text-base transition-all duration-300"
                    style={{
                      background: "linear-gradient(135deg, #ff6a00, #ff8c00)",
                      boxShadow: "0 0 40px rgba(255,100,0,0.25), 0 6px 24px rgba(180,60,0,0.2)",
                      letterSpacing: "-0.01em",
                    }}
                    onMouseEnter={e => {
                      const el = e.currentTarget as HTMLAnchorElement;
                      el.style.transform = "scale(1.04)";
                      el.style.boxShadow = "0 0 60px rgba(255,100,0,0.4), 0 10px 32px rgba(180,60,0,0.25)";
                    }}
                    onMouseLeave={e => {
                      const el = e.currentTarget as HTMLAnchorElement;
                      el.style.transform = "scale(1)";
                      el.style.boxShadow = "0 0 40px rgba(255,100,0,0.25), 0 6px 24px rgba(180,60,0,0.2)";
                    }}
                  >
                    Написать в Telegram →
                  </a>
                </div>
              )}
            </div>
          </FadeInSection>
        ))}
      </section>
    </main>
  );
};

export default Index;
