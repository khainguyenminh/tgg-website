import { ZALO_URL } from '@/lib/site'
import { ZaloIcon } from './icons'

// Khép trang con: một câu hỏi apron, một lời dẫn, một đệm góc
export default function ZaloClose({
  title,
  lede,
  cta = 'Nhắn Zalo',
  children,
}: {
  title: React.ReactNode
  lede: React.ReactNode
  cta?: string
  children?: React.ReactNode
}) {
  return (
    <section aria-labelledby="close-title" className="relative bg-arena py-24 md:py-32">
      <span aria-hidden="true" className="rope rope-red absolute inset-x-0 top-0 rounded-none" />
      <div className="mx-auto grid max-w-[1400px] gap-10 px-4 md:px-8 lg:grid-cols-[1.15fr_1fr] lg:items-end">
        <h2 id="close-title" className="apron text-[clamp(2.75rem,6vw,5rem)] text-arena-ink">{title}</h2>
        <div className="lg:max-w-[30rem] lg:justify-self-end">
          <p className="max-w-[30rem] text-lg leading-relaxed text-arena-mute">{lede}</p>
          <a href={ZALO_URL} target="_blank" rel="noopener noreferrer" className="corner-pad corner-pad-lg mt-8">
            <ZaloIcon className="h-6 w-6" />
            {cta}
          </a>
          {children && <div className="mt-8 flex flex-wrap gap-x-8 gap-y-4 text-lg">{children}</div>}
        </div>
      </div>
    </section>
  )
}
