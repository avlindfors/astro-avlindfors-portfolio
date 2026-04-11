import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import ThemeToggle from './ThemeToggle'

const NAV_LINKS = [
  { to: '/', label: 'Start' },
  { to: '/resume', label: 'Resume' },
] as const

export default function Header({ pathname }: { pathname: string }) {
  const [mounted, setMounted] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  // Close on Escape
  useEffect(() => {
    if (!menuOpen) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMenuOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [menuOpen])

  // Prevent body scroll when open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  const isActive = (to: string) =>
    to === '/' ? pathname === '/' : pathname.startsWith(to)

  return (
    <header>
      <nav className="flex items-center justify-between gap-3">
        {/* Logo */}
        <a
          href="/"
          className="inline-flex items-center gap-2 py-1.5 text-sm text-(--sea-ink) no-underline"
        >
          <span className="inline-flex items-center justify-center font-bold tracking-wide text-base bg-amber-700 text-white rounded-full size-8">
            AL
          </span>
          <h1 className="m-0 shrink-0 text-base font-semibold tracking-tight">
            Alexander Lindfors
          </h1>
        </a>

        {/* Desktop nav */}
        <div className="hidden sm:flex items-center gap-4 text-sm font-semibold">
          {NAV_LINKS.map(({ to, label }) => (
            <a
              key={to}
              href={to}
              className={isActive(to) ? 'nav-link is-active' : 'nav-link'}
            >
              {label}
            </a>
          ))}
        </div>

        {/* Desktop theme toggle */}
        <div className="hidden sm:block">
          <ThemeToggle />
        </div>

        {/* Mobile hamburger */}
        <button
          type="button"
          onClick={() => setMenuOpen(true)}
          aria-label="Open menu"
          className="sm:hidden flex flex-col justify-center items-center gap-1.5 size-10 rounded-full border border-(--chip-line) bg-(--chip-bg)"
        >
          <span className="block w-4.5 h-px bg-(--sea-ink) rounded-full" />
          <span className="block w-4.5 h-px bg-(--sea-ink) rounded-full" />
          <span className="block w-4.5 h-px bg-(--sea-ink) rounded-full" />
        </button>
      </nav>

      {mounted &&
        createPortal(
          <>
            {/* Backdrop */}
            <div
              aria-hidden={!menuOpen}
              onClick={() => setMenuOpen(false)}
              className={`fixed inset-0 z-40 bg-black/30 backdrop-blur-sm transition-opacity duration-300 ${menuOpen
                  ? 'opacity-100 pointer-events-auto'
                  : 'opacity-0 pointer-events-none'
                }`}
            />

            {/* Drawer */}
            <div
              role="dialog"
              aria-modal="true"
              aria-label="Navigation menu"
              className={`fixed inset-y-0 right-0 z-50 w-full max-w-xs flex flex-col island-shell transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${menuOpen ? 'translate-x-0' : 'translate-x-full'
                }`}
            >
              {/* Drawer header */}
              <div className="flex items-center justify-between px-6 py-5 border-b border-(--line)">
                <span className="text-sm font-semibold text-(--sea-ink-soft) tracking-wide">
                  Menu
                </span>
                <button
                  type="button"
                  onClick={() => setMenuOpen(false)}
                  aria-label="Close menu"
                  className="flex items-center justify-center size-9 rounded-full border border-(--chip-line) bg-(--chip-bg) text-(--sea-ink)"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    className="size-4"
                  >
                    <path d="M18 6 6 18M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Drawer nav links */}
              <nav className="flex flex-col gap-1 p-4 flex-1">
                {NAV_LINKS.map(({ to, label }) => (
                  <a
                    key={to}
                    href={to}
                    className={
                      isActive(to)
                        ? 'flex items-center px-4 py-3 rounded-xl text-base font-semibold text-(--sea-ink) no-underline bg-(--chip-bg)'
                        : 'flex items-center px-4 py-3 rounded-xl text-base font-semibold text-(--sea-ink-soft) no-underline hover:bg-(--chip-bg) hover:text-(--sea-ink) transition-colors'
                    }
                  >
                    {label}
                  </a>
                ))}
              </nav>

              {/* Drawer footer */}
              <div className="p-6 border-t border-(--line)">
                <ThemeToggle />
              </div>
            </div>
          </>,
          document.body,
        )}
    </header>
  )
}
