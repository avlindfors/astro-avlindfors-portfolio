export default function SubLabel({ children }: { children: React.ReactNode }) {
  return (
    <span className="text-xs print:text-[10px] text-(--sea-ink-soft) font-medium tracking-wide">
      {children}
    </span>
  )
}
