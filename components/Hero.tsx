import Image from 'next/image'
import Link from 'next/link'
import { photo } from '@/data/photos'
import { PROMISES, ZALO_URL } from '@/lib/site'
import { ArrowIcon, ZaloIcon } from './ring/icons'

const hero = photo('champion-boy')

// Dưới đèn: một chiếc guard thật, có tên, nằm trên mặt kính đen dưới đèn sân đấu
export default function Hero() {
  return (
    <section className="relative isolate flex min-h-[100svh] flex-col overflow-hidden bg-arena pt-16 md:pt-[72px]">
      {/* Đèn sân đấu chiếu từ trên xuống */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
        style={{ background: 'radial-gradient(60% 50% at 70% 8%, rgb(242 244 245 / 0.07), transparent 70%)' }}
      />

      {/* Chữ và ảnh cùng một hàng, căn giữa theo chiều dọc: ảnh không bị tụt xuống đáy */}
      <div className="mx-auto grid w-full max-w-[1400px] flex-1 content-center items-center gap-8 px-4 pt-8 md:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-6 lg:py-12">
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

        {/* Ảnh tràn ra mép phải màn hình, mép trái và trên hoà vào nền đen */}
        <figure className="relative -mx-4 md:-mx-8 lg:ml-0 lg:mr-[min(-2rem,calc((1400px-100vw)/2-2rem))]">
          <div
            className="anim-lights relative aspect-[3/2] w-full"
            style={{
              maskImage: 'linear-gradient(to right, transparent, #000 18%), linear-gradient(to bottom, transparent, #000 12%, #000 88%, transparent)',
              maskComposite: 'intersect',
              WebkitMaskImage: 'linear-gradient(to right, transparent, #000 18%), linear-gradient(to bottom, transparent, #000 12%, #000 88%, transparent)',
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
              sizes="(min-width: 1024px) 60vw, 100vw"
              className="object-cover object-[50%_60%]"
            />
          </div>
          <figcaption className="placard mt-1 px-4 text-right text-sm text-arena-mute md:px-8">
            <span className="text-arena-ink">{hero.lettering}</span> · {hero.color}
          </figcaption>
        </figure>
      </div>

      {/* Dây đài dưới cùng: lời hứa dịch vụ nằm trên dây */}
      <div className="relative z-10 mt-8 lg:mt-0">
        <span aria-hidden="true" className="rope rope-white anim-rope rounded-none opacity-80" />
        <ul className="mx-auto flex max-w-[1400px] flex-wrap gap-x-8 gap-y-2 px-4 py-5 md:px-8">
          {PROMISES.map((p) => (
            <li key={p} className="placard flex items-center gap-2 text-[0.95rem] text-arena-ink">
              <span aria-hidden="true" className="h-2 w-2 rounded-full bg-corner" />
              {p}
            </li>
          ))}
        </ul>
        <span aria-hidden="true" className="rope rope-blue anim-rope rounded-none [animation-delay:120ms]" />
      </div>
    </section>
  )
}
