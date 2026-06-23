import Link from 'next/link'
import { PRO_COLORS } from './MouthguardDesigner/constants'

const tiers = [
  { name: 'BASE',         desc: 'Trong suốt, không in ấn',   light: '1.400.000đ', pro: '1.800.000đ' },
  { name: 'Custom Text',  desc: 'Thêm tên hoặc số',          light: '1.500.000đ', pro: '1.900.000đ' },
  { name: 'Fully Design', desc: 'Thiết kế hoàn toàn theo ý', light: '1.600.000đ', pro: '2.000.000đ' },
]

export default function Products() {
  return (
    <section className="bg-[#0F1F38] py-20 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="text-center mb-14">
          <span className="text-xs font-bold text-[#1CA6DF] uppercase tracking-widest">Sản phẩm</span>
          <h2 className="font-heading font-black text-4xl md:text-5xl text-white mt-3 mb-4">
            Chọn đúng dòng cho bạn
          </h2>
          <p className="text-[#94A3B8] max-w-lg mx-auto text-sm">
            Tất cả đều custom-fit theo hàm của bạn — không có size S/M/L.
          </p>
        </div>

        {/* 2 Cards */}
        <div className="grid md:grid-cols-2 gap-6 mb-10">

          {/* LIGHT */}
          <div className="bg-[#152035] border border-[#1E3350] rounded-2xl p-8 flex flex-col">
            <div className="mb-6">
              <span className="text-xs font-bold text-[#94A3B8] uppercase tracking-widest">Dòng</span>
              <h3 className="font-heading font-black text-3xl text-white mt-1">LIGHT</h3>
              <p className="text-[#94A3B8] text-sm">& Comfort</p>
            </div>

            <ul className="space-y-3 mb-8 flex-1">
              {[
                '2 lớp EVA mỏng',
                'Bóng rổ · Bóng đá · Gym · Non-combat',
                'Màu trong suốt (clear)',
                'Hàm trên · Scan 3D miễn phí',
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 text-sm text-[#F1F5F9]">
                  <span className="text-[#1CA6DF]">▸</span> {item}
                </li>
              ))}
            </ul>

            <div className="space-y-2 mb-8">
              {tiers.map((tier) => (
                <div key={tier.name} className="flex items-center justify-between bg-[#0F1F38] rounded-xl px-4 py-3">
                  <div>
                    <p className="text-white text-sm font-semibold">{tier.name}</p>
                    <p className="text-[#94A3B8] text-xs">{tier.desc}</p>
                  </div>
                  <span className="text-[#1CA6DF] font-bold text-sm">{tier.light}</span>
                </div>
              ))}
            </div>

            <Link
              href="/order"
              className="block text-center border border-[#1CA6DF] text-[#1CA6DF] font-bold py-3 rounded-xl hover:bg-[#1CA6DF] hover:text-white transition-all"
            >
              Đặt LIGHT
            </Link>
          </div>

          {/* PRO */}
          <div className="relative bg-[#0D1E35] border border-[#1CA6DF]/40 rounded-2xl p-8 flex flex-col overflow-hidden">
            <div className="absolute top-4 right-4 bg-[#1CA6DF] text-white text-xs font-bold px-3 py-1 rounded-full">
              Phổ biến nhất
            </div>

            <div className="mb-6">
              <span className="text-xs font-bold text-[#1CA6DF] uppercase tracking-widest">Dòng</span>
              <h3 className="font-heading font-black text-3xl text-white mt-1">PRO</h3>
              <p className="text-[#94A3B8] text-sm">Guard & Protection</p>
            </div>

            <ul className="space-y-3 mb-6 flex-1">
              {[
                '3 lớp EVA dày — bảo vệ tối đa',
                'Boxing · MMA · Muay Thái · Combat sports',
                'Hàm trên · Scan 3D miễn phí',
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 text-sm text-[#F1F5F9]">
                  <span className="text-[#1CA6DF]">▸</span> {item}
                </li>
              ))}
            </ul>

            {/* Color swatches */}
            <div className="mb-6">
              <p className="text-[#94A3B8] text-xs mb-2">{PRO_COLORS.length} màu lựa chọn</p>
              <div className="flex gap-2 flex-wrap">
                {PRO_COLORS.map((color) => (
                  <div
                    key={color.hex}
                    title={`${color.name} / ${color.nameEn}`}
                    className="w-5 h-5 rounded-full border border-white/10"
                    style={{ backgroundColor: color.hex }}
                  />
                ))}
              </div>
            </div>

            <div className="space-y-2 mb-8">
              {tiers.map((tier) => (
                <div key={tier.name} className="flex items-center justify-between bg-[#0A1628] rounded-xl px-4 py-3">
                  <div>
                    <p className="text-white text-sm font-semibold">{tier.name} PRO</p>
                    <p className="text-[#94A3B8] text-xs">{tier.desc}</p>
                  </div>
                  <span className="text-[#1CA6DF] font-bold text-sm">{tier.pro}</span>
                </div>
              ))}
            </div>

            <Link
              href="/order"
              className="block text-center bg-[#1CA6DF] hover:bg-[#1590C2] text-white font-bold py-3 rounded-xl transition-all hover:scale-105"
            >
              Đặt PRO
            </Link>
          </div>

        </div>

        {/* Common features */}
        <div className="flex gap-6 justify-center flex-wrap">
          {['Scan 3D miễn phí', 'Ship miễn phí toàn quốc', '2–3 ngày sản xuất', 'Custom 100% theo hàm của bạn'].map((item) => (
            <span key={item} className="text-xs text-[#94A3B8] flex items-center gap-1">
              <span className="text-[#1CA6DF]">✓</span> {item}
            </span>
          ))}
        </div>

      </div>
    </section>
  )
}