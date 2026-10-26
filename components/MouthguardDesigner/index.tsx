'use client'

import { useRef, useState } from 'react'
import DesignerCanvas, { type DesignerCanvasHandle } from './DesignerCanvas'
import ToolPanel from './ToolPanel'
import { useDesignerState } from './useDesignerState'
import { DISPLAY_WIDTH, TEMPLATE_ASPECT, type ProductLine } from './constants'
import { ZALO_PHONE, ZALO_URL } from '@/lib/site'

const STEPS = [
  { vi: 'Chọn màu', en: 'Pick a color' },
  { vi: 'Thêm hình / chữ', en: 'Add image / text' },
  { vi: 'Tải preview', en: 'Download preview' },
]

export default function MouthguardDesigner() {
  const { state, dispatch } = useDesignerState('PRO')
  const canvasRef = useRef<DesignerCanvasHandle>(null)
  const [showHelp, setShowHelp] = useState(false)

  const designCanvasSize = { width: DISPLAY_WIDTH, height: DISPLAY_WIDTH * TEMPLATE_ASPECT }

  function handleProductLine(line: ProductLine) {
    dispatch({ type: 'SET_PRODUCT_LINE', line })
  }

  function handleUploadImage(src: string, width: number, height: number) {
    dispatch({ type: 'ADD_IMAGE', src, width, height, canvasWidth: designCanvasSize.width, canvasHeight: designCanvasSize.height })
  }

  function handleAddText(text: { text: string; fontFamily: string; fontSize: number; fill: string; bold: boolean; italic: boolean }) {
    dispatch({ type: 'ADD_TEXT', text, canvasWidth: designCanvasSize.width, canvasHeight: designCanvasSize.height })
  }

  function handleDownload() {
    const dataUrl = canvasRef.current?.exportPNG()
    if (!dataUrl) return
    const link = document.createElement('a')
    link.download = 'TGG-design-preview.png'
    link.href = dataUrl
    link.click()
  }

  return (
    <section className="bg-arena">
      <div className="mx-auto max-w-[1400px] px-4 pb-24 pt-10 md:px-8 md:pb-32 md:pt-14">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <h1 className="apron t-page text-arena-ink">Tự thiết kế.</h1>
            <p className="placard mt-2 text-xl text-arena-mute">Design your mouthguard</p>
          </div>
          <div className="lg:max-w-[30rem]">
            <p className="text-lg leading-relaxed text-arena-mute">
              Chọn màu, thêm ảnh, thêm chữ và xem ngay kết quả. Tải preview về rồi gửi cho TGG qua Zalo để đặt hàng.
            </p>
            <button
              type="button"
              onClick={() => setShowHelp((v) => !v)}
              aria-expanded={showHelp}
              className="rope-link placard mt-4 inline-flex min-h-11 items-center text-base text-arena-ink"
            >
              {showHelp ? 'Ẩn hướng dẫn' : 'Hướng dẫn sử dụng'} <span className="ml-1 normal-case text-arena-mute">/ How to use</span>
            </button>
          </div>
        </div>

        {showHelp && (
          <ol className="mt-8 grid gap-4 border-t-[3px] border-white/10 pt-6 sm:grid-cols-3">
            {STEPS.map((step, i) => (
              <li key={step.en} className="flex items-baseline gap-3">
                <span className="apron text-4xl text-rope-red">{i + 1}</span>
                <span>
                  <span className="placard block text-lg text-arena-ink">{step.vi}</span>
                  <span className="text-sm text-arena-mute">{step.en}</span>
                </span>
              </li>
            ))}
          </ol>
        )}

        <div className="mt-10 flex gap-2" role="group" aria-label="Dòng sản phẩm / Product line">
          {(['PRO', 'LIGHT'] as ProductLine[]).map((line) => (
            <button
              key={line}
              type="button"
              onClick={() => handleProductLine(line)}
              aria-pressed={state.productLine === line}
              className="seg !min-h-12 !px-6 !text-lg"
            >
              {line}
            </button>
          ))}
        </div>

        {/* Hàng 1 ôm sát sân khấu, phần cao thừa của bảng công cụ dồn xuống hàng 2 để nút tải nằm ngay dưới preview */}
        <div className="mt-8 grid grid-cols-1 items-start gap-x-10 gap-y-8 lg:grid-cols-[320px_minmax(0,1fr)] lg:grid-rows-[auto_1fr]">
          <div className="min-w-0 lg:col-start-1 lg:row-span-2 lg:row-start-1">
          <ToolPanel
            state={state}
            onBackgroundColor={(hex) => dispatch({ type: 'SET_BACKGROUND_COLOR', color: hex })}
            onUploadImage={handleUploadImage}
            onSelectImage={(id) => dispatch({ type: 'SELECT', id })}
            onRemoveImage={(id) => dispatch({ type: 'REMOVE_IMAGE', id })}
            onImageResize={(id, width, height) => dispatch({ type: 'UPDATE_IMAGE', id, patch: { width, height } })}
            onImageRotate={(id, rotation) => dispatch({ type: 'UPDATE_IMAGE', id, patch: { rotation } })}
            onImageCenter={(id) =>
              dispatch({
                type: 'UPDATE_IMAGE',
                id,
                patch: { x: designCanvasSize.width / 2, y: designCanvasSize.height / 2 },
              })
            }
            onImageCover={(id) =>
              dispatch({
                type: 'COVER_IMAGE',
                id,
                canvasWidth: designCanvasSize.width,
                canvasHeight: designCanvasSize.height,
              })
            }
            onReorderLayer={(draggedId, targetId) => dispatch({ type: 'REORDER_LAYER', draggedId, targetId })}
            onAddText={handleAddText}
            onUpdateText={(id, patch) => dispatch({ type: 'UPDATE_TEXT', id, patch })}
            onDeleteText={(id) => dispatch({ type: 'REMOVE_TEXT', id })}
            onBringToFront={(id) => dispatch({ type: 'BRING_TO_FRONT', id })}
            onSendToBack={(id) => dispatch({ type: 'SEND_TO_BACK', id })}
          />
          </div>

          <div className="sticky top-16 z-20 -mx-4 order-first min-w-0 bg-arena px-4 pb-3 pt-2 md:top-[72px] md:-mx-8 md:px-8 lg:order-none lg:col-start-2 lg:row-start-1 lg:mx-0 lg:px-0 lg:top-28">
            {/* Sân khấu xem trước: nền đen nâng, đèn từ trên xuống như trong studio */}
            <div
              className="flex items-center justify-center rounded-[6px] bg-arena-lift p-4 sm:p-8"
              style={{ backgroundImage: 'radial-gradient(70% 60% at 50% 0%, rgb(242 244 245 / 0.06), transparent 70%)' }}
            >
              <DesignerCanvas
                ref={canvasRef}
                state={state}
                onSelect={(id) => dispatch({ type: 'SELECT', id })}
                onImageChange={(id, patch) => dispatch({ type: 'UPDATE_IMAGE', id, patch })}
                onTextChange={(id, patch) => dispatch({ type: 'UPDATE_TEXT', id, patch })}
              />
            </div>
          </div>

          <div className="min-w-0 lg:col-start-2 lg:row-start-2">
            <div className="flex flex-wrap items-center gap-3">
              <button type="button" onClick={handleDownload} className="corner-pad">
                Tải preview <span className="normal-case opacity-75">/ Download</span>
              </button>
              <button type="button" onClick={() => dispatch({ type: 'RESET' })} className="arena-pad">
                Đặt lại <span className="normal-case opacity-70">/ Reset</span>
              </button>
            </div>
            <p className="mt-4 max-w-[34rem] text-base leading-relaxed text-arena-mute">
              Sau khi tải preview, gửi ảnh cho TGG qua{' '}
              <a href={ZALO_URL} target="_blank" rel="noopener noreferrer" className="text-arena-ink underline decoration-[3px] underline-offset-4 hover:text-corner">
                Zalo {ZALO_PHONE}
              </a>{' '}
              để đặt hàng.
              <span className="block text-sm">After downloading, send it to TGG on Zalo to place your order.</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
