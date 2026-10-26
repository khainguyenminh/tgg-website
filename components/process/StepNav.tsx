'use client'

import { useEffect, useState } from 'react'

// Thanh 5 bước ghim dưới menu: bước đang đọc sáng lên, có vạch xanh bên dưới
export default function StepNav({ steps }: { steps: { id: string; short: string }[] }) {
  const [active, setActive] = useState(steps[0].id)

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id)
        })
      },
      { rootMargin: '-35% 0px -60% 0px' },
    )
    steps.forEach((s) => {
      const el = document.getElementById(s.id)
      if (el) io.observe(el)
    })
    return () => io.disconnect()
  }, [steps])

  return (
    <nav aria-label="Các bước" className="sticky top-16 z-30 bg-arena/95 backdrop-blur-sm md:top-[72px]">
      <ol className="mx-auto flex max-w-[1400px] gap-1 overflow-x-auto px-4 [scrollbar-width:none] md:px-8 [&::-webkit-scrollbar]:hidden">
        {steps.map((s, i) => {
          const on = s.id === active
          return (
            <li key={s.id} className="shrink-0">
              <a
                href={`#${s.id}`}
                aria-current={on ? 'step' : undefined}
                className={`relative flex min-h-14 items-center gap-2 px-3 transition-colors duration-200 ${on ? 'text-arena-ink' : 'text-arena-mute hover:text-arena-ink'}`}
              >
                <span className={`apron tabular text-2xl leading-none ${on ? 'text-corner' : ''}`}>{i + 1}</span>
                <span className="placard text-base">{s.short}</span>
                <span
                  aria-hidden="true"
                  className={`rope rope-blue absolute inset-x-3 bottom-0 origin-left transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${on ? 'scale-x-100' : 'scale-x-0'}`}
                />
              </a>
            </li>
          )
        })}
      </ol>
      <span aria-hidden="true" className="rope rope-white block rounded-none opacity-20" />
    </nav>
  )
}
