import Image from 'next/image'
import Link from 'next/link'
import { photo } from '@/data/photos'
import { FACEBOOK_URL, INSTAGRAM_URL, ZALO_URL } from '@/lib/site'
import { ArrowIcon, ZaloIcon } from './ring/icons'

const closer = photo('game-over')

// Tiếng chuông cuối: khép trang bằng một đệm góc lớn
export default function CTABanner() {
  return (
    <section aria-labelledby="bell-title" className="relative overflow-hidden bg-arena py-24 md:py-32">
      <span aria-hidden="true" className="rope rope-red absolute inset-x-0 top-0 rounded-none" />
      <div className="mx-auto max-w-[1400px] px-4 md:px-8">
        <h2 id="bell-title" className="apron text-[clamp(3.4rem,11vw,10rem)] text-arena-ink">
          Lên đài với
          <span className="block text-corner">chiếc guard của riêng bạn.</span>
        </h2>

        <div className="mt-12 grid items-end gap-12 lg:grid-cols-[1.15fr_1fr]">
          <div className="lg:order-2 lg:flex lg:flex-col lg:items-end lg:text-right">
            <p className="max-w-[30rem] text-xl leading-relaxed text-arena-mute">
              Nhắn một tin, TGG hẹn lịch scan và tư vấn dòng hợp với bạn. Không cần đặt cọc trước.
            </p>
            <a href={ZALO_URL} target="_blank" rel="noopener noreferrer" className="corner-pad corner-pad-lg mt-8">
              <ZaloIcon className="h-6 w-6" />
              Nhắn Zalo ngay
            </a>
            <ul className="mt-8 flex flex-wrap gap-x-8 gap-y-4 text-lg lg:justify-end">
              <li>
                <Link href="/order" className="rope-link placard inline-flex items-center gap-2 text-arena-ink">
                  Đặt hàng online <ArrowIcon />
                </Link>
              </li>
              <li>
                <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="rope-link placard text-arena-mute hover:text-arena-ink">
                  Instagram
                </a>
              </li>
              <li>
                <a href={FACEBOOK_URL} target="_blank" rel="noopener noreferrer" className="rope-link placard text-arena-mute hover:text-arena-ink">
                  Facebook
                </a>
              </li>
            </ul>
          </div>
          <figure className="lg:order-1">
            <div className="relative aspect-[3/2] overflow-hidden rounded-[6px] bg-black">
              <Image
                src={closer.src}
                alt={closer.alt}
                fill
                placeholder="blur"
                blurDataURL={closer.blurDataURL}
                sizes="(min-width: 1024px) 45vw, 100vw"
                className="object-cover"
              />
            </div>
            <figcaption className="placard mt-2 text-sm text-arena-mute">{closer.lettering}</figcaption>
          </figure>
        </div>
      </div>
    </section>
  )
}
