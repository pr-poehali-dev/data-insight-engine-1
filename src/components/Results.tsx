const teams = [
  { pos: 1, name: "Команда 1", g: 0, w: 0, d: 0, l: 0, gf: 0, ga: 0, pts: 0 },
  { pos: 2, name: "Команда 2", g: 0, w: 0, d: 0, l: 0, gf: 0, ga: 0, pts: 0 },
  { pos: 3, name: "Команда 3", g: 0, w: 0, d: 0, l: 0, gf: 0, ga: 0, pts: 0 },
  { pos: 4, name: "Команда 4", g: 0, w: 0, d: 0, l: 0, gf: 0, ga: 0, pts: 0 },
  { pos: 5, name: "Команда 5", g: 0, w: 0, d: 0, l: 0, gf: 0, ga: 0, pts: 0 },
  { pos: 6, name: "Команда 6", g: 0, w: 0, d: 0, l: 0, gf: 0, ga: 0, pts: 0 },
  { pos: 7, name: "Команда 7", g: 0, w: 0, d: 0, l: 0, gf: 0, ga: 0, pts: 0 },
  { pos: 8, name: "Команда 8", g: 0, w: 0, d: 0, l: 0, gf: 0, ga: 0, pts: 0 },
  { pos: 9, name: "Команда 9", g: 0, w: 0, d: 0, l: 0, gf: 0, ga: 0, pts: 0 },
  { pos: 10, name: "Команда 10", g: 0, w: 0, d: 0, l: 0, gf: 0, ga: 0, pts: 0 },
  { pos: 11, name: "Команда 11", g: 0, w: 0, d: 0, l: 0, gf: 0, ga: 0, pts: 0 },
  { pos: 12, name: "Команда 12", g: 0, w: 0, d: 0, l: 0, gf: 0, ga: 0, pts: 0 },
  { pos: 13, name: "Команда 13", g: 0, w: 0, d: 0, l: 0, gf: 0, ga: 0, pts: 0 },
  { pos: 14, name: "Команда 14", g: 0, w: 0, d: 0, l: 0, gf: 0, ga: 0, pts: 0 },
  { pos: 15, name: "Команда 15", g: 0, w: 0, d: 0, l: 0, gf: 0, ga: 0, pts: 0 },
];

export default function Results() {
  return (
    <div id="results" className="bg-white px-6 py-24 lg:py-32">
      <div className="max-w-6xl mx-auto">
        <p className="uppercase text-sm tracking-widest text-neutral-500 mb-6">Турнирная таблица</p>
        <h2 className="text-4xl lg:text-6xl font-bold text-neutral-900 leading-tight mb-12">
          Результаты
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b-2 border-neutral-900">
                <th className="text-left py-3 px-2 text-neutral-500 font-medium uppercase tracking-wide w-8">#</th>
                <th className="text-left py-3 px-4 text-neutral-500 font-medium uppercase tracking-wide">Команда</th>
                <th className="text-center py-3 px-2 text-neutral-500 font-medium uppercase tracking-wide">И</th>
                <th className="text-center py-3 px-2 text-neutral-500 font-medium uppercase tracking-wide">В</th>
                <th className="text-center py-3 px-2 text-neutral-500 font-medium uppercase tracking-wide">Н</th>
                <th className="text-center py-3 px-2 text-neutral-500 font-medium uppercase tracking-wide">П</th>
                <th className="text-center py-3 px-2 text-neutral-500 font-medium uppercase tracking-wide">ГЗ</th>
                <th className="text-center py-3 px-2 text-neutral-500 font-medium uppercase tracking-wide">ГП</th>
                <th className="text-center py-3 px-3 text-neutral-900 font-bold uppercase tracking-wide">О</th>
              </tr>
            </thead>
            <tbody>
              {teams.map((team, i) => (
                <tr
                  key={team.pos}
                  className={`border-b border-neutral-100 hover:bg-neutral-50 transition-colors ${i === 0 ? "bg-neutral-900 text-white hover:bg-neutral-800" : ""}`}
                >
                  <td className={`py-4 px-2 font-bold ${i === 0 ? "text-white" : "text-neutral-400"}`}>{team.pos}</td>
                  <td className={`py-4 px-4 font-semibold ${i === 0 ? "text-white" : "text-neutral-900"}`}>{team.name}</td>
                  <td className={`py-4 px-2 text-center ${i === 0 ? "text-neutral-300" : "text-neutral-600"}`}>{team.g}</td>
                  <td className={`py-4 px-2 text-center ${i === 0 ? "text-neutral-300" : "text-neutral-600"}`}>{team.w}</td>
                  <td className={`py-4 px-2 text-center ${i === 0 ? "text-neutral-300" : "text-neutral-600"}`}>{team.d}</td>
                  <td className={`py-4 px-2 text-center ${i === 0 ? "text-neutral-300" : "text-neutral-600"}`}>{team.l}</td>
                  <td className={`py-4 px-2 text-center ${i === 0 ? "text-neutral-300" : "text-neutral-600"}`}>{team.gf}</td>
                  <td className={`py-4 px-2 text-center ${i === 0 ? "text-neutral-300" : "text-neutral-600"}`}>{team.ga}</td>
                  <td className={`py-4 px-3 text-center font-bold text-lg ${i === 0 ? "text-white" : "text-neutral-900"}`}>{team.pts}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-6 text-neutral-400 text-xs uppercase tracking-wide">И — игры · В — победы · Н — ничьи · П — поражения · ГЗ — голы забитые · ГП — голы пропущенные · О — очки</p>
      </div>
    </div>
  );
}
