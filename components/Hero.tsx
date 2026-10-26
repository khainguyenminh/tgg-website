import Image from 'next/image'
import Link from 'next/link'
import { photo } from '@/data/photos'
import { PROMISES, ZALO_URL } from '@/lib/site'
import { ArrowIcon, ZaloIcon } from './ring/icons'

const hero = photo('champion-boy')

// Dưới đèn: một chiếc guard thật, có tên, nằm trên mặt kính đen dưới đèn sân đấu
export default function Hero() {
  return (
    <section className="relative isolate flex flex-col overflow-hidden bg-arena pt-16 md:pt-[72px] lg:min-h-[min(100svh,50rem)]">
      {/* Đèn sân đấu chiếu từ trên xuống */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
        style={{ background: 'radial-gradient(60% 50% at 70% 8%, rgb(242 244 245 / 0.07), transparent 70%)' }}
      />

      {/* Chữ và ảnh chia đôi, căn giữa theo chiều dọc; trên màn lớn section không bị kéo cao quá 50rem */}
      <div className="mx-auto grid w-full max-w-[1400px] flex-1 content-center items-center gap-8 px-4 pt-8 md:px-8 lg:grid-cols-2 lg:gap-12 lg:py-16">
        <div className="relative z-10">
          <h1 className="apron t-display text-arena-ink">
            Vừa khít răng bạn.
            <span className="block text-corner">Mang tên bạn.</span>
          </h1>
          <p className="mt-6 max-w-[28rem] text-lg leading-relaxed text-arena-mute">
            Mouthguard custom-fit làm tại <span className="text-arena-ink">Khai Nguyên Dental Lab</span> từ dữ liệu scan 3D răng
            của chính bạn. Cho boxing, Muay Thái, MMA và các môn không đối kháng.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-x-8 gap-y-5">
            {/* Trên điện thoại thanh đệm góc cố định đã giữ nút Zalo */}
            <a href={ZALO_URL} target="_blank" rel="noopener noreferrer" className="corner-pad hidden lg:inline-flex">
              <ZaloIcon />
              Nhắn Zalo tư vấn
            </a>
            <Link href="/gallery" className="rope-link placard inline-flex items-center gap-2 text-lg text-arena-ink">
              Xem 174+ chiếc đã làm
              <ArrowIcon />
            </Link>
          </div>
        </div>

        {/* Ảnh nằm trong khung lưới, mép trái và trên/dưới hoà vào nền đen */}
        <figure className="relative -mx-4 md:-mx-8 lg:mx-0">
          <div
            className="anim-lights relative aspect-[3/2] w-full"
            style={{
              maskImage: 'linear-gradient(to right, transparent, #000 12%), linear-gradient(to bottom, transparent, #000 10%, #000 90%, transparent)',
              maskComposite: 'intersect',
              WebkitMaskImage: 'linear-gradient(to right, transparent, #000 12%), linear-gradient(to bottom, transparent, #000 10%, #000 90%, transparent)',
              WebkitMaskComposite: 'source-in',
            }}
          >
            <Image
              src={hero.src}
              alt={hero.alt}
              fill
              priority
              placeholder="blur"
              blurDataURL={hero.blurDataURL}
              sizes="(min-width: 1400px) 680px, (min-width: 1024px) 50vw, 100vw"
              className="object-cover object-[50%_60%]"
            />
          </div>
          <figcaption className="placard mt-1 px-4 text-right text-sm text-arena-mute md:px-8 lg:px-0">
            <span className="text-arena-ink">{hero.lettering}</span> · {hero.color}
          </figcaption>
        </figure>
      </div>

      {/* Dây đài dưới cùng: lời hứa dịch vụ nằm trên dây */}
      <div className="relative z-10 mt-8 lg:mt-0">
        <span aria-hidden="true" className="rope rope-white anim-rope rounded-none opacity-80" />
        {/* Bốn lời hứa trải đều theo chiều ngang; từ lg mỗi lời hứa căn giữa ô của nó */}
        <ul className="mx-auto grid max-w-[1400px] grid-cols-2 gap-x-4 gap-y-4 px-4 py-6 md:px-8 lg:grid-cols-4 lg:py-7">
          {PROMISES.map((p) => (
            <li key={p} className="placard flex items-center gap-2.5 text-base text-arena-ink md:text-xl lg:justify-center lg:text-center">
              <span aria-hidden="true" className="h-2.5 w-2.5 shrink-0 rounded-full bg-corner" />
              {p}
            </li>
          ))}
        </ul>
        <span aria-hidden="true" className="rope rope-blue anim-rope rounded-none [animation-delay:120ms]" />
      </div>
    </section>
  )
}
