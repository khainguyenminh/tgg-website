'use client'

import { useState, useMemo, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

// ── Types ─────────────────────────────────────────────────────────────────────

interface CloudinaryImage {
  public_id: string
  secure_url: string
  tags: string[]
}

interface ProductGroup {
  groupId: string
  images: CloudinaryImage[]
  color: string | null
  combo: string | null
}

// ── Filter config ─────────────────────────────────────────────────────────────

const COLOR_FILTERS = [
  { key: 'do',          label: 'Đỏ',         dot: '#ef4444' },
  { key: 'xanh-duong',  label: 'Xanh dương', dot: '#3b82f6' },
  { key: 'xanh-la',     label: 'Xanh lá',    dot: '#22c55e' },
  { key: 'den',         label: 'Đen',         dot: '#1f2937' },
  { key: 'trang',       label: 'Trắng',       dot: '#f1f5f9' },
  { key: 'vang',        label: 'Vàng',        dot: '#eab308' },
  { key: 'hong',        label: 'Hồng',        dot: '#ec4899' },
  { key: 'tim',         label: 'Tím',         dot: '#a855f7' },
  { key: 'cam',         label: 'Cam',         dot: '#f97316' },
  { key: 'trong-suot',  label: 'Trong suốt',  dot: '#94a3b8' },
]

const COMBO_FILTERS = [
  { key: 'base',        label: 'Base'               },
  { key: 'custom-text', label: 'Custom Text & Logo' },
  { key: 'full-design', label: 'Full Design'        },
]

const COLOR_KEYS = new Set(COLOR_FILTERS.map(f => f.key))
const COMBO_KEYS = new Set(COMBO_FILTERS.map(f => f.key))

// ── Parse Cloudinary resources → ProductGroup[] ───────────────────────────────

function buildGroups(resources: CloudinaryImage[]): ProductGroup[] {
  const map = new Map<string, CloudinaryImage[]>()

  for (const img of resources) {
    const groupTag = img.tags.find(t => t.startsWith('group-'))
    const groupId  = groupTag ? groupTag.replace('group-', '') : 'ungrouped'
    if (!map.has(groupId)) map.set(groupId, [])
    map.get(groupId)!.push(img)
  }

  return Array.from(map.entries())
    .sort(([a], [b]) => Number(a) - Number(b))
    .map(([groupId, images]) => {
      const tags  = images[0]?.tags ?? []
      const color = tags.find(t => COLOR_KEYS.has(t)) ?? null
      const combo = tags.find(t => COMBO_KEYS.has(t)) ?? null
      return { groupId, images, color, combo }
    })
}

// ── Lightbox state ────────────────────────────────────────────────────────────

interface LightboxState {
  group: ProductGroup
  index: number
}

// ── Page ──────────────────────────────────────────────────────────────────────

export default function GalleryPage() {
  const [groups, setGroups]               = useState<ProductGroup[]>([])
  const [loading, setLoading]             = useState(true)
  const [error, setError]                 = useState(false)
  const [thumbSelected, setThumbSelected] = useState<Record<string, number>>({})
  const [activeColor, setActiveColor]     = useState<string | null>(null)
  const [activeCombo, setActiveCombo]     = useState<string | null>(null)
  const [lightbox, setLightbox]           = useState<LightboxState | null>(null)

  // ── Fetch từ Cloudinary API ───────────────────────────────────────────────
  useEffect(() => {
    fetch('/api/gallery')
      .then(r => r.json())
      .then(data => {
        if (Array.isArray(data)) {
          setGroups(buildGroups(data))
        } else {
          setError(true)
        }
      })
      .catch(() => setError(true))
      .finally(() => setLoading(false))
  }, [])

  // ── Filter logic ──────────────────────────────────────────────────────────
  const filtered = useMemo(() => {
    return groups.filter(g => {
      if (activeColor && g.color !== activeColor) return false
      if (activeCombo && g.combo !== activeCombo) return false
      return true
    })
  }, [groups, activeColor, activeCombo])

  // ── Lightbox helpers ──────────────────────────────────────────────────────
  const openLightbox  = (group: ProductGroup, index: number) => setLightbox({ group, index })
  const closeLightbox = () => setLightbox(null)
  const lightboxPrev  = () => {
    if (!lightbox) return
    setLightbox({ ...lightbox, index: (lightbox.index - 1 + lightbox.group.images.length) % lightbox.group.images.length })
  }
  const lightboxNext  = () => {
    if (!lightbox) return
    setLightbox({ ...lightbox, index: (lightbox.index + 1) % lightbox.group.images.length })
  }

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-[#0A1628] pt-28 pb-20 px-6">
        <div className="max-w-7xl mx-auto">

          {/* Header */}
          <div className="mb-12">
            <Link href="/" className="inline-flex items-center gap-1.5 text-[#94A3B8] hover:text-white text-sm mb-6 transition-colors">
              ← Về trang chủ
            </Link>
            <h1 className="font-heading font-black text-5xl md:text-6xl text-white mt-2 mb-2">
              Gallery
            </h1>
            <p className="text-[#94A3B8]">Custom-fit · Thiết kế độc nhất · Ảnh thực tế</p>
          </div>

          {/* ── Filters ── */}
          <div className="mb-10 space-y-4">

            {/* Combo */}
            <div className="flex flex-wrap gap-2 items-center">
              <span className="text-[#94A3B8] text-xs uppercase tracking-widest mr-1">Combo</span>
              <button
                onClick={() => setActiveCombo(null)}
                className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all border ${
                  activeCombo === null
                    ? 'bg-[#1CA6DF] border-[#1CA6DF] text-white'
                    : 'border-[#1E3350] text-[#94A3B8] hover:border-[#1CA6DF]/50 hover:text-white'
                }`}
              >
                Tất cả
              </button>
              {COMBO_FILTERS.map(f => (
                <button
                  key={f.key}
                  onClick={() => setActiveCombo(activeCombo === f.key ? null : f.key)}
                  className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all border ${
                    activeCombo === f.key
                      ? 'bg-[#1CA6DF] border-[#1CA6DF] text-white'
                      : 'border-[#1E3350] text-[#94A3B8] hover:border-[#1CA6DF]/50 hover:text-white'
                  }`}
                >
                  {f.label}
                </button>
              ))}
            </div>

            {/* Color */}
            <div className="flex flex-wrap gap-2 items-center">
              <span className="text-[#94A3B8] text-xs uppercase tracking-widest mr-1">Màu</span>
              <button
                onClick={() => setActiveColor(null)}
                className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all border ${
                  activeColor === null
                    ? 'bg-[#1CA6DF] border-[#1CA6DF] text-white'
                    : 'border-[#1E3350] text-[#94A3B8] hover:border-[#1CA6DF]/50 hover:text-white'
                }`}
              >
                Tất cả
              </button>
              {COLOR_FILTERS.map(f => (
                <button
                  key={f.key}
                  onClick={() => setActiveColor(activeColor === f.key ? null : f.key)}
                  className={`inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-sm font-medium transition-all border ${
                    activeColor === f.key
                      ? 'bg-[#1CA6DF] border-[#1CA6DF] text-white'
                      : 'border-[#1E3350] text-[#94A3B8] hover:border-[#1CA6DF]/50 hover:text-white'
                  }`}
                >
                  <span
                    className="w-2.5 h-2.5 rounded-full border border-white/20 flex-shrink-0"
                    style={{ backgroundColor: f.dot }}
                  />
                  {f.label}
                </button>
              ))}
            </div>

          </div>

          {/* Result count */}
          {(activeColor || activeCombo) && !loading && (
            <p className="text-[#94A3B8] text-sm mb-6">
              {filtered.length} thiết kế phù hợp{' '}
              <button
                onClick={() => { setActiveColor(null); setActiveCombo(null) }}
                className="text-[#1CA6DF] hover:underline ml-1"
              >
                Xoá bộ lọc
              </button>
            </p>
          )}

          {/* ── Loading skeleton ── */}
          {loading && (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {Array.from({ length: 15 }).map((_, i) => (
                <div key={i} className="bg-[#152035] border border-[#1E3350] rounded-xl overflow-hidden animate-pulse">
                  <div className="aspect-square bg-[#1E3350]" />
                  <div className="p-1.5 flex gap-1">
                    {[0, 1, 2].map(j => (
                      <div key={j} className="flex-1 aspect-square rounded bg-[#1E3350]" />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* ── Error ── */}
          {error && (
            <div className="text-center py-24 text-[#94A3B8]">
              Không tải được gallery. Vui lòng thử lại sau.
            </div>
          )}

          {/* ── Grid ── */}
          {!loading && !error && (
            filtered.length === 0 ? (
              <div className="text-center py-24 text-[#94A3B8]">
                Không có thiết kế phù hợp với bộ lọc này.
              </div>
            ) : (
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                {filtered.map(group => {
                  const activeIndex = thumbSelected[group.groupId] ?? 0
                  const activeImage = group.images[activeIndex]

                  return (
                    <div
                      key={group.groupId}
                      className="bg-[#152035] border border-[#1E3350] rounded-xl overflow-hidden hover:border-[#1CA6DF]/50 transition-all group"
                    >
                      <button
                        onClick={() => openLightbox(group, activeIndex)}
                        className="relative w-full aspect-square block"
                      >
                        <Image
                          src={activeImage.secure_url}
                          alt={`TGG design ${group.groupId}`}
                          fill
                          className="object-cover transition-transform duration-300 group-hover:scale-105"
                          sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, (max-width: 1024px) 25vw, 20vw"
                        />
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all flex items-center justify-center">
                          <svg className="w-6 h-6 text-white opacity-0 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                          </svg>
                        </div>
                      </button>

                      {group.images.length > 1 && (
                        <div className="flex gap-1 p-1.5">
                          {group.images.map((img, i) => (
                            <button
                              key={img.public_id}
                              onClick={() => setThumbSelected(prev => ({ ...prev, [group.groupId]: i }))}
                              className={`relative flex-1 aspect-square rounded overflow-hidden transition-all ${
                                i === activeIndex
                                  ? 'ring-1 ring-[#1CA6DF] opacity-100'
                                  : 'opacity-40 hover:opacity-80'
                              }`}
                            >
                              <Image src={img.secure_url} alt="" fill className="object-cover" sizes="40px" />
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  )
                })}
              </div>
            )
          )}

          {/* CTA */}
          <div className="text-center mt-20">
            <p className="text-[#94A3B8] mb-5">Thích thiết kế nào? Tạo bản của riêng bạn.</p>
            <a
              href="https://zalo.me/0975580253"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#1CA6DF] hover:bg-[#1590C2] text-white font-bold px-10 py-4 rounded-xl transition-all"
            >
              Tư vấn thiết kế qua Zalo →
            </a>
          </div>

        </div>
      </main>

      {/* ── Lightbox ── */}
      {lightbox && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex flex-col items-center justify-center p-4"
          onClick={closeLightbox}
        >
          <button
            onClick={closeLightbox}
            className="absolute top-5 right-5 text-white/60 hover:text-white text-3xl font-light z-10"
          >
            ×
          </button>

          <div
            className="relative w-full max-w-2xl aspect-square"
            onClick={e => e.stopPropagation()}
          >
            <Image
              src={lightbox.group.images[lightbox.index].secure_url}
              alt="TGG design"
              fill
              className="object-contain"
              sizes="100vw"
            />
            {lightbox.group.images.length > 1 && (
              <>
                <button
                  onClick={lightboxPrev}
                  className="absolute left-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/60 hover:bg-black/90 text-white flex items-center justify-center transition-all"
                >
                  ‹
                </button>
                <button
                  onClick={lightboxNext}
                  className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/60 hover:bg-black/90 text-white flex items-center justify-center transition-all"
                >
                  ›
                </button>
              </>
            )}
          </div>

          {lightbox.group.images.length > 1 && (
            <div className="flex gap-2 mt-4" onClick={e => e.stopPropagation()}>
              {lightbox.group.images.map((img, i) => (
                <button
                  key={img.public_id}
                  onClick={() => setLightbox({ ...lightbox, index: i })}
                  className={`relative w-14 h-14 rounded-lg overflow-hidden transition-all ${
                    i === lightbox.index
                      ? 'ring-2 ring-[#1CA6DF] opacity-100'
                      : 'opacity-40 hover:opacity-80'
                  }`}
                >
                  <Image src={img.secure_url} alt="" fill className="object-cover" sizes="56px" />
                </button>
              ))}
            </div>
          )}

          <p className="text-white/40 text-sm mt-3" onClick={e => e.stopPropagation()}>
            {lightbox.index + 1} / {lightbox.group.images.length}
          </p>
        </div>
      )}

      <Footer />
    </>
  )
}
