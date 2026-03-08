import FadeInSection from "@/components/FadeInSection";

const HeroSection = () => (
  <section className="min-h-screen flex items-center justify-center px-6 relative">
    <div
      className="w-[90vw] max-w-[700px] rounded-[20px] flex items-center justify-center px-10 py-14 md:px-16 md:py-20"
      style={{
        background: "rgba(255,255,255,0.03)",
        border: "1px solid rgba(0, 212, 255, 0.25)",
        boxShadow: "0 0 40px rgba(0, 212, 255, 0.08), 0 0 80px rgba(0, 212, 255, 0.04)",
      }}
    >
      <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-foreground text-center leading-[1.1]">
        АнтиСистема — новый способ жить
      </h1>
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
    text: 'Пиши «готов» и пробуй 31 день новой жизни.',
    cta: true,
  },
];

const Index = () => {
  return (
    <div className="relative z-10">
      <HeroSection />

      <div className="max-w-3xl mx-auto px-6 space-y-8 pb-28 md:pb-36">
        {funnelSections.map((section, i) => (
          <FadeInSection key={i} delay={i * 60}>
            <div className="funnel-card">
              <p className="text-sm font-medium text-muted-foreground mb-4 tracking-widest uppercase">
                {String(i + 1).padStart(2, "0")}
              </p>

              <h2 className="section-title">{section.question}</h2>

              {section.text && <p className="section-text">{section.text}</p>}

              {section.list && (
                <ul className="space-y-4 mt-3">
                  {section.list.map((item, j) => (
                    <li key={j} className="section-text flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full mt-3 shrink-0" style={{ background: "hsl(193 100% 50%)" }} />
                      {item}
                    </li>
                  ))}
                </ul>
              )}

              {section.cta && (
                <a
                  href="https://t.me/evgeniyevo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-10 px-12 py-5 rounded-[50px] text-lg font-semibold tracking-tight transition-all duration-300 hover:scale-105"
                  style={{
                    background: "linear-gradient(135deg, #00d4ff, #0066ff)",
                    color: "#050d1a",
                    boxShadow: "0 0 30px rgba(0, 212, 255, 0.3)",
                  }}
                >
                  Написать в Telegram
                </a>
              )}
            </div>
          </FadeInSection>
        ))}
      </div>
    </div>
  );
};

export default Index;
