'use client'

import type { ColorSwatch } from './constants'

interface ColorPickerProps {
  colors: ColorSwatch[]
  value: string
  onChange: (hex: string) => void
}

export default function ColorPicker({ colors, value, onChange }: ColorPickerProps) {
  return (
    <div>
      <div className="flex flex-wrap gap-2.5">
        {colors.map((c) => (
          <button
            key={c.hex}
            type="button"
            title={`${c.name} / ${c.nameEn}`}
            onClick={() => onChange(c.hex)}
            className={`w-8 h-8 rounded-full border-2 transition-all ${
              value.toLowerCase() === c.hex.toLowerCase() ? 'border-white scale-110' : 'border-transparent'
            }`}
            style={{ backgroundColor: c.hex, boxShadow: '0 0 0 1px rgba(255,255,255,0.15) inset' }}
          />
        ))}
      </div>
    </div>
  )
}
