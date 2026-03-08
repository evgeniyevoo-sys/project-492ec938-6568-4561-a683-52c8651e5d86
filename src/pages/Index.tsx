import FadeInSection from "@/components/FadeInSection";

const HeroSection = () => (
  <section className="min-h-screen flex items-center justify-center px-6 relative">
    <FadeInSection>
      <div className="relative">
        {/* Apple-style rounded frame */}
        <div className="w-[340px] h-[340px] md:w-[480px] md:h-[480px] rounded-[3rem] md:rounded-[4rem] border border-border/60 bg-background/60 backdrop-blur-2xl flex items-center justify-center p-10 md:p-16 shadow-[0_0_80px_rgba(0,0,0,0.04)]">
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground text-center leading-tight">
            АнтиСистема — новый способ жить
          </h1>
        </div>
      </div>
    </FadeInSection>
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
        <section key={i} className="border-t border-border/40">
          <div className="section-container">
            <FadeInSection>
              <p className="text-sm font-medium text-muted-foreground mb-3 tracking-wide uppercase">
                {String(i + 1).padStart(2, "0")}
              </p>
              <h2 className="section-title">{section.question}</h2>

              {section.text && <p className="section-text">{section.text}</p>}

              {section.list && (
                <ul className="space-y-3 mt-2">
                  {section.list.map((item, j) => (
                    <li key={j} className="section-text flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-foreground mt-3 shrink-0" />
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
                  className="inline-block mt-10 px-10 py-4 bg-primary text-primary-foreground rounded-full text-lg font-semibold tracking-tight hover:opacity-90 transition-opacity"
                >
                  Написать в Telegram
                </a>
              )}
            </FadeInSection>
          </div>
        </section>
      ))}
    </div>
  );
};

export default Index;
