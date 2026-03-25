interface HeaderProps {
  className?: string;
}

export default function Header({ className }: HeaderProps) {
  return (
    <header className={`absolute top-0 left-0 right-0 z-10 p-6 ${className ?? ""}`}>
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-2">
          <img src="https://cdn.poehali.dev/projects/da5fa67a-5413-4b47-9421-835a645c4d31/files/d53261f9-b042-470c-a15a-8b05793dfc6a.jpg" alt="ФЛС логотип" className="h-8 w-8 object-contain rounded" />
          <span className="text-white text-sm uppercase tracking-wide font-bold">ФЛС</span>
        </div>
        <nav className="flex gap-8">
          <a
            href="#about"
            className="text-white hover:text-neutral-400 transition-colors duration-300 uppercase text-sm"
          >
            О лиге
          </a>
          <a
            href="/regulations"
            className="text-white hover:text-neutral-400 transition-colors duration-300 uppercase text-sm"
          >
            Регламент
          </a>
          <a
            href="https://vk.com/club237048823"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-neutral-400 transition-colors duration-300 uppercase text-sm"
          >
            Вступить
          </a>
        </nav>
      </div>
    </header>
  );
}