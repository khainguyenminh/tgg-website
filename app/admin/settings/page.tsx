'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'

interface ColorItem { value: string; label: string; dot: string }
interface ComboItem  { value: string; label: string }
interface Settings   { colors: ColorItem[]; combos: ComboItem[] }

const emptyColor = (): ColorItem => ({ value: '', label: '', dot: '#888888' })
const emptyCombo = (): ComboItem  => ({ value: '', label: '' })

export default function SettingsPage() {
  const [settings, setSettings] = useState<Settings>({ colors: [], combos: [] })
  const [loading, setLoading]   = useState(true)
  const [saving, setSaving]     = useState(false)
  const [saved, setSaved]       = useState(false)
  const [dirty, setDirty]       = useState(false)

  useEffect(() => {
    fetch('/api/admin/settings')
      .then(r => r.json())
      .then(data => { setSettings(data); setLoading(false) })
  }, [])

  function mark() { setDirty(true); setSaved(false) }

  // ── Colors ────────────────────────────────────────────────────────────────

  function updateColor(i: number, field: keyof ColorItem, val: string) {
    setSettings(s => {
      const colors = [...s.colors]
      colors[i] = { ...colors[i], [field]: val }
      return { ...s, colors }
    })
    mark()
  }

  function addColor() {
    setSettings(s => ({ ...s, colors: [...s.colors, emptyColor()] }))
    mark()
  }

  function removeColor(i: number) {
    setSettings(s => ({ ...s, colors: s.colors.filter((_, idx) => idx !== i) }))
    mark()
  }

  // ── Combos ────────────────────────────────────────────────────────────────

  function updateCombo(i: number, field: keyof ComboItem, val: string) {
    setSettings(s => {
      const combos = [...s.combos]
      combos[i] = { ...combos[i], [field]: val }
      return { ...s, combos }
    })
    mark()
  }

  function addCombo() {
    setSettings(s => ({ ...s, combos: [...s.combos, emptyCombo()] }))
    mark()
  }

  function removeCombo(i: number) {
    setSettings(s => ({ ...s, combos: s.combos.filter((_, idx) => idx !== i) }))
    mark()
  }

  // ── Save ──────────────────────────────────────────────────────────────────

  async function save() {
    setSaving(true)
    try {
      await fetch('/api/admin/settings', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(settings),
      })
      setSaved(true)
      setDirty(false)
    } catch {
      alert('Lưu thất bại, thử lại.')
    } finally {
      setSaving(false)
    }
  }

  const S = { // inline style shortcuts
    input: {
      background: '#0f172a', color: '#e2e8f0', border: '1px solid #334155',
      borderRadius: 6, padding: '5px 9px', fontSize: 13, outline: 'none', width: '100%',
    } as React.CSSProperties,
    row: {
      display: 'flex', alignItems: 'center', gap: 8,
      background: '#1e293b', borderRadius: 8, padding: '8px 10px',
      border: '1px solid #334155', marginBottom: 6,
    } as React.CSSProperties,
    del: {
      background: 'transparent', border: 'none', color: '#ef4444',
      cursor: 'pointer', fontSize: 18, lineHeight: 1, padding: '0 4px', flexShrink: 0,
    } as React.CSSProperties,
    section: { marginBottom: 32 } as React.CSSProperties,
    addBtn: {
      background: 'transparent', border: '1px dashed #334155', borderRadius: 8,
      color: '#64748b', cursor: 'pointer', padding: '7px 16px', fontSize: 13,
      width: '100%', marginTop: 4,
    } as React.CSSProperties,
    label: { fontSize: 12, color: '#64748b', display: 'block', marginBottom: 4 } as React.CSSProperties,
  }

  return (
    <div style={{ minHeight: '100vh', background: '#0f172a', color: '#e2e8f0', fontFamily: 'system-ui, sans-serif' }}>

      {/* Header */}
      <div style={{ background: '#1e293b', borderBottom: '1px solid #334155', padding: '14px 24px', display: 'flex', alignItems: 'center', gap: 16, position: 'sticky', top: 0, zIndex: 10 }}>
        <Link href="/admin/tags" style={{ color: '#64748b', textDecoration: 'none', fontSize: 13 }}>
          ← Tags
        </Link>
        <span style={{ fontWeight: 600, fontSize: 15 }}>Settings · Màu & Combo</span>
        <div style={{ flex: 1 }} />
        {saved && !dirty && <span style={{ color: '#22c55e', fontSize: 13 }}>✓ Đã lưu</span>}
        {dirty && <span style={{ color: '#f59e0b', fontSize: 13 }}>Có thay đổi chưa lưu</span>}
        <button
          onClick={save}
          disabled={saving || !dirty}
          style={{
            background: dirty ? '#1CA6DF' : '#1e3a4c',
            color: dirty ? '#fff' : '#475569',
            border: 'none', borderRadius: 8, padding: '8px 20px',
            fontSize: 13, fontWeight: 600, cursor: dirty ? 'pointer' : 'default',
          }}
        >
          {saving ? 'Đang lưu...' : '💾 Lưu settings'}
        </button>
      </div>

      {loading ? (
        <div style={{ padding: 24, color: '#475569' }}>Đang tải...</div>
      ) : (
        <div style={{ padding: 24, maxWidth: 640 }}>

          {/* ── Colors ── */}
          <div style={S.section}>
            <p style={{ fontWeight: 600, fontSize: 14, marginBottom: 4 }}>Màu sắc</p>
            <p style={{ color: '#64748b', fontSize: 12, marginBottom: 12 }}>
              <b>Value</b> = key dùng trong tags (không dấu, không khoảng cách, ví dụ: <code style={{ color: '#94a3b8' }}>xanh-duong</code>)
            </p>

            {settings.colors.map((c, i) => (
              <div key={i} style={S.row}>
                {/* Dot preview + picker */}
                <div style={{ position: 'relative', flexShrink: 0 }}>
                  <div style={{ width: 28, height: 28, borderRadius: '50%', background: c.dot, border: '2px solid #334155', cursor: 'pointer' }} />
                  <input
                    type="color"
                    value={c.dot}
                    onChange={e => updateColor(i, 'dot', e.target.value)}
                    style={{ position: 'absolute', inset: 0, opacity: 0, cursor: 'pointer', width: '100%', height: '100%' }}
                  />
                </div>

                <div style={{ flex: 1 }}>
                  <span style={S.label}>Label (hiển thị)</span>
                  <input
                    style={S.input}
                    value={c.label}
                    placeholder="Ví dụ: Xanh lam"
                    onChange={e => updateColor(i, 'label', e.target.value)}
                  />
                </div>

                <div style={{ width: 130 }}>
                  <span style={S.label}>Value (key)</span>
                  <input
                    style={S.input}
                    value={c.value}
                    placeholder="xanh-lam"
                    onChange={e => updateColor(i, 'value', e.target.value.toLowerCase().replace(/\s+/g, '-'))}
                  />
                </div>

                <button onClick={() => removeColor(i)} style={S.del} title="Xoá">×</button>
              </div>
            ))}

            <button onClick={addColor} style={S.addBtn}>+ Thêm màu</button>
          </div>

          {/* ── Combos ── */}
          <div style={S.section}>
            <p style={{ fontWeight: 600, fontSize: 14, marginBottom: 4 }}>Combo</p>
            <p style={{ color: '#64748b', fontSize: 12, marginBottom: 12 }}>
              <b>Value</b> = key dùng trong tags (ví dụ: <code style={{ color: '#94a3b8' }}>full-design</code>)
            </p>

            {settings.combos.map((c, i) => (
              <div key={i} style={S.row}>
                <div style={{ flex: 1 }}>
                  <span style={S.label}>Label (hiển thị)</span>
                  <input
                    style={S.input}
                    value={c.label}
                    placeholder="Ví dụ: Full Design"
                    onChange={e => updateCombo(i, 'label', e.target.value)}
                  />
                </div>
                <div style={{ width: 160 }}>
                  <span style={S.label}>Value (key)</span>
                  <input
                    style={S.input}
                    value={c.value}
                    placeholder="full-design"
                    onChange={e => updateCombo(i, 'value', e.target.value.toLowerCase().replace(/\s+/g, '-'))}
                  />
                </div>
                <button onClick={() => removeCombo(i)} style={S.del} title="Xoá">×</button>
              </div>
            ))}

            <button onClick={addCombo} style={S.addBtn}>+ Thêm combo</button>
          </div>

        </div>
      )}
    </div>
  )
}
