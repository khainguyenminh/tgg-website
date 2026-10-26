// Mặt cắt thật: vẽ đúng số lớp EVA quanh một chiếc răng, không vẽ số liệu lực
export default function CrossSection({ layers, tone = 'canvas' }: { layers: 2 | 3; tone?: 'canvas' | 'arena' }) {
  const ink = tone === 'canvas' ? '#0D0D0D' : '#F2F4F5'
  const mute = tone === 'canvas' ? '#3E4852' : '#A9B4BE'
  const tooth = tone === 'canvas' ? '#C3CAD0' : '#2A3138'
  const thick = layers === 3 ? 7 : 4.5
  const offsets = layers === 3 ? [7, 15, 23] : [5.5, 11]
  const colors = layers === 3 ? ['#9FB3C0', '#5E7F94', '#1CA6DF'] : ['#B9C8D2', '#8FA6B5']
  const names = layers === 3 ? ['Lớp trong', 'Lớp giữa', 'Lớp ngoài'] : ['Lớp trong', 'Lớp ngoài']
  const layerPath = (o: number) => {
    const x0 = 70 - o, x1 = 130 + o, top = 52 - o, r = 26 + o
    return `M ${x0} 196 V ${top + r} A ${r} ${r} 0 0 1 ${x0 + r} ${top} H ${x1 - r} A ${r} ${r} 0 0 1 ${x1} ${top + r} V 196`
  }
  return (
    <svg viewBox="0 0 280 200" className="h-auto w-full max-w-[19rem]" role="img" aria-label={`Mặt cắt ${layers} lớp EVA bọc quanh răng`}>
      <rect x="70" y="52" width="60" height="160" rx="26" fill={tooth} />
      {offsets.map((o, i) => (
        <path key={o} d={layerPath(o)} fill="none" stroke={colors[i]} strokeWidth={thick} strokeLinecap="round" />
      ))}
      {offsets.map((o, i) => {
        const y = 82 + i * 30
        const x = 130 + o + thick / 2
        return (
          <g key={`l-${o}`}>
            <path d={`M ${x + 3} ${y} H 196`} stroke={ink} strokeWidth="1.5" />
            <text x="202" y={y + 5} fontSize="14" fontWeight="700" fill={ink} letterSpacing="0.3">
              {names[i]}
            </text>
          </g>
        )
      })}
      <text x="100" y="140" fontSize="12" fill={mute} textAnchor="middle">răng</text>
    </svg>
  )
}
