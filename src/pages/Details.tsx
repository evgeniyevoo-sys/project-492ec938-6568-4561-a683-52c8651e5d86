import FadeInSection from "@/components/FadeInSection";

const Details = () => {
  return (
    <div className="page-container relative z-10">
      <FadeInSection>
        <h1 className="page-title">Подробнее об АнтиСистеме</h1>
      </FadeInSection>

      <div className="max-w-3xl space-y-12">
        <FadeInSection>
          <h2 className="section-title text-2xl md:text-3xl">Принцип работы</h2>
          <p className="section-text">
            АнтиСистема функционирует как программный код, встроенный в структуру реальности. 
            Подобно антивирусу, она сканирует, обнаруживает и нейтрализует негативные программы, 
            блокировки и деструктивные паттерны на всех уровнях вашего существования.
          </p>
        </FadeInSection>

        <FadeInSection>
          <h2 className="section-title text-2xl md:text-3xl">Уровни работы</h2>
          <p className="section-text mb-6">
            Комплекс работает одновременно на нескольких уровнях:
          </p>
          <div className="space-y-4">
            {[
              { title: "Физический уровень", desc: "Восстановление тела, устранение хронических проблем, нормализация всех систем организма." },
              { title: "Энергетический уровень", desc: "Очищение энергетических каналов, восстановление естественного потока энергии." },
              { title: "Ментальный уровень", desc: "Устранение деструктивных программ мышления, возврат ясности сознания." },
              { title: "Уровень судьбы", desc: "Восстановление естественного хода жизни, открытие заблокированных возможностей." },
            ].map((item, i) => (
              <div key={i} className="p-6 rounded-2xl border border-border/60 bg-background/70 backdrop-blur-sm">
                <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </FadeInSection>

        <FadeInSection>
          <h2 className="section-title text-2xl md:text-3xl">Миллиарды процессов</h2>
          <p className="section-text">
            Каждый процесс в АнтиСистеме выполняет свою уникальную задачу. Вместе они образуют 
            единый слаженный механизм, работающий 24/7 без вашего участия. Результаты накапливаются 
            постепенно, создавая устойчивые и необратимые изменения.
          </p>
        </FadeInSection>

        <FadeInSection>
          <h2 className="section-title text-2xl md:text-3xl">Полная автономность</h2>
          <p className="section-text">
            Вам не нужно ничего делать. Никаких ритуалов, медитаций или практик. АнтиСистема 
            работает полностью автономно, используя вашу уникальную энергетическую частоту 
            как точку подключения. Единственное что рекомендуется — читать базу знаний для 
            понимания происходящих процессов.
          </p>
        </FadeInSection>

        <FadeInSection>
          <div className="text-center py-12">
            <a
              href="https://t.me/evgeniyevo"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-10 py-4 bg-primary text-primary-foreground rounded-full text-lg font-semibold tracking-tight hover:opacity-90 transition-opacity"
            >
              Начать сейчас
            </a>
          </div>
        </FadeInSection>
      </div>
    </div>
  );
};

export default Details;
