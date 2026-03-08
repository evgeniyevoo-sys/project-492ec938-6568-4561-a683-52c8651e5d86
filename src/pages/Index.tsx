import FadeInSection from "@/components/FadeInSection";

const HeroSection = () => (
  <section className="min-h-screen flex items-center justify-center px-6 relative">
    <div className="hero-float">
      <div className="w-[340px] h-[340px] md:w-[500px] md:h-[500px] rounded-[32px] bg-background flex items-center justify-center p-10 md:p-16"
        style={{
          boxShadow: "0 8px 60px rgba(0,0,0,0.06), 0 1px 3px rgba(0,0,0,0.04)",
        }}
      >
        <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-foreground text-center leading-[1.1]">
          АнтиСистема — новый способ жить
        </h1>
      </div>
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

      {funnelSections.map((section, i) => (
        <section key={i} className="border-t border-border/30">
          <div className="section-container">
            <FadeInSection delay={0}>
              <p className="text-sm font-medium text-muted-foreground mb-4 tracking-widest uppercase">
                {String(i + 1).padStart(2, "0")}
              </p>
            </FadeInSection>

            <FadeInSection delay={100}>
              <h2 className="section-title">{section.question}</h2>
            </FadeInSection>

            {section.text && (
              <FadeInSection delay={200}>
                <p className="section-text">{section.text}</p>
              </FadeInSection>
            )}

            {section.list && (
              <FadeInSection delay={200}>
                <ul className="space-y-4 mt-3">
                  {section.list.map((item, j) => (
                    <li key={j} className="section-text flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-foreground mt-3 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </FadeInSection>
            )}

            {section.cta && (
              <FadeInSection delay={300}>
                <a
                  href="https://t.me/evgeniyevo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-12 px-12 py-5 rounded-[50px] text-lg font-semibold tracking-tight transition-all duration-300 hover:scale-105 hover:shadow-[0_12px_40px_rgba(0,0,0,0.15)]"
                  style={{
                    backgroundColor: "hsl(0 0% 7%)",
                    color: "hsl(0 0% 100%)",
                  }}
                >
                  Написать в Telegram
                </a>
              </FadeInSection>
            )}
          </div>
        </section>
      ))}
    </div>
  );
};

export default Index;
