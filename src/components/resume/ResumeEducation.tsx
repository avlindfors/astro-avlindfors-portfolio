import type { Education, IconName } from './types'
import SectionHeader from './SectionHeader'

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
      <SectionHeader title={title} icon={icon} />
      <div className="flex flex-col gap-4 print:gap-3">
        {education.map((item) => (
          <div key={item.institution}>
            <p className="m-0 text-sm print:text-xs font-semibold text-(--sea-ink)">
              {item.institution}
            </p>
            <p className="m-0 text-xs print:text-xs text-teal-900 dark:text-teal-100 italic mb-0.5">
              {item.degree}
            </p>
            <div className="flex justify-between items-baseline mt-0.5">
              <p className="m-0 text-xs text-teal-900 dark:text-teal-100">
                {item.location}
              </p>
              {(item.startYear || item.endYear) && (
                <p className="m-0 text-xs text-teal-900 dark:text-teal-100">
                  {item.startYear ?? ''}
                  {item.endYear ? ` – ${item.endYear}` : ''}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
