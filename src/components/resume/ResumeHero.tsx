import type { ResumeData } from './types'

function ContactLink({
  href,
  children,
  target,
  rel,
}: {
  href: string
  children: React.ReactNode
  target?: string
  rel?: string
}) {
  return (
    <a
      href={href}
      target={target}
      rel={rel}
      className="inline-flex items-center gap-1.5 print:gap-1 font-medium no-underline text-blue-950 hover:text-blue-800 dark:text-blue-100 hover:dark:text-indigo-200"
    >
      {children}
    </a>
  )
}

export default function ResumeHero({
  name,
  subtitles,
  tagline,
  contact,
}: Pick<ResumeData, 'name' | 'subtitles' | 'tagline' | 'contact'>) {
  return (
    <div className="flex flex-col gap-2 print:gap-1.5">
      <div className="flex flex-col gap-1">
        <h1 className="display-title m-0 text-4xl font-bold tracking-tight text-(--sea-ink) sm:text-5xl print:text-4xl">
          {name}
        </h1>
        <p className="text-base print:text-sm font-thin">
          {subtitles.join(' · ')}
        </p>
      </div>

      <p className="max-w-2xl text-base print:text-sm text-(--sea-ink-soft) leading-relaxed">
        {tagline}
      </p>

      <div className="flex flex-wrap gap-x-5 gap-y-2 print:gap-x-4 print:gap-y-1.5 text-sm print:text-xs mt-2 print:mt-1.5">
        <ContactLink href={`mailto:${contact.email}`}>
          <svg
            className="size-4 print:size-3.5 shrink-0"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect x="2" y="4" width="20" height="16" rx="2" />
            <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
          </svg>
          {contact.email}
        </ContactLink>

        <ContactLink
          href={contact.linkedin}
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg
            className="size-4 print:size-3.5 shrink-0"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
            <rect x="2" y="9" width="4" height="12" />
            <circle cx="4" cy="4" r="2" />
          </svg>
          {contact.linkedinHandle}
        </ContactLink>

        <ContactLink
          href={contact.website}
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg
            className="size-4 print:size-3.5 shrink-0"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="12" r="10" />
            <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
          </svg>
          {contact.websiteLabel}
        </ContactLink>
      </div>
    </div>
  )
}
