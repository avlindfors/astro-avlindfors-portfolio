export default function Chip({ label }: { label: string }) {
  return (
    <span className="rounded-sm border border-(--chip-line) bg-(--chip-bg) px-2 print:px-1.5 py-0.5 print:py-0 text-xs font-medium text-(--sea-ink) print:text-[10px]">
      {label}
    </span>
  )
}
