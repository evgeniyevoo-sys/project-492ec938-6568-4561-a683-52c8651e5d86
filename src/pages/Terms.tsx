import FadeInSection from "@/components/FadeInSection";

const Terms = () => {
  return (
    <div className="page-container relative z-10">
      <FadeInSection>
        <h1 className="page-title">Условия и оплата</h1>
      </FadeInSection>

      <div className="max-w-3xl space-y-12">
        <FadeInSection>
          <h2 className="section-title text-2xl md:text-3xl">Как начать</h2>
          <p className="section-text">
            Для начала работы напишите «готов» в Telegram. Вам будет предоставлен пробный период 
            31 день для того чтобы вы могли оценить результаты и принять решение о продолжении.
          </p>
        </FadeInSection>

        <FadeInSection>
          <h2 className="section-title text-2xl md:text-3xl">Пробный период</h2>
          <p className="section-text">
            Первые 31 день — это возможность на собственном опыте убедиться в эффективности 
            АнтиСистемы. В течение этого периода вы начнёте замечать первые изменения.
          </p>
        </FadeInSection>

        <FadeInSection>
          <h2 className="section-title text-2xl md:text-3xl">Оплата</h2>
          <p className="section-text">
            Подробности об оплате и стоимости услуг обсуждаются индивидуально в Telegram 
            после пробного периода. Стоимость зависит от выбранного комплекса и объёма работы.
          </p>
        </FadeInSection>

        <FadeInSection>
          <h2 className="section-title text-2xl md:text-3xl">Важно</h2>
          <ul className="space-y-3">
            {[
              "Результаты индивидуальны и зависят от множества факторов",
              "Комплекс работает полностью автономно и не требует действий с вашей стороны",
              "Рекомендуется читать базу знаний для понимания процесса",
              "Все вопросы можно задать напрямую автору через Telegram",
            ].map((item, i) => (
              <li key={i} className="section-text flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-foreground mt-3 shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </FadeInSection>

        <FadeInSection>
          <div className="text-center py-8">
            <a
              href="https://t.me/evgeniyevo"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-10 py-4 bg-primary text-primary-foreground rounded-full text-lg font-semibold tracking-tight hover:opacity-90 transition-opacity"
            >
              Написать в Telegram
            </a>
          </div>
        </FadeInSection>
      </div>
    </div>
  );
};

export default Terms;
