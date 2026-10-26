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
        aria-label="Nội dung chữ / Text"
        className="field-dark"
      />

      <div>
        <label htmlFor="designer-font" className="field-label text-arena-mute">Font</label>
        <select
          value={fontFamily}
          onChange={(e) => handleField('fontFamily', e.target.value)}
          id="designer-font"
          className="field-dark"
        >
          {FONT_OPTIONS.map((f) => (
            <option key={f} value={f} className="bg-arena" style={{ fontFamily: f }}>
              {f}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="designer-size" className="field-label text-arena-mute">Cỡ chữ / Size: <span className="tabular">{fontSize}px</span></label>
        <input
          type="range"
          min={12}
          max={120}
          id="designer-size"
          value={fontSize}
          onChange={(e) => handleField('fontSize', Number(e.target.value))}
          className="w-full accent-corner"
        />
      </div>

      <div className="flex gap-2">
        <button
          type="button"
          onClick={() => handleField('bold', !bold)}
          aria-pressed={bold}
          aria-label="In đậm / Bold"
          className="seg flex-1 !normal-case"
        >
          B
        </button>
        <button
          type="button"
          onClick={() => handleField('italic', !italic)}
          aria-pressed={italic}
          aria-label="In nghiêng / Italic"
          className="seg flex-1 !normal-case italic"
        >
          I
        </button>
      </div>

      <div>
        <p className="field-label text-arena-mute">Màu chữ / Text color</p>
        <div className="grid grid-cols-6 gap-2" role="radiogroup" aria-label="Màu chữ / Text color">
          {TEXT_PRESET_COLORS.map((hex) => (
            <button
              key={hex}
              type="button"
              onClick={() => handleField('fill', hex)}
              role="radio"
              aria-checked={fill.toLowerCase() === hex.toLowerCase()}
              aria-label={hex}
              className="aspect-square min-h-11 rounded-[6px]"
              style={{
                backgroundColor: hex,
                boxShadow:
                  fill.toLowerCase() === hex.toLowerCase()
                    ? '0 0 0 3px #0A0C0F, 0 0 0 6px #F2F4F5'
                    : 'inset 0 0 0 1px rgb(255 255 255 / 0.18)',
              }}
            />
          ))}
        </div>
      </div>

      {isEditing ? (
        <button
          type="button"
          onClick={onDelete}
          className="seg w-full !border-alert-dark/50 !text-alert-dark hover:!border-alert-dark"
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
          className="arena-pad w-full flex-col !gap-0 !border-[3px] !border-arena-ink/30"
        >
          <span className="block">Thêm vào thiết kế</span>
          <span className="block text-sm normal-case opacity-75">Add to design</span>
        </button>
      )}
    </div>
  )
}
