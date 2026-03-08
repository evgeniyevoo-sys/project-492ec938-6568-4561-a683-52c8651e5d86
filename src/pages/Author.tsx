import FadeInSection from "@/components/FadeInSection";

const Author = () => {
  return (
    <div className="page-container relative z-10">
      <FadeInSection>
        <h1 className="page-title">Кто автор?</h1>
      </FadeInSection>
      <FadeInSection>
        <div className="max-w-3xl">
          <p className="section-text mb-8">
            Автор АнтиСистемы — человек прошедший глубокий путь трансформации и осознания. 
            Годы исследований, опыта и практической работы привели к созданию уникального 
            комплекса, который сегодня помогает людям по всему миру.
          </p>
          <p className="section-text mb-8">
            АнтиСистема родилась из понимания того, что большинство методов требуют от человека 
            постоянных усилий — медитаций, практик, упражнений. Но настоящие изменения должны 
            происходить на глубинном уровне, автономно и естественно.
          </p>
          <p className="section-text mb-8">
            Миссия проста: вернуть человека в его естественное состояние — здоровья, гармонии 
            и полного контроля над своей жизнью.
          </p>
          <div className="mt-12 p-8 rounded-2xl border border-border/60 bg-background/70 backdrop-blur-sm">
            <p className="text-foreground font-semibold mb-2">Связаться с автором:</p>
            <a
              href="https://t.me/evgeniyevo"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors underline"
            >
              @evgeniyevo в Telegram
            </a>
          </div>
        </div>
      </FadeInSection>
    </div>
  );
};

export default Author;
