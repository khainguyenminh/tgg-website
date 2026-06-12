'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

// ── Data ──────────────────────────────────────────────────────────────────────

const LIGHT_PACKAGES = [
  {
    id: 'base',
    name: 'BASE',
    price: '1.400.000đ',
    highlight: false,
    includes: [
      'Scan 3D miễn phí',
      'Vật liệu EVA an toàn',
      'Sản xuất riêng theo khuôn răng',
      'Màu trong suốt (clear)',
    ],
  },
  {
    id: 'custom',
    name: 'CUSTOM TEXT',
    price: '1.500.000đ',
    highlight: true,
    includes: [
      'Tất cả gói BASE',
      'Thêm tên, số, logo không giới hạn',
      'Lên 3D thiết kế miễn phí',
      'Preview 2D trước sản xuất',
    ],
  },
  {
    id: 'full',
    name: 'FULLY DESIGN',
    price: '1.600.000đ',
    highlight: false,
    includes: [
      'Tất cả gói CUSTOM TEXT',
      'Cá nhân hóa hoàn toàn',
      'Hiệu ứng đặc biệt (tráng gương, đính đá…)',
      'Artwork tùy ý',
    ],
  },
]

const PRO_PACKAGES = [
  {
    id: 'base-pro',
    name: 'BASE PRO',
    price: '1.800.000đ',
    highlight: false,
    includes: [
      'Scan 3D miễn phí',
      'Vật liệu EVA chắc, dẻo 3 lớp',
      'Sản xuất riêng theo khuôn răng',
      '7+ màu lựa chọn',
    ],
  },
  {
    id: 'custom-pro',
    name: 'CUSTOM TEXT PRO',
    price: '1.900.000đ',
    highlight: true,
    includes: [
      'Tất cả gói BASE PRO',
      'Thêm tên, số, logo không giới hạn',
      'Lên 3D thiết kế miễn phí',
      'Preview 2D trước sản xuất',
    ],
  },
  {
    id: 'full-pro',
    name: 'FULLY DESIGN PRO',
    price: '2.000.000đ',
    highlight: false,
    includes: [
      'Tất cả gói CUSTOM TEXT PRO',
      'Cá nhân hóa hoàn toàn',
      'Hiệu ứng đặc biệt (tráng gương, đính đá…)',
      'Artwork tùy ý',
    ],
  },
]

const COMPARISON_ROWS = [
  { label: 'Cấu tạo', light: '2 lớp EVA mỏng', pro: '3 lớp EVA dày' },
  { label: 'Mức bảo vệ', light: 'Tiêu chuẩn', pro: 'Tối đa' },
  { label: 'Phù hợp cho', light: 'Thể thao không đối kháng', pro: 'Combat sports' },
  { label: 'Màu sắc', light: 'Trong suốt (1 màu)', pro: 'Hơn 10 màu' },
  { label: 'Cá nhân hóa', light: '✓ Có gói Custom', pro: '✓ Có gói Custom' },
  { label: 'Hàm', light: 'Upper (hàm trên)', pro: 'Upper (hàm trên)' },
  { label: 'Scan 3D', light: '✓ Miễn phí', pro: '✓ Miễn phí' },
  { label: 'Ship', light: '✓ Miễn phí toàn quốc', pro: '✓ Miễn phí toàn quốc' },
  { label: 'Lead time', light: '2–3 ngày làm việc', pro: '2–3 ngày làm việc' },
  { label: 'Giá từ', light: '1.400.000đ', pro: '1.800.000đ', highlight: true },
]

// ── Package card ──────────────────────────────────────────────────────────────

function PackageCard({
  pkg,
}: {
  pkg: (typeof LIGHT_PACKAGES)[0]
}) {
  return (
    <div
      className={`relative rounded-2xl border p-6 flex flex-col gap-5 transition-all ${
        pkg.highlight
          ? 'border-[#1CA6DF] bg-[#0F1F38]'
          : 'border-[#1E3350] bg-[#152035]'
      }`}
    >
      {pkg.highlight && (
        <span className="absolute -top-3 left-6 bg-[#1CA6DF] text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
          Phổ biến nhất
        </span>
      )}

      <div>
        <p className="text-xs font-bold text-[#1CA6DF] uppercase tracking-widest mb-1">
          {pkg.name}
        </p>
        <p className="font-heading font-black text-3xl text-white">{pkg.price}</p>
      </div>

      <ul className="space-y-2.5 flex-1">
        {pkg.includes.map((item) => (
          <li key={item} className="flex items-start gap-2 text-sm text-[#94A3B8]">
            <svg className="w-4 h-4 text-[#1CA6DF] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
            {item}
          </li>
        ))}
      </ul>

      <a
        href="https://zalo.me/0975580253"
        target="_blank"
        rel="noopener noreferrer"
        className={`w-full text-center font-bold py-3 rounded-xl transition-all text-sm ${
          pkg.highlight
            ? 'bg-[#1CA6DF] hover:bg-[#1590C2] text-white'
            : 'bg-[#1E3350] hover:bg-[#1CA6DF]/20 text-[#1CA6DF] border border-[#1CA6DF]/30'
        }`}
      >
        Đặt gói này
      </a>
    </div>
  )
}

// ── Page ──────────────────────────────────────────────────────────────────────

type Tab = 'light' | 'pro'

export default function ProductsPage() {
  const [activeTab, setActiveTab] = useState<Tab>('pro')

  return (
    <div style={{ backgroundColor: '#0A1628', minHeight: '100vh' }}>
      <Navbar />

      {/* ── Hero ── */}
      <section className="pt-32 pb-16 px-6 text-center">
        <span className="text-xs font-bold text-[#1CA6DF] uppercase tracking-widest">Sản phẩm</span>
        <h1 className="font-heading font-black text-4xl md:text-6xl text-white mt-3 mb-4 leading-tight">
          Hai dòng · Một tiêu chuẩn
        </h1>
        <p className="text-[#94A3B8] text-lg max-w-xl mx-auto">
          Custom-fit hoàn toàn từ khuôn răng thực tế — không boil-and-bite, không size chung.
        </p>
        <div className="flex flex-wrap gap-4 justify-center mt-8 text-sm">
          {['Scan 3D miễn phí', 'Ship miễn phí toàn quốc', 'Nhận hàng 2–3 ngày'].map((tag) => (
            <span key={tag} className="flex items-center gap-1.5 text-[#94A3B8]">
              <span className="text-[#1CA6DF]">✓</span> {tag}
            </span>
          ))}
        </div>
      </section>

      {/* ── Product line tabs ── */}
      <section className="px-6 pb-4">
        <div className="max-w-5xl mx-auto">
          <div className="flex gap-3 justify-center">
            {(['pro', 'light'] as Tab[]).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-8 py-3 rounded-xl font-bold text-sm transition-all border ${
                  activeTab === tab
                    ? 'bg-[#1CA6DF] text-white border-[#1CA6DF]'
                    : 'bg-[#152035] text-[#94A3B8] border-[#1E3350] hover:border-[#1CA6DF]/50 hover:text-white'
                }`}
              >
                {tab === 'pro' ? 'Guard & Protection (PRO)' : 'LIGHT & Comfort'}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ── Product detail ── */}
      {activeTab === 'pro' ? (
        <section className="px-6 py-12">
          <div className="max-w-5xl mx-auto">

            {/* Header */}
            <div className="text-center mb-10">
              <h2 className="font-heading font-black text-4xl md:text-5xl text-white mb-3">
                Guard & Protection
                <span className="text-[#1CA6DF] ml-3">PRO</span>
              </h2>
              <p className="text-[#94A3B8] max-w-2xl mx-auto">
                Dành cho combat sports. 3 lớp EVA dày — chịu được lực tác động trực tiếp từ nắm đấm và đòn đá.
                Hơn 10 màu, cá nhân hóa tự do.
              </p>
            </div>

            {/* Sports tags */}
            <div className="flex flex-wrap gap-2 justify-center mb-12">
              {['Boxing', 'Muay Thái', 'MMA', 'Kickboxing', 'Jiu-Jitsu', 'Judo', 'Grappling'].map((s) => (
                <span key={s} className="px-3 py-1.5 rounded-full bg-[#152035] border border-[#1E3350] text-[#94A3B8] text-xs font-semibold">
                  {s}
                </span>
              ))}
            </div>

            {/* Key strengths */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-14">
              {[
                { icon: '🛡️', title: 'Bảo vệ tối đa', desc: '3 lớp EVA dày hấp thụ lực va chạm hiệu quả khi thi đấu' },
                { icon: '🔒', title: 'Không bao giờ tuột', desc: 'Custom-fit theo khuôn răng — giữ chắc kể cả khi chịu cú đấm bất ngờ' },
                { icon: '🎨', title: 'Hơn 10 màu', desc: 'Thể hiện cá tính hoặc màu đồng phục đội — không còn máng trắng nhàm chán' },
                { icon: '✍️', title: 'Cá nhân hóa tự do', desc: 'Tên, số, logo, artwork theo yêu cầu — giao design preview trước khi sản xuất' },
              ].map((item) => (
                <div key={item.title} className="flex gap-4 p-5 bg-[#152035] border border-[#1E3350] rounded-xl">
                  <span className="text-2xl flex-shrink-0">{item.icon}</span>
                  <div>
                    <p className="font-semibold text-white text-sm mb-1">{item.title}</p>
                    <p className="text-[#94A3B8] text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Packages */}
            <h3 className="font-heading font-black text-2xl text-white text-center mb-6">
              Chọn gói phù hợp
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {PRO_PACKAGES.map((pkg) => (
                <PackageCard key={pkg.id} pkg={pkg} />
              ))}
            </div>
          </div>
        </section>
      ) : (
        <section className="px-6 py-12">
          <div className="max-w-5xl mx-auto">

            {/* Header */}
            <div className="text-center mb-10">
              <h2 className="font-heading font-black text-4xl md:text-5xl text-white mb-3">
                LIGHT
                <span className="text-[#1CA6DF] ml-3">& Comfort</span>
              </h2>
              <p className="text-[#94A3B8] max-w-2xl mx-auto">
                Dành cho thể thao vận động. 2 lớp EVA mỏng — nhẹ, thoáng, ít cản thở.
                Trong suốt, tàng hình khi đeo.
              </p>
            </div>

            {/* Sports tags */}
            <div className="flex flex-wrap gap-2 justify-center mb-12">
              {['Bóng rổ', 'Bóng đá', 'Gym / Fitness', 'Bóng chuyền', 'Trượt ván', 'Xe đạp'].map((s) => (
                <span key={s} className="px-3 py-1.5 rounded-full bg-[#152035] border border-[#1E3350] text-[#94A3B8] text-xs font-semibold">
                  {s}
                </span>
              ))}
            </div>

            {/* Key strengths */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-14">
              {[
                { icon: '🪶', title: 'Mỏng & nhẹ', desc: '2 lớp EVA mỏng — không cảm giác cồng kềnh, dễ quen ngay từ buổi đầu' },
                { icon: '💨', title: 'Thoáng khí', desc: 'Ít cản thở và giao tiếp khi thi đấu — tập trung vào hiệu suất' },
                { icon: '👁️', title: 'Tàng hình', desc: 'Chỉ 1 màu trong suốt — không thay đổi ngoại hình khi đeo' },
                { icon: '🔒', title: 'Fit hoàn hảo', desc: 'Custom-fit theo khuôn răng — không cắn giữ, không tuột như máng đại trà' },
              ].map((item) => (
                <div key={item.title} className="flex gap-4 p-5 bg-[#152035] border border-[#1E3350] rounded-xl">
                  <span className="text-2xl flex-shrink-0">{item.icon}</span>
                  <div>
                    <p className="font-semibold text-white text-sm mb-1">{item.title}</p>
                    <p className="text-[#94A3B8] text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Packages */}
            <h3 className="font-heading font-black text-2xl text-white text-center mb-6">
              Chọn gói phù hợp
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {LIGHT_PACKAGES.map((pkg) => (
                <PackageCard key={pkg.id} pkg={pkg} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── Comparison table ── */}
      <section className="bg-[#0F1F38] py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <span className="text-xs font-bold text-[#1CA6DF] uppercase tracking-widest">So sánh</span>
            <h2 className="font-heading font-black text-3xl md:text-4xl text-white mt-3">
              LIGHT vs PRO — một cái nhìn
            </h2>
          </div>

          <div className="rounded-2xl border border-[#1E3350] overflow-hidden">
            {/* Table header */}
            <div className="grid grid-cols-3 bg-[#152035] border-b border-[#1E3350]">
              <div className="p-4" />
              <div className="p-4 text-center border-l border-[#1E3350]">
                <p className="font-heading font-black text-white text-sm">LIGHT</p>
                <p className="text-[#94A3B8] text-xs">& Comfort</p>
              </div>
              <div className="p-4 text-center border-l border-[#1CA6DF]/40 bg-[#1CA6DF]/5">
                <p className="font-heading font-black text-[#1CA6DF] text-sm">PRO</p>
                <p className="text-[#94A3B8] text-xs">Guard & Protection</p>
              </div>
            </div>

            {/* Rows */}
            {COMPARISON_ROWS.map((row, i) => (
              <div
                key={row.label}
                className={`grid grid-cols-3 border-b border-[#1E3350] last:border-0 ${
                  i % 2 === 0 ? 'bg-[#0A1628]' : 'bg-[#0D1A2E]'
                }`}
              >
                <div className="p-4 text-[#94A3B8] text-sm font-medium">{row.label}</div>
                <div className={`p-4 text-center text-sm border-l border-[#1E3350] ${row.highlight ? 'font-bold text-white' : 'text-[#94A3B8]'}`}>
                  {row.light}
                </div>
                <div className={`p-4 text-center text-sm border-l border-[#1CA6DF]/40 bg-[#1CA6DF]/5 ${row.highlight ? 'font-bold text-[#1CA6DF]' : 'text-[#94A3B8]'}`}>
                  {row.pro}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="relative overflow-hidden py-20 px-6">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0F1F38] via-[#0A1628] to-[#0F1F38]" />
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-[500px] h-[250px] bg-[#1CA6DF]/10 rounded-full blur-[100px]" />
        </div>
        <div className="relative z-10 max-w-2xl mx-auto text-center">
          <h2 className="font-heading font-black text-3xl md:text-5xl text-white mb-4">
            Chưa biết chọn gói nào?
          </h2>
          <p className="text-[#94A3B8] mb-8">
            Nhắn Zalo — TGG tư vấn miễn phí và giúp bạn chọn đúng ngay từ đầu.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://zalo.me/0975580253"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-[#1CA6DF] hover:bg-[#1590C2] text-white font-bold px-8 py-4 rounded-xl transition-all text-lg"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.48 2 12c0 1.85.5 3.58 1.37 5.07L2 22l5.09-1.35A9.96 9.96 0 0 0 12 22c5.52 0 10-4.48 10-10S17.52 2 12 2zm0 18c-1.66 0-3.22-.46-4.54-1.26l-.32-.19-3.02.8.81-2.96-.21-.34A7.96 7.96 0 0 1 4 12c0-4.41 3.59-8 8-8s8 3.59 8 8-3.59 8-8 8z" />
              </svg>
              Tư vấn qua Zalo
            </a>
            <Link
              href="/gallery"
              className="inline-flex items-center justify-center gap-2 border-2 border-[#1CA6DF] text-[#1CA6DF] hover:bg-[#1CA6DF] hover:text-white font-bold px-8 py-4 rounded-xl transition-all text-lg"
            >
              Xem gallery
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
