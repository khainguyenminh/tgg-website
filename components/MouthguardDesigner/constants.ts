export type ProductLine = 'PRO' | 'LIGHT'

export interface ColorSwatch {
  name: string
  nameEn: string
  hex: string
}

export const PRO_COLORS: ColorSwatch[] = [
  { name: 'Đen', nameEn: 'Black', hex: '#111111' },
  { name: 'Trắng', nameEn: 'White', hex: '#FFFFFF' },
  { name: 'Đỏ', nameEn: 'Red', hex: '#D72638' },
  { name: 'Xanh dương', nameEn: 'Blue', hex: '#1CA6DF' },
  { name: 'Navy', nameEn: 'Navy', hex: '#0A1628' },
  { name: 'Xanh lá', nameEn: 'Green', hex: '#2D9E4B' },
  { name: 'Vàng', nameEn: 'Yellow', hex: '#F5C800' },
  { name: 'Cam', nameEn: 'Orange', hex: '#F47820' },
  { name: 'Hồng', nameEn: 'Pink', hex: '#E91E8C' },
  { name: 'Tím', nameEn: 'Purple', hex: '#7B2FBE' },
  { name: 'Vàng đồng', nameEn: 'Gold', hex: '#C9A84C' },
  { name: 'Bạc', nameEn: 'Silver', hex: '#A8A9AD' },
]

export const LIGHT_COLORS: ColorSwatch[] = [
  { name: 'Trong suốt', nameEn: 'Clear', hex: '#FFFFFF' },
]

export const FONT_OPTIONS = ['Be Vietnam Pro', 'Arial', 'Impact', 'Barlow Condensed']

export const TEXT_PRESET_COLORS = [
  '#FFFFFF',
  '#111111',
  '#D72638',
  '#C9A84C',
  '#0A1628',
  '#1CA6DF',
  '#2D9E4B',
  '#E91E8C',
]

export const TEMPLATE_SRC = '/images/mouthguard-template.png'
export const TEMPLATE_ASPECT = 483 / 3247

export const DISPLAY_WIDTH = 900
export const EXPORT_PIXEL_RATIO = 3

export const DEFAULT_BACKGROUND: Record<ProductLine, string> = {
  PRO: '#FFFFFF',
  LIGHT: '#FFFFFF',
}

export const OUTLINE_COLOR = 'rgba(255,255,255,0.85)'
export const OUTLINE_SCALE = 1.018

export const MAX_IMAGES = 4
