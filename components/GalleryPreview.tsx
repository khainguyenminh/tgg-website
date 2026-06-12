'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { productGroups } from '@/data/gallery'

const previewGroups = productGroups.slice(0, 8)

export default function GalleryPreview() {
  const [selected, setSelected] = useState<Record<number, number>>({})

  return (
    <section className="bg-[#0A1628] py-20 px-6">
      <div className="max-w-6xl mx-auto">

        <div className="text-center mb-12">
          <span className="text-xs font-bold text-[#1CA6DF] uppercase tracking-widest">Gallery</span>
          <h2 className="font-heading font-black text-4xl md:text-5xl text-white mt-3 mb-4">
            Mỗi chiếc là độc nhất
          </h2>
          <p className="text-[#94A3B8] max-w-lg mx-auto text-sm">
            {productGroups.length} thiết kế đã hoàn thành — mỗi sản phẩm chụp nhiều góc thực tế.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 mb-10">
          {previewGroups.map((group) => {
            const activeIndex = selected[group.id] ?? 0
            const activeImage = group.images[activeIndex]

            return (
              <div
                key={group.id}
                className="bg-[#152035] border border-[#1E3350] rounded-xl overflow-hidden hover:border-[#1CA6DF]/50 transition-all"
              >
                <div className="relative w-full aspect-square">
                  <Image
                    src={`/gallery/${activeImage}.jpg`}
                    alt={`TGG design ${group.id}`}
                    fill
                    className="object-cover transition-all duration-300"
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  />
                </div>

                <div className="flex gap-1 p-1.5">
                  {group.images.map((img, i) => (
                    <button
                      key={img}
                      onClick={() => setSelected((prev) => ({ ...prev, [group.id]: i }))}
                      className={`relative flex-1 aspect-square rounded overflow-hidden transition-all ${
                        i === activeIndex
                          ? 'ring-1 ring-[#1CA6DF] opacity-100'
                          : 'opacity-40 hover:opacity-80'
                      }`}
                    >
                      <Image
                        src={`/gallery/${img}.jpg`}
                        alt=""
                        fill
                        className="object-cover"
                        sizes="48px"
                      />
                    </button>
                  ))}
                </div>
              </div>
            )
          })}
        </div>

        <div className="text-center">
          <p className="text-[#94A3B8] text-sm mb-5">
            Đang hiển thị 8/{productGroups.length} thiết kế
          </p>
          <Link
            href="/gallery"
            className="inline-block border border-[#1CA6DF] text-[#1CA6DF] hover:bg-[#1CA6DF] hover:text-white font-bold px-10 py-3 rounded-xl transition-all"
          >
            Xem toàn bộ {productGroups.length} thiết kế →
          </Link>
        </div>

      </div>
    </section>
  )
}
