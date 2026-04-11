import type { Experience, IconName } from './types'
import { Icon } from './icons'

function ExperienceItem({
  item,
  isLast,
  compact,
}: {
  item: Experience
  isLast: boolean
  compact: boolean
}) {
  return (
    <div className="relative flex gap-4">
      {/* Timeline line + dot */}
      <div className="relative flex flex-col items-center">
        <div
          className={`shrink-0 rounded-full border-2 border-(--lagoon) bg-(--surface-strong) ${compact ? 'mt-1 size-2' : 'mt-1.5 size-2.5'}`}
        />
        {!isLast && <div className="mt-1 w-px flex-1 bg-(--line)" />}
      </div>

      {/* Content */}
      <div className={`flex-1 ${isLast ? 'pb-0' : compact ? 'pb-4' : 'pb-8'}`}>
        <div className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-0.5 mb-0.5">
          <h3
            className={`m-0 font-semibold text-(--sea-ink) ${compact ? 'text-sm' : 'text-base'}`}
          >
            {item.role}
          </h3>
          <span className="text-xs font-medium text-(--sea-ink-soft) shrink-0">
            {item.period}
          </span>
        </div>
        <p className="m-0 text-sm font-medium text-(--lagoon-deep)">
          {item.company}
          <span className="text-(--sea-ink-soft) font-normal">
            {' '}
            · {item.location}
          </span>
        </p>
        {!compact && item.description && (
          <p className="m-0 mt-2 text-sm text-(--sea-ink-soft) leading-relaxed mb-3">
            {item.description}
          </p>
        )}
        {!compact && item.tools.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mt-2">
            {item.tools.map((tool) => (
              <span
                key={tool}
                className="rounded-md border border-(--chip-line) bg-(--chip-bg) px-2 py-0.5 text-xs font-medium text-(--sea-ink-soft)"
              >
                {tool}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default function ResumeExperience({
  experience,
  title = 'Experience',
  icon,
  compact = false,
}: {
  experience: Experience[]
  title?: string
  icon?: IconName
  compact?: boolean
}) {
  return (
    <div>
      <div className={`island-kicker flex items-center gap-1.5 ${compact ? 'mb-3' : 'mb-5'}`}>
        {icon && <Icon name={icon} className="size-3.5 shrink-0" />}
        <span>{title}</span>
      </div>
      <div>
        {experience.map((item, i) => (
          <ExperienceItem
            key={`${item.company}-${item.period}`}
            item={item}
            isLast={i === experience.length - 1}
            compact={compact}
          />
        ))}
      </div>
    </div>
  )
}
