export default function About() {
  const stats = [
    { value: "2026", label: "Год основания" },
    { value: "15", label: "Команд в лиге" },
    { value: "2", label: "Уровня игры" },
  ];

  return (
    <div id="about" className="bg-white px-6 py-24 lg:py-32">
      <div className="max-w-6xl mx-auto">
        <p className="uppercase text-sm tracking-widest text-neutral-500 mb-6">О нас</p>
        <div className="flex flex-col lg:flex-row lg:gap-24 gap-12">
          <div className="flex-1">
            <h2 className="text-4xl lg:text-6xl font-bold text-neutral-900 leading-tight mb-8">
              Футбольная<br />лига Самары
            </h2>
            <p className="text-neutral-600 text-lg leading-relaxed mb-6">
              ФЛС основана в 2026 году с одной целью — дать каждому самарцу возможность играть в настоящий мини-футбол. Мы объединяем любителей и тех, кто готов расти до профессионального уровня.
            </p>
            <p className="text-neutral-600 text-lg leading-relaxed">
              Мы верим, что футбол — это не только спорт, но и сообщество. Здесь каждая команда имеет значение, каждый матч — это событие, а каждый игрок может найти свой путь в игре.
            </p>
          </div>
          <div className="flex-1 flex flex-col justify-center gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="border-b border-neutral-200 pb-8">
                <p className="text-6xl lg:text-7xl font-bold text-neutral-900 leading-none mb-2">
                  {stat.value}
                </p>
                <p className="text-neutral-500 uppercase text-sm tracking-wide">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
