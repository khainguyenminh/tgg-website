import Image from 'next/image'
import Link from 'next/link'
import { photo, type Photo } from '@/data/photos'
import { ArrowIcon } from './ring/icons'

const ROW_A = ['tiboom', 'nmt', 'hoang-kha', 'mai-tyson', 'kien-cuong', 'mqh', 'dvn', 'tfcmma', 'mikey', 'anh-khiem', 'kevin', 'wave', 'thanh-phong', 'game-over'].map(photo)
const ROW_B = ['vu-le', 'destinee', 'tiger-kem', 'dinh-tien', 'nam-quan', 'minh-loc', 'thanh-thuy', 'my-hoang', 'rabbit', 'ntv', 'dont-quit', 'derek', 'demut', 'wukong-green'].map(photo)

function Tile({ p, hidden }: { p: Photo; hidden?: boolean }) {
  return (
    <figure className={`w-[17rem] shrink-0 md:w-[22rem] ${hidden ? 'marquee-dup' : ''}`} aria-hidden={hidden || undefined}>
      <div className="relative aspect-[3/2] overflow-hidden rounded-[6px] bg-black">
        <Image
          src={p.src}
          alt={hidden ? '' : p.alt}
          fill
          placeholder="blur"
          blurDataURL={p.blurDataURL}
          sizes="(min-width: 768px) 22rem, 17rem"
          className="object-cover"
        />
      </div>
      <figcaption className="mt-3">
        <span className="flex items-baseline justify-between gap-3">
          <span className="placard truncate text-xl text-arena-ink">{p.lettering || 'Fully Design'}</span>
          <span className="shrink-0 text-sm text-arena-mute">{p.color}</span>
        </span>
        <Link
          href="/customize"
          tabIndex={hidden ? -1 : undefined}
          className="placard mt-2 inline-flex min-h-11 items-center gap-1.5 text-base text-corner hover:text-arena-ink"
        >
          Làm một chiếc như này <ArrowIcon className="h-4 w-4" />
        </Link>
      </figcaption>
    </figure>
  )
}

function Row({ items, reverse, duration }: { items: Photo[]; reverse?: boolean; duration: string }) {
  return (
    <div
      className="marquee overflow-hidden pl-[var(--edge)] [--edge:1rem] [scroll-padding-inline-start:var(--edge)] md:[--edge:max(2rem,calc((100%-1400px)/2+2rem))]"
      role="region"
      aria-label="Dải ảnh mouthguard đã làm, rê chuột hoặc focus để dừng"
    >
      <ul
        className={`marquee-track flex w-max gap-5 pr-5 ${reverse ? 'reverse' : ''}`}
        style={{ '--marquee-duration': duration } as React.CSSProperties}
      >
        {items.map((p) => (
          <li key={p.id}><Tile p={p} /></li>
        ))}
        {items.map((p) => (
          <li key={`${p.id}-dup`} className="marquee-dup"><Tile p={p} hidden /></li>
        ))}
      </ul>
    </div>
  )
}

// Lineup: bức tường tên, mỗi chiếc guard một cái tên
export default function Lineup() {
  return (
    <section aria-labelledby="lineup-title" className="bg-arena pb-24 pt-20 md:pb-32 md:pt-28">
      <div className="mx-auto max-w-[1400px] px-4 md:px-8">
        <h2 id="lineup-title" className="apron text-[clamp(3rem,8.5vw,7.5rem)] text-arena-ink">
          174+ chiếc.
          <span className="block text-arena-mute">Mỗi chiếc một cái tên.</span>
        </h2>
        <div className="mt-8 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <p className="max-w-[36rem] text-lg leading-relaxed text-arena-mute">
            Tên, số, cờ, logo câu lạc bộ hay hình vẽ tay: tất cả theo ý bạn, từ trong suốt tối giản đến full custom. Đây là
            những chiếc đã rời lab Khai Nguyên.
          </p>
          <Link href="/gallery" className="rope-link placard inline-flex shrink-0 items-center gap-2 self-start text-lg text-arena-ink md:self-auto">
            Mở toàn bộ gallery
            <ArrowIcon />
          </Link>
        </div>
      </div>

      <div className="mt-14 flex flex-col gap-8">
        <Row items={ROW_A} duration="80s" />
        <Row items={ROW_B} duration="70s" reverse />
      </div>
    </section>
  )
}
