import type { IconName } from './types'
import { Icon } from './icons'

export default function SectionHeader({
  title,
  icon,
}: {
  title: string
  icon?: IconName
}) {
  return (
    <div className="flex items-center gap-2 mb-3 print:mb-2 tracking-widest text-xs font-bold text-emerald-850 uppercase">
      {icon && <Icon name={icon} className="size-3.5 print:size-3 shrink-0" />}
      <h2>{title}</h2>
    </div>
  )
}
