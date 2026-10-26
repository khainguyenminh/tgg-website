import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import PageHead from '@/components/ring/PageHead'
import ZaloClose from '@/components/ring/ZaloClose'
import CrossSection from '@/components/ring/CrossSection'
import MobileCornerBar from '@/components/ring/MobileCornerBar'
import { ArrowIcon } from '@/components/ring/icons'
import { photo, type Photo } from '@/data/photos'
import { PROMISES } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Sản phẩm LIGHT & PRO — The Guard Guy',
  description: 'Hai dòng mouthguard custom-fit theo khuôn răng thật: LIGHT 2 lớp EVA cho vận động, PRO 3 lớp EVA cho đối kháng. Bảng giá và so sánh.',
}

// ── Dữ liệu ──────────────────────────────────────────────────────────────────

type Pkg = { id: string; name: string; price: string; recommended?: boolean; includes: string[] }

const LIGHT_PACKAGES: Pkg[] = [
  { id: 'base', name: 'Base', price: '1.400.000đ', includes: ['Scan 3D miễn phí', 'Vật liệu EVA an toàn', 'Sản xuất riêng theo khuôn răng', 'Màu trong suốt'] },
  { id: 'custom', name: 'Custom Text', price: '1.500.000đ', recommended: true, includes: ['Tất cả gói Base', 'Thêm tên, số, logo không giới hạn', 'Lên 3D thiết kế miễn phí', 'Preview 2D trước sản xuất'] },
  { id: 'full', name: 'Fully Design', price: '1.600.000đ', includes: ['Tất cả gói Custom Text', 'Cá nhân hóa hoàn toàn', 'Hiệu ứng đặc biệt (tráng gương, đính đá…)', 'Artwork tùy ý'] },
]

const PRO_PACKAGES: Pkg[] = [
  { id: 'base-pro', name: 'Base PRO', price: '1.800.000đ', includes: ['Scan 3D miễn phí', 'Vật liệu EVA chắc, dẻo 3 lớp', 'Sản xuất riêng theo khuôn răng', '16 màu lựa chọn'] },
  { id: 'custom-pro', name: 'Custom Text PRO', price: '1.900.000đ', recommended: true, includes: ['Tất cả gói Base PRO', 'Thêm tên, số, logo không giới hạn', 'Lên 3D thiết kế miễn phí', 'Preview 2D trước sản xuất'] },
  { id: 'full-pro', name: 'Fully Design PRO', price: '2.000.000đ', includes: ['Tất cả gói Custom Text PRO', 'Cá nhân hóa hoàn toàn', 'Hiệu ứng đặc biệt (tráng gương, đính đá…)', 'Artwork tùy ý'] },
]

const COMPARISON = [
  { label: 'Cấu tạo', light: '2 lớp EVA mỏng', pro: '3 lớp EVA dày' },
  { label: 'Mức bảo vệ', light: 'Tiêu chuẩn', pro: 'Cao hơn, cho va chạm mạnh' },
  { label: 'Phù hợp cho', light: 'Thể thao không đối kháng', pro: 'Các môn đối kháng' },
  { label: 'Màu sắc', light: 'Trong suốt', pro: '16 màu EVA' },
  { label: 'Cá nhân hóa', light: 'Có gói Custom', pro: 'Có gói Custom' },
  { label: 'Hàm', light: 'Hàm trên', pro: 'Hàm trên' },
  { label: 'Scan 3D', light: 'Miễn phí', pro: 'Miễn phí' },
  { label: 'Ship', light: 'Miễn phí toàn quốc', pro: 'Miễn phí toàn quốc' },
  { label: 'Thời gian sản xuất', light: '2–3 ngày làm việc', pro: '2–3 ngày làm việc' },
  { label: 'Giá từ', light: '1.400.000đ', pro: '1.800.000đ' },
]

type Line = {
  key: 'pro' | 'light'
  name: string
  tagline: string
  lede: string
  sports: string[]
  layers: 2 | 3
  strengths: { title: string; desc: string }[]
  shots: Photo[]
  packages: Pkg[]
}

const PRO: Line = {
  key: 'pro',
  name: 'PRO',
  tagline: 'Guard & Protection',
  lede: 'Dành cho các môn đối kháng. 3 lớp EVA dày chịu lực tác động trực tiếp từ nắm đấm và đòn đá. 16 màu, cá nhân hóa tự do.',
  sports: ['Boxing', 'Muay Thái', 'MMA', 'Kickboxing', 'Jiu-Jitsu', 'Judo', 'Grappling'],
  layers: 3,
  strengths: [
    { title: '3 lớp EVA dày', desc: 'Hấp thụ lực va chạm khi tập và thi đấu đối kháng.' },
    { title: 'Giữ chắc khi va chạm', desc: 'Custom-fit theo khuôn răng, giữ chắc kể cả khi chịu cú đấm bất ngờ.' },
    { title: '16 màu EVA', desc: 'Thể hiện cá tính hoặc màu đồng phục đội, không còn máng trắng nhàm chán.' },
    { title: 'Cá nhân hóa tự do', desc: 'Tên, số, logo, artwork theo yêu cầu, có bản thiết kế xem trước khi sản xuất.' },
  ],
  shots: [photo('kien-cuong'), photo('tfcmma'), photo('dvn')],
  packages: PRO_PACKAGES,
}

const LIGHT: Line = {
  key: 'light',
  name: 'LIGHT',
  tagline: 'Light & Comfort',
  lede: 'Dành cho thể thao vận động. 2 lớp EVA mỏng: nhẹ, thoáng, ít cản thở. Trong suốt, gần như không thấy khi đeo.',
  sports: ['Bóng rổ', 'Bóng đá', 'Gym / Fitness', 'Bóng chuyền', 'Trượt ván', 'Xe đạp'],
  layers: 2,
  strengths: [
    { title: 'Mỏng và nhẹ', desc: '2 lớp EVA mỏng, không cảm giác cồng kềnh, dễ quen ngay từ buổi đầu.' },
    { title: 'Thoáng khí', desc: 'Ít cản thở và giao tiếp khi thi đấu, tập trung vào hiệu suất.' },
    { title: 'Trong suốt', desc: 'Một màu trong suốt, không thay đổi ngoại hình khi đeo.' },
    { title: 'Vừa khít', desc: 'Custom-fit theo khuôn răng, không phải cắn giữ như máng đại trà.' },
  ],
  shots: [photo('lab-light-on-model'), photo('lab-light-clear'), photo('lab-glove-check')],
  packages: LIGHT_PACKAGES,
}

// Chú thích ảnh: chữ in trên guard, hoặc mô tả ngắn với ảnh lab
const LAB_CAPTIONS: Record<string, string> = {
  'lab-light-on-model': 'LIGHT trong suốt trên mẫu hàm',
  'lab-light-clear': 'LIGHT sau khi ép nhiệt',
  'lab-glove-check': 'Kiểm tra mép guard trước khi giao',
}

function Caption({ p, ink, mute }: { p: Photo; ink: string; mute: string }) {
  return (
    <figcaption className={`placard mt-2 text-sm ${mute}`}>
      {p.lettering ? (
        <>
          <span className={ink}>{p.lettering}</span> · {p.color}
        </>
      ) : (
        LAB_CAPTIONS[p.id] ?? p.alt
      )}
    </figcaption>
  )
}

// ── Khối một dòng sản phẩm ───────────────────────────────────────────────────

function LineSection({ line }: { line: Line }) {
  const arena = line.key === 'pro'
  const ink = arena ? 'text-arena-ink' : 'text-canvas-ink'
  const mute = arena ? 'text-arena-mute' : 'text-canvas-mute'
  const rule = arena ? 'border-white/15' : 'border-canvas-deep'
  const bar = arena ? 'bg-arena-ink' : 'bg-canvas-ink'

  return (
    <section
      id={line.key}
      aria-labelledby={`${line.key}-title`}
      className={`relative scroll-mt-16 py-24 md:py-32 ${arena ? 'bg-arena' : 'on-canvas bg-canvas'} ${ink}`}
    >
      <span aria-hidden="true" className={`rope ${arena ? 'rope-red' : 'rope-blue'} absolute inset-x-0 top-0 rounded-none`} />
      <div className="mx-auto max-w-[1400px] px-4 md:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <div>
            <h2 id={`${line.key}-title`} className="apron text-[clamp(5rem,13vw,11rem)]">{line.name}</h2>
            <p className={`placard text-2xl ${mute}`}>{line.tagline}</p>
            <p className={`mt-6 max-w-[34rem] text-lg leading-relaxed ${mute}`}>{line.lede}</p>
            <ul className="mt-6 flex flex-wrap gap-x-4 gap-y-2" aria-label="Phù hợp cho">
              {line.sports.map((s) => (
                <li key={s} className="placard flex items-center gap-2 text-base">
                  <span aria-hidden="true" className={`h-2 w-2 rounded-full ${arena ? 'bg-corner' : 'bg-canvas-ink'}`} />
                  {s}
                </li>
              ))}
            </ul>
            <div className="mt-10">
              <CrossSection layers={line.layers} tone={arena ? 'arena' : 'canvas'} />
            </div>
          </div>

          <div className="grid gap-4">
            {line.shots.slice(0, 1).map((p) => (
              <figure key={p.id}>
                <div className="relative aspect-[3/2] overflow-hidden rounded-[6px] bg-black">
                  <Image src={p.src} alt={p.alt} fill placeholder="blur" blurDataURL={p.blurDataURL} sizes="(min-width: 1024px) 55vw, 100vw" className="object-cover" />
                </div>
                <Caption p={p} ink={ink} mute={mute} />
              </figure>
            ))}
            <div className="grid grid-cols-2 gap-4">
              {line.shots.slice(1).map((p) => (
                <figure key={p.id}>
                  <div className="relative aspect-[3/2] overflow-hidden rounded-[6px] bg-black">
                    <Image src={p.src} alt={p.alt} fill placeholder="blur" blurDataURL={p.blurDataURL} sizes="(min-width: 1024px) 27vw, 50vw" className="object-cover" />
                  </div>
                  <Caption p={p} ink={ink} mute={mute} />
                </figure>
              ))}
            </div>
          </div>
        </div>

        {/* Điểm mạnh: danh sách chia bằng dây, không đóng hộp */}
        <dl className={`mt-20 grid gap-x-12 border-t-[3px] sm:grid-cols-2 ${arena ? 'border-arena-ink' : 'border-canvas-ink'}`}>
          {line.strengths.map((s) => (
            <div key={s.title} className={`border-b-[3px] py-6 ${rule}`}>
              <dt className="placard text-2xl">{s.title}</dt>
              <dd className={`mt-2 text-lg leading-relaxed ${mute}`}>{s.desc}</dd>
            </div>
          ))}
        </dl>

        {/* Gói giá: ba cột chia bằng dây dọc */}
        <h3 className="apron mt-24 text-[clamp(2.75rem,6vw,5rem)]">Chọn gói {line.name}.</h3>
        <ol className="mt-10 grid gap-12 lg:grid-cols-3 lg:gap-0">
          {line.packages.map((pkg, i) => (
            <li key={pkg.id} className={`flex flex-col ${i > 0 ? `lg:border-l-[3px] lg:pl-10 ${rule}` : ''} ${i < 2 ? 'lg:pr-10' : ''}`}>
              <div className="flex items-baseline justify-between gap-4">
                <p className="placard text-2xl">{pkg.name}</p>
                {pkg.recommended && (
                  <span className={`placard shrink-0 text-sm ${arena ? 'text-corner' : 'text-canvas-ink underline decoration-[3px] underline-offset-4'}`}>
                    Khuyên dùng
                  </span>
                )}
              </div>
              <p className="placard tabular mt-3 text-4xl normal-case">{pkg.price}</p>
              <ul className="mt-6 flex-1 space-y-3 text-base leading-snug">
                {pkg.includes.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span aria-hidden="true" className={`mt-[0.6em] h-[3px] w-4 shrink-0 rounded ${bar}`} />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                {pkg.recommended ? (
                  arena ? (
                    <Link href={`/order?line=${line.key}&pkg=${pkg.id}#order-form`} className="corner-pad">
                      Đặt gói này <ArrowIcon />
                    </Link>
                  ) : (
                    <Link href={`/order?line=${line.key}&pkg=${pkg.id}#order-form`} className="ink-pad">
                      Đặt gói này <ArrowIcon />
                    </Link>
                  )
                ) : (
                  <Link href={`/order?line=${line.key}&pkg=${pkg.id}#order-form`} className="rope-link placard inline-flex min-h-11 items-center gap-2 text-lg">
                    Đặt gói này <ArrowIcon />
                  </Link>
                )}
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}

// ── Trang ────────────────────────────────────────────────────────────────────

export default function ProductsPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHead
          title="Hai dòng. Một tiêu chuẩn."
          lede="Custom-fit hoàn toàn từ khuôn răng thực tế, không boil-and-bite, không size chung."
          photo={photo('tiboom')}
        >
          <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-1">
            {[PROMISES[0], PROMISES[3], '2–3 ngày sản xuất'].map((p) => (
              <li key={p} className="placard flex items-center gap-2 text-[0.95rem] text-arena-ink">
                <span aria-hidden="true" className="h-2 w-2 rounded-full bg-corner" />
                {p}
              </li>
            ))}
          </ul>
          <nav aria-label="Đến dòng sản phẩm" className="mt-10 flex flex-wrap gap-x-10 gap-y-4">
            <a href="#pro" className="rope-link placard inline-flex items-center gap-2 text-xl text-arena-ink">
              PRO · cho đối kháng <ArrowIcon className="h-5 w-5 rotate-90" />
            </a>
            <a href="#light" className="rope-link placard inline-flex items-center gap-2 text-xl text-arena-ink">
              LIGHT · cho vận động <ArrowIcon className="h-5 w-5 rotate-90" />
            </a>
          </nav>
        </PageHead>

        <LineSection line={PRO} />
        <LineSection line={LIGHT} />

        {/* So sánh */}
        <section aria-labelledby="compare-title" className="on-canvas bg-canvas pb-24 text-canvas-ink md:pb-32">
          <div className="mx-auto max-w-[1400px] px-4 md:px-8">
            <div className="grid gap-10 border-t-[3px] border-canvas-ink pt-16 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
              <div>
                <h2 id="compare-title" className="apron text-[clamp(2.75rem,6vw,5rem)]">LIGHT hay PRO?</h2>
                <p className="mt-6 max-w-[28rem] text-lg leading-relaxed text-canvas-mute">
                  Cùng quy trình, cùng lab. Khác nhau ở số lớp EVA, màu và môn bạn tập.
                </p>
              </div>
              <div>
                <div className="grid grid-cols-2 border-b-[3px] border-canvas-ink pb-3 sm:grid-cols-[1.1fr_1fr_1fr]">
                  <span className="hidden sm:block" />
                  <span className="placard text-xl">LIGHT</span>
                  <span className="placard text-xl">PRO</span>
                </div>
                <dl>
                  {COMPARISON.map((row) => (
                    <div key={row.label} className="grid grid-cols-2 gap-x-4 border-b border-canvas-deep py-4 sm:grid-cols-[1.1fr_1fr_1fr]">
                      <dt className="placard col-span-2 mb-1 text-sm text-canvas-mute sm:col-span-1 sm:mb-0 sm:text-base">{row.label}</dt>
                      <dd className="text-base">{row.light}</dd>
                      <dd className="text-base">{row.pro}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
          </div>
        </section>

        <ZaloClose
          title="Chưa biết chọn gói nào?"
          lede="Nhắn Zalo, TGG tư vấn miễn phí và giúp bạn chọn đúng ngay từ đầu, dựa trên môn thể thao và nhu cầu cá nhân hóa của bạn."
          cta="Tư vấn qua Zalo"
        >
          <Link href="/order" className="rope-link placard inline-flex items-center gap-2 text-arena-ink">
            Đặt hàng online <ArrowIcon />
          </Link>
          <Link href="/gallery" className="rope-link placard inline-flex items-center gap-2 text-arena-mute hover:text-arena-ink">
            Xem gallery
          </Link>
        </ZaloClose>
      </main>
      <Footer />
      <MobileCornerBar />
    </>
  )
}
