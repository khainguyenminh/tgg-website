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

      <div className="relative z-10 mx-auto w-full max-w-[1400px] px-4 pt-6 md:px-8 md:pt-8">
        <h1 className="apron text-[clamp(3.4rem,11.5vw,11rem)] text-arena-ink">
          Vừa khít răng bạn.
          <span className="block text-corner">Mang tên bạn.</span>
        </h1>
        <p className="mt-5 hidden max-w-[25rem] text-lg leading-relaxed text-arena-mute lg:block">
          Mouthguard custom-fit làm tại <span className="text-arena-ink">Khai Nguyên Dental Lab</span> từ dữ liệu scan 3D răng
          của chính bạn. Cho boxing, Muay Thái, MMA và các môn không đối kháng.
        </p>
      </div>

      {/* Ảnh: trong luồng trên mobile; trên desktop neo phải-dưới, mép hoà vào nền đen nên đọc như tràn khung */}
      <figure className="relative mt-4 lg:absolute lg:bottom-[6.75rem] lg:right-0 lg:mt-0 lg:h-[60svh] lg:w-[90svh] lg:max-w-[66vw]">
        <div
          className="anim-lights relative aspect-[3/2] w-full lg:aspect-auto lg:h-full"
          style={{
            maskImage: 'linear-gradient(to right, transparent, #000 16%), linear-gradient(to bottom, transparent, #000 14%)',
            maskComposite: 'intersect',
            WebkitMaskImage: 'linear-gradient(to right, transparent, #000 16%), linear-gradient(to bottom, transparent, #000 14%)',
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
            sizes="(min-width: 1024px) 96svh, 100vw"
            className="object-cover object-[50%_60%]"
          />
        </div>
        <figcaption className="placard absolute bottom-2 right-4 text-sm text-arena-mute md:right-8">
          <span className="text-arena-ink">{hero.lettering}</span> · {hero.color}
        </figcaption>
      </figure>

      <div className="relative z-10 mx-auto w-full max-w-[1400px] px-4 pt-6 md:px-8 lg:hidden">
        <p className="text-lg leading-relaxed text-arena-mute">
          Mouthguard custom-fit làm tại <span className="text-arena-ink">Khai Nguyên Dental Lab</span> từ dữ liệu scan 3D răng
          của chính bạn. Cho boxing, Muay Thái, MMA và các môn không đối kháng.
        </p>
      </div>

      {/* Dây đài dưới cùng: lời hứa nằm trên dây, đệm góc đứng ở góc phải */}
      <div className="relative z-10 mt-8 lg:mt-auto">
        <span aria-hidden="true" className="rope rope-white anim-rope rounded-none opacity-80" />
        <div className="mx-auto flex max-w-[1400px] flex-col-reverse gap-6 px-4 py-5 md:px-8 lg:flex-row lg:items-center lg:justify-between">
          <ul className="flex flex-wrap gap-x-6 gap-y-1">
            {PROMISES.map((p) => (
              <li key={p} className="placard flex items-center gap-2 text-[0.95rem] text-arena-ink">
                <span aria-hidden="true" className="h-2 w-2 rounded-full bg-corner" />
                {p}
              </li>
            ))}
          </ul>
          <div className="flex flex-wrap items-center gap-x-7 gap-y-4 lg:flex-row-reverse">
            {/* Trên điện thoại thanh đệm góc cố định đã giữ nút Zalo */}
            <a href={ZALO_URL} target="_blank" rel="noopener noreferrer" className="corner-pad corner-pad-lg hidden lg:inline-flex">
              <ZaloIcon className="h-6 w-6" />
              Nhắn Zalo tư vấn
            </a>
            <Link href="/gallery" className="rope-link placard inline-flex items-center gap-2 text-lg text-arena-ink">
              Xem 174+ chiếc đã làm
              <ArrowIcon />
            </Link>
          </div>
        </div>
        <span aria-hidden="true" className="rope rope-blue anim-rope rounded-none [animation-delay:120ms]" />
      </div>
    </section>
  )
}
