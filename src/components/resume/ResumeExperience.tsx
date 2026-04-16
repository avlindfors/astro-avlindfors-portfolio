import type { Experience, IconName } from './types'
import SectionHeader from './SectionHeader'
import Chip from './Chip'

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
    <div className="relative flex gap-4 print:gap-3">
      {/* Timeline line + dot */}
      <div className="relative flex flex-col items-center">
        <div
          className={`shrink-0 rounded-full border-2 border-(--lagoon) bg-(--surface-strong) ${compact ? 'mt-1 size-2 print:size-1.5' : 'mt-1.5 print:mt-1 size-2.5 print:size-2'}`}
        />
        {!isLast && (
          <div className="mt-1 w-px flex-1 border-l border-(--line)" />
        )}
      </div>

      {/* Content */}
      <div
        className={`flex-1 ${isLast ? 'pb-0' : compact ? 'pb-4 print:pb-3' : 'pb-8 print:pb-6'}`}
      >
        <div className="flex flex-wrap items-baseline justify-between gap-x-3 print:gap-x-2 gap-y-0.5 mb-0.5">
          <h3
            className={`m-0 font-semibold text-teal-950 dark:text-teal-100 ${compact ? 'text-sm print:text-xs' : 'text-base print:text-sm'}`}
          >
            {item.role}
          </h3>
          <span className="text-xs font-medium text-teal-850 shrink-0">
            {item.period}
          </span>
        </div>
        <p className="m-0 text-sm print:text-xs font-medium text-emerald-850">
          {item.company}
          <span className="text-emerald-850 font-normal">
            {' '}
            · {item.location}
          </span>
        </p>
        {!compact && item.description && (
          <p className="m-0 mt-2 print:mt-1.5 text-sm print:text-xs text-teal-850 leading-relaxed mb-3 print:mb-2">
            {item.description}
          </p>
        )}
        {!compact && item.tools.length > 0 && (
          <div className="flex flex-wrap gap-1.5 print:gap-1 mt-2 print:mt-1.5">
            {item.tools.map((tool) => (
              <Chip key={tool} label={tool} />
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
      <SectionHeader title={title} icon={icon} />
      {experience.map((item, i) => (
        <ExperienceItem
          key={`${item.company}-${item.period}`}
          item={item}
          isLast={i === experience.length - 1}
          compact={compact}
        />
      ))}
    </div>
  )
}
