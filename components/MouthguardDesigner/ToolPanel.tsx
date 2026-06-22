'use client'

import { useState } from 'react'
import ColorPicker from './ColorPicker'
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

function Section({ icon, titleVi, titleEn, children }: { icon: string; titleVi: string; titleEn: string; children: React.ReactNode }) {
  return (
    <div className="bg-[#0F1F38] border border-white/10 rounded-xl p-4">
      <h3 className="text-sm font-bold text-white mb-3 flex items-center gap-2">
        <span>{icon}</span>
        {titleVi} <span className="text-[#94A3B8] font-normal text-xs">/ {titleEn}</span>
      </h3>
      {children}
    </div>
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

  return (
    <div className="space-y-4 w-full lg:w-[280px] flex-shrink-0">
      <Section icon="🎨" titleVi="Màu nền" titleEn="Background Color">
        <ColorPicker colors={colors} value={state.backgroundColor} onChange={onBackgroundColor} />
      </Section>

      <Section icon="🖼️" titleVi="Hình ảnh" titleEn="Image">
        <ImageUploader count={state.images.length} onUpload={onUploadImage} />

        {state.images.length > 0 && (
          <div className="mt-3 flex flex-wrap gap-2">
            {[...state.images]
              .sort((a, b) => state.layerOrder.indexOf(a.id) - state.layerOrder.indexOf(b.id))
              .map((img) => (
                <div
                  key={img.id}
                  className="relative cursor-grab active:cursor-grabbing"
                  draggable
                  onDragStart={() => setDraggedId(img.id)}
                  onDragEnd={() => {
                    setDraggedId(null)
                    setDragOverId(null)
                  }}
                  onDragOver={(e) => {
                    e.preventDefault()
                    setDragOverId(img.id)
                  }}
                  onDrop={(e) => {
                    e.preventDefault()
                    if (draggedId) onReorderLayer(draggedId, img.id)
                    setDraggedId(null)
                    setDragOverId(null)
                  }}
                >
                  <button
                    type="button"
                    onClick={() => onSelectImage(img.id)}
                    className={`w-12 h-12 rounded-lg overflow-hidden border-2 transition-all ${
                      state.selectedId === img.id ? 'border-[#1CA6DF]' : 'border-white/10'
                    } ${dragOverId === img.id && draggedId !== img.id ? 'ring-2 ring-[#1CA6DF]' : ''} ${
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
                    className="absolute -top-1.5 -right-1.5 w-5 h-5 rounded-full bg-[#D72638] text-white text-xs flex items-center justify-center leading-none"
                  >
                    ×
                  </button>
                </div>
              ))}
          </div>
        )}

        {selectedImage && (
          <div className="mt-4 pt-4 border-t border-white/10 space-y-3">
            <div>
              <label className="text-xs text-[#94A3B8] block mb-1">
                Phóng to / thu nhỏ <span className="opacity-70">(Zoom)</span>
              </label>
              <input
                type="range"
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
                className="w-full accent-[#1CA6DF]"
              />
            </div>

            <div>
              <label className="text-xs text-[#94A3B8] block mb-1">
                Xoay / Rotate: {Math.round(selectedImage.rotation)}°
              </label>
              <input
                type="range"
                min={-180}
                max={180}
                value={selectedImage.rotation}
                onChange={(e) => onImageRotate(selectedImage.id, Number(e.target.value))}
                className="w-full accent-[#1CA6DF]"
              />
            </div>

            <div className="flex gap-2">
              <button
                type="button"
                onClick={() => onImageCenter(selectedImage.id)}
                className="flex-1 bg-white/5 hover:bg-white/10 border border-white/10 text-white text-xs font-semibold rounded-lg px-3 py-2 transition-all"
              >
                Về giữa / Center
              </button>
              <button
                type="button"
                onClick={() => onImageCover(selectedImage.id)}
                className="flex-1 bg-white/5 hover:bg-white/10 border border-white/10 text-white text-xs font-semibold rounded-lg px-3 py-2 transition-all"
              >
                Tràn màn hình / Cover
              </button>
            </div>
          </div>
        )}
      </Section>

      <Section icon="✏️" titleVi={selectedText ? 'Sửa chữ' : 'Chữ'} titleEn={selectedText ? 'Edit Text' : 'Add Text'}>
        <TextEditor
          editingText={selectedText}
          onAdd={onAddText}
          onUpdate={(patch) => selectedText && onUpdateText(selectedText.id, patch)}
          onDelete={() => selectedText && onDeleteText(selectedText.id)}
        />
      </Section>

      {hasLayerSelection && (
        <Section icon="📚" titleVi="Thứ tự lớp" titleEn="Layer Order">
          <div className="flex gap-2">
            <button
              type="button"
              onClick={() => state.selectedId && onBringToFront(state.selectedId)}
              className="flex-1 bg-white/5 hover:bg-white/10 border border-white/10 text-white text-xs font-semibold rounded-lg px-3 py-2 transition-all"
            >
              Lên trước cùng
            </button>
            <button
              type="button"
              onClick={() => state.selectedId && onSendToBack(state.selectedId)}
              className="flex-1 bg-white/5 hover:bg-white/10 border border-white/10 text-white text-xs font-semibold rounded-lg px-3 py-2 transition-all"
            >
              Xuống dưới cùng
            </button>
          </div>
        </Section>
      )}
    </div>
  )
}
