import Link from 'next/link'

const steps = [
  {
    number: '01',
    icon: '💬',
    title: 'Liên hệ tư vấn',
    desc: 'Nhắn tin qua Zalo, Instagram hoặc Facebook. TGG tư vấn dòng sản phẩm phù hợp với môn thể thao của bạn.',
  },
  {
    number: '02',
    icon: '🦷',
    title: 'Scan 3D miễn phí',
    desc: 'Scan tại TGG (Q. Tân Bình, TP.HCM) hoặc tại nha khoa gần nhà bạn. Chỉ 10–15 phút. TGG hỗ trợ tìm địa điểm cho khách tỉnh.',
  },
  {
    number: '03',
    icon: '🎨',
    title: 'Duyệt thiết kế',
    desc: 'TGG gửi bản thiết kế 2D trong 24h để bạn xem và chỉnh sửa. Áp dụng cho gói Custom Text và Fully Design.',
  },
  {
    number: '04',
    icon: '⚙️',
    title: 'Sản xuất',
    desc: '2–3 ngày làm việc sau khi chốt thiết kế. Quy trình sản xuất tại lab Khai Nguyên Dental — chuẩn kỹ thuật nha khoa.',
  },
  {
    number: '05',
    icon: '📦',
    title: 'Nhận hàng',
    desc: 'Ship miễn phí toàn quốc. Hàng được đóng gói cẩn thận, kèm hộp đựng và hướng dẫn vệ sinh.',
  },
]

export default function HowItWorks() {
  return (
    <section className="bg-[#0F1F38] py-20 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-xs font-bold text-[#1CA6DF] uppercase tracking-widest">Quy trình</span>
          <h2 className="font-heading font-black text-4xl md:text-5xl text-white mt-3 mb-4">
            Từ scan đến tay bạn
          </h2>
          <p className="text-[#94A3B8] max-w-lg mx-auto text-sm">
            5 bước đơn giản — TGG lo toàn bộ, bạn chỉ cần scan và chờ nhận hàng.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">

          {/* Connecting line — desktop */}
          <div className="hidden lg:block absolute top-10 left-0 right-0 h-px bg-[#1E3350] mx-20 z-0" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 relative z-10">
            {steps.map((step, i) => (
              <div key={step.number} className="flex flex-col items-center text-center lg:items-center">

                {/* Circle */}
                <div className="relative mb-5">
                  <div className="w-20 h-20 rounded-full bg-[#152035] border-2 border-[#1E3350] flex flex-col items-center justify-center group-hover:border-[#1CA6DF] transition-colors">
                    <span className="text-2xl">{step.icon}</span>
                  </div>
                  <div className="absolute -top-1 -right-1 w-6 h-6 rounded-full bg-[#1CA6DF] flex items-center justify-center">
                    <span className="text-white text-xs font-bold">{i + 1}</span>
                  </div>
                </div>

                <h3 className="font-heading font-bold text-white text-base mb-2">{step.title}</h3>
                <p className="text-[#94A3B8] text-xs leading-relaxed">{step.desc}</p>

              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-14 text-center">
          <p className="text-[#94A3B8] text-sm mb-5">
            Scan 3D miễn phí · Ship miễn phí · Không cần đặt cọc trước
          </p>
          <Link
            href="/order"
            className="inline-block bg-[#1CA6DF] hover:bg-[#1590C2] text-white font-bold px-10 py-3 rounded-xl transition-all hover:scale-105"
          >
            Bắt đầu đặt hàng
          </Link>
        </div>

      </div>
    </section>
  )
}