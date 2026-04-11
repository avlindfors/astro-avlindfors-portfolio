export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-(--line)  text-(--sea-ink-soft) pt-4">
      <div className="flex flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">
        <p className="m-0 text-sm">
          &copy; {year} Alexander Lindfors. All rights reserved.
        </p>
        <a
          href="https://linkedin.com/in/avlindfors"
          target="_blank"
          rel="noreferrer"
          className="text-(--sea-ink-soft) text-sm transition hover:bg-(--link-bg-hover) hover:text-(--sea-ink)"
        >
          <span className="sr-only">Find me on Linkedin</span>
          <p>LinkedIn</p>
        </a>
      </div>
    </footer>
  )
}
