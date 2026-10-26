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
import { INCLUDED_ALWAYS, PRICE_FROM, TIERS, type LineKey, type Tier } from '@/lib/packages'

export const metadata: Metadata = {
  title: 'Sản phẩm LIGHT & PRO — The Guard Guy',
  description: 'Hai dòng mouthguard custom-fit theo khuôn răng thật: LIGHT 2 lớp EVA cho vận động, PRO 3 lớp EVA cho đối kháng. Bảng giá và so sánh.',
}

// ── Dữ liệu ──────────────────────────────────────────────────────────────────

type Line = {
  key: LineKey
  name: string
  forWho: string
  lede: string
  layers: 2 | 3
  shot: Photo
  shotCaption: string
  // Cùng thứ tự hàng ở hai dòng để đọc ngang là so sánh được
  facts: { label: string; value: string }[]
}

const LINES: Line[] = [
  {
    key: 'light',
    name: 'LIGHT',
    forWho: 'Cho thể thao vận động',
    lede: 'Mỏng, nhẹ, ít cản thở. Trong suốt, gần như không thấy khi đeo.',
    layers: 2,
    shot: photo('lab-light-on-model'),
    shotCaption: 'LIGHT trong suốt trên mẫu hàm',
    facts: [
      { label: 'Cấu tạo', value: '2 lớp EVA mỏng' },
      { label: 'Cảm giác', value: 'Nhẹ, thoáng, dễ quen từ buổi đầu' },
      { label: 'Môn phù hợp', value: 'Bóng rổ, bóng đá, gym, bóng chuyền, trượt ván, xe đạp' },
      { label: 'Màu', value: 'Trong suốt' },
    ],
  },
  {
    key: 'pro',
    name: 'PRO',
    forWho: 'Cho các môn đối kháng',
    lede: 'Dày, giữ chắc khi chịu đòn đấm và đá. 16 màu EVA, in tên và hình tuỳ ý.',
    layers: 3,
    shot: photo('kien-cuong'),
    shotCaption: 'PRO Đen bóng đêm, gói Custom Text',
    facts: [
      { label: 'Cấu tạo', value: '3 lớp EVA dày' },
      { label: 'Cảm giác', value: 'Chắc, hấp thụ lực va chạm khi tập và thi đấu' },
      { label: 'Môn phù hợp', value: 'Boxing, Muay Thái, MMA, kickboxing, jiu-jitsu, judo, grappling' },
      { label: 'Màu', value: '16 màu EVA' },
    ],
  },
]

// Ảnh ví dụ cho từng gói (đều là guard PRO thật đã giao)
const TIER_SHOTS: Record<Tier['id'], { shot: Photo; caption: string }> = {
  base: { shot: photo('red-plain'), caption: 'Ví dụ: PRO Đỏ chiến binh, trơn' },
  custom: { shot: photo('tfcmma'), caption: 'Ví dụ: PRO in chữ' },
  full: { shot: photo('wave'), caption: 'Ví dụ: PRO vẽ sóng biển và hoa anh đào' },
}

// Các lời hứa đang có trên site, đặt ngay cạnh giá
const REASSURANCE = [
  { title: 'Không cần đặt cọc', desc: 'Nhắn tin, đặt lịch scan, chưa phải trả trước.' },
  { title: 'Bảo hành fit 1 đổi 1', desc: 'Guard không vừa khít thì TGG làm lại.' },
  { title: 'Xem trước khi làm', desc: 'Gói Custom Text và Fully Design có bản thiết kế 2D trong 24 giờ để bạn duyệt.' },
]

const AFTER_ORDER = [
  'Scan 3D miễn phí tại TGG (Q. Tân Bình) hoặc nha khoa gần nhà, 10–15 phút. Ở tỉnh được hỗ trợ tìm điểm scan.',
  'Duyệt bản thiết kế 2D (gói Custom Text, Fully Design).',
  'Sản xuất tại Khai Nguyên Dental Lab trong 2–3 ngày làm việc.',
  'Ship miễn phí toàn quốc, kèm hộp đựng và hướng dẫn vệ sinh.',
]

const orderHref = (line: LineKey, pkg: string) => `/order?line=${line}&pkg=${pkg}#order-form`

// ── Khối một dòng ────────────────────────────────────────────────────────────

function LineCard({ line }: { line: Line }) {
  return (
    <article
      id={line.key}
      aria-labelledby={`${line.key}-title`}
      className="scroll-mt-24 border-t-[3px] border-white/15 pt-8 transition-colors duration-500 target:border-corner"
    >
      <div className="flex flex-wrap items-end justify-between gap-x-6 gap-y-2">
        <div>
          <h2 id={`${line.key}-title`} className="apron t-headline">{line.name}</h2>
          <p className="placard text-xl text-arena-mute">{line.forWho}</p>
        </div>
        <p className="text-right">
          <span className="block text-sm text-arena-mute">từ</span>
          <span className="placard tabular text-3xl normal-case">{PRICE_FROM[line.key]}</span>
        </p>
      </div>
      {/* Hai lời dẫn cao bằng nhau để ảnh hai dòng thẳng hàng */}
      <p className="mt-5 max-w-[32rem] text-lg leading-relaxed text-arena-mute lg:min-h-[3.75rem]">{line.lede}</p>

      {/* Ảnh trước, sơ đồ sau: người xem thấy sản phẩm trước khi đọc cấu tạo */}
      <figure className="mt-8">
        <div className="relative aspect-[3/2] overflow-hidden rounded-[6px] bg-black">
          <Image src={line.shot.src} alt={line.shot.alt} fill placeholder="blur" blurDataURL={line.shot.blurDataURL} sizes="(min-width: 1024px) 45vw, 100vw" className="object-cover" />
        </div>
        <figcaption className="mt-2 text-sm text-arena-mute">{line.shotCaption}</figcaption>
      </figure>

      <div className="mt-8 grid items-center gap-6 sm:grid-cols-[minmax(0,15rem)_1fr]">
        <CrossSection layers={line.layers} tone="arena" />
        <dl className="divide-y-[3px] divide-white/10">
          {line.facts.map((f) => (
            <div key={f.label} className="grid grid-cols-[6.5rem_1fr] gap-4 py-3 first:pt-0">
              <dt className="placard pt-0.5 text-sm text-arena-mute">{f.label}</dt>
              <dd className="text-base leading-snug">{f.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </article>
  )
}

// ── Một hàng gói: ảnh ví dụ, khác biệt, rồi chọn giá LIGHT hoặc PRO ─────────────

function TierRow({ tier }: { tier: Tier }) {
  const ex = TIER_SHOTS[tier.id]
  return (
    <li className="grid gap-6 border-b-[3px] border-canvas-deep py-8 md:grid-cols-[14rem_1fr] lg:grid-cols-[16rem_1fr_minmax(0,24rem)] lg:items-center lg:gap-10">
      <figure>
        <div className="relative aspect-[3/2] overflow-hidden rounded-[6px] bg-black">
          <Image src={ex.shot.src} alt={ex.shot.alt} fill placeholder="blur" blurDataURL={ex.shot.blurDataURL} sizes="(min-width: 1024px) 16rem, (min-width: 768px) 14rem, 100vw" className="object-cover" />
        </div>
        <figcaption className="mt-2 text-sm text-canvas-mute">{ex.caption}</figcaption>
      </figure>

      <div>
        <h3 className="placard text-3xl">{tier.name}</h3>
        <ul className="mt-4 space-y-2 text-base leading-snug">
          {tier.includes.map((item) => (
            <li key={item} className="flex gap-3">
              <span aria-hidden="true" className="mt-[0.6em] h-[3px] w-4 shrink-0 rounded bg-canvas-ink" />
              {item}
            </li>
          ))}
        </ul>
      </div>

      {/* Mỗi giá là một nút: bấm đúng giá mình muốn để sang form đặt hàng */}
      <div className="grid grid-cols-2 gap-3 md:col-start-2 lg:col-start-auto" role="group" aria-label={`Đặt gói ${tier.name}`}>
        {(['light', 'pro'] as const).map((k) => (
          <Link
            key={k}
            href={orderHref(k, tier[k].id)}
            className="seg flex-col items-start gap-1 px-4 py-3 hover:bg-canvas-ink hover:text-canvas"
          >
            <span className="flex w-full items-center justify-between text-sm">
              {k === 'light' ? 'LIGHT' : 'PRO'}
              <ArrowIcon className="h-4 w-4" />
            </span>
            <span className="tabular text-xl normal-case">{tier[k].price}</span>
          </Link>
        ))}
      </div>
    </li>
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
          lede="Làm theo khuôn răng thật của bạn từ dữ liệu scan 3D. Không phải loại ngâm nước nóng rồi cắn, không có size chung."
          photo={photo('tiboom')}
        >
          {/* Câu hỏi đầu tiên: tập môn gì thì dùng dòng nào */}
          <nav aria-label="Chọn dòng theo môn bạn tập" className="mt-10 max-w-[36rem]">
            <p className="placard text-lg text-arena-ink">Bạn tập môn gì?</p>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              <a href="#light" className="seg min-h-16 flex-col items-start gap-1 px-4 py-3">
                <span className="flex w-full items-center justify-between text-lg">
                  LIGHT <ArrowIcon className="h-4 w-4 rotate-90" />
                </span>
                <span className="text-sm normal-case text-arena-mute">Bóng rổ, bóng đá, gym…</span>
              </a>
              <a href="#pro" className="seg min-h-16 flex-col items-start gap-1 px-4 py-3">
                <span className="flex w-full items-center justify-between text-lg">
                  PRO <ArrowIcon className="h-4 w-4 rotate-90" />
                </span>
                <span className="text-sm normal-case text-arena-mute">Boxing, Muay Thái, MMA…</span>
              </a>
            </div>
          </nav>
        </PageHead>

        {/* Hai dòng đặt cạnh nhau: đọc ngang từng hàng là so sánh */}
        <section aria-label="Hai dòng LIGHT và PRO" className="bg-arena py-20 text-arena-ink md:py-28">
          <div className="mx-auto grid max-w-[1400px] gap-16 px-4 md:px-8 lg:grid-cols-2 lg:gap-12">
            {LINES.map((line) => (
              <LineCard key={line.key} line={line} />
            ))}
          </div>
        </section>

        {/* Một bảng gói chung cho cả hai dòng */}
        <section id="goi" aria-labelledby="tiers-title" className="on-canvas relative scroll-mt-16 bg-canvas py-24 text-canvas-ink md:py-32">
          <span aria-hidden="true" className="rope rope-red absolute inset-x-0 top-0 rounded-none" />
          <div className="mx-auto max-w-[1400px] px-4 md:px-8">
            <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-end lg:gap-16">
              <div>
                <h2 id="tiers-title" className="apron t-headline">Chọn gói.</h2>
                <p className="mt-5 max-w-[36rem] text-lg leading-relaxed text-canvas-mute">
                  Ba mức cá nhân hoá, giống nhau ở cả hai dòng. Bấm vào giá của dòng bạn chọn để đặt.
                </p>
              </div>
              <ul className="flex flex-wrap gap-x-6 gap-y-2 lg:max-w-[30rem] lg:justify-end" aria-label="Gói nào cũng có">
                {INCLUDED_ALWAYS.map((x) => (
                  <li key={x} className="placard flex items-center gap-2 text-base">
                    <span aria-hidden="true" className="h-[3px] w-4 rounded bg-canvas-ink" />
                    {x}
                  </li>
                ))}
              </ul>
            </div>

            <ol className="mt-10 border-t-[3px] border-canvas-ink">
              {TIERS.map((t) => (
                <TierRow key={t.id} tier={t} />
              ))}
            </ol>

            {/* Trấn an ngay cạnh giá, rồi các bước sau khi đặt */}
            <div className="mt-16 grid gap-12 lg:grid-cols-[1fr_1fr] lg:gap-16">
              <ul className="grid gap-6 sm:grid-cols-3 lg:grid-cols-1">
                {REASSURANCE.map((r) => (
                  <li key={r.title}>
                    <p className="placard text-xl">{r.title}</p>
                    <p className="mt-1 text-base leading-relaxed text-canvas-mute">{r.desc}</p>
                  </li>
                ))}
              </ul>
              <div>
                <h3 className="placard text-xl">Sau khi đặt</h3>
                <ol className="mt-4 divide-y-[3px] divide-canvas-deep border-t-[3px] border-canvas-ink">
                  {AFTER_ORDER.map((s, i) => (
                    <li key={s} className="grid grid-cols-[2rem_1fr] gap-3 py-3 text-base leading-snug">
                      <span className="placard tabular text-lg" aria-hidden="true">{i + 1}</span>
                      {s}
                    </li>
                  ))}
                </ol>
                <Link href="/faq#who" className="rope-link placard mt-6 inline-flex min-h-11 items-center gap-2 text-base">
                  Trẻ em, niềng răng, vệ sinh: xem FAQ <ArrowIcon className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        <ZaloClose
          title="Chưa biết chọn gói nào?"
          lede="Nhắn Zalo, TGG tư vấn miễn phí và giúp bạn chọn đúng ngay từ đầu, dựa trên môn thể thao và nhu cầu cá nhân hóa của bạn."
          cta="Tư vấn qua Zalo"
        >
          <Link href="/order" className="rope-link placard inline-flex min-h-11 items-center gap-2 text-arena-ink">
            Đặt hàng online <ArrowIcon />
          </Link>
          <Link href="/gallery" className="rope-link placard inline-flex min-h-11 items-center gap-2 text-arena-mute hover:text-arena-ink">
            Xem gallery
          </Link>
        </ZaloClose>
      </main>
      <Footer />
      <MobileCornerBar />
    </>
  )
}
