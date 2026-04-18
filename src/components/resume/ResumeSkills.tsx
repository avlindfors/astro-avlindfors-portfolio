import type { ResumeData, IconName } from './types'
import SectionHeader from './SectionHeader'
import SubLabel from './SubLabel'
import Chip from './Chip'

export default function ResumeSkills({
  skills,
  title = 'Skills',
  icon,
}: Pick<ResumeData, 'skills'> & { title?: string; icon?: IconName }) {
  return (
    <div>
      <SectionHeader title={title} icon={icon} />
      <div className="flex flex-col gap-4 print:gap-3">
        {skills.map(({ category, items }) => (
          <div key={category} className="flex flex-col gap-2.5 print:gap-1.5">
            <SubLabel>{category}</SubLabel>
            <div className="flex flex-wrap gap-2 print:gap-1.5">
              {items.map((skill) => (
                <Chip key={skill} label={skill} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
