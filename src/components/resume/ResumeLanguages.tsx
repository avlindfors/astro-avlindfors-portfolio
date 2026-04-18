import type { Language, IconName } from './types'
import SectionHeader from './SectionHeader'

export default function ResumeLanguages({
  languages,
  title = 'Languages',
  icon,
}: {
  languages: Language[]
  title?: string
  icon?: IconName
}) {
  return (
    <div>
      <SectionHeader title={title} icon={icon} />
      <div className="flex flex-col gap-1.5 print:gap-1">
        {languages.map((lang) => (
          <div
            key={lang.name}
            className="flex items-baseline justify-between gap-2 print:gap-1.5"
          >
            <span className="text-sm print:text-xs text-teal-900 dark:text-teal-100 font-medium">
              {lang.name}
            </span>
            <span className="text-xs text-teal-900 dark:text-teal-100">
              {lang.proficiency}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}
