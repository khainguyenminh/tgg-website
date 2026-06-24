export type ProductLine = 'PRO' | 'LIGHT'

export interface ColorSwatch {
  name: string
  nameEn: string
  hex: string
}

export const PRO_COLORS: ColorSwatch[] = [
  { name: 'Xám titan', nameEn: 'Titanium grey', hex: '#696969' },
  { name: 'Tím bão đêm', nameEn: 'Midnight storm', hex: '#1A0187' },
  { name: 'Xanh điện biển', nameEn: 'Ocean volt', hex: '#0071CD' },
  { name: 'Xanh hoàng gia', nameEn: 'Royal blue', hex: '#0032A5' },
  { name: 'Xanh ngọc lam', nameEn: 'Teal reef', hex: '#0094AF' },
  { name: 'Nâu cacao', nameEn: 'Cocoa brown', hex: '#4C2E2B' },
  { name: 'Bạc hà băng', nameEn: 'Frost mint', hex: '#CEE3EA' },
  { name: 'Đỏ mận rượu', nameEn: 'Wine berry', hex: '#6C1344' },
  { name: 'Tím huyền bí', nameEn: 'Mystic plum', hex: '#552151' },
  { name: 'Đỏ huyết long', nameEn: 'Dragon blood', hex: '#520720' },
  { name: 'Cam lửa cháy', nameEn: 'Blaze orange', hex: '#FF6C00' },
  { name: 'Vàng tia chớp', nameEn: 'Lightning yellow', hex: '#FFC000' },
  { name: 'Đỏ chiến binh', nameEn: 'Warrior red', hex: '#B91F38' },
  { name: 'Đen bóng đêm', nameEn: 'Shadow black', hex: '#000000' },
  { name: 'Xanh rừng sâu', nameEn: 'Deep forest', hex: '#00693D' },
  { name: 'Xanh lá chiến thắng', nameEn: 'Victory green', hex: '#007A22' },
]

export const LIGHT_COLORS: ColorSwatch[] = [
  { name: 'Trong suốt', nameEn: 'Clear', hex: '#FFFFFF' },
]

export const FONT_OPTIONS = [
  'Naserra',
  'Noxis',
  'Tallings',
  'Hello Farmer',
  'Longevity',
  'Pizza Hut',
  'Race Sport',
  'Sakana',
  'Tackerlen',
  'Vanily',
  'Ethnocentric',
  'Neusharp Italic',
  'Batman Forever',
  'Deneane',
]

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
