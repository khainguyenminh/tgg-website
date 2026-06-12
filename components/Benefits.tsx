const benefits = [
    {
      icon: '🎯',
      title: 'Vừa khít hoàn toàn',
      desc: 'Đúc theo khuôn hàm của bạn bằng scan 3D — không phải size S/M/L chung chung. Không bị lỏng, không bị rơi khi va chạm.',
    },
    {
      icon: '🛡️',
      title: 'Bảo vệ tối đa',
      desc: 'Ôm sát từng đường răng, phân tán lực va đập đều hơn so với mouthguard thông thường. Đặc biệt quan trọng trong combat sports.',
    },
    {
      icon: '💨',
      title: 'Thoải mái khi tập',
      desc: 'Không cản trở hơi thở, không cần cắn chặt để giữ. Tập trung vào kỹ thuật — không phải lo mouthguard tuột.',
    },
    {
      icon: '✨',
      title: 'Thiết kế riêng của bạn',
      desc: 'Tên, số, màu sắc, logo — tất cả theo ý bạn. Từ trong suốt tối giản đến full custom đầy màu sắc.',
    },
  ]
  
  export default function Benefits() {
    return (
      <section className="bg-[#0A1628] py-20 px-6">
        <div className="max-w-6xl mx-auto">
  
          {/* Header */}
          <div className="text-center mb-14">
            <span className="text-xs font-bold text-[#1CA6DF] uppercase tracking-widest">Tại sao custom-fit?</span>
            <h2 className="font-heading font-black text-4xl md:text-5xl text-white mt-3 mb-4">
              Khác biệt bạn cảm nhận được
            </h2>
            <p className="text-[#94A3B8] max-w-lg mx-auto text-sm">
              Mouthguard mua sẵn bảo vệ răng. Mouthguard custom-fit bảo vệ bạn.
            </p>
          </div>
  
          {/* Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((item) => (
              <div
                key={item.title}
                className="bg-[#152035] border border-[#1E3350] rounded-2xl p-6 hover:border-[#1CA6DF]/40 transition-colors"
              >
                <div className="text-3xl mb-4">{item.icon}</div>
                <h3 className="font-heading font-bold text-white text-lg mb-3">{item.title}</h3>
                <p className="text-[#94A3B8] text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
  
          {/* Stats bar */}
          <div className="mt-14 grid grid-cols-3 gap-6 border-t border-[#1E3350] pt-10">
            {[
              { number: '174+', label: 'Thiết kế đã hoàn thành' },
              { number: '2–3', label: 'Ngày sản xuất' },
              { number: '100%', label: 'Custom theo hàm thật' },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="font-stats font-semibold text-4xl text-[#1CA6DF] mb-1">{stat.number}</div>
                <div className="text-[#94A3B8] text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
  
        </div>
      </section>
    )
  }