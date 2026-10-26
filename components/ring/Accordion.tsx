'use client'

import { useId, useState } from 'react'
import { PlusIcon } from './icons'

export type QA = { q: string; a: string }

// Accordion trên nền canvas: dây mực phía trên, nếp vải giữa các dòng, câu trả lời mở bằng grid-rows
export default function Accordion({ items, defaultOpen = null }: { items: QA[]; defaultOpen?: number | null }) {
  const [open, setOpen] = useState<number | null>(defaultOpen)
  const uid = useId()

  return (
    <div className="border-t-[3px] border-canvas-ink">
      {items.map((f, i) => {
        const isOpen = open === i
        const panelId = `${uid}-a-${i}`
        return (
          <div key={f.q} className="border-b-[3px] border-canvas-deep">
            <h3>
              <button
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpen(isOpen ? null : i)}
                className="flex min-h-16 w-full items-center justify-between gap-6 py-5 text-left"
              >
                <span className="placard text-[1.35rem] normal-case leading-tight">{f.q}</span>
                <PlusIcon className={`h-6 w-6 shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-45' : ''}`} />
              </button>
            </h3>
            <div
              id={panelId}
              role="region"
              className="grid transition-[grid-template-rows] duration-400 ease-[cubic-bezier(0.16,1,0.3,1)] motion-reduce:transition-none"
              style={{ gridTemplateRows: isOpen ? '1fr' : '0fr' }}
            >
              <div className="overflow-hidden" inert={!isOpen}>
                <p className="max-w-[40rem] pb-6 text-lg leading-relaxed text-canvas-mute">{f.a}</p>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
