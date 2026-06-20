'use client'

import { Suspense } from 'react'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import OrderForm from '@/components/OrderForm'

// ── Steps data ────────────────────────────────────────────────────────────────

const STEPS = [
  {
    number: '01',
    title: 'Tư vấn & chọn sản phẩm',
    desc: 'Liên hệ TGG qua Zalo, Instagram hoặc Facebook để được tư vấn về dòng sản phẩm phù hợp (LIGHT hoặc PRO), gói thiết kế, và giải đáp mọi thắc mắc trước khi đặt.',
    tag: null,
  },
  {
    number: '02',
    title: 'Scan 3D mẫu hàm',
    desc: 'Lấy dữ liệu scan răng — có 2 lựa chọn tùy vị trí của bạn. Scan hoàn toàn miễn phí, không đau, chỉ mất 10–15 phút.',
    tag: 'Miễn phí',
  },
  {
    number: '03',
    title: 'Duyệt thiết kế 2D',
    desc: 'TGG gửi bản thiết kế 2D để bạn xem và góp ý. Sản xuất chỉ bắt đầu sau khi bạn xác nhận. Bước này chỉ áp dụng cho gói Custom Text và Fully Design.',
    tag: 'Gói Custom',
  },
  {
    number: '04',
    title: 'Sản xuất',
    desc: 'Sau khi chốt thiết kế (hoặc ngay sau scan với gói BASE), TGG tiến hành sản xuất riêng theo khuôn răng của bạn. Thời gian: 2–3 ngày làm việc.',
    tag: '2–3 ngày',
  },
  {
    number: '05',
    title: 'Giao hàng tận nhà',
    desc: 'Sản phẩm hoàn thiện được đóng gói và ship tận nhà toàn quốc — miễn phí vận chuyển. Thời gian nhận hàng tùy đơn vị vận chuyển và địa chỉ.',
    tag: 'Miễn phí ship',
  },
]

const SCAN_OPTIONS = [
  {
    badge: 'Khuyến nghị',
    title: 'Scan tại TGG',
    subtitle: 'Dành cho khách TP.HCM',
    icon: '📍',
    lines: [
      '10/40 Xuân Diệu, P. Tân Sơn Nhất, Q. Tân Bình, TP.HCM',
      '(Cổng ngoài ghi: Khai Nguyên Dental Lab)',
    ],
    note: '⚠️ Vui lòng đặt hẹn trước khi đến',
    highlight: true,
  },
  {
    badge: 'Khách tỉnh',
    title: 'Scan tại nha khoa địa phương',
    subtitle: 'Dành cho khách ngoài TP.HCM',
    icon: '🏥',
    lines: [
      'Đến bất kỳ nha khoa nào có dịch vụ scan 3D intraoral tại địa phương',
      'Gửi file scan về TGG để tiến hành sản xuất',
    ],
    note: '💬 Chưa biết nha khoa nào? Nhắn TGG — chúng tôi tư vấn địa chỉ gần nhất',
    highlight: false,
  },
]

// ── Page ──────────────────────────────────────────────────────────────────────

export default function OrderPage() {
  return (
    <div style={{ backgroundColor: '#0A1628', minHeight: '100vh' }}>
      <Navbar />

      {/* ── Hero ── */}
      <section className="pt-32 pb-16 px-6 text-center">
        <span className="text-xs font-bold text-[#1CA6DF] uppercase tracking-widest">Quy trình đặt hàng</span>
        <h1 className="font-heading font-black text-4xl md:text-6xl text-white mt-3 mb-4 leading-tight">
          Đơn giản · Nhanh gọn
        </h1>
        <p className="text-[#94A3B8] text-lg max-w-xl mx-auto">
          Từ tư vấn đến nhận hàng tận nhà — chỉ 5 bước, không cần đến phòng khám nha khoa ở TP.HCM.
        </p>

        {/* Quick stats */}
        <div className="flex flex-wrap gap-6 justify-center mt-10">
          {[
            { value: '10–15 phút', label: 'Thời gian scan' },
            { value: '2–3 ngày', label: 'Sản xuất' },
            { value: 'Miễn phí', label: 'Ship toàn quốc' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="font-heading font-black text-2xl text-[#1CA6DF]">{stat.value}</p>
              <p className="text-[#94A3B8] text-xs mt-0.5">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Steps ── */}
      <section className="px-6 pb-16">
        <div className="max-w-3xl mx-auto">
          <div className="relative">
            {/* Connecting line */}
            <div className="hidden md:block absolute left-[27px] top-10 bottom-10 w-px bg-[#1E3350]" />

            <div className="space-y-6">
              {STEPS.map((step, i) => (
                <div key={step.number} className="relative flex gap-5 md:gap-7">
                  {/* Step number circle */}
                  <div className="flex-shrink-0 w-14 h-14 rounded-full border-2 border-[#1CA6DF]/60 bg-[#0A1628] flex items-center justify-center z-10">
                    <span className="font-heading font-black text-[#1CA6DF] text-lg">{step.number}</span>
                  </div>

                  {/* Content */}
                  <div className="flex-1 bg-[#152035] border border-[#1E3350] rounded-2xl p-6">
                    <div className="flex items-start justify-between gap-3 mb-2">
                      <h3 className="font-heading font-black text-white text-lg leading-snug">
                        {step.title}
                      </h3>
                      {step.tag && (
                        <span className="flex-shrink-0 px-2.5 py-1 rounded-full bg-[#1CA6DF]/10 border border-[#1CA6DF]/30 text-[#1CA6DF] text-xs font-bold">
                          {step.tag}
                        </span>
                      )}
                    </div>
                    <p className="text-[#94A3B8] text-sm leading-relaxed">{step.desc}</p>

                    {/* Scan options inline for step 02 */}
                    {i === 1 && (
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-5">
                        {SCAN_OPTIONS.map((opt) => (
                          <div
                            key={opt.title}
                            className={`rounded-xl p-4 border ${
                              opt.highlight
                                ? 'border-[#1CA6DF]/50 bg-[#1CA6DF]/5'
                                : 'border-[#1E3350] bg-[#0A1628]'
                            }`}
                          >
                            <div className="flex items-center gap-2 mb-2">
                              <span className="text-xl">{opt.icon}</span>
                              <div>
                                <p className="text-white font-semibold text-sm">{opt.title}</p>
                                <p className="text-[#94A3B8] text-xs">{opt.subtitle}</p>
                              </div>
                              {opt.highlight && (
                                <span className="ml-auto px-2 py-0.5 rounded-full bg-[#1CA6DF] text-white text-xs font-bold">
                                  {opt.badge}
                                </span>
                              )}
                            </div>
                            {opt.lines.map((line) => (
                              <p key={line} className="text-[#94A3B8] text-xs leading-relaxed mb-1">
                                {line}
                              </p>
                            ))}
                            <p className="text-[#94A3B8]/70 text-xs mt-2 leading-relaxed">{opt.note}</p>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Important notes ── */}
      <section className="bg-[#0F1F38] py-16 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-heading font-black text-2xl text-white mb-6 text-center">
            Lưu ý quan trọng
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { icon: '✅', text: 'Scan 3D tại TGG hoàn toàn miễn phí — không tính thêm phí dù chọn gói nào' },
              { icon: '📅', text: 'Khách đến scan tại TGG cần đặt hẹn trước — không nhận khách vãng lai' },
              { icon: '🗺️', text: 'Khách tỉnh chưa biết nha khoa scan có thể nhắn TGG để được hỗ trợ tìm địa điểm' },
              { icon: '🚚', text: 'Miễn phí ship toàn quốc — không cộng thêm phụ phí vận chuyển' },
            ].map((item) => (
              <div key={item.text} className="flex gap-3 p-4 bg-[#152035] border border-[#1E3350] rounded-xl">
                <span className="text-xl flex-shrink-0">{item.icon}</span>
                <p className="text-[#94A3B8] text-sm leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Order form ── */}
      <section id="order-form" className="py-20 px-6">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-10">
            <span className="text-xs font-bold text-[#1CA6DF] uppercase tracking-widest">Bước cuối</span>
            <h2 className="font-heading font-black text-3xl md:text-5xl text-white mt-3 mb-4 leading-tight">
              Điền thông tin để đặt hàng
            </h2>
            <p className="text-[#94A3B8]">
              Không cần đặt cọc trước · Bảo hành fit 1 đổi 1 · TGG xác nhận và đặt hẹn scan với bạn ngay sau khi nhận
            </p>
          </div>
          <Suspense fallback={null}>
            <OrderForm />
          </Suspense>
        </div>
      </section>

      {/* ── Secondary CTA ── */}
      <section className="border-t border-[#1E3350] py-12 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-[#94A3B8] text-sm mb-4">
            Muốn hỏi trước khi điền form? Nhắn trực tiếp:
          </p>
          <div className="flex flex-wrap gap-4 justify-center text-sm">
            <a
              href="https://zalo.me/0975580253"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#1CA6DF] hover:text-white font-semibold underline underline-offset-2 transition-colors"
            >
              Zalo: 0975 580 253
            </a>
            <a
              href="https://instagram.com/theguardguy.official"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#94A3B8] hover:text-white underline underline-offset-2 transition-colors"
            >
              Instagram
            </a>
            <a
              href="https://facebook.com/theguardguy"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#94A3B8] hover:text-white underline underline-offset-2 transition-colors"
            >
              Facebook
            </a>
            <Link
              href="/products"
              className="text-[#94A3B8] hover:text-white underline underline-offset-2 transition-colors"
            >
              Xem sản phẩm & giá
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
