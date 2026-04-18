export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-(--line) pt-8 pb-2 text-(--sea-ink-soft)">
      <div className="flex flex-col gap-8">

        <div className="flex justify-between">
          <div className="flex flex-col gap-3">
            <p className="island-kicker">Navigation</p>
            <nav className="flex flex-col gap-2 text-sm font-medium">
              <a href="/" className="nav-link w-fit">Resume</a>
              <a href="/about" className="nav-link w-fit">About me</a>
            </nav>
          </div>

          <div className="flex flex-col gap-3">
            <p className="island-kicker">Contact</p>
            <div className="flex flex-col gap-2 text-sm">
              <a
                href="https://linkedin.com/in/avlindfors"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 font-medium no-underline text-(--sea-ink-soft) hover:text-(--lagoon-deep) transition w-fit"
              >
                <svg className="size-4 shrink-0" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect x="2" y="9" width="4" height="12" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
                LinkedIn
              </a>
              <a
                href="mailto:alex@avlindfors.com"
                className="inline-flex items-center gap-1.5 font-medium no-underline text-(--sea-ink-soft) hover:text-(--lagoon-deep) transition w-fit"
              >
                <svg className="size-4 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
                Mail
              </a>
            </div>
          </div>
        </div>

        <p className="text-xs opacity-60 text-center">
          &copy; {year} Alexander Lindfors
        </p>
      </div>
    </footer>
  )
}
