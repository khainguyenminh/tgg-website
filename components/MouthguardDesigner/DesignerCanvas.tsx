'use client'

import { forwardRef, useEffect, useImperativeHandle, useMemo, useRef, useState } from 'react'
import { Stage, Layer, Group, Rect, Image as KonvaImage, Text as KonvaText, Transformer } from 'react-konva'
import type Konva from 'konva'
import useImage from 'use-image'
import { DISPLAY_WIDTH, EXPORT_PIXEL_RATIO, OUTLINE_COLOR, OUTLINE_SCALE, TEMPLATE_ASPECT, TEMPLATE_SRC } from './constants'
import type { DesignerState, TextObjectState, UploadedImageState } from './useDesignerState'

export interface DesignerCanvasHandle {
  exportPNG: () => string | null
}

interface DesignerCanvasProps {
  state: DesignerState
  onSelect: (id: string | null) => void
  onImageChange: (id: string, patch: { x?: number; y?: number; width?: number; height?: number; rotation?: number }) => void
  onTextChange: (id: string, patch: Partial<TextObjectState>) => void
}

function makeTintedSilhouette(image: HTMLImageElement, color: string): HTMLCanvasElement {
  const canvas = document.createElement('canvas')
  canvas.width = image.naturalWidth
  canvas.height = image.naturalHeight
  const ctx = canvas.getContext('2d')
  if (!ctx) return canvas
  ctx.drawImage(image, 0, 0)
  ctx.globalCompositeOperation = 'source-in'
  ctx.fillStyle = color
  ctx.fillRect(0, 0, canvas.width, canvas.height)
  return canvas
}

interface DesignImageProps {
  img: UploadedImageState
  nodeRef: (node: Konva.Image | null) => void
  onSelect: () => void
  onChange: (patch: { x?: number; y?: number; width?: number; height?: number; rotation?: number }) => void
}

function DesignImage({ img, nodeRef, onSelect, onChange }: DesignImageProps) {
  const [image] = useImage(img.src)
  if (!image) return null
  return (
    <KonvaImage
      ref={nodeRef}
      image={image}
      x={img.x}
      y={img.y}
      width={img.width}
      height={img.height}
      offsetX={img.width / 2}
      offsetY={img.height / 2}
      rotation={img.rotation}
      draggable
      onClick={onSelect}
      onTap={onSelect}
      onDragEnd={(e) => onChange({ x: e.target.x(), y: e.target.y() })}
      onTransformEnd={(e) => {
        const node = e.target as Konva.Image
        const newWidth = Math.max(10, node.width() * node.scaleX())
        const newHeight = Math.max(10, node.height() * node.scaleY())
        node.scaleX(1)
        node.scaleY(1)
        onChange({
          width: newWidth,
          height: newHeight,
          rotation: node.rotation(),
          x: node.x(),
          y: node.y(),
        })
      }}
    />
  )
}

const DesignerCanvas = forwardRef<DesignerCanvasHandle, DesignerCanvasProps>(function DesignerCanvas(
  { state, onSelect, onImageChange, onTextChange },
  ref
) {
  const [template] = useImage(TEMPLATE_SRC)
  const stageRef = useRef<Konva.Stage>(null)
  const imageNodeRefs = useRef<Record<string, Konva.Image | null>>({})
  const textNodeRefs = useRef<Record<string, Konva.Text | null>>({})
  const transformerRef = useRef<Konva.Transformer>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const [size, setSize] = useState({ width: DISPLAY_WIDTH, height: DISPLAY_WIDTH * TEMPLATE_ASPECT })
  const [stageWidth, setStageWidth] = useState(DISPLAY_WIDTH)

  useEffect(() => {
    if (template) {
      const ratio = template.naturalHeight / template.naturalWidth
      setSize({ width: DISPLAY_WIDTH, height: DISPLAY_WIDTH * ratio })
    }
  }, [template])

  useEffect(() => {
    const el = containerRef.current
    if (!el) return
    const observer = new ResizeObserver((entries) => {
      const w = entries[0]?.contentRect.width
      if (w && w > 0) setStageWidth(w)
    })
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  const tintedOutline = useMemo(() => {
    if (!template) return null
    return makeTintedSilhouette(template, OUTLINE_COLOR)
  }, [template])

  useImperativeHandle(ref, () => ({
    exportPNG: () => {
      const stage = stageRef.current
      if (!stage) return null
      transformerRef.current?.nodes([])
      stage.batchDraw()
      const pixelRatio = (size.width * EXPORT_PIXEL_RATIO) / stage.width()
      const dataUrl = stage.toDataURL({ pixelRatio, mimeType: 'image/png' })
      return dataUrl
    },
  }))

  useEffect(() => {
    const transformer = transformerRef.current
    if (!transformer) return
    if (!state.selectedId) {
      transformer.nodes([])
      transformer.getLayer()?.batchDraw()
      return
    }
    const node = imageNodeRefs.current[state.selectedId] ?? textNodeRefs.current[state.selectedId] ?? null
    transformer.nodes(node ? [node] : [])
    transformer.getLayer()?.batchDraw()
  }, [state.selectedId, state.textObjects, state.images])

  const { width, height } = size
  const scale = stageWidth / width

  return (
    <div ref={containerRef} className="mx-auto" style={{ width: '100%', maxWidth: width }}>
      <Stage
        ref={stageRef}
        width={stageWidth}
        height={height * scale}
        scaleX={scale}
        scaleY={scale}
        onMouseDown={(e) => {
          if (e.target === e.target.getStage()) onSelect(null)
        }}
        style={{ filter: 'drop-shadow(0 8px 18px rgba(0,0,0,0.45))' }}
      >
        <Layer>
          {tintedOutline && (
            <KonvaImage
              image={tintedOutline}
              x={width / 2}
              y={height / 2}
              width={width * OUTLINE_SCALE}
              height={height * OUTLINE_SCALE}
              offsetX={(width * OUTLINE_SCALE) / 2}
              offsetY={(height * OUTLINE_SCALE) / 2}
              listening={false}
            />
          )}

          <Group>
            <Rect
              x={0}
              y={0}
              width={width}
              height={height}
              fill={state.backgroundColor}
              onClick={() => onSelect(null)}
              onTap={() => onSelect(null)}
            />

            {state.layerOrder.map((id) => {
              const img = state.images.find((i) => i.id === id)
              if (img) {
                return (
                  <DesignImage
                    key={img.id}
                    img={img}
                    nodeRef={(node) => {
                      imageNodeRefs.current[img.id] = node
                    }}
                    onSelect={() => onSelect(img.id)}
                    onChange={(patch) => onImageChange(img.id, patch)}
                  />
                )
              }

              const textObj = state.textObjects.find((t) => t.id === id)
              if (textObj) {
                return (
                  <KonvaText
                    key={textObj.id}
                    ref={(node) => {
                      textNodeRefs.current[textObj.id] = node
                    }}
                    text={textObj.text}
                    x={textObj.x}
                    y={textObj.y}
                    fontSize={textObj.fontSize}
                    fontFamily={textObj.fontFamily}
                    fontStyle={`${textObj.bold ? 'bold' : ''} ${textObj.italic ? 'italic' : ''}`.trim() || 'normal'}
                    fill={textObj.fill}
                    rotation={textObj.rotation}
                    offsetX={(textObj.text.length * textObj.fontSize) / 4}
                    draggable
                    onClick={() => onSelect(textObj.id)}
                    onTap={() => onSelect(textObj.id)}
                    onDragEnd={(e) => onTextChange(textObj.id, { x: e.target.x(), y: e.target.y() })}
                    onTransformEnd={(e) => {
                      const node = e.target as Konva.Text
                      const newSize = Math.max(8, textObj.fontSize * node.scaleX())
                      node.scaleX(1)
                      node.scaleY(1)
                      onTextChange(textObj.id, {
                        fontSize: newSize,
                        rotation: node.rotation(),
                        x: node.x(),
                        y: node.y(),
                      })
                    }}
                  />
                )
              }
              return null
            })}

            {template && (
              <KonvaImage
                image={template}
                x={0}
                y={0}
                width={width}
                height={height}
                listening={false}
                globalCompositeOperation="destination-in"
              />
            )}
          </Group>

          <Transformer
            ref={transformerRef}
            rotateEnabled
            keepRatio
            enabledAnchors={['top-left', 'top-right', 'bottom-left', 'bottom-right']}
            anchorSize={16 / scale}
            anchorCornerRadius={8}
            borderStroke="#1CA6DF"
            borderStrokeWidth={2 / scale}
            anchorStroke="#1CA6DF"
            anchorStrokeWidth={2 / scale}
            anchorFill="#fff"
            boundBoxFunc={(oldBox, newBox) => (newBox.width < 16 || newBox.height < 16 ? oldBox : newBox)}
          />
        </Layer>
      </Stage>
    </div>
  )
})

export default DesignerCanvas
