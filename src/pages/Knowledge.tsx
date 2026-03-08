import FadeInSection from "@/components/FadeInSection";
import { Link } from "react-router-dom";

const articles = [
  { title: "Введение в АнтиСистему", description: "Основные понятия и принципы работы комплекса" },
  { title: "Как работают процессы очищения", description: "Подробное описание механизмов удаления негатива" },
  { title: "Энергетическая частота человека", description: "Что такое индивидуальная частота и как она влияет на жизнь" },
  { title: "Автономные защиты", description: "Как формируются и работают защитные процессы" },
  { title: "Восстановление тела", description: "Процессы перестройки и восстановления физического тела" },
  { title: "Энергетические способности", description: "Развитие способностей управления своей судьбой" },
  { title: "Первые 31 день", description: "Чего ожидать в начале работы с АнтиСистемой" },
  { title: "Частые ошибки новичков", description: "Что мешает процессу и как этого избежать" },
  { title: "Глубинные уровни реальности", description: "Понимание структуры реальности и работы на её глубинах" },
  { title: "Финансовый поток", description: "Как АнтиСистема влияет на финансовую сферу жизни" },
  { title: "Отношения и окружение", description: "Трансформация отношений через внутренние изменения" },
  { title: "Здоровье и тело", description: "Восстановление естественного состояния здоровья" },
];

const Knowledge = () => {
  return (
    <div className="page-container relative z-10">
      <FadeInSection>
        <h1 className="page-title">База знаний</h1>
        <p className="section-text mb-12">
          Читайте материалы чтобы понимать что с вами происходит в процессе работы АнтиСистемы.
        </p>
      </FadeInSection>
      <div className="space-y-4">
        {articles.map((article, i) => (
          <FadeInSection key={i}>
            <div className="group p-6 rounded-2xl border border-border/60 bg-background/70 backdrop-blur-sm hover:border-foreground/20 transition-colors cursor-pointer">
              <h3 className="text-lg font-semibold text-foreground mb-1 group-hover:underline">
                {article.title}
              </h3>
              <p className="text-muted-foreground">{article.description}</p>
            </div>
          </FadeInSection>
        ))}
      </div>
    </div>
  );
};

export default Knowledge;
