import type { Language, IconName } from './types'
import { Icon } from './icons'

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
      <div className="island-kicker flex items-center gap-1.5 mb-3">
        {icon && <Icon name={icon} className="size-3.5 shrink-0" />}
        <span>{title}</span>
      </div>
      <div className="flex flex-col gap-1.5">
        {languages.map((lang) => (
          <div key={lang.name} className="flex items-baseline justify-between gap-2">
            <span className="text-sm text-(--sea-ink) font-medium">{lang.name}</span>
            <span className="text-xs text-(--sea-ink-soft)">{lang.proficiency}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
