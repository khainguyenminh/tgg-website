import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import PageHead from '@/components/ring/PageHead'
import ZaloClose from '@/components/ring/ZaloClose'
import MobileCornerBar from '@/components/ring/MobileCornerBar'
import PhotoSlot from '@/components/ring/PhotoSlot'
import StepNav from '@/components/process/StepNav'
import { ArrowIcon } from '@/components/ring/icons'
import { photo, type Photo } from '@/data/photos'
import { FACEBOOK_URL, INSTAGRAM_URL, ZALO_PHONE, ZALO_URL } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Quy trình đặt mouthguard — The Guard Guy',
  description:
    'Năm bước từ tư vấn, scan 3D miễn phí, duyệt thiết kế 2D, sản xuất 2–3 ngày tại Khai Nguyên Dental Lab đến giao hàng miễn phí toàn quốc. Không cần đặt cọc.',
}

// ── Dữ liệu ──────────────────────────────────────────────────────────────────

type Step = {
  id: string
  short: string
  title: string
  tag: string
  desc: string
  you: string[]
  lab: string[]
  shots: { p: Photo; caption: string }[]
  slot?: string
}

const STEPS: Step[] = [
  {
    id: 'tu-van',
    short: 'Tư vấn',
    title: 'Tư vấn và chọn sản phẩm',
    tag: 'Miễn phí',
    desc: 'Liên hệ TGG qua Zalo, Instagram hoặc Facebook để được tư vấn dòng sản phẩm phù hợp (LIGHT hoặc PRO), gói thiết kế, và giải đáp mọi thắc mắc trước khi đặt.',
    you: [
      `Nhắn Zalo ${ZALO_PHONE}, Instagram hoặc Facebook của TGG.`,
      'Cho TGG biết môn bạn tập và ý tưởng: tên, số, logo hay ảnh mẫu bạn thích.',
    ],
    lab: ['Tư vấn dòng LIGHT hay PRO và gói hợp với bạn.', 'Hẹn lịch scan, hoặc hướng dẫn tìm điểm scan nếu bạn ở tỉnh.'],
    shots: [],
    slot: 'Kỹ thuật viên tư vấn khách tại lab',
  },
  {
    id: 'scan',
    short: 'Scan 3D',
    title: 'Scan 3D mẫu hàm',
    tag: 'Miễn phí · 10–15 phút',
    desc: 'Lấy dữ liệu scan răng, có 2 lựa chọn tùy nơi bạn ở. Scan hoàn toàn miễn phí, không đau, chỉ mất 10–15 phút, không cần lấy khuôn truyền thống.',
    you: ['Chọn nơi scan: tại TGG (TP.HCM) hoặc nha khoa gần nhà.', 'Đặt hẹn trước khi đến TGG.'],
    lab: ['Nhận dữ liệu scan 3D của bạn.', 'In mẫu hàm từ dữ liệu scan để làm guard đúng khuôn răng.'],
    shots: [{ p: photo('lab-model-arch'), caption: 'Mẫu hàm in từ dữ liệu scan 3D' }],
  },
  {
    id: 'thiet-ke',
    short: 'Duyệt thiết kế',
    title: 'Duyệt thiết kế 2D',
    tag: 'Gói Custom Text, Fully Design',
    desc: 'TGG gửi bản thiết kế 2D trong 24 giờ để bạn xem và góp ý. Sản xuất chỉ bắt đầu sau khi bạn xác nhận. Gói Base bỏ qua bước này.',
    you: ['Xem bản thiết kế 2D và góp ý.', 'Xác nhận khi đã ưng để TGG bắt đầu sản xuất.'],
    lab: ['Lên bản thiết kế theo ý tưởng của bạn, miễn phí.', 'Gửi bản 2D trong 24 giờ.'],
    shots: [{ p: photo('lab-eva-sheets'), caption: 'Tấm EVA nhiều màu cho dòng PRO' }],
  },
  {
    id: 'san-xuat',
    short: 'Sản xuất',
    title: 'Sản xuất tại lab',
    tag: '2–3 ngày làm việc',
    desc: 'Sau khi chốt thiết kế (hoặc ngay sau scan với gói Base), TGG sản xuất riêng theo khuôn răng của bạn tại Khai Nguyên Dental Lab trong 2–3 ngày làm việc.',
    you: ['Không cần làm gì thêm.'],
    lab: ['Ép các lớp EVA lên mẫu hàm của bạn.', 'Kiểm tra mép guard trước khi giao.'],
    shots: [
      { p: photo('lab-glove-hold'), caption: 'Kỹ thuật viên cầm guard trong suốt' },
      { p: photo('lab-glove-check'), caption: 'Kiểm tra mép guard trước khi giao' },
    ],
  },
  {
    id: 'nhan-hang',
    short: 'Nhận hàng',
    title: 'Giao hàng tận nhà',
    tag: 'Miễn phí ship',
    desc: 'Sản phẩm hoàn thiện được đóng gói và ship tận nhà toàn quốc, miễn phí vận chuyển. Thời gian nhận hàng tùy đơn vị vận chuyển và địa chỉ.',
    you: ['Nhận guard, đeo thử và giữ hộp đựng để bảo quản.', 'Báo TGG nếu guard chưa vừa khít.'],
    lab: ['Đóng gói kèm hộp đựng và hướng dẫn vệ sinh.', 'Bảo hành fit 1 đổi 1.'],
    shots: [{ p: photo('case-box'), caption: 'Hộp đựng The Guard Guy' }],
  },
]

const SCAN_OPTIONS = [
  {
    tag: 'Khuyến nghị',
    title: 'Scan tại TGG',
    subtitle: 'Dành cho khách TP.HCM',
    lines: ['10/40 Xuân Diệu, P. Tân Sơn Nhất, Q. Tân Bình, TP.HCM', 'Cổng ngoài ghi: Khai Nguyên Dental Lab'],
    note: 'Vui lòng đặt hẹn trước khi đến.',
  },
  {
    tag: 'Khách tỉnh',
    title: 'Scan tại nha khoa địa phương',
    subtitle: 'Dành cho khách ngoài TP.HCM',
    lines: ['Đến nha khoa có dịch vụ scan 3D intraoral tại địa phương', 'Gửi file scan về TGG để sản xuất'],
    note: 'Chưa biết nha khoa nào? Nhắn TGG để được tư vấn địa chỉ gần nhất.',
  },
]

const STATS = [
  { value: '10–15 phút', label: 'Scan 3D' },
  { value: '24 giờ', label: 'Có bản thiết kế 2D' },
  { value: '2–3 ngày', label: 'Sản xuất' },
  { value: 'Miễn phí', label: 'Ship toàn quốc' },
]

const NOTES = [
  'Scan 3D tại TGG hoàn toàn miễn phí, không tính thêm phí dù chọn gói nào.',
  'Khách đến scan tại TGG cần đặt hẹn trước, không nhận khách vãng lai.',
  'Khách tỉnh chưa biết nha khoa scan có thể nhắn TGG để được hỗ trợ tìm địa điểm.',
  'Không cần đặt cọc trước. Miễn phí ship toàn quốc, không cộng thêm phụ phí vận chuyển.',
]

// ── Một bước ────────────────────────────────────────────────────────────────

function StepBlock({ step, i }: { step: Step; i: number }) {
  const flip = i % 2 === 1
  return (
    <section id={step.id} aria-labelledby={`${step.id}-title`} className="scroll-mt-32 border-t-[3px] border-white/10 py-16 md:scroll-mt-36 md:py-24">
      <div className="mx-auto grid max-w-[1400px] gap-10 px-4 md:px-8 lg:grid-cols-2 lg:items-center lg:gap-16">
        {/* Ảnh xen kẽ trái/phải theo từng bước */}
        <div className={flip ? 'lg:order-2' : ''}>
          {step.shots.length === 0 && step.slot ? (
            <PhotoSlot label={step.slot} className="aspect-[3/2]" />
          ) : step.shots.length === 1 ? (
            <figure>
              <div className="relative aspect-[3/2] overflow-hidden rounded-[6px] bg-black">
                <Image src={step.shots[0].p.src} alt={step.shots[0].p.alt} fill placeholder="blur" blurDataURL={step.shots[0].p.blurDataURL} sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
              </div>
              <figcaption className="mt-2 text-sm text-arena-mute">{step.shots[0].caption}</figcaption>
            </figure>
          ) : (
            <div className="grid grid-cols-2 gap-4">
              {step.shots.map((s) => (
                <figure key={s.p.id}>
                  <div className="relative aspect-[4/5] overflow-hidden rounded-[6px] bg-black">
                    <Image src={s.p.src} alt={s.p.alt} fill placeholder="blur" blurDataURL={s.p.blurDataURL} sizes="(min-width: 1024px) 25vw, 50vw" className="object-cover" />
                  </div>
                  <figcaption className="mt-2 text-sm text-arena-mute">{s.caption}</figcaption>
                </figure>
              ))}
            </div>
          )}
        </div>

        <div>
          <p className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
            <span className="apron tabular text-6xl leading-none text-corner" aria-hidden="true">{i + 1}</span>
            <span className="placard text-base text-corner">{step.tag}</span>
          </p>
          <h2 id={`${step.id}-title`} className="apron t-sub mt-4">
            <span className="sr-only">Bước {i + 1}: </span>
            {step.title}
          </h2>
          <p className="mt-4 max-w-[36rem] text-lg leading-relaxed text-arena-mute">{step.desc}</p>

          <div className="mt-8 grid gap-8 sm:grid-cols-2">
            {[
              { head: 'Bạn làm gì', items: step.you },
              { head: 'TGG làm gì', items: step.lab },
            ].map((col) => (
              <div key={col.head} className="border-t-[3px] border-arena-ink pt-4">
                <h3 className="placard text-lg">{col.head}</h3>
                <ul className="mt-3 space-y-2 text-base leading-snug">
                  {col.items.map((t) => (
                    <li key={t} className="flex gap-3">
                      <span aria-hidden="true" className="mt-[0.6em] h-[3px] w-4 shrink-0 rounded bg-corner" />
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {step.id === 'tu-van' && (
            <div className="mt-8 flex flex-wrap gap-x-8 gap-y-2">
              <a href={ZALO_URL} target="_blank" rel="noopener noreferrer" className="rope-link placard inline-flex min-h-11 items-center gap-2 text-lg text-arena-ink">Zalo <ArrowIcon /></a>
              <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="rope-link placard inline-flex min-h-11 items-center text-lg text-arena-mute hover:text-arena-ink">Instagram</a>
              <a href={FACEBOOK_URL} target="_blank" rel="noopener noreferrer" className="rope-link placard inline-flex min-h-11 items-center text-lg text-arena-mute hover:text-arena-ink">Facebook</a>
            </div>
          )}
          {step.id === 'thiet-ke' && (
            <Link href="/customize" className="rope-link placard mt-8 inline-flex min-h-11 items-center gap-2 text-lg text-arena-ink">
              Chuẩn bị ý tưởng với công cụ Tự thiết kế <ArrowIcon />
            </Link>
          )}
          {step.id === 'nhan-hang' && (
            <Link href="/faq#care" className="rope-link placard mt-8 inline-flex min-h-11 items-center gap-2 text-lg text-arena-ink">
              Cách vệ sinh và bảo quản <ArrowIcon />
            </Link>
          )}
        </div>
      </div>

      {/* Hai cách scan, đặt ngay trong bước 2 */}
      {step.id === 'scan' && (
        <div className="mx-auto mt-12 grid max-w-[1400px] gap-8 px-4 md:px-8 lg:grid-cols-[1fr_3px_1fr] lg:gap-12">
          {SCAN_OPTIONS.map((opt, j) => (
            <div key={opt.title} className="contents">
              {j === 1 && <span aria-hidden="true" className="rope rope-white hidden h-auto w-[3px] opacity-25 lg:block" />}
              <div className="border-t-[3px] border-white/10 pt-6 lg:border-t-0 lg:pt-0">
                <p className="flex flex-wrap items-baseline gap-x-3">
                  <span className="placard text-2xl text-arena-ink">{opt.title}</span>
                  <span className="placard text-sm text-corner">{opt.tag}</span>
                </p>
                <p className="text-base text-arena-mute">{opt.subtitle}</p>
                <ul className="mt-4 space-y-1 text-base leading-relaxed text-arena-ink">
                  {opt.lines.map((l) => (
                    <li key={l}>{l}</li>
                  ))}
                </ul>
                <p className="mt-3 text-base text-arena-mute">{opt.note}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  )
}

// ── Trang ────────────────────────────────────────────────────────────────────

export default function ProcessPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHead
          title="Quy trình 5 bước."
          lede="Từ tin nhắn đầu tiên đến lúc guard nằm trong tay bạn. Không cần đặt cọc, không cần đến TP.HCM nếu bạn ở tỉnh."
          photo={photo('lab-glove-pair')}
        >
          <dl className="mt-10 grid max-w-[44rem] grid-cols-2 gap-x-8 gap-y-6 sm:grid-cols-4">
            {STATS.map((s) => (
              <div key={s.label} className="flex flex-col-reverse">
                <dt className="placard mt-1 text-sm text-arena-mute">{s.label}</dt>
                <dd className="placard tabular text-2xl normal-case text-arena-ink">{s.value}</dd>
              </div>
            ))}
          </dl>
        </PageHead>

        <StepNav steps={STEPS.map(({ id, short }) => ({ id, short }))} />

        <div className="bg-arena text-arena-ink">
          {STEPS.map((s, i) => (
            <StepBlock key={s.id} step={s} i={i} />
          ))}
        </div>

        {/* Lưu ý trên canvas */}
        <section aria-labelledby="notes-title" className="on-canvas relative bg-canvas py-20 text-canvas-ink md:py-28">
          <span aria-hidden="true" className="rope rope-blue absolute inset-x-0 top-0 rounded-none" />
          <div className="mx-auto grid max-w-[1400px] gap-10 px-4 md:px-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
            <div>
              <h2 id="notes-title" className="apron t-sub">Lưu ý.</h2>
              <Link href="/faq" className="rope-link placard mt-6 inline-flex min-h-11 items-center gap-2 text-lg">
                Xem tất cả câu hỏi thường gặp <ArrowIcon />
              </Link>
            </div>
            <ul className="divide-y-[3px] divide-canvas-deep border-t-[3px] border-canvas-ink">
              {NOTES.map((n) => (
                <li key={n} className="py-4 text-lg leading-relaxed">{n}</li>
              ))}
            </ul>
          </div>
        </section>

        <ZaloClose
          title="Bắt đầu từ bước 1."
          lede="Nhắn Zalo để được tư vấn và hẹn lịch scan, hoặc điền form đặt hàng online. Không cần đặt cọc trước."
          cta="Nhắn Zalo tư vấn"
        >
          <Link href="/order" className="rope-link placard inline-flex min-h-11 items-center gap-2 text-arena-ink">
            Đặt hàng online <ArrowIcon />
          </Link>
          <Link href="/products" className="rope-link placard inline-flex min-h-11 items-center gap-2 text-arena-mute hover:text-arena-ink">
            Xem sản phẩm và giá
          </Link>
        </ZaloClose>
      </main>
      <Footer />
      <MobileCornerBar />
    </>
  )
}
