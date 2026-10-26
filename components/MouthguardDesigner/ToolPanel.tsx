'use client'

import { useRef, useState } from 'react'
import ColorPicker from './ColorPicker'
import { CloseIcon } from '../ring/icons'
import ImageUploader from './ImageUploader'
import TextEditor from './TextEditor'
import { LIGHT_COLORS, PRO_COLORS } from './constants'
import type { DesignerState, TextObjectState } from './useDesignerState'

interface ToolPanelProps {
  state: DesignerState
  onBackgroundColor: (hex: string) => void
  onUploadImage: (src: string, width: number, height: number) => void
  onSelectImage: (id: string) => void
  onRemoveImage: (id: string) => void
  onImageResize: (id: string, width: number, height: number) => void
  onImageRotate: (id: string, rotation: number) => void
  onImageCenter: (id: string) => void
  onImageCover: (id: string) => void
  onReorderLayer: (draggedId: string, targetId: string) => void
  onAddText: (text: { text: string; fontFamily: string; fontSize: number; fill: string; bold: boolean; italic: boolean }) => void
  onUpdateText: (id: string, patch: Partial<TextObjectState>) => void
  onDeleteText: (id: string) => void
  onBringToFront: (id: string) => void
  onSendToBack: (id: string) => void
}

// Mỗi nhóm công cụ là một đoạn trên nền đen, ngăn bằng dây 3px, không đóng hộp
function Section({ titleVi, titleEn, children }: { titleVi: string; titleEn: string; children: React.ReactNode }) {
  return (
    <section className="border-t-[3px] border-white/10 py-5 first:border-arena-ink">
      <h3 className="placard mb-4 text-lg text-arena-ink">
        {titleVi} <span className="text-sm normal-case text-arena-mute">/ {titleEn}</span>
      </h3>
      {children}
    </section>
  )
}

export default function ToolPanel({
  state,
  onBackgroundColor,
  onUploadImage,
  onSelectImage,
  onRemoveImage,
  onImageResize,
  onImageRotate,
  onImageCenter,
  onImageCover,
  onReorderLayer,
  onAddText,
  onUpdateText,
  onDeleteText,
  onBringToFront,
  onSendToBack,
}: ToolPanelProps) {
  const colors = state.productLine === 'PRO' ? PRO_COLORS : LIGHT_COLORS
  const selectedText = state.textObjects.find((t) => t.id === state.selectedId) ?? null
  const selectedImage = state.images.find((img) => img.id === state.selectedId) ?? null
  const hasLayerSelection = state.selectedId !== null
  const [draggedId, setDraggedId] = useState<string | null>(null)
  const [dragOverId, setDragOverId] = useState<string | null>(null)
  const thumbRefs = useRef<Record<string, HTMLDivElement | null>>({})
  const dragStateRef = useRef<{
    pointerId: number
    startX: number
    startY: number
    draggingId: string
    isDragging: boolean
  } | null>(null)

  const DRAG_THRESHOLD_PX = 6

  function handleThumbPointerDown(e: React.PointerEvent<HTMLDivElement>, id: string) {
    dragStateRef.current = {
      pointerId: e.pointerId,
      startX: e.clientX,
      startY: e.clientY,
      draggingId: id,
      isDragging: false,
    }
    try {
      e.currentTarget.setPointerCapture(e.pointerId)
    } catch {
      // pointer may not be active (e.g. synthetic events) — drag still works via document-level move/up
    }
  }

  function handleThumbPointerMove(e: React.PointerEvent<HTMLDivElement>) {
    const drag = dragStateRef.current
    if (!drag || e.pointerId !== drag.pointerId) return

    if (!drag.isDragging) {
      const dx = e.clientX - drag.startX
      const dy = e.clientY - drag.startY
      if (Math.hypot(dx, dy) < DRAG_THRESHOLD_PX) return
      drag.isDragging = true
      setDraggedId(drag.draggingId)
    }

    e.preventDefault()
    let hoveredId: string | null = null
    for (const [id, el] of Object.entries(thumbRefs.current)) {
      if (!el || id === drag.draggingId) continue
      const rect = el.getBoundingClientRect()
      if (e.clientX >= rect.left && e.clientX <= rect.right && e.clientY >= rect.top && e.clientY <= rect.bottom) {
        hoveredId = id
        break
      }
    }
    setDragOverId((prev) => (prev === hoveredId ? prev : hoveredId))
  }

  function endThumbDrag(e: React.PointerEvent<HTMLDivElement>, commit: boolean) {
    const drag = dragStateRef.current
    if (!drag || e.pointerId !== drag.pointerId) return
    try {
      e.currentTarget.releasePointerCapture(e.pointerId)
    } catch {
      // capture may already be released by the browser
    }
    if (commit && drag.isDragging && dragOverId && dragOverId !== drag.draggingId) {
      onReorderLayer(drag.draggingId, dragOverId)
    }
    dragStateRef.current = null
    setDraggedId(null)
    setDragOverId(null)
  }

  return (
    <div className="w-full flex-shrink-0 lg:w-[320px]">
      <Section titleVi="Màu nền" titleEn="Background color">
        <ColorPicker colors={colors} value={state.backgroundColor} onChange={onBackgroundColor} />
      </Section>

      <Section titleVi="Hình ảnh" titleEn="Image">
        <ImageUploader count={state.images.length} onUpload={onUploadImage} />

        {state.images.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-3">
            {[...state.images]
              .sort((a, b) => state.layerOrder.indexOf(a.id) - state.layerOrder.indexOf(b.id))
              .map((img) => (
                <div
                  key={img.id}
                  ref={(el) => {
                    thumbRefs.current[img.id] = el
                  }}
                  className="relative cursor-grab active:cursor-grabbing"
                  style={{ touchAction: 'none' }}
                  onPointerDown={(e) => handleThumbPointerDown(e, img.id)}
                  onPointerMove={handleThumbPointerMove}
                  onPointerUp={(e) => endThumbDrag(e, true)}
                  onPointerCancel={(e) => endThumbDrag(e, false)}
                >
                  <button
                    type="button"
                    onClick={() => onSelectImage(img.id)}
                    aria-label="Chọn ảnh / Select image"
                    aria-pressed={state.selectedId === img.id}
                    className={`block h-14 w-14 overflow-hidden rounded-[6px] transition-opacity ${
                      state.selectedId === img.id ? 'outline outline-[3px] outline-offset-2 outline-corner' : ''
                    } ${dragOverId === img.id && draggedId !== img.id ? 'outline outline-[3px] outline-offset-2 outline-arena-ink' : ''} ${
                      draggedId === img.id ? 'opacity-40' : ''
                    }`}
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={img.src} alt="" className="w-full h-full object-cover bg-white pointer-events-none" />
                  </button>
                  <button
                    type="button"
                    onClick={() => onRemoveImage(img.id)}
                    title="Xóa ảnh / Remove"
                    aria-label="Xóa ảnh / Remove image"
                    className="absolute -right-4 -top-4 flex h-11 w-11 items-center justify-center"
                  >
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-arena-ink text-arena">
                      <CloseIcon className="h-4 w-4" />
                    </span>
                  </button>
                </div>
              ))}
          </div>
        )}

        {selectedImage && (
          <div className="mt-5 space-y-4 border-t-[3px] border-white/10 pt-5">
            <div>
              <label htmlFor="designer-zoom" className="field-label text-arena-mute">
                Phóng to / thu nhỏ <span className="normal-case">(Zoom)</span>
              </label>
              <input
                type="range"
                id="designer-zoom"
                min={10}
                max={300}
                value={Math.round((selectedImage.width / selectedImage.naturalWidth) * 100)}
                onChange={(e) => {
                  const scalePercent = Number(e.target.value) / 100
                  onImageResize(
                    selectedImage.id,
                    selectedImage.naturalWidth * scalePercent,
                    selectedImage.naturalHeight * scalePercent
                  )
                }}
                className="w-full accent-corner"
              />
            </div>

            <div>
              <label htmlFor="designer-rotate" className="field-label text-arena-mute">
                Xoay / Rotate: <span className="tabular">{Math.round(selectedImage.rotation)}°</span>
              </label>
              <input
                type="range"
                id="designer-rotate"
                min={-180}
                max={180}
                value={selectedImage.rotation}
                onChange={(e) => onImageRotate(selectedImage.id, Number(e.target.value))}
                className="w-full accent-corner"
              />
            </div>

            <div className="flex gap-2">
              <button
                type="button"
                onClick={() => onImageCenter(selectedImage.id)}
                className="seg flex-1 !normal-case"
              >
                Về giữa / Center
              </button>
              <button
                type="button"
                onClick={() => onImageCover(selectedImage.id)}
                className="seg flex-1 !normal-case"
              >
                Tràn màn hình / Cover
              </button>
            </div>
          </div>
        )}
      </Section>

      <Section titleVi={selectedText ? 'Sửa chữ' : 'Chữ'} titleEn={selectedText ? 'Edit text' : 'Add text'}>
        <TextEditor
          editingText={selectedText}
          onAdd={onAddText}
          onUpdate={(patch) => selectedText && onUpdateText(selectedText.id, patch)}
          onDelete={() => selectedText && onDeleteText(selectedText.id)}
        />
      </Section>

      {hasLayerSelection && (
        <Section titleVi="Thứ tự lớp" titleEn="Layer order">
          <div className="flex gap-2">
            <button
              type="button"
              onClick={() => state.selectedId && onBringToFront(state.selectedId)}
              className="seg flex-1 !normal-case"
            >
              Lên trước cùng
            </button>
            <button
              type="button"
              onClick={() => state.selectedId && onSendToBack(state.selectedId)}
              className="seg flex-1 !normal-case"
            >
              Xuống dưới cùng
            </button>
          </div>
        </Section>
      )}
    </div>
  )
}
