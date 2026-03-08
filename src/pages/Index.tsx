import FadeInSection from "@/components/FadeInSection";

const HeroSection = () => (
  <section className="min-h-screen flex items-center justify-center px-6 relative">
    {/* Subtle glow behind card */}
    <div
      className="absolute w-[600px] h-[300px] rounded-full blur-[120px] opacity-20"
      style={{ background: "radial-gradient(circle, #00d4ff 0%, transparent 70%)" }}
    />

    <div
      className="relative w-[90vw] max-w-[720px] rounded-[20px] flex flex-col items-center justify-center px-10 py-14 md:px-16 md:py-20"
      style={{
        background: "rgba(255,255,255,0.03)",
        border: "1px solid rgba(0, 212, 255, 0.2)",
        boxShadow: "0 0 60px rgba(0, 212, 255, 0.06), 0 0 120px rgba(0, 212, 255, 0.03)",
      }}
    >
      {/* Eyebrow label */}
      <p
        className="text-xs tracking-[0.3em] uppercase mb-6 opacity-50"
        style={{ color: "#00d4ff" }}
      >
        Дистанционный автономный комплекс
      </p>

      <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-foreground text-center leading-[1.1]">
        АнтиСистема —
        <br />
        новый способ жить
      </h1>

      <div
        className="mt-8 w-16 h-[1px]"
        style={{ background: "linear-gradient(90deg, transparent, #00d4ff, transparent)" }}
      />
    </div>
  </section>
);

const funnelSections = [
  {
    question: "Что это такое?",
    text: "АнтиСистема — это дистанционный автономный комплекс очищающий от всего негатива на всех уровнях, восстанавливающий сферы жизни и формирующий защиты состоящий из миллиарда процессов.",
  },
  {
    question: "Как это работает?",
    text: "АнтиСистема работает как антивирус с программным кодом на уровне нашей реальности и её глубин. Это миллиарды процессов каждый из которых выполняет свою определенную задачу собираясь по крупицам и заставляя работать и приводить к глобальным результатам.",
  },
  {
    question: "Что нужно делать?",
    text: "Ничего. Никаких упражнений, практик или медитаций. Вся работа происходит полностью автономно. Все результаты идут сами собой, постепенно, но для общего понимания того что с вами происходит важно читать базу знаний в которой описывается процесс.",
  },
  {
    question: "Что входит в комплекс?",
    list: [
      "Процесс очищения и удаления",
      "Восстановление и перестройка тела",
      "Автономные защиты",
      "Развитие энергетических способностей позволяющие управлять своей судьбой",
    ],
  },
  {
    question: "Что даёт?",
    text: "Возвращает человека в естественное состояние 100% здоровья, здоровые отношения, финансовый успех и полный контроль над своей жизнью и глубинное понимание своей сути.",
  },
  {
    question: "Как запустить?",
    text: "Вас видно и вы излучаете индивидуальную энергетическую частоту как ВайФай. Достаточно того что вы просто существуете и вы живой. Достаточно вашего намерения и мы запустим моментально процесс.",
  },
  {
    question: "Как начать?",
    text: "Пиши «готов» и пробуй 31 день новой жизни.",
    cta: true,
  },
];

const Index = () => {
  return (
    <div className="relative z-10">
      <HeroSection />

      <div className="max-w-3xl mx-auto px-6 space-y-6 pb-28 md:pb-36">
        {funnelSections.map((section, i) => (
          <FadeInSection key={i} delay={i * 80}>
            <div
              className="rounded-2xl px-8 py-10 md:px-10 md:py-12 transition-all duration-500 cursor-default"
              style={{
                background: i % 2 === 0 ? "rgba(0, 212, 255, 0.02)" : "rgba(255,255,255,0.015)",
                border: "1px solid rgba(0,212,255,0.1)",
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(0,212,255,0.25)";
                (e.currentTarget as HTMLDivElement).style.background = "rgba(0,212,255,0.04)";
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(0,212,255,0.1)";
                (e.currentTarget as HTMLDivElement).style.background = i % 2 === 0
                  ? "rgba(0, 212, 255, 0.02)"
                  : "rgba(255,255,255,0.015)";
              }}
            >
              {/* Number */}
              <p className="text-xs font-medium tracking-[0.25em] uppercase mb-4" style={{ color: "rgba(0,212,255,0.4)" }}>
                {String(i + 1).padStart(2, "0")}
              </p>

              {/* Question */}
              <h2 className="text-xl md:text-2xl font-bold mb-4 tracking-tight" style={{ color: "#00d4ff" }}>
                {section.question}
              </h2>

              {/* Text */}
              {section.text && (
                <p className="text-base md:text-lg leading-relaxed" style={{ color: "#b0b8c8" }}>
                  {section.text}
                </p>
              )}

              {/* List */}
              {section.list && (
                <ul className="space-y-4 mt-3">
                  {section.list.map((item, j) => (
                    <li key={j} className="text-base md:text-lg leading-relaxed flex items-start gap-3" style={{ color: "#b0b8c8" }}>
                      <span className="w-1.5 h-1.5 rounded-full mt-2.5 shrink-0" style={{ background: "#00d4ff" }} />
                      {item}
                    </li>
                  ))}
                </ul>
              )}

              {/* CTA */}
              {section.cta && (
                <div className="mt-10 flex justify-center">
                  <a
                    href="https://t.me/evgeniyevo"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-14 py-5 rounded-[50px] text-lg font-semibold tracking-tight transition-all duration-300"
                    style={{
                      background: "linear-gradient(135deg, #00d4ff, #0066ff)",
                      color: "#050d1a",
                      boxShadow: "0 0 40px rgba(0,212,255,0.3), 0 4px 20px rgba(0,0,0,0.3)",
                    }}
                    onMouseEnter={e => {
                      (e.currentTarget as HTMLAnchorElement).style.transform = "scale(1.04)";
                      (e.currentTarget as HTMLAnchorElement).style.boxShadow = "0 0 60px rgba(0,212,255,0.5), 0 8px 30px rgba(0,0,0,0.3)";
                    }}
                    onMouseLeave={e => {
                      (e.currentTarget as HTMLAnchorElement).style.transform = "scale(1)";
                      (e.currentTarget as HTMLAnchorElement).style.boxShadow = "0 0 40px rgba(0,212,255,0.3), 0 4px 20px rgba(0,0,0,0.3)";
                    }}
                  >
                    Написать в Telegram →
                  </a>
                </div>
              )}
            </div>
          </FadeInSection>
        ))}
      </div>
    </div>
  );
};

export default Index;