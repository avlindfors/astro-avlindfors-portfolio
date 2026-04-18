import { useEffect, useRef } from 'react'

export default function HelloThere() {
  const emojiRef = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const el = emojiRef.current
    if (!el) return
    el.style.animation = 'wave 0.8s ease-in-out'
    const onEnd = () => {
      el.style.animation = ''
    }
    el.addEventListener('animationend', onEnd, { once: true })
  }, [])

  return (
    <p className="print:hidden wave-on-hover cursor-default text-emerald-950 dark:text-emerald-200 tracking-widest uppercase font-bold text-xs">
      Hello there{' '}
      <span ref={emojiRef} className="wave-emoji text-lg">
        👋
      </span>
      , my name is
    </p>
  )
}
