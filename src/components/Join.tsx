export default function Join() {
  return (
    <div id="join" className="bg-neutral-900 px-6 py-24 lg:py-32">
      <div className="max-w-4xl mx-auto text-center">
        <p className="uppercase text-sm tracking-widest text-neutral-400 mb-6">Вступить в лигу</p>
        <h2 className="text-4xl lg:text-6xl font-bold text-white leading-tight mb-8">
          Готов играть?
        </h2>
        <p className="text-neutral-400 text-lg leading-relaxed mb-12 max-w-2xl mx-auto">
          Подай заявку на вступление в Футбольную лигу Самары. Напиши нам в группу ВКонтакте — мы расскажем об условиях участия и ответим на все вопросы.
        </p>
        <a
          href="https://vk.com/club237048823"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-white text-black px-10 py-4 uppercase text-sm tracking-widest font-semibold hover:bg-neutral-200 transition-colors duration-300"
        >
          Подать заявку во ВКонтакте
        </a>
      </div>
    </div>
  );
}
