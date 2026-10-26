import Link from 'next/link'
import Image from 'next/image'
import {
  ADDRESS_LINES, EMAIL, FACEBOOK_URL, HOURS, INSTAGRAM_URL, TIKTOK_URL, ZALO_PHONE, ZALO_URL,
} from '@/lib/site'
import { FacebookIcon, InstagramIcon, TikTokIcon, ZaloIcon } from './ring/icons'

const PAGES = [
  { label: 'Sản phẩm', href: '/products' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Quy trình', href: '/#quy-trinh' },
  { label: 'Tự thiết kế', href: '/customize' },
  { label: 'FAQ', href: '/faq' },
  { label: 'Đặt hàng', href: '/order' },
]

const SOCIALS = [
  { label: 'Zalo', href: ZALO_URL, Icon: ZaloIcon },
  { label: 'Instagram', href: INSTAGRAM_URL, Icon: InstagramIcon },
  { label: 'Facebook', href: FACEBOOK_URL, Icon: FacebookIcon },
  { label: 'TikTok', href: TIKTOK_URL, Icon: TikTokIcon },
]

export default function Footer() {
  return (
    <footer className="relative bg-arena pb-28 pt-16 lg:pb-12">
      {/* Bộ dây đài khép trang */}
      <div aria-hidden="true" className="absolute inset-x-0 top-0 flex flex-col gap-2">
        <span className="rope rope-blue rounded-none" />
        <span className="rope rope-white rounded-none opacity-70" />
        <span className="rope rope-red rounded-none" />
      </div>

      <div className="mx-auto grid max-w-[1400px] gap-12 px-4 md:grid-cols-[1.4fr_1fr_1fr] md:px-8">
        <div>
          <div className="flex items-center gap-3">
            <Image src="/brand/logo-icon.png" alt="" width={34} height={40} />
            <span className="placard text-xl text-arena-ink">
              The <span className="text-corner">Guard</span> Guy
            </span>
          </div>
          <p className="mt-5 max-w-sm text-base leading-relaxed text-arena-mute">
            Mouthguard custom-fit làm từ dữ liệu scan 3D răng của chính bạn, không dùng khuôn chung.
          </p>
          <p className="mt-3 text-base text-arena-ink">Sub-brand của Khai Nguyên Dental Lab</p>
          <ul className="mt-6 flex gap-2">
            {SOCIALS.map(({ label, href, Icon }) => (
              <li key={label}>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex h-11 w-11 items-center justify-center rounded-md bg-arena-lift text-arena-mute transition-colors hover:bg-corner hover:text-canvas-ink"
                >
                  <Icon />
                </a>
              </li>
            ))}
          </ul>
        </div>

        <nav aria-label="Trang">
          <h2 className="placard text-base text-arena-mute">Trang</h2>
          <ul className="mt-4 space-y-1">
            {PAGES.map((p) => (
              <li key={p.href}>
                <Link href={p.href} className="inline-block py-1.5 text-base text-arena-ink transition-colors hover:text-corner">
                  {p.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="placard text-base text-arena-mute">Lab &amp; liên hệ</h2>
          <address className="mt-4 space-y-3 text-base not-italic leading-relaxed text-arena-ink">
            <a href={ZALO_URL} target="_blank" rel="noopener noreferrer" className="block hover:text-corner">
              Zalo {ZALO_PHONE}
            </a>
            <a href={`mailto:${EMAIL}`} className="block break-all hover:text-corner">{EMAIL}</a>
            <p>
              {ADDRESS_LINES[0]}
              <br />
              {ADDRESS_LINES[1]}
            </p>
            <p className="text-arena-mute">{HOURS} · đặt hẹn trước qua Zalo</p>
          </address>
        </div>
      </div>

      <div className="mx-auto mt-14 flex max-w-[1400px] flex-col gap-2 px-4 text-sm text-arena-mute sm:flex-row sm:justify-between md:px-8">
        <p>© {new Date().getFullYear()} The Guard Guy</p>
        <p>Làm tại Việt Nam bởi Khai Nguyên Dental Lab</p>
      </div>
    </footer>
  )
}
