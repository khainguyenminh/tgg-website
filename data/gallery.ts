export interface ProductGroup {
  id: number
  images: number[]
  color?: string   // màu chủ đạo
  combo?: 'base' | 'custom-text' | 'full-design'
}

// ⚠️ Tags (color + combo) là placeholder — hãy tự điền lại theo hình thực tế của bạn
// color: 'do' | 'xanh-duong' | 'xanh-la' | 'den' | 'trang' | 'vang' | 'hong' | 'tim' | 'cam' | 'trong-suot'
// combo: 'base' | 'custom-text' | 'full-design'

export const productGroups: ProductGroup[] = [
  { id:  1, images: [3, 4, 5],           color: 'do',         combo: 'full-design' },
  { id:  2, images: [6, 7, 8],           color: 'xanh-duong', combo: 'full-design' },
  { id:  3, images: [9, 10, 11],         color: 'xanh-la',    combo: 'full-design' },
  { id:  4, images: [12, 13, 14, 15],    color: 'den',        combo: 'full-design' },
  { id:  5, images: [16, 17, 18],        color: 'trang',      combo: 'custom-text' },
  { id:  6, images: [19, 20, 21],        color: 'vang',       combo: 'full-design' },
  { id:  7, images: [22, 23, 24],        color: 'hong',       combo: 'full-design' },
  { id:  8, images: [25, 26, 27],        color: 'tim',        combo: 'custom-text' },
  { id:  9, images: [28, 29, 30],        color: 'cam',        combo: 'full-design' },
  { id: 10, images: [31, 32, 33],        color: 'xanh-duong', combo: 'full-design' },
  { id: 11, images: [34, 35, 36],        color: 'do',         combo: 'custom-text' },
  { id: 12, images: [37, 38, 39],        color: 'den',        combo: 'full-design' },
  { id: 13, images: [40, 41, 42],        color: 'xanh-la',    combo: 'custom-text' },
  { id: 14, images: [43, 44, 45],        color: 'trang',      combo: 'full-design' },
  { id: 15, images: [46, 47, 48],        color: 'hong',       combo: 'base'        },
  { id: 16, images: [49, 50, 51],        color: 'cam',        combo: 'custom-text' },
  { id: 17, images: [52, 53, 54],        color: 'tim',        combo: 'full-design' },
  { id: 18, images: [55, 56, 57],        color: 'vang',       combo: 'custom-text' },
  { id: 19, images: [58, 59, 60],        color: 'do',         combo: 'full-design' },
  { id: 20, images: [61, 62],            color: 'xanh-duong', combo: 'base'        },
  { id: 21, images: [63, 64, 65, 66],    color: 'den',        combo: 'full-design' },
  { id: 22, images: [67, 68, 69],        color: 'xanh-la',    combo: 'full-design' },
  { id: 23, images: [70, 71, 72],        color: 'hong',       combo: 'custom-text' },
  { id: 24, images: [73, 74, 75],        color: 'trang',      combo: 'base'        },
  { id: 25, images: [76, 77, 78],        color: 'cam',        combo: 'full-design' },
  { id: 26, images: [79, 80, 81],        color: 'do',         combo: 'custom-text' },
  { id: 27, images: [82, 83, 84],        color: 'tim',        combo: 'full-design' },
  { id: 28, images: [85, 86, 87],        color: 'vang',       combo: 'full-design' },
  { id: 29, images: [88, 89, 90],        color: 'xanh-duong', combo: 'custom-text' },
  { id: 30, images: [91, 92, 93],        color: 'den',        combo: 'base'        },
  { id: 31, images: [94, 95, 96],        color: 'do',         combo: 'full-design' },
  { id: 32, images: [97, 98, 99],        color: 'xanh-la',    combo: 'full-design' },
  { id: 33, images: [100, 101, 102],     color: 'hong',       combo: 'full-design' },
  { id: 34, images: [103, 104, 105],     color: 'cam',        combo: 'custom-text' },
  { id: 35, images: [106, 107, 108],     color: 'trang',      combo: 'full-design' },
  { id: 36, images: [109, 110, 111],     color: 'tim',        combo: 'base'        },
  { id: 37, images: [112, 113, 114],     color: 'xanh-duong', combo: 'full-design' },
  { id: 38, images: [115, 116, 117],     color: 'do',         combo: 'custom-text' },
  { id: 39, images: [118, 119, 120],     color: 'vang',       combo: 'full-design' },
  { id: 40, images: [121, 122, 123],     color: 'den',        combo: 'full-design' },
  { id: 41, images: [124, 125, 126],     color: 'hong',       combo: 'base'        },
  { id: 42, images: [127, 128, 129],     color: 'xanh-la',    combo: 'custom-text' },
  { id: 43, images: [130, 131, 132],     color: 'cam',        combo: 'full-design' },
  { id: 44, images: [133, 134, 135],     color: 'trang',      combo: 'custom-text' },
  { id: 45, images: [136, 137, 138],     color: 'xanh-duong', combo: 'full-design' },
  { id: 46, images: [139, 140, 141],     color: 'tim',        combo: 'full-design' },
  { id: 47, images: [142, 143, 144],     color: 'do',         combo: 'base'        },
  { id: 48, images: [145, 146, 147],     color: 'vang',       combo: 'custom-text' },
  { id: 49, images: [148, 149, 150],     color: 'hong',       combo: 'full-design' },
  { id: 50, images: [151, 152, 153],     color: 'den',        combo: 'full-design' },
  { id: 51, images: [154, 155, 156],     color: 'xanh-la',    combo: 'full-design' },
  { id: 52, images: [157, 158, 159],     color: 'cam',        combo: 'custom-text' },
  { id: 53, images: [160, 161, 162],     color: 'xanh-duong', combo: 'full-design' },
  { id: 54, images: [163, 164, 165],     color: 'trang',      combo: 'base'        },
  { id: 55, images: [166, 167, 168],     color: 'do',         combo: 'full-design' },
]
