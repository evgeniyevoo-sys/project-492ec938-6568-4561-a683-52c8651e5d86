import FadeInSection from "@/components/FadeInSection";

const reviews = [
  { name: "Анна М.", text: "После запуска процесса заметила изменения уже через неделю. Стала спокойнее, отношения в семье наладились.", rating: 5 },
  { name: "Дмитрий К.", text: "Скептически относился, но решил попробовать. Через месяц финансовая ситуация реально сдвинулась с мёртвой точки.", rating: 5 },
  { name: "Елена В.", text: "Ничего не делала — всё шло само. Здоровье улучшилось, хронические боли ушли. Рекомендую.", rating: 5 },
  { name: "Максим П.", text: "Читал базу знаний параллельно — это помогало понимать что происходит. Очень глубокий процесс.", rating: 5 },
  { name: "Ольга Р.", text: "Наконец-то нашла то, что работает без медитаций и практик. Просто живу и чувствую перемены.", rating: 5 },
  { name: "Сергей Н.", text: "Автономные защиты — это что-то невероятное. Перестал чувствовать давление от окружения.", rating: 5 },
  { name: "Ирина Д.", text: "31 день пролетел незаметно. Результаты ощутимые — энергии стало больше, сон наладился.", rating: 5 },
  { name: "Алексей Т.", text: "Комплекс работает тихо и мощно. Рекомендую всем, кто готов к переменам.", rating: 4 },
  { name: "Наталья Г.", text: "Очень приятно что не нужно ничего делать. Процесс идёт сам и результаты говорят за себя.", rating: 5 },
];

const Reviews = () => {
  return (
    <div className="page-container relative z-10">
      <FadeInSection>
        <h1 className="page-title">Отзывы</h1>
      </FadeInSection>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {reviews.map((review, i) => (
          <FadeInSection key={i}>
            <div className="p-6 rounded-2xl border border-border/60 bg-background/70 backdrop-blur-sm">
              <div className="flex items-center gap-1 mb-3">
                {Array.from({ length: review.rating }).map((_, j) => (
                  <span key={j} className="text-foreground text-sm">★</span>
                ))}
              </div>
              <p className="text-muted-foreground leading-relaxed mb-4">{review.text}</p>
              <p className="text-sm font-semibold text-foreground">{review.name}</p>
            </div>
          </FadeInSection>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
