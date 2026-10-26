// Gói và giá: một nguồn duy nhất cho trang chủ, /products và form đặt hàng
export type LineKey = 'light' | 'pro'

export type Tier = {
  id: 'base' | 'custom' | 'full'
  name: string
  short: string // một dòng cho bảng giá gọn
  includes: string[] // chỉ những gì gói này thêm so với gói trước
  light: { id: string; price: string }
  pro: { id: string; price: string }
}

export const TIERS: Tier[] = [
  {
    id: 'base',
    name: 'Base',
    short: 'Trơn, không in',
    includes: ['Màu trơn: LIGHT trong suốt, PRO chọn 1 trong 16 màu EVA', 'Không in chữ hay hình'],
    light: { id: 'base', price: '1.400.000đ' },
    pro: { id: 'base-pro', price: '1.800.000đ' },
  },
  {
    id: 'custom',
    name: 'Custom Text',
    short: 'Thêm tên, số, logo',
    includes: ['Thêm tên, số, logo không giới hạn', 'TGG lên bản thiết kế miễn phí', 'Xem bản thiết kế 2D trước khi sản xuất'],
    light: { id: 'custom', price: '1.500.000đ' },
    pro: { id: 'custom-pro', price: '1.900.000đ' },
  },
  {
    id: 'full',
    name: 'Fully Design',
    short: 'Thiết kế hoàn toàn theo ý',
    includes: ['Cá nhân hoá hoàn toàn: hình vẽ, artwork tuỳ ý', 'Hiệu ứng đặc biệt (tráng gương, đính đá…)', 'Xem bản thiết kế 2D trước khi sản xuất'],
    light: { id: 'full', price: '1.600.000đ' },
    pro: { id: 'full-pro', price: '2.000.000đ' },
  },
]

export const PRICE_FROM: Record<LineKey, string> = {
  light: TIERS[0].light.price,
  pro: TIERS[0].pro.price,
}

// Gói nào cũng có
export const INCLUDED_ALWAYS = ['Scan 3D miễn phí', 'Làm riêng theo khuôn răng', 'Sản xuất 2–3 ngày làm việc', 'Ship miễn phí toàn quốc']
