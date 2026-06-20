'use client'

import { useEffect, useState, useMemo, useRef, useCallback } from 'react'
import Image from 'next/image'
import Link from 'next/link'

// ── Types ─────────────────────────────────────────────────────────────────────

interface GalleryImage { public_id: string; secure_url: string; tags: string[] }
interface ColorItem    { value: string; label: string; dot: string }
interface ComboItem    { value: string; label: string }
interface Settings     { colors: ColorItem[]; combos: ComboItem[] }

interface GroupState {
  groupId:    string
  images:     GalleryImage[]
  color:      string
  combo:      string
  dirtyTag:   boolean
  dirtyGroup: boolean
}

// Ảnh vừa upload, chờ assign group
interface PendingImage {
  num:          number
  url:          string
  originalName: string
  targetGroup:  string   // '' = tạo nhóm mới
}

// ── Parse groups ──────────────────────────────────────────────────────────────

function parseGroups(
  resources:  GalleryImage[],
  colorKeys:  Set<string>,
  comboKeys:  Set<string>,
): GroupState[] {
  const map = new Map<string, GalleryImage[]>()
  for (const img of resources) {
    const groupTag = img.tags.find(t => t.startsWith('group-'))
    const groupId  = groupTag ? groupTag.replace('group-', '') : 'ungrouped'
    if (!map.has(groupId)) map.set(groupId, [])
    map.get(groupId)!.push(img)
  }
  return Array.from(map.entries())
    .sort(([a], [b]) => Number(a) - Number(b))
    .map(([groupId, images]) => {
      const t = images[0]?.tags ?? []
      return {
        groupId,
        images,
        color:      t.find(x => colorKeys.has(x)) ?? '',
        combo:      t.find(x => comboKeys.has(x)) ?? '',
        dirtyTag:   false,
        dirtyGroup: false,
      }
    })
}

// ── Page ──────────────────────────────────────────────────────────────────────

export default function AdminTagsPage() {
  const [groups,   setGroups]   = useState<GroupState[]>([])
  const [settings, setSettings] = useState<Settings>({ colors: [], combos: [] })
  const [loading,  setLoading]  = useState(true)
  const [saving,   setSaving]   = useState(false)
  const [saved,    setSaved]    = useState(false)
  const [filter,   setFilter]   = useState<'all' | 'untagged' | 'dirty'>('all')
  const [activeThumb, setActiveThumb] = useState<Record<string, number>>({})

  // ── Upload state ──────────────────────────────────────────────────────────
  const [showUpload,    setShowUpload]    = useState(false)
  const [dropActive,    setDropActive]    = useState(false)
  const [pendingImages, setPendingImages] = useState<PendingImage[]>([])
  const [uploading,     setUploading]     = useState(false)
  const [assigning,     setAssigning]     = useState(false)
  const fileInputRef = useRef<HTMLInputElement>(null)

  // ── Delete mode state ────────────────────────────────────────────────────
  const [deleteMode, setDeleteMode] = useState(false)

  // ── Drag-to-group state ───────────────────────────────────────────────────
  const dragging  = useRef<{ img: GalleryImage; fromGroupId: string } | null>(null)
  const [dragOverId, setDragOverId] = useState<string | null>(null)
  const [dragOverThumb, setDragOverThumb] = useState<{ groupId: string; index: number } | null>(null)

  // ── Load ──────────────────────────────────────────────────────────────────
  useEffect(() => {
    Promise.all([
      fetch('/api/gallery').then(r => r.json()),
      fetch('/api/admin/settings').then(r => r.json()),
    ]).then(([resources, sett]: [GalleryImage[], Settings]) => {
      const colorKeys = new Set(sett.colors.map(c => c.value))
      const comboKeys = new Set(sett.combos.map(c => c.value))
      setSettings(sett)
      setGroups(parseGroups(resources, colorKeys, comboKeys))
      setLoading(false)
    })
  }, [])

  const colorKeys = useMemo(() => new Set(settings.colors.map(c => c.value)), [settings])
  const comboKeys = useMemo(() => new Set(settings.combos.map(c => c.value)), [settings])

  // ── Tag update ────────────────────────────────────────────────────────────
  function updateTag(groupId: string, field: 'color' | 'combo', value: string) {
    setGroups(prev => prev.map(g =>
      g.groupId === groupId ? { ...g, [field]: value, dirtyTag: true } : g
    ))
    setSaved(false)
  }

  // ── Drag-to-group handlers ────────────────────────────────────────────────
  function onDragStart(img: GalleryImage, fromGroupId: string) {
    dragging.current = { img, fromGroupId }
  }
  function onDragOver(e: React.DragEvent, groupId: string) {
    e.preventDefault()
    if (dragging.current?.fromGroupId !== groupId) setDragOverId(groupId)
  }
  function onDragLeave() { setDragOverId(null) }
  function onDrop(e: React.DragEvent, targetGroupId: string) {
    e.preventDefault()
    setDragOverId(null)
    const d = dragging.current
    if (!d || d.fromGroupId === targetGroupId) return
    setGroups(prev => {
      const moved = prev
        .map(g => {
          if (g.groupId === d.fromGroupId)
            return { ...g, images: g.images.filter(i => i.public_id !== d.img.public_id), dirtyGroup: true }
          if (g.groupId === targetGroupId)
            return { ...g, images: [...g.images, d.img], dirtyGroup: true }
          return g
        })
        // Nhóm trống sau khi kéo thì tự xoá
        .filter(g => g.images.length > 0)

      // Đổi tên lại STT các nhóm liên tục (1, 2, 3, ...) theo thứ tự hiện tại
      return moved.map((g, idx) => {
        const newId = String(idx + 1)
        if (newId === g.groupId) return g
        return {
          ...g,
          groupId: newId,
          dirtyGroup: true,
          images: g.images.map(img => ({
            ...img,
            tags: img.tags.map(t => t.startsWith('group-') ? `group-${newId}` : t),
          })),
        }
      })
    })
    dragging.current = null
    setSaved(false)
  }
  function onDragEnd() { dragging.current = null; setDragOverId(null); setDragOverThumb(null) }

  // ── Reorder ảnh trong cùng 1 nhóm (kéo thumbnail) ───────────────────────────
  function onThumbDragOver(e: React.DragEvent, groupId: string, index: number) {
    if (dragging.current?.fromGroupId !== groupId) return
    e.preventDefault()
    e.stopPropagation()
    setDragOverThumb({ groupId, index })
  }
  function onThumbDrop(e: React.DragEvent, groupId: string, index: number) {
    const d = dragging.current
    if (!d || d.fromGroupId !== groupId) return
    e.preventDefault()
    e.stopPropagation()
    setGroups(prev => prev.map(g => {
      if (g.groupId !== groupId) return g
      const imgs    = [...g.images]
      const fromIdx = imgs.findIndex(im => im.public_id === d.img.public_id)
      if (fromIdx === -1 || fromIdx === index) return g
      imgs.splice(fromIdx, 1)
      imgs.splice(fromIdx < index ? index - 1 : index, 0, d.img)
      return { ...g, images: imgs, dirtyGroup: true }
    }))
    dragging.current = null
    setDragOverThumb(null)
    setSaved(false)
  }

  // ── Upload: drop files into upload zone ───────────────────────────────────
  const handleUploadDrop = useCallback(async (files: FileList | null) => {
    if (!files || !files.length) return
    setUploading(true)
    const form = new FormData()
    Array.from(files).forEach(f => form.append('files', f))
    try {
      const res  = await fetch('/api/admin/upload-image', { method: 'POST', body: form })
      const data = await res.json()
      if (!data.ok) { alert('Upload thất bại: ' + data.error); return }
      // Thêm vào pending, mặc định targetGroup = '' (tạo nhóm mới)
      setPendingImages(prev => [
        ...prev,
        ...data.saved.map((s: { num: number; url: string; originalName: string }) => ({
          ...s,
          targetGroup: '',
        })),
      ])
    } finally {
      setUploading(false)
    }
  }, [])

  // ── Upload: assign pending images to groups ───────────────────────────────
  async function assignPending() {
    if (!pendingImages.length) return
    setAssigning(true)

    // Tính nextGroupId
    const maxId = Math.max(...groups.map(g => Number(g.groupId) || 0), 0)
    let nextId  = maxId + 1

    // Group pending images theo targetGroup
    const newGroupMap = new Map<string, PendingImage[]>()
    for (const p of pendingImages) {
      const key = p.targetGroup || `__new_${nextId++}`
      if (!newGroupMap.has(key)) newGroupMap.set(key, [])
      newGroupMap.get(key)!.push(p)
    }

    // Build new groups state
    setGroups(prev => {
      let updated = [...prev]
      for (const [key, imgs] of newGroupMap.entries()) {
        const newImgs: GalleryImage[] = imgs.map(p => ({
          public_id: `tgg-${p.num}`,
          secure_url: p.url,
          tags: ['tgg-gallery', `group-${key}`],
        }))
        if (key.startsWith('__new_')) {
          // Tạo nhóm mới
          const realId = key.replace('__new_', '')
          updated.push({
            groupId: realId, images: newImgs,
            color: '', combo: '', dirtyTag: false, dirtyGroup: true,
          })
        } else {
          // Thêm vào nhóm có sẵn
          updated = updated.map(g =>
            g.groupId === key
              ? { ...g, images: [...g.images, ...newImgs], dirtyGroup: true }
              : g
          )
        }
      }
      return updated.sort((a, b) => Number(a.groupId) - Number(b.groupId))
    })

    setPendingImages([])
    setShowUpload(false)
    setSaved(false)
    setAssigning(false)
  }

  // ── Delete handlers ──────────────────────────────────────────────────────

  // Xoá 1 ảnh khỏi nhóm (client state only, cần Save All để persist; file giữ nguyên)
  function removeImageFromGroup(groupId: string, publicId: string) {
    setGroups(prev => prev.map(g =>
      g.groupId === groupId
        ? { ...g, images: g.images.filter(i => i.public_id !== publicId), dirtyGroup: true }
        : g
    ))
    setSaved(false)
  }

  // Xoá cả nhóm + file vật lý (immediate API call)
  async function deleteGroup(groupId: string, imageCount: number) {
    if (!confirm(
      `Xoá nhóm #${groupId} (${imageCount} ảnh)?\n\n` +
      `• Nhóm sẽ bị xoá khỏi dữ liệu\n` +
      `• Tất cả ${imageCount} file ảnh sẽ bị xoá khỏi ổ đĩa\n\n` +
      `Không khôi phục được. Tiếp tục?`
    )) return
    try {
      const res  = await fetch('/api/admin/delete', {
        method:  'POST',
        headers: { 'Content-Type': 'application/json' },
        body:    JSON.stringify({ action: 'delete-group', groupId }),
      })
      const data = await res.json()
      if (!data.ok) { alert('Xoá thất bại: ' + (data.error ?? '')); return }
      setGroups(prev => prev.filter(g => g.groupId !== groupId))
      setSaved(false)
    } catch {
      alert('Xoá thất bại, thử lại.')
    }
  }

  // ── Save all ──────────────────────────────────────────────────────────────
  async function saveAll() {
    setSaving(true)
    const tagPayload:   Record<string, { color: string; combo: string }> = {}
    const groupPayload: Record<string, number[]> = {}
    for (const g of groups) {
      tagPayload[g.groupId]   = { color: g.color, combo: g.combo }
      groupPayload[g.groupId] = g.images.map(img => Number(img.public_id.replace('tgg-', '')))
    }
    try {
      await Promise.all([
        fetch('/api/admin/save-tags',   { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(tagPayload)   }),
        fetch('/api/admin/save-groups', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(groupPayload) }),
      ])
      setGroups(prev => prev.map(g => ({ ...g, dirtyTag: false, dirtyGroup: false })))
      setSaved(true)
    } catch {
      alert('Lưu thất bại, thử lại.')
    } finally {
      setSaving(false)
    }
  }

  // ── Computed ──────────────────────────────────────────────────────────────
  const untaggedCount = groups.filter(g => !g.color || !g.combo).length
  const dirtyCount    = groups.filter(g => g.dirtyTag || g.dirtyGroup).length

  const filtered = useMemo(() => {
    if (filter === 'untagged') return groups.filter(g => !g.color || !g.combo)
    if (filter === 'dirty')    return groups.filter(g => g.dirtyTag || g.dirtyGroup)
    return groups
  }, [groups, filter])

  const colorOptions = [{ value: '', label: '— chưa chọn —', dot: 'transparent' }, ...settings.colors]
  const comboOptions = [{ value: '', label: '— chưa chọn —' }, ...settings.combos]
  const dotFor = (val: string) => colorOptions.find(o => o.value === val)?.dot ?? 'transparent'

  // ── Render ────────────────────────────────────────────────────────────────
  return (
    <div style={{ minHeight: '100vh', background: '#0f172a', color: '#e2e8f0', fontFamily: 'system-ui, sans-serif' }}>

      {/* ── Header ── */}
      <div style={{
        background: '#1e293b', borderBottom: '1px solid #334155',
        padding: '14px 24px', display: 'flex', alignItems: 'center', gap: 12,
        position: 'sticky', top: 0, zIndex: 20,
      }}>
        <span style={{ fontWeight: 600, fontSize: 15 }}>TGG Gallery · Tag Manager</span>
        <span style={{ color: '#64748b', fontSize: 13 }}>
          {groups.length} nhóm ·{' '}
          {untaggedCount > 0
            ? <span style={{ color: '#f59e0b' }}>{untaggedCount} chưa tag</span>
            : <span style={{ color: '#22c55e' }}>tất cả đã tag ✓</span>}
        </span>
        <div style={{ flex: 1 }} />

        {/* Delete mode toggle */}
        <button
          onClick={() => setDeleteMode(v => !v)}
          style={{
            background:   deleteMode ? '#ef444422' : 'transparent',
            color:        deleteMode ? '#ef4444'   : '#64748b',
            border:       `1px solid ${deleteMode ? '#ef444455' : '#334155'}`,
            borderRadius: 8, padding: '7px 14px', fontSize: 13, cursor: 'pointer',
          }}
        >
          🗑 {deleteMode ? 'Tắt xoá' : 'Xoá mode'}
        </button>

        {/* Upload button */}
        <button
          onClick={() => setShowUpload(v => !v)}
          style={{
            background: showUpload ? '#1CA6DF22' : 'transparent',
            color:      showUpload ? '#1CA6DF'   : '#94a3b8',
            border:     `1px solid ${showUpload ? '#1CA6DF55' : '#334155'}`,
            borderRadius: 8, padding: '7px 14px', fontSize: 13, cursor: 'pointer',
          }}
        >
          📤 Upload ảnh {pendingImages.length > 0 && `(${pendingImages.length})`}
        </button>

        <Link
          href="/admin/settings"
          style={{
            color: '#64748b', textDecoration: 'none', fontSize: 13,
            border: '1px solid #334155', borderRadius: 8, padding: '7px 14px',
          }}
        >
          ⚙ Settings
        </Link>

        {saved && !dirtyCount && <span style={{ color: '#22c55e', fontSize: 13 }}>✓ Đã lưu</span>}
        {dirtyCount > 0 && <span style={{ color: '#f59e0b', fontSize: 13 }}>{dirtyCount} chưa lưu</span>}

        <button
          onClick={saveAll}
          disabled={saving || dirtyCount === 0}
          style={{
            background: dirtyCount > 0 ? '#1CA6DF' : '#1e3a4c',
            color:      dirtyCount > 0 ? '#fff'    : '#475569',
            border: 'none', borderRadius: 8, padding: '8px 20px',
            fontSize: 13, fontWeight: 600, cursor: dirtyCount > 0 ? 'pointer' : 'default',
          }}
        >
          {saving ? 'Đang lưu...' : '💾 Lưu tất cả'}
        </button>
      </div>

      {/* ── Upload Panel ── */}
      {showUpload && (
        <div style={{
          background: '#0f172a', borderBottom: '1px solid #334155',
          padding: '20px 24px',
        }}>
          <p style={{ fontWeight: 600, fontSize: 14, marginBottom: 12 }}>
            Upload ảnh mới — tự động đánh số tiếp
          </p>

          {/* Drop zone */}
          <div
            onDragOver={e => { e.preventDefault(); setDropActive(true) }}
            onDragLeave={() => setDropActive(false)}
            onDrop={e => {
              e.preventDefault()
              setDropActive(false)
              handleUploadDrop(e.dataTransfer.files)
            }}
            onClick={() => fileInputRef.current?.click()}
            style={{
              border:       `2px dashed ${dropActive ? '#1CA6DF' : '#334155'}`,
              borderRadius: 10,
              background:   dropActive ? '#1CA6DF11' : '#1e293b',
              padding:      '28px 20px',
              textAlign:    'center',
              cursor:       'pointer',
              transition:   'all .15s',
              marginBottom: 16,
            }}
          >
            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              multiple
              style={{ display: 'none' }}
              onChange={e => handleUploadDrop(e.target.files)}
            />
            {uploading ? (
              <p style={{ color: '#1CA6DF', margin: 0 }}>Đang upload...</p>
            ) : (
              <>
                <p style={{ color: '#94a3b8', margin: '0 0 4px', fontSize: 14 }}>
                  Kéo thả ảnh vào đây, hoặc click để chọn file
                </p>
                <p style={{ color: '#475569', margin: 0, fontSize: 12 }}>
                  JPG, PNG, WebP · Nhiều file cùng lúc được
                </p>
              </>
            )}
          </div>

          {/* Pending images */}
          {pendingImages.length > 0 && (
            <>
              <p style={{ fontSize: 13, color: '#94a3b8', marginBottom: 10 }}>
                {pendingImages.length} ảnh vừa upload — chọn nhóm rồi bấm Xác nhận:
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10, marginBottom: 14 }}>
                {pendingImages.map((p, i) => (
                  <div
                    key={p.num}
                    style={{
                      background: '#1e293b', border: '1px solid #334155',
                      borderRadius: 8, overflow: 'hidden', width: 140,
                    }}
                  >
                    {/* Preview */}
                    <div style={{ position: 'relative', aspectRatio: '1', background: '#0f172a' }}>
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={p.url} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                      <div style={{
                        position: 'absolute', top: 4, left: 4,
                        background: '#0f172acc', borderRadius: 4,
                        padding: '1px 6px', fontSize: 11, color: '#94a3b8',
                      }}>
                        #{p.num}
                      </div>
                      {/* Remove */}
                      <button
                        onClick={() => setPendingImages(prev => prev.filter((_, idx) => idx !== i))}
                        style={{
                          position: 'absolute', top: 4, right: 4,
                          background: '#ef444488', border: 'none', borderRadius: 4,
                          color: '#fff', cursor: 'pointer', width: 20, height: 20,
                          fontSize: 13, display: 'flex', alignItems: 'center', justifyContent: 'center',
                          padding: 0,
                        }}
                      >
                        ×
                      </button>
                    </div>

                    {/* Group selector */}
                    <div style={{ padding: '6px 6px 8px' }}>
                      <p style={{ fontSize: 10, color: '#64748b', margin: '0 0 4px' }}>
                        {p.originalName}
                      </p>
                      <select
                        value={p.targetGroup}
                        onChange={e => setPendingImages(prev =>
                          prev.map((item, idx) => idx === i ? { ...item, targetGroup: e.target.value } : item)
                        )}
                        style={{
                          width: '100%', fontSize: 11,
                          background: '#0f172a', color: p.targetGroup ? '#e2e8f0' : '#64748b',
                          border: '1px solid #334155', borderRadius: 5,
                          padding: '4px 5px', cursor: 'pointer', outline: 'none',
                        }}
                      >
                        <option value="">+ Tạo nhóm mới</option>
                        <optgroup label="Thêm vào nhóm có sẵn">
                          {groups.map(g => (
                            <option key={g.groupId} value={g.groupId}>
                              Nhóm #{g.groupId} ({g.images.length} ảnh)
                            </option>
                          ))}
                        </optgroup>
                      </select>
                    </div>
                  </div>
                ))}
              </div>

              <div style={{ display: 'flex', gap: 10 }}>
                <button
                  onClick={assignPending}
                  disabled={assigning}
                  style={{
                    background: '#1CA6DF', color: '#fff',
                    border: 'none', borderRadius: 8, padding: '8px 20px',
                    fontSize: 13, fontWeight: 600, cursor: 'pointer',
                  }}
                >
                  {assigning ? 'Đang xử lý...' : `✓ Xác nhận (${pendingImages.length} ảnh)`}
                </button>
                <button
                  onClick={() => setPendingImages([])}
                  style={{
                    background: 'transparent', color: '#ef4444',
                    border: '1px solid #ef444444', borderRadius: 8, padding: '8px 16px',
                    fontSize: 13, cursor: 'pointer',
                  }}
                >
                  Huỷ tất cả
                </button>
              </div>
            </>
          )}
        </div>
      )}

      {/* ── Filter bar ── */}
      <div style={{ padding: '12px 24px', display: 'flex', gap: 8, borderBottom: '1px solid #1e293b', flexWrap: 'wrap' }}>
        {([
          ['all',      `Tất cả (${groups.length})`],
          ['untagged', `Chưa tag (${untaggedCount})`],
          ['dirty',    `Thay đổi (${dirtyCount})`],
        ] as const).map(([key, label]) => (
          <button
            key={key}
            onClick={() => setFilter(key)}
            style={{
              background:   filter === key ? '#1CA6DF22' : 'transparent',
              color:        filter === key ? '#1CA6DF'   : '#64748b',
              border:       `1px solid ${filter === key ? '#1CA6DF55' : '#334155'}`,
              borderRadius: 20, padding: '5px 14px', fontSize: 13, cursor: 'pointer',
            }}
          >
            {label}
          </button>
        ))}
        <span style={{ marginLeft: 'auto', fontSize: 12, alignSelf: 'center', color: deleteMode ? '#ef4444' : '#475569' }}>
          {deleteMode
            ? '🗑 Xoá mode: bấm × trên thumbnail để xoá ảnh · bấm "Xoá nhóm" để xoá cả nhóm + file'
            : '💡 Kéo thumbnail sang group khác để di chuyển ảnh'}
        </span>
      </div>

      {/* ── Grid ── */}
      <div style={{ padding: 24 }}>
        {loading ? (
          <p style={{ color: '#475569' }}>Đang tải...</p>
        ) : (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(165px, 1fr))', gap: 12 }}>
            {filtered.map(group => {
              const thumbIdx  = activeThumb[group.groupId] ?? 0
              const activeImg = group.images[thumbIdx] ?? group.images[0]
              const isUntagged   = !group.color || !group.combo
              const isDragTarget = dragOverId === group.groupId

              return (
                <div
                  key={group.groupId}
                  onDragOver={e => onDragOver(e, group.groupId)}
                  onDragLeave={onDragLeave}
                  onDrop={e => onDrop(e, group.groupId)}
                  style={{
                    background:   '#1e293b',
                    border:       `1px solid ${
                      isDragTarget       ? '#1CA6DF'
                      : group.dirtyGroup ? '#a78bfa44'
                      : group.dirtyTag   ? '#f59e0b44'
                      : isUntagged       ? '#ef444433'
                      : '#334155'
                    }`,
                    borderRadius: 10, overflow: 'hidden',
                    transition:   'border-color .15s, box-shadow .15s',
                    boxShadow:    isDragTarget ? '0 0 0 2px #1CA6DF44' : 'none',
                  }}
                >
                  {/* Main image */}
                  {activeImg && (
                    <div
                      draggable={!deleteMode}
                      onDragStart={() => !deleteMode && onDragStart(activeImg, group.groupId)}
                      onDragEnd={onDragEnd}
                      style={{
                        position: 'relative', aspectRatio: '1', background: '#0f172a',
                        cursor: deleteMode ? 'default' : 'grab',
                      }}
                    >
                      <Image
                        src={activeImg.secure_url}
                        alt={`Group ${group.groupId}`}
                        fill style={{ objectFit: 'cover' }}
                        sizes="200px" unoptimized
                      />
                      <div style={{
                        position: 'absolute', top: 5, left: 5,
                        background: '#0f172acc', borderRadius: 5,
                        padding: '2px 7px', fontSize: 11, color: '#94a3b8',
                      }}>
                        #{group.groupId}
                        <span style={{ color: '#475569', marginLeft: 4 }}>({group.images.length})</span>
                      </div>
                      {(group.dirtyTag || group.dirtyGroup) && (
                        <div style={{
                          position: 'absolute', top: 5, right: 5,
                          background: group.dirtyGroup ? '#a78bfa' : '#f59e0b',
                          borderRadius: 5, padding: '2px 6px', fontSize: 10, color: '#000', fontWeight: 700,
                        }}>
                          {group.dirtyGroup ? 'moved' : '*'}
                        </div>
                      )}
                    </div>
                  )}

                  {/* Thumbnail strip */}
                  <div style={{ display: 'flex', gap: 3, padding: '4px 4px 0', flexWrap: 'wrap' }}>
                    {group.images.map((img, i) => (
                      <button
                        key={img.public_id}
                        draggable={!deleteMode}
                        onDragStart={() => !deleteMode && onDragStart(img, group.groupId)}
                        onDragEnd={onDragEnd}
                        onDragOver={e => !deleteMode && onThumbDragOver(e, group.groupId, i)}
                        onDrop={e => !deleteMode && onThumbDrop(e, group.groupId, i)}
                        onClick={() => !deleteMode && setActiveThumb(p => ({ ...p, [group.groupId]: i }))}
                        title={deleteMode ? 'Bấm để xoá ảnh này' : 'Kéo để đổi thứ tự / sang group khác'}
                        style={{
                          width: 36, height: 36, borderRadius: 4, overflow: 'hidden',
                          border: `1px solid ${
                            deleteMode ? '#ef444466'
                            : dragOverThumb?.groupId === group.groupId && dragOverThumb.index === i ? '#22d3ee'
                            : i === thumbIdx ? '#1CA6DF' : '#334155'
                          }`,
                          padding: 0, cursor: deleteMode ? 'pointer' : 'grab',
                          position: 'relative', background: '#0f172a',
                          opacity: i === thumbIdx ? 1 : 0.5, flexShrink: 0,
                          boxShadow: dragOverThumb?.groupId === group.groupId && dragOverThumb.index === i ? '0 0 0 2px #22d3ee66' : 'none',
                        }}
                      >
                        <Image src={img.secure_url} alt="" fill style={{ objectFit: 'cover' }} sizes="36px" unoptimized />
                        {/* × overlay in delete mode */}
                        {deleteMode && (
                          <div
                            onClick={e => { e.stopPropagation(); removeImageFromGroup(group.groupId, img.public_id) }}
                            style={{
                              position: 'absolute', inset: 0,
                              background: '#ef444477',
                              display: 'flex', alignItems: 'center', justifyContent: 'center',
                              color: '#fff', fontSize: 18, fontWeight: 700,
                              borderRadius: 4,
                            }}
                          >×</div>
                        )}
                      </button>
                    ))}
                    {isDragTarget && (
                      <div style={{
                        width: 36, height: 36, borderRadius: 4,
                        border: '2px dashed #1CA6DF',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        color: '#1CA6DF', fontSize: 18, flexShrink: 0,
                      }}>+</div>
                    )}
                  </div>

                  {/* Dropdowns */}
                  <div style={{ padding: '8px 8px 10px', display: 'flex', flexDirection: 'column', gap: 5 }}>
                    {/* Color */}
                    <div style={{ position: 'relative' }}>
                      {group.color && (
                        <span style={{
                          position: 'absolute', left: 8, top: '50%', transform: 'translateY(-50%)',
                          width: 8, height: 8, borderRadius: '50%',
                          background: dotFor(group.color), border: '1px solid #475569',
                          pointerEvents: 'none', zIndex: 1,
                        }} />
                      )}
                      <select
                        value={group.color}
                        onChange={e => updateTag(group.groupId, 'color', e.target.value)}
                        style={{
                          width: '100%', fontSize: 12,
                          background: '#0f172a', color: group.color ? '#e2e8f0' : '#64748b',
                          border: `1px solid ${!group.color ? '#ef444466' : '#334155'}`,
                          borderRadius: 6, padding: group.color ? '5px 6px 5px 22px' : '5px 6px',
                          cursor: 'pointer', outline: 'none',
                        }}
                      >
                        {colorOptions.map(o => <option key={o.value} value={o.value}>{o.label}</option>)}
                      </select>
                    </div>
                    {/* Combo */}
                    <select
                      value={group.combo}
                      onChange={e => updateTag(group.groupId, 'combo', e.target.value)}
                      style={{
                        width: '100%', fontSize: 12,
                        background: '#0f172a', color: group.combo ? '#e2e8f0' : '#64748b',
                        border: `1px solid ${!group.combo ? '#ef444466' : '#334155'}`,
                        borderRadius: 6, padding: '5px 6px',
                        cursor: 'pointer', outline: 'none',
                      }}
                    >
                      {comboOptions.map(o => <option key={o.value} value={o.value}>{o.label}</option>)}
                    </select>

                    {/* Delete group button — only in delete mode */}
                    {deleteMode && (
                      <button
                        onClick={() => deleteGroup(group.groupId, group.images.length)}
                        style={{
                          width: '100%', background: '#ef444411',
                          border: '1px solid #ef444433', borderRadius: 6,
                          color: '#ef4444', fontSize: 11, cursor: 'pointer',
                          padding: '5px', marginTop: 2,
                        }}
                      >
                        🗑 Xoá nhóm + {group.images.length} file
                      </button>
                    )}
                  </div>
                </div>
              )
            })}
          </div>
        )}
      </div>
    </div>
  )
}
