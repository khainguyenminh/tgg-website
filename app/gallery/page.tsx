'use client'

import { useState, useMemo, useEffect, useRef, useCallback } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ZaloClose from '@/components/ring/ZaloClose'
import MobileCornerBar from '@/components/ring/MobileCornerBar'
import { ArrowIcon, ChevronIcon, CloseIcon, PlusIcon } from '@/components/ring/icons'

// ── Kiểu dữ liệu ─────────────────────────────────────────────────────────────

interface GalleryImage {
  public_id: string
  secure_url: string
  tags: string[]
}

interface ProductGroup {
  groupId: string
  images: GalleryImage[]
  color: string | null
  combo: string | null
}

// ── Bộ lọc ───────────────────────────────────────────────────────────────────

const COLOR_FILTERS = [
  { key: 'do',          label: 'Đỏ',         dot: '#D7263D' },
  { key: 'xanh-duong',  label: 'Xanh dương', dot: '#0071CD' },
  { key: 'xanh-la',     label: 'Xanh lá',    dot: '#007A22' },
  { key: 'den',         label: 'Đen',        dot: '#000000' },
  { key: 'trang',       label: 'Trắng',      dot: '#F2F4F5' },
  { key: 'vang',        label: 'Vàng',       dot: '#FFC000' },
  { key: 'hong',        label: 'Hồng',       dot: '#EC4899' },
  { key: 'tim',         label: 'Tím',        dot: '#552151' },
  { key: 'cam',         label: 'Cam',        dot: '#FF6C00' },
  { key: 'trong-suot',  label: 'Trong suốt', dot: 'transparent' },
]

const COMBO_FILTERS = [
  { key: 'base',        label: 'Base' },
  { key: 'custom-text', label: 'Custom Text' },
  { key: 'full-design', label: 'Fully Design' },
]

const COLOR_KEYS = new Set(COLOR_FILTERS.map((f) => f.key))
const COMBO_KEYS = new Set(COMBO_FILTERS.map((f) => f.key))
const colorLabel = (k: string | null) => COLOR_FILTERS.find((f) => f.key === k)?.label
const comboLabel = (k: string | null) => COMBO_FILTERS.find((f) => f.key === k)?.label

function buildGroups(resources: GalleryImage[]): ProductGroup[] {
  const map = new Map<string, GalleryImage[]>()
  for (const img of resources) {
    const groupTag = img.tags.find((t) => t.startsWith('group-'))
    const groupId = groupTag ? groupTag.replace('group-', '') : 'ungrouped'
    if (!map.has(groupId)) map.set(groupId, [])
    map.get(groupId)!.push(img)
  }
  return Array.from(map.entries())
    .sort(([a], [b]) => Number(a) - Number(b))
    .map(([groupId, images]) => {
      const tags = images[0]?.tags ?? []
      return {
        groupId,
        images,
        color: tags.find((t) => COLOR_KEYS.has(t)) ?? null,
        combo: tags.find((t) => COMBO_KEYS.has(t)) ?? null,
      }
    })
}

function describe(g: ProductGroup) {
  return [comboLabel(g.combo), colorLabel(g.color)].filter(Boolean).join(' · ') || 'Mouthguard TGG'
}

// ── Lightbox ─────────────────────────────────────────────────────────────────

function Lightbox({
  group,
  index,
  onIndex,
  onClose,
}: {
  group: ProductGroup
  index: number
  onIndex: (i: number) => void
  onClose: () => void
}) {
  const closeRef = useRef<HTMLButtonElement>(null)
  const count = group.images.length
  const prev = useCallback(() => onIndex((index - 1 + count) % count), [index, count, onIndex])
  const next = useCallback(() => onIndex((index + 1) % count), [index, count, onIndex])

  // Focus vào nút đóng, khoá cuộn, trả focus khi đóng
  useEffect(() => {
    const opener = document.activeElement as HTMLElement | null
    closeRef.current?.focus()
    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = prevOverflow
      opener?.focus()
    }
  }, [])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowLeft' && count > 1) prev()
      if (e.key === 'ArrowRight' && count > 1) next()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [onClose, prev, next, count])

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`Ảnh ${describe(group)}, ${index + 1} trên ${count}`}
      className="fixed inset-0 z-[60] flex flex-col bg-arena/[0.97]"
      onClick={onClose}
    >
      <div className="flex items-center justify-between px-4 py-3 md:px-8" onClick={(e) => e.stopPropagation()}>
        <p className="placard text-base text-arena-mute">
          {describe(group)} <span className="tabular ml-2 text-arena-ink">{index + 1} / {count}</span>
        </p>
        <div className="flex items-center gap-4 md:gap-6">
          <Link href="/customize" className="placard inline-flex min-h-11 items-center gap-1.5 whitespace-nowrap text-sm text-corner hover:text-arena-ink md:text-base">
            Làm một chiếc như này <ArrowIcon className="h-4 w-4 shrink-0" />
          </Link>
          <button ref={closeRef} type="button" onClick={onClose} aria-label="Đóng" className="flex h-11 w-11 items-center justify-center rounded-md text-arena-ink hover:bg-arena-lift">
            <CloseIcon className="h-6 w-6" />
          </button>
        </div>
      </div>
      <span aria-hidden="true" className="rope rope-blue rounded-none" />

      <div className="relative flex-1" onClick={(e) => e.stopPropagation()}>
        <Image src={group.images[index].secure_url} alt={`Mouthguard ${describe(group)}`} fill className="object-contain p-4" sizes="100vw" />
        {count > 1 && (
          <>
            <button type="button" onClick={prev} aria-label="Ảnh trước" className="arena-pad absolute left-3 top-1/2 !min-h-14 w-14 -translate-y-1/2 !px-0 md:left-8">
              <ChevronIcon direction="left" className="h-6 w-6" />
            </button>
            <button type="button" onClick={next} aria-label="Ảnh sau" className="arena-pad absolute right-3 top-1/2 !min-h-14 w-14 -translate-y-1/2 !px-0 md:right-8">
              <ChevronIcon className="h-6 w-6" />
            </button>
          </>
        )}
      </div>

      {count > 1 && (
        <div className="flex justify-center gap-2 px-4 pb-6 pt-3" onClick={(e) => e.stopPropagation()}>
          {group.images.map((img, i) => (
            <button
              key={img.public_id}
              type="button"
              onClick={() => onIndex(i)}
              aria-label={`Xem ảnh ${i + 1}`}
              aria-current={i === index || undefined}
              className={`relative h-14 w-14 overflow-hidden rounded-[6px] transition-opacity ${i === index ? 'outline outline-[3px] outline-offset-2 outline-corner' : 'opacity-50 hover:opacity-90'}`}
            >
              <Image src={img.secure_url} alt="" fill className="object-cover" sizes="56px" />
            </button>
          ))}
        </div>
      )}
    </div>
  )
}

// ── Trang ────────────────────────────────────────────────────────────────────

export default function GalleryPage() {
  const [groups, setGroups] = useState<ProductGroup[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  const [thumbSelected, setThumbSelected] = useState<Record<string, number>>({})
  const [activeColor, setActiveColor] = useState<string | null>(null)
  const [activeCombo, setActiveCombo] = useState<string | null>(null)
  const [lightbox, setLightbox] = useState<{ group: ProductGroup; index: number } | null>(null)

  // Chỉ setState trong callback của fetch; lần tải lại thì bật trạng thái loading trước khi gọi
  const fetchGallery = useCallback(() => {
    fetch('/api/gallery')
      .then((r) => r.json())
      .then((data) => {
        if (Array.isArray(data)) setGroups(buildGroups(data))
        else setError(true)
      })
      .catch(() => setError(true))
      .finally(() => setLoading(false))
  }, [])

  useEffect(() => {
    fetchGallery()
  }, [fetchGallery])

  const loadGallery = () => {
    setLoading(true)
    setError(false)
    fetchGallery()
  }

  const filtered = useMemo(
    () => groups.filter((g) => (!activeColor || g.color === activeColor) && (!activeCombo || g.combo === activeCombo)),
    [groups, activeColor, activeCombo],
  )
  const filtering = activeColor !== null || activeCombo !== null
  const clearFilters = () => {
    setActiveColor(null)
    setActiveCombo(null)
  }
  const onLightboxIndex = useCallback((i: number) => setLightbox((lb) => (lb ? { ...lb, index: i } : lb)), [])
  const onLightboxClose = useCallback(() => setLightbox(null), [])

  return (
    <>
      <Navbar />

      <main className="bg-arena pt-16 md:pt-[72px]">
        <header className="mx-auto max-w-[1400px] px-4 pb-8 pt-10 md:px-8 md:pt-14">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <h1 className="apron t-page text-arena-ink">Gallery.</h1>
            <p className="max-w-[30rem] text-lg leading-relaxed text-arena-mute">
              Ảnh thực tế các mouthguard đã rời lab Khai Nguyên. Lọc theo gói và màu, bấm vào ảnh để xem lớn.
            </p>
          </div>
        </header>

        {/* Thanh lọc ghim dưới menu */}
        <div className="sticky top-16 z-30 bg-arena/95 backdrop-blur-sm md:top-[72px]">
          <span aria-hidden="true" className="rope rope-white rounded-none opacity-80" />
          <div className="mx-auto max-w-[1400px] space-y-3 py-4 md:px-8">
            <div className="flex items-center gap-3 overflow-x-auto px-4 md:px-0" role="group" aria-label="Lọc theo gói">
              <span className="placard w-14 shrink-0 text-sm text-arena-mute">Gói</span>
              <button type="button" className="seg shrink-0" aria-pressed={activeCombo === null} onClick={() => setActiveCombo(null)}>
                Tất cả
              </button>
              {COMBO_FILTERS.map((f) => (
                <button
                  key={f.key}
                  type="button"
                  className="seg shrink-0"
                  aria-pressed={activeCombo === f.key}
                  onClick={() => setActiveCombo(activeCombo === f.key ? null : f.key)}
                >
                  {f.label}
                </button>
              ))}
            </div>
            <div className="flex items-center gap-3 overflow-x-auto px-4 md:px-0" role="group" aria-label="Lọc theo màu">
              <span className="placard w-14 shrink-0 text-sm text-arena-mute">Màu</span>
              <button type="button" className="seg shrink-0" aria-pressed={activeColor === null} onClick={() => setActiveColor(null)}>
                Tất cả
              </button>
              {COLOR_FILTERS.map((f) => (
                <button
                  key={f.key}
                  type="button"
                  className="seg shrink-0"
                  aria-pressed={activeColor === f.key}
                  onClick={() => setActiveColor(activeColor === f.key ? null : f.key)}
                >
                  <span
                    aria-hidden="true"
                    className="h-3 w-3 shrink-0 rounded-full"
                    style={{
                      backgroundColor: f.dot,
                      boxShadow: 'inset 0 0 0 1.5px rgb(127 127 127 / 0.6)',
                    }}
                  />
                  {f.label}
                </button>
              ))}
            </div>
          </div>
          <span aria-hidden="true" className="rope rope-blue rounded-none" />
        </div>

        <section aria-label="Ảnh mouthguard" className="mx-auto max-w-[1400px] px-4 pb-24 pt-8 md:px-8 md:pb-32">
          <div className="mb-6 flex min-h-11 flex-wrap items-center justify-between gap-4" aria-live="polite">
            {!loading && !error && (
              <p className="placard text-base text-arena-mute">
                <span className="tabular text-arena-ink">{filtered.length}</span> thiết kế
                {filtering && ' phù hợp'}
              </p>
            )}
            {filtering && (
              <button type="button" onClick={clearFilters} className="rope-link placard inline-flex min-h-11 items-center gap-2 text-base text-arena-ink">
                Xoá bộ lọc <PlusIcon className="h-4 w-4 rotate-45" />
              </button>
            )}
          </div>

          {loading && (
            <div className="grid grid-cols-2 gap-x-4 gap-y-10 sm:grid-cols-3 lg:grid-cols-4" aria-hidden="true">
              {Array.from({ length: 8 }).map((_, i) => (
                <div key={i}>
                  <div className="aspect-[4/3] rounded-[6px] bg-arena-lift motion-safe:animate-pulse" />
                  <div className="mt-3 h-4 w-2/3 rounded bg-arena-lift motion-safe:animate-pulse" />
                </div>
              ))}
            </div>
          )}

          {error && (
            <div className="py-24">
              <p className="apron t-sub text-arena-ink">Không tải được gallery.</p>
              <p className="mt-4 max-w-[30rem] text-lg text-arena-mute">Có thể do mạng chập chờn. Thử tải lại, hoặc xem ảnh qua Instagram của TGG.</p>
              <button type="button" onClick={loadGallery} className="arena-pad mt-8">
                Thử lại
              </button>
            </div>
          )}

          {!loading && !error && filtered.length === 0 && (
            <div className="py-24">
              <p className="apron t-sub text-arena-ink">Chưa có thiết kế nào khớp.</p>
              <p className="mt-4 max-w-[30rem] text-lg text-arena-mute">
                Thử bỏ bớt một bộ lọc. Màu bạn muốn chưa có ảnh ở đây? Nhắn Zalo để hỏi TGG.
              </p>
              <button type="button" onClick={clearFilters} className="arena-pad mt-8">
                Xoá bộ lọc
              </button>
            </div>
          )}

          {!loading && !error && filtered.length > 0 && (
            <ul className="grid grid-cols-2 gap-x-4 gap-y-10 sm:grid-cols-3 lg:grid-cols-4">
              {filtered.map((group, gi) => {
                const activeIndex = thumbSelected[group.groupId] ?? 0
                const activeImage = group.images[activeIndex]
                return (
                  <li key={group.groupId} className="min-w-0">
                    <figure>
                      <button
                        type="button"
                        onClick={() => setLightbox({ group, index: activeIndex })}
                        aria-label={`Xem lớn: ${describe(group)}`}
                        className="relative block aspect-[4/3] w-full overflow-hidden rounded-[6px] bg-black"
                      >
                        <Image
                          src={activeImage.secure_url}
                          alt={`Mouthguard ${describe(group)}`}
                          fill
                          loading={gi < 4 ? 'eager' : undefined}
                          className="object-cover transition-[filter] duration-300 hover:brightness-110"
                          sizes="(min-width: 1024px) 25vw, (min-width: 640px) 33vw, 50vw"
                        />
                      </button>

                      {group.images.length > 1 && (
                        <div className="mt-1 flex gap-2 overflow-x-auto p-1.5" role="group" aria-label="Chọn góc chụp">
                          {group.images.map((img, i) => (
                            <button
                              key={img.public_id}
                              type="button"
                              onClick={() => setThumbSelected((prev) => ({ ...prev, [group.groupId]: i }))}
                              aria-label={`Góc chụp ${i + 1}`}
                              aria-pressed={i === activeIndex}
                              className={`relative h-11 w-11 shrink-0 overflow-hidden rounded-[6px] transition-opacity ${
                                i === activeIndex ? 'outline outline-[3px] outline-offset-1 outline-corner' : 'opacity-50 hover:opacity-90'
                              }`}
                            >
                              <Image src={img.secure_url} alt="" fill className="object-cover" sizes="44px" />
                            </button>
                          ))}
                        </div>
                      )}

                      <figcaption className="mt-3">
                        <span className="placard block text-base text-arena-ink">{comboLabel(group.combo) ?? 'Mouthguard'}</span>
                        <span className="block text-sm text-arena-mute">{colorLabel(group.color) ?? 'Nhiều màu'}</span>
                      </figcaption>
                    </figure>
                  </li>
                )
              })}
            </ul>
          )}
        </section>

        <ZaloClose
          title="Thích thiết kế nào?"
          lede="Gửi ảnh mẫu bạn thích, TGG lên bản thiết kế của riêng bạn và gửi preview trước khi sản xuất."
          cta="Tư vấn thiết kế qua Zalo"
        >
          <Link href="/customize" className="rope-link placard inline-flex items-center gap-2 text-arena-ink">
            Tự thiết kế <ArrowIcon />
          </Link>
        </ZaloClose>
      </main>

      {lightbox && <Lightbox group={lightbox.group} index={lightbox.index} onIndex={onLightboxIndex} onClose={onLightboxClose} />}

      <Footer />
      <MobileCornerBar />
    </>
  )
}
