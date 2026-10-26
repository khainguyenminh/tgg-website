'use client'

import type { ColorSwatch } from './constants'

interface ColorPickerProps {
  colors: ColorSwatch[]
  value: string
  onChange: (hex: string) => void
}

// Ô màu EVA: tối thiểu 44px, vòng chọn 3px như trên sàn đổi màu
export default function ColorPicker({ colors, value, onChange }: ColorPickerProps) {
  return (
    <div className="grid grid-cols-6 gap-2" role="radiogroup" aria-label="Màu nền / Background color">
      {colors.map((c) => {
        const checked = value.toLowerCase() === c.hex.toLowerCase()
        return (
          <button
            key={c.hex}
            type="button"
            role="radio"
            aria-checked={checked}
            aria-label={`${c.name} / ${c.nameEn}`}
            title={`${c.name} / ${c.nameEn}`}
            onClick={() => onChange(c.hex)}
            className="aspect-square min-h-11 rounded-[6px]"
            style={{
              backgroundColor: c.hex,
              boxShadow: checked
                ? '0 0 0 3px #0A0C0F, 0 0 0 6px #F2F4F5'
                : 'inset 0 0 0 1px rgb(255 255 255 / 0.18)',
            }}
          />
        )
      })}
    </div>
  )
}
