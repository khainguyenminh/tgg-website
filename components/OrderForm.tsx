'use client'

import { useState } from 'react'
import { useSearchParams } from 'next/navigation'
import { CheckIcon, ZaloIcon } from './ring/icons'
import { EMAIL, ZALO_URL } from '@/lib/site'
import { TIERS, type LineKey } from '@/lib/packages'

const LINES = [
  { key: 'light', label: 'LIGHT & Comfort' },
  { key: 'pro', label: 'Guard & Protection PRO' },
] as const

const PACKAGES_BY_LINE: Record<LineKey, { key: string; label: string; price: string }[]> = {
  light: TIERS.map((t) => ({ key: t.light.id, label: t.name, price: t.light.price })),
  pro: TIERS.map((t) => ({ key: t.pro.id, label: `${t.name} PRO`, price: t.pro.price })),
}

type Line = LineKey

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

  const copyAndOpenZalo = () => copyThenOpen(ZALO_URL)
  const copyAndOpenMessenger = () => copyThenOpen(`https://m.me/theguardguy?text=${encodeURIComponent(summary)}`)

  const mailtoHref = `mailto:${EMAIL}?subject=${encodeURIComponent('Đặt hàng The Guard Guy')}&body=${encodeURIComponent(summary)}`

  if (submitted) {
    return (
      <div className="border-t-[3px] border-canvas-ink pt-8">
        <h3 className="placard flex items-center gap-3 text-3xl">
          <CheckIcon className="h-8 w-8" />
          Đã ghi nhận yêu cầu
        </h3>
        <p className="mt-4 max-w-[34rem] text-lg leading-relaxed text-canvas-mute">
          Gửi nội dung này cho TGG để được xác nhận và đặt hẹn scan, chọn một trong ba cách dưới đây.
        </p>

        <pre className="mt-6 whitespace-pre-line rounded-[6px] bg-canvas-deep p-5 font-body text-base leading-relaxed text-canvas-ink">{summary}</pre>

        <div className="mt-8 flex flex-wrap items-center gap-3">
          <button type="button" onClick={copyAndOpenZalo} className="corner-pad">
            <ZaloIcon />
            Mở Zalo
          </button>
          <button type="button" onClick={copyAndOpenMessenger} className="seg !min-h-14 !px-5">
            Mở Messenger
          </button>
          <a href={mailtoHref} className="seg !min-h-14 !px-5">
            Gửi qua email
          </a>
        </div>
        <div aria-live="polite" className="mt-4 text-base">
          {copied && <p>Đã sao chép nội dung. Dán vào ô chat nếu Zalo hoặc Messenger không tự điền sẵn.</p>}
          {copyFailed && <p className="text-alert">Không tự sao chép được. Vui lòng đọc và gõ lại nội dung phía trên khi nhắn Zalo.</p>}
        </div>

        <button type="button" onClick={() => setSubmitted(false)} className="rope-link placard mt-8 inline-flex min-h-11 items-center text-base">
          Sửa lại thông tin
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-8 border-t-[3px] border-canvas-ink pt-8">
      <fieldset>
        <legend className="field-label">Dòng sản phẩm</legend>
        <div className="flex flex-wrap gap-2">
          {LINES.map((l) => (
            <button key={l.key} type="button" onClick={() => switchLine(l.key)} aria-pressed={line === l.key} className="seg !min-h-12">
              {l.label}
            </button>
          ))}
        </div>
      </fieldset>

      <fieldset>
        <legend className="field-label">Gói</legend>
        <div className="grid gap-2 sm:grid-cols-3">
          {PACKAGES_BY_LINE[line].map((p) => (
            <button
              key={p.key}
              type="button"
              onClick={() => setPkg(p.key)}
              aria-pressed={pkg === p.key}
              className="seg !min-h-16 flex-col !items-start !gap-1 !py-2 text-left"
            >
              <span>{p.label}</span>
              <span className="tabular text-sm normal-case opacity-80">{p.price}</span>
            </button>
          ))}
        </div>
      </fieldset>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="order-name" className="field-label">Tên của bạn</label>
          <input
            id="order-name"
            value={name}
            onChange={(e) => { setName(e.target.value); setNameError('') }}
            autoComplete="name"
            placeholder="Nguyễn Văn A"
            aria-invalid={nameError ? true : undefined}
            aria-describedby={nameError ? 'order-name-error' : undefined}
            className="field"
          />
          {nameError && <p id="order-name-error" className="mt-2 text-base text-alert">{nameError}</p>}
        </div>
        <div>
          <label htmlFor="order-phone" className="field-label">Số điện thoại</label>
          <input
            id="order-phone"
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            value={phone}
            onChange={(e) => { setPhone(e.target.value); setPhoneError('') }}
            placeholder="0975580253"
            aria-invalid={phoneError ? true : undefined}
            aria-describedby={phoneError ? 'order-phone-error' : undefined}
            className="field"
          />
          {phoneError && <p id="order-phone-error" className="mt-2 text-base text-alert">{phoneError}</p>}
        </div>
      </div>

      <div>
        <label htmlFor="order-note" className="field-label">Ghi chú (tùy chọn)</label>
        <textarea
          id="order-note"
          value={note}
          onChange={(e) => setNote(e.target.value)}
          rows={3}
          placeholder="VD: muốn đặt lịch scan cuối tuần, cần in tên trên guard…"
          className="field resize-none"
        />
      </div>

      <button type="submit" className="corner-pad w-full">
        Xác nhận thông tin đặt hàng
      </button>
    </form>
  )
}
