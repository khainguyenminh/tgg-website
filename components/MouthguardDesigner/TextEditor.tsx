'use client'

import { useEffect, useState } from 'react'
import { FONT_OPTIONS, TEXT_PRESET_COLORS } from './constants'
import type { TextObjectState } from './useDesignerState'

interface TextEditorProps {
  editingText: TextObjectState | null
  onAdd: (text: { text: string; fontFamily: string; fontSize: number; fill: string; bold: boolean; italic: boolean }) => void
  onUpdate: (patch: Partial<TextObjectState>) => void
  onDelete: () => void
}

export default function TextEditor({ editingText, onAdd, onUpdate, onDelete }: TextEditorProps) {
  const [text, setText] = useState('')
  const [fontFamily, setFontFamily] = useState(FONT_OPTIONS[0])
  const [fontSize, setFontSize] = useState(36)
  const [fill, setFill] = useState('#FFFFFF')
  const [bold, setBold] = useState(false)
  const [italic, setItalic] = useState(false)

  useEffect(() => {
    if (editingText) {
      setText(editingText.text)
      setFontFamily(editingText.fontFamily)
      setFontSize(editingText.fontSize)
      setFill(editingText.fill)
      setBold(editingText.bold)
      setItalic(editingText.italic)
    }
  }, [editingText])

  const isEditing = !!editingText

  function handleField<K extends 'text' | 'fontFamily' | 'fontSize' | 'fill' | 'bold' | 'italic'>(
    key: K,
    value: string | number | boolean
  ) {
    if (key === 'text') setText(value as string)
    if (key === 'fontFamily') setFontFamily(value as string)
    if (key === 'fontSize') setFontSize(value as number)
    if (key === 'fill') setFill(value as string)
    if (key === 'bold') setBold(value as boolean)
    if (key === 'italic') setItalic(value as boolean)

    if (isEditing) {
      onUpdate({ [key]: value } as Partial<TextObjectState>)
    }
  }

  return (
    <div className="space-y-3">
      <input
        type="text"
        value={text}
        onChange={(e) => handleField('text', e.target.value)}
        placeholder="Nhập chữ... / Enter text..."
        className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-base text-white placeholder:text-[#94A3B8] outline-none focus:border-[#1CA6DF]"
      />

      <div>
        <label className="text-xs text-[#94A3B8] block mb-1">Font</label>
        <select
          value={fontFamily}
          onChange={(e) => handleField('fontFamily', e.target.value)}
          className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-base text-white outline-none focus:border-[#1CA6DF]"
        >
          {FONT_OPTIONS.map((f) => (
            <option key={f} value={f} className="bg-[#0F1F38]">
              {f}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label className="text-xs text-[#94A3B8] block mb-1">Cỡ chữ / Size: {fontSize}px</label>
        <input
          type="range"
          min={12}
          max={120}
          value={fontSize}
          onChange={(e) => handleField('fontSize', Number(e.target.value))}
          className="w-full accent-[#1CA6DF]"
        />
      </div>

      <div className="flex gap-2">
        <button
          type="button"
          onClick={() => handleField('bold', !bold)}
          className={`flex-1 rounded-lg px-3 py-2 text-sm font-bold border transition-all ${
            bold ? 'bg-[#1CA6DF] border-[#1CA6DF] text-white' : 'bg-white/5 border-white/10 text-[#94A3B8]'
          }`}
        >
          B
        </button>
        <button
          type="button"
          onClick={() => handleField('italic', !italic)}
          className={`flex-1 rounded-lg px-3 py-2 text-sm italic border transition-all ${
            italic ? 'bg-[#1CA6DF] border-[#1CA6DF] text-white' : 'bg-white/5 border-white/10 text-[#94A3B8]'
          }`}
        >
          I
        </button>
      </div>

      <div>
        <label className="text-xs text-[#94A3B8] block mb-1">Màu chữ / Text color</label>
        <div className="flex items-center gap-2 flex-wrap">
          {TEXT_PRESET_COLORS.map((hex) => (
            <button
              key={hex}
              type="button"
              onClick={() => handleField('fill', hex)}
              className={`w-6 h-6 rounded-full border-2 ${
                fill.toLowerCase() === hex.toLowerCase() ? 'border-white scale-110' : 'border-transparent'
              }`}
              style={{ backgroundColor: hex, boxShadow: '0 0 0 1px rgba(255,255,255,0.15) inset' }}
            />
          ))}
        </div>
      </div>

      {isEditing ? (
        <button
          type="button"
          onClick={onDelete}
          className="w-full text-xs text-[#D72638] hover:bg-[#D72638]/10 border border-[#D72638]/30 rounded-lg px-3 py-2 transition-all"
        >
          Xóa chữ này / Delete this text
        </button>
      ) : (
        <button
          type="button"
          disabled={!text.trim()}
          onClick={() => {
            onAdd({ text, fontFamily, fontSize, fill, bold, italic })
            setText('')
          }}
          className="w-full bg-[#1CA6DF] hover:bg-[#1590C2] disabled:opacity-40 disabled:cursor-not-allowed text-white font-bold text-sm rounded-lg px-4 py-2.5 transition-all leading-tight"
        >
          <span className="block">Thêm vào thiết kế</span>
          <span className="block text-xs font-normal opacity-80">Add to Design</span>
        </button>
      )}
    </div>
  )
}
