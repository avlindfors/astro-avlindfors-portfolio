import type { Education, IconName } from './types'
import { Icon } from './icons'

export default function ResumeEducation({
  education,
  title = 'Education',
  icon,
}: {
  education: Education[]
  title?: string
  icon?: IconName
}) {
  return (
    <div>
      <div className="island-kicker flex items-center gap-1.5 mb-3">
        {icon && <Icon name={icon} className="size-3.5 shrink-0" />}
        <span>{title}</span>
      </div>
      <div className="flex flex-col gap-4">
        {education.map((item) => (
          <div key={item.institution}>
            <p className="m-0 text-sm font-semibold text-(--sea-ink)">
              {item.institution}
            </p>
            <p className="m-0 text-sm text-(--sea-ink-soft) italic">
              {item.degree}
            </p>
            <p className="m-0 text-xs text-(--sea-ink-soft) mt-0.5">
              {item.location}
              {(item.startYear || item.endYear) && (
                <span className="ml-2 text-(--sea-ink-soft)">
                  ({item.startYear ?? ''}
                  {item.endYear ? ` - ${item.endYear}` : ''})
                </span>
              )}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}
