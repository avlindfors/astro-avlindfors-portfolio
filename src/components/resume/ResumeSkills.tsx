import type { ResumeData, IconName } from './types'
import { Icon } from './icons'

export default function ResumeSkills({
  skills,
  title = 'Skills',
  icon,
}: Pick<ResumeData, 'skills'> & { title?: string; icon?: IconName }) {
  return (
    <div>
      <div className="island-kicker flex items-center gap-1.5 mb-3">
        {icon && <Icon name={icon} className="size-3.5 shrink-0" />}
        <span>{title}</span>
      </div>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <span
            key={skill}
            className="rounded-full border border-(--chip-line) bg-(--chip-bg) px-3 py-1 text-xs font-semibold text-(--sea-ink)"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  )
}
