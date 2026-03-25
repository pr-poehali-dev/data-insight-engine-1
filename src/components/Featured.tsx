export default function Featured() {
  return (
    <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center min-h-screen px-6 py-12 lg:py-0 bg-white">
      <div className="flex-1 h-[400px] lg:h-[800px] mb-8 lg:mb-0 lg:order-2">
        <img
          src="https://cdn.poehali.dev/projects/da5fa67a-5413-4b47-9421-835a645c4d31/files/dab61786-ffb5-44f9-b069-ad42d3485d27.jpg"
          alt="Футболисты в игре"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex-1 text-left lg:h-[800px] flex flex-col justify-center lg:mr-12 lg:order-1">
        <h3 className="uppercase mb-4 text-sm tracking-wide text-neutral-600">Любительский футбол в Самаре</h3>
        <p className="text-2xl lg:text-4xl mb-8 text-neutral-900 leading-tight">
          Более 30 команд, сотни матчей каждый сезон. Честная борьба, реальная статистика и атмосфера настоящего футбола — для тех, кто играет в удовольствие.
        </p>
        <button className="bg-black text-white border border-black px-4 py-2 text-sm transition-all duration-300 hover:bg-white hover:text-black cursor-pointer w-fit uppercase tracking-wide">
          Расписание матчей
        </button>
      </div>
    </div>
  );
}