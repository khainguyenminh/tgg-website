'use client'

import { useRef, useState } from 'react'
import DesignerCanvas, { type DesignerCanvasHandle } from './DesignerCanvas'
import ToolPanel from './ToolPanel'
import { useDesignerState } from './useDesignerState'
import { DISPLAY_WIDTH, TEMPLATE_ASPECT, type ProductLine } from './constants'

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
    <section className="max-w-6xl mx-auto px-5 py-12">
      <div className="text-center mb-8">
        <h1 className="font-heading font-extrabold text-3xl md:text-4xl text-white">
          Tự thiết kế mouthguard của bạn
          <span className="block text-base md:text-lg text-[#94A3B8] font-body font-normal mt-1">
            Design Your Mouthguard
          </span>
        </h1>
        <p className="text-[#94A3B8] mt-3 max-w-xl mx-auto">
          Chọn màu, thêm ảnh, thêm chữ — xem ngay kết quả thực tế
        </p>

        <button
          type="button"
          onClick={() => setShowHelp((v) => !v)}
          className="mt-4 text-xs text-[#1CA6DF] hover:underline"
        >
          {showHelp ? 'Ẩn hướng dẫn' : 'Hướng dẫn sử dụng'} / How to use
        </button>

        {showHelp && (
          <div className="mt-3 flex flex-wrap justify-center gap-3 text-sm">
            {STEPS.map((step, i) => (
              <div key={step.en} className="bg-[#0F1F38] border border-white/10 rounded-lg px-4 py-2 text-left">
                <span className="text-[#1CA6DF] font-bold mr-1">{i + 1}.</span>
                <span className="text-white font-semibold">{step.vi}</span>{' '}
                <span className="text-[#94A3B8]">/ {step.en}</span>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="flex justify-center gap-3 mb-8">
        {(['PRO', 'LIGHT'] as ProductLine[]).map((line) => (
          <button
            key={line}
            type="button"
            onClick={() => handleProductLine(line)}
            className={`px-6 py-2 rounded-lg font-bold text-sm transition-all ${
              state.productLine === line
                ? 'bg-[#1CA6DF] text-white'
                : 'bg-white/5 text-[#94A3B8] hover:bg-white/10 border border-white/10'
            }`}
          >
            {line}
          </button>
        ))}
      </div>

      <div className="flex flex-col lg:flex-row gap-6 items-start">
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

        <div className="flex-1 w-full">
          <div className="bg-[#0F1F38] border border-white/10 rounded-xl p-8 flex items-center justify-center">
            <DesignerCanvas
              ref={canvasRef}
              state={state}
              onSelect={(id) => dispatch({ type: 'SELECT', id })}
              onImageChange={(id, patch) => dispatch({ type: 'UPDATE_IMAGE', id, patch })}
              onTextChange={(id, patch) => dispatch({ type: 'UPDATE_TEXT', id, patch })}
            />
          </div>

          <div className="flex flex-col items-center gap-3 mt-6">
            <div className="flex gap-3 w-full max-w-md">
              <button
                type="button"
                onClick={handleDownload}
                className="flex-1 bg-[#1CA6DF] hover:bg-[#1590C2] text-white font-bold text-sm rounded-lg px-5 py-3 transition-all"
              >
                Tải preview <span className="opacity-80 font-normal">/ Download Preview</span>
              </button>
              <button
                type="button"
                onClick={() => dispatch({ type: 'RESET' })}
                className="bg-white/5 hover:bg-white/10 border border-white/10 text-white text-sm font-semibold rounded-lg px-5 py-3 transition-all"
              >
                Đặt lại <span className="opacity-70">/ Reset</span>
              </button>
            </div>
            <p className="text-xs text-[#94A3B8] text-center max-w-md">
              Sau khi tải preview, liên hệ TGG qua Zalo 0975 580 253 để đặt hàng.
              <br />
              After downloading, contact TGG via Zalo 0975 580 253 to place your order.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
