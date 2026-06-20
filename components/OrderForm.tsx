'use client'

import { useState } from 'react'
import { useSearchParams } from 'next/navigation'

const LINES = [
  { key: 'light', label: 'LIGHT & Comfort' },
  { key: 'pro', label: 'Guard & Protection PRO' },
] as const

const PACKAGES_BY_LINE: Record<string, { key: string; label: string; price: string }[]> = {
  light: [
    { key: 'base', label: 'BASE', price: '1.400.000đ' },
    { key: 'custom', label: 'Custom Text', price: '1.500.000đ' },
    { key: 'full', label: 'Fully Design', price: '1.600.000đ' },
  ],
  pro: [
    { key: 'base-pro', label: 'BASE PRO', price: '1.800.000đ' },
    { key: 'custom-pro', label: 'Custom Text PRO', price: '1.900.000đ' },
    { key: 'full-pro', label: 'Fully Design PRO', price: '2.000.000đ' },
  ],
}

type Line = 'light' | 'pro'

function buildSummary({ line, pkg, name, phone, note }: { line: Line; pkg: string; name: string; phone: string; note: string }) {
  const lineLabel = LINES.find(l => l.key === line)?.label ?? line
  const pkgInfo = PACKAGES_BY_LINE[line].find(p => p.key === pkg)
  const pkgLabel = pkgInfo ? `${pkgInfo.label} — ${pkgInfo.price}` : pkg
  return [
    'Đặt hàng The Guard Guy',
    `Dòng: ${lineLabel}`,
    `Gói: ${pkgLabel}`,
    `Tên: ${name}`,
    `SĐT: ${phone}`,
    note ? `Ghi chú: ${note}` : null,
  ].filter(Boolean).join('\n')
}

export default function OrderForm() {
  const searchParams = useSearchParams()
  const initialLine = (searchParams.get('line') as Line) === 'light' ? 'light' : 'pro'
  const initialPkg = searchParams.get('pkg')

  const [line, setLine] = useState<Line>(initialLine)
  const [pkg, setPkg] = useState(initialPkg && PACKAGES_BY_LINE[initialLine].some(p => p.key === initialPkg) ? initialPkg : PACKAGES_BY_LINE[initialLine][0].key)
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [note, setNote] = useState('')
  const [copied, setCopied] = useState(false)
  const [copyFailed, setCopyFailed] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [phoneError, setPhoneError] = useState('')
  const [nameError, setNameError] = useState('')

  const switchLine = (next: Line) => {
    setLine(next)
    setPkg(PACKAGES_BY_LINE[next][0].key)
  }

  const summary = buildSummary({ line, pkg, name, phone, note })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    let hasError = false
    if (!name.trim()) {
      setNameError('Vui lòng nhập tên của bạn')
      hasError = true
    } else {
      setNameError('')
    }
    if (!/^0\d{9,10}$/.test(phone.replace(/\s/g, ''))) {
      setPhoneError('Số điện thoại không hợp lệ (VD: 0975580253)')
      hasError = true
    } else {
      setPhoneError('')
    }
    if (hasError) return
    setSubmitted(true)
  }

  const copyThenOpen = async (url: string) => {
    try {
      await navigator.clipboard.writeText(summary)
      setCopied(true)
      setCopyFailed(false)
    } catch {
      setCopied(false)
      setCopyFailed(true)
    }
    window.open(url, '_blank', 'noopener,noreferrer')
  }

  const copyAndOpenZalo = () => copyThenOpen('https://zalo.me/0975580253')
  const copyAndOpenMessenger = () => copyThenOpen(`https://m.me/theguardguy?text=${encodeURIComponent(summary)}`)

  const mailtoHref = `mailto:theguardguy.official@gmail.com?subject=${encodeURIComponent('Đặt hàng The Guard Guy')}&body=${encodeURIComponent(summary)}`

  if (submitted) {
    return (
      <div className="bg-[#152035] border border-[#1CA6DF]/40 rounded-2xl p-8 text-center">
        <div className="text-3xl mb-3">✅</div>
        <h3 className="font-heading font-black text-white text-xl mb-2">Đã ghi nhận yêu cầu của bạn</h3>
        <p className="text-[#94A3B8] text-sm mb-6 max-w-md mx-auto">
          Gửi nội dung này cho TGG để được xác nhận và đặt hẹn scan — chọn 1 trong 3 cách dưới đây:
        </p>

        <div className="bg-[#0A1628] border border-[#1E3350] rounded-xl p-4 text-left text-sm text-[#94A3B8] whitespace-pre-line mb-6 max-w-md mx-auto">
          {summary}
        </div>

        <div className="flex flex-col sm:flex-row gap-3 justify-center mb-3">
          <button
            onClick={copyAndOpenZalo}
            className="inline-flex items-center justify-center gap-2 bg-[#1CA6DF] hover:bg-[#1590C2] text-white font-bold px-6 py-3 rounded-xl transition-all"
          >
            Mở Zalo
          </button>
          <button
            onClick={copyAndOpenMessenger}
            className="inline-flex items-center justify-center gap-2 border border-[#1CA6DF] text-[#1CA6DF] hover:bg-[#1CA6DF] hover:text-white font-bold px-6 py-3 rounded-xl transition-all"
          >
            Mở Messenger
          </button>
          <a
            href={mailtoHref}
            className="inline-flex items-center justify-center gap-2 border border-[#1E3350] text-[#94A3B8] hover:border-[#1CA6DF]/50 hover:text-white font-bold px-6 py-3 rounded-xl transition-all"
          >
            Gửi qua email
          </a>
        </div>
        {copied && <p className="text-[#1CA6DF] text-xs">Đã sao chép nội dung — dán nếu Messenger/Zalo không tự điền sẵn.</p>}
        {copyFailed && (
          <p className="text-amber-400 text-xs">
            Không tự sao chép được nội dung — vui lòng đọc và gõ lại nội dung phía trên khi nhắn Zalo.
          </p>
        )}

        <button
          onClick={() => setSubmitted(false)}
          className="text-[#94A3B8] hover:text-white text-xs mt-5 underline underline-offset-2"
        >
          Sửa lại thông tin
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="bg-[#152035] border border-[#1E3350] rounded-2xl p-6 sm:p-8 space-y-6">
      <div>
        <p className="text-[#94A3B8] text-xs uppercase tracking-widest mb-3">Dòng sản phẩm</p>
        <div className="flex gap-3 flex-wrap">
          {LINES.map((l) => (
            <button
              key={l.key}
              type="button"
              onClick={() => switchLine(l.key)}
              className={`px-4 py-2 rounded-xl text-sm font-bold border transition-all ${
                line === l.key
                  ? 'bg-[#1CA6DF] text-white border-[#1CA6DF]'
                  : 'bg-[#0A1628] text-[#94A3B8] border-[#1E3350] hover:border-[#1CA6DF]/50 hover:text-white'
              }`}
            >
              {l.label}
            </button>
          ))}
        </div>
      </div>

      <div>
        <p className="text-[#94A3B8] text-xs uppercase tracking-widest mb-3">Gói</p>
        <div className="grid grid-cols-3 gap-2">
          {PACKAGES_BY_LINE[line].map((p) => (
            <button
              key={p.key}
              type="button"
              onClick={() => setPkg(p.key)}
              className={`px-2 py-2.5 rounded-xl text-xs sm:text-sm font-semibold border transition-all whitespace-nowrap overflow-hidden text-ellipsis ${
                pkg === p.key
                  ? 'bg-[#1CA6DF]/10 text-[#1CA6DF] border-[#1CA6DF]'
                  : 'bg-[#0A1628] text-[#94A3B8] border-[#1E3350] hover:border-[#1CA6DF]/50 hover:text-white'
              }`}
            >
              {p.label}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="order-name" className="block text-[#94A3B8] text-xs uppercase tracking-widest mb-2">Tên của bạn</label>
          <input
            id="order-name"
            value={name}
            onChange={(e) => { setName(e.target.value); setNameError('') }}
            required
            placeholder="Nguyễn Văn A"
            className="w-full bg-[#0A1628] border border-[#1E3350] rounded-xl px-4 py-3 text-white text-sm placeholder:text-[#94A3B8]/50 focus:outline-none focus:border-[#1CA6DF] transition-colors"
          />
          {nameError && <p className="text-red-400 text-xs mt-1.5">{nameError}</p>}
        </div>
        <div>
          <label htmlFor="order-phone" className="block text-[#94A3B8] text-xs uppercase tracking-widest mb-2">Số điện thoại</label>
          <input
            id="order-phone"
            value={phone}
            onChange={(e) => { setPhone(e.target.value); setPhoneError('') }}
            required
            placeholder="0975580253"
            className="w-full bg-[#0A1628] border border-[#1E3350] rounded-xl px-4 py-3 text-white text-sm placeholder:text-[#94A3B8]/50 focus:outline-none focus:border-[#1CA6DF] transition-colors"
          />
          {phoneError && <p className="text-red-400 text-xs mt-1.5">{phoneError}</p>}
        </div>
      </div>

      <div>
        <label htmlFor="order-note" className="block text-[#94A3B8] text-xs uppercase tracking-widest mb-2">Ghi chú (tùy chọn)</label>
        <textarea
          id="order-note"
          value={note}
          onChange={(e) => setNote(e.target.value)}
          rows={3}
          placeholder="VD: muốn đặt lịch scan cuối tuần, cần in tên trên guard…"
          className="w-full bg-[#0A1628] border border-[#1E3350] rounded-xl px-4 py-3 text-white text-sm placeholder:text-[#94A3B8]/50 focus:outline-none focus:border-[#1CA6DF] transition-colors resize-none"
        />
      </div>

      <button
        type="submit"
        className="w-full bg-[#1CA6DF] hover:bg-[#1590C2] text-white font-bold py-3.5 rounded-xl transition-all"
      >
        Xác nhận thông tin đặt hàng
      </button>
    </form>
  )
}
