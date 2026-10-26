import { Suspense } from 'react'
import type { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import OrderForm from '@/components/OrderForm'
import PageHead from '@/components/ring/PageHead'
import ZaloClose from '@/components/ring/ZaloClose'
import MobileCornerBar from '@/components/ring/MobileCornerBar'
import { ArrowIcon } from '@/components/ring/icons'
import { photo } from '@/data/photos'
import { FACEBOOK_URL, INSTAGRAM_URL } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Đặt hàng — The Guard Guy',
  description: 'Năm bước từ tư vấn, scan 3D miễn phí, duyệt thiết kế, sản xuất 2–3 ngày đến giao hàng miễn phí toàn quốc. Không cần đặt cọc.',
}

// ── Dữ liệu ──────────────────────────────────────────────────────────────────

const STEPS = [
  {
    title: 'Tư vấn và chọn sản phẩm',
    desc: 'Liên hệ TGG qua Zalo, Instagram hoặc Facebook để được tư vấn dòng sản phẩm phù hợp (LIGHT hoặc PRO), gói thiết kế, và giải đáp mọi thắc mắc trước khi đặt.',
    tag: null,
  },
  {
    title: 'Scan 3D mẫu hàm',
    desc: 'Lấy dữ liệu scan răng, có 2 lựa chọn tùy nơi bạn ở. Scan hoàn toàn miễn phí, không đau, chỉ mất 10–15 phút.',
    tag: 'Miễn phí',
  },
  {
    title: 'Duyệt thiết kế 2D',
    desc: 'TGG gửi bản thiết kế 2D để bạn xem và góp ý. Sản xuất chỉ bắt đầu sau khi bạn xác nhận. Bước này chỉ áp dụng cho gói Custom Text và Fully Design.',
    tag: 'Gói Custom',
  },
  {
    title: 'Sản xuất',
    desc: 'Sau khi chốt thiết kế (hoặc ngay sau scan với gói Base), TGG sản xuất riêng theo khuôn răng của bạn trong 2–3 ngày làm việc.',
    tag: '2–3 ngày',
  },
  {
    title: 'Giao hàng tận nhà',
    desc: 'Sản phẩm hoàn thiện được đóng gói và ship tận nhà toàn quốc, miễn phí vận chuyển. Thời gian nhận hàng tùy đơn vị vận chuyển và địa chỉ.',
    tag: 'Miễn phí ship',
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

const NOTES = [
  'Scan 3D tại TGG hoàn toàn miễn phí, không tính thêm phí dù chọn gói nào.',
  'Khách đến scan tại TGG cần đặt hẹn trước, không nhận khách vãng lai.',
  'Khách tỉnh chưa biết nha khoa scan có thể nhắn TGG để được hỗ trợ tìm địa điểm.',
  'Miễn phí ship toàn quốc, không cộng thêm phụ phí vận chuyển.',
]

// ── Trang ────────────────────────────────────────────────────────────────────

export default function OrderPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHead
          title="Đặt hàng trong 5 bước."
          lede="Từ tư vấn đến nhận hàng tận nhà: chỉ 5 bước, không cần đặt cọc, không cần đến TP.HCM nếu bạn ở tỉnh."
          photo={photo('case-box')}
        >
          <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-1">
            {['Scan 10–15 phút', 'Sản xuất 2–3 ngày', 'Ship miễn phí toàn quốc'].map((p) => (
              <li key={p} className="placard flex items-center gap-2 text-[0.95rem] text-arena-ink">
                <span aria-hidden="true" className="h-2 w-2 rounded-full bg-corner" />
                {p}
              </li>
            ))}
          </ul>
          <a href="#order-form" className="rope-link placard mt-10 inline-flex items-center gap-2 text-xl text-arena-ink">
            Điền form đặt hàng <ArrowIcon className="h-5 w-5 rotate-90" />
          </a>
        </PageHead>

        {/* Năm bước */}
        <section aria-labelledby="steps-title" className="bg-arena py-24 md:py-32">
          <div className="mx-auto max-w-[1400px] px-4 md:px-8">
            <h2 id="steps-title" className="sr-only">Quy trình đặt hàng</h2>
            <ol className="border-t-[3px] border-arena-ink">
              {STEPS.map((step, i) => (
                <li key={step.title} className="grid gap-4 border-b-[3px] border-white/10 py-10 sm:grid-cols-[5rem_1fr] sm:gap-8">
                  <p className="apron tabular text-5xl leading-none text-corner" aria-hidden="true">{i + 1}</p>
                  <div>
                    <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
                      <h3 className="placard text-3xl text-arena-ink">{step.title}</h3>
                      {step.tag && <span className="placard text-base text-corner">{step.tag}</span>}
                    </div>
                    <p className="mt-3 max-w-[44rem] text-lg leading-relaxed text-arena-mute">{step.desc}</p>

                    {i === 1 && (
                      <div className="mt-8 grid gap-8 lg:grid-cols-[1fr_3px_1fr]">
                        {SCAN_OPTIONS.map((opt, j) => (
                          <div key={opt.title} className="contents">
                            {j === 1 && <span aria-hidden="true" className="rope rope-white hidden h-auto w-[3px] opacity-25 lg:block" />}
                            <div>
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
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Form trên canvas */}
        <section id="order-form" aria-labelledby="form-title" className="on-canvas relative scroll-mt-16 bg-canvas py-24 text-canvas-ink md:py-32">
          <span aria-hidden="true" className="rope rope-blue absolute inset-x-0 top-0 rounded-none" />
          <div className="mx-auto grid max-w-[1400px] gap-14 px-4 md:px-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
            <div>
              <h2 id="form-title" className="apron t-sub">Điền thông tin.</h2>
              <p className="mt-6 max-w-[28rem] text-lg leading-relaxed text-canvas-mute">
                Không cần đặt cọc trước. Bảo hành fit 1 đổi 1. TGG xác nhận và đặt hẹn scan với bạn ngay sau khi nhận.
              </p>
              <h3 className="placard mt-12 text-xl">Lưu ý</h3>
              <ul className="mt-4 divide-y-[3px] divide-canvas-deep border-t-[3px] border-canvas-ink">
                {NOTES.map((n) => (
                  <li key={n} className="py-4 text-base leading-relaxed">{n}</li>
                ))}
              </ul>
            </div>
            <Suspense fallback={null}>
              <OrderForm />
            </Suspense>
          </div>
        </section>

        <ZaloClose title="Muốn hỏi trước khi điền form?" lede="Nhắn trực tiếp qua Zalo 0975 580 253, hoặc Instagram và Facebook của TGG.">
          <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="rope-link placard text-arena-mute hover:text-arena-ink">
            Instagram
          </a>
          <a href={FACEBOOK_URL} target="_blank" rel="noopener noreferrer" className="rope-link placard text-arena-mute hover:text-arena-ink">
            Facebook
          </a>
          <Link href="/products" className="rope-link placard inline-flex items-center gap-2 text-arena-ink">
            Xem sản phẩm và giá <ArrowIcon />
          </Link>
        </ZaloClose>
      </main>
      <Footer />
      <MobileCornerBar />
    </>
  )
}
