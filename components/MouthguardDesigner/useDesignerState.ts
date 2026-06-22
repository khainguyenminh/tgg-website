import { useReducer } from 'react'
import {
  DEFAULT_BACKGROUND,
  FONT_OPTIONS,
  MAX_IMAGES,
  type ProductLine,
} from './constants'

export interface UploadedImageState {
  id: string
  src: string
  x: number
  y: number
  width: number
  height: number
  rotation: number
  naturalWidth: number
  naturalHeight: number
}

export interface TextObjectState {
  id: string
  text: string
  x: number
  y: number
  fontSize: number
  fontFamily: string
  fill: string
  rotation: number
  bold: boolean
  italic: boolean
}

export interface DesignerState {
  productLine: ProductLine
  backgroundColor: string
  images: UploadedImageState[]
  textObjects: TextObjectState[]
  layerOrder: string[]
  selectedId: string | null
}

type Action =
  | { type: 'SET_PRODUCT_LINE'; line: ProductLine }
  | { type: 'SET_BACKGROUND_COLOR'; color: string }
  | { type: 'ADD_IMAGE'; src: string; width: number; height: number; canvasWidth: number; canvasHeight: number }
  | { type: 'UPDATE_IMAGE'; id: string; patch: Partial<UploadedImageState> }
  | { type: 'REMOVE_IMAGE'; id: string }
  | { type: 'COVER_IMAGE'; id: string; canvasWidth: number; canvasHeight: number }
  | { type: 'ADD_TEXT'; text: Omit<TextObjectState, 'id' | 'x' | 'y' | 'rotation'>; canvasWidth: number; canvasHeight: number }
  | { type: 'UPDATE_TEXT'; id: string; patch: Partial<TextObjectState> }
  | { type: 'REMOVE_TEXT'; id: string }
  | { type: 'SELECT'; id: string | null }
  | { type: 'BRING_TO_FRONT'; id: string }
  | { type: 'SEND_TO_BACK'; id: string }
  | { type: 'REORDER_LAYER'; draggedId: string; targetId: string }
  | { type: 'RESET' }

function makeInitialState(line: ProductLine): DesignerState {
  return {
    productLine: line,
    backgroundColor: DEFAULT_BACKGROUND[line],
    images: [],
    textObjects: [],
    layerOrder: [],
    selectedId: null,
  }
}

let idCounter = 0
function nextId(prefix: string) {
  idCounter += 1
  return `${prefix}-${idCounter}`
}

function reducer(state: DesignerState, action: Action): DesignerState {
  switch (action.type) {
    case 'SET_PRODUCT_LINE':
      return makeInitialState(action.line)

    case 'SET_BACKGROUND_COLOR':
      return { ...state, backgroundColor: action.color }

    case 'ADD_IMAGE': {
      if (state.images.length >= MAX_IMAGES) return state
      const maxWidth = action.canvasWidth * 0.85
      const maxHeight = action.canvasHeight * 0.85
      const ratio = action.width / action.height
      let width = maxWidth
      let height = width / ratio
      if (height > maxHeight) {
        height = maxHeight
        width = height * ratio
      }
      const id = nextId('image')
      const newImage: UploadedImageState = {
        id,
        src: action.src,
        x: action.canvasWidth / 2,
        y: action.canvasHeight / 2,
        width,
        height,
        rotation: 0,
        naturalWidth: action.width,
        naturalHeight: action.height,
      }
      return {
        ...state,
        images: [...state.images, newImage],
        layerOrder: [...state.layerOrder, id],
        selectedId: id,
      }
    }

    case 'UPDATE_IMAGE':
      return {
        ...state,
        images: state.images.map((img) => (img.id === action.id ? { ...img, ...action.patch } : img)),
      }

    case 'REMOVE_IMAGE':
      return {
        ...state,
        images: state.images.filter((img) => img.id !== action.id),
        layerOrder: state.layerOrder.filter((id) => id !== action.id),
        selectedId: state.selectedId === action.id ? null : state.selectedId,
      }

    case 'COVER_IMAGE': {
      const image = state.images.find((img) => img.id === action.id)
      if (!image) return state
      const scale = Math.max(action.canvasWidth / image.naturalWidth, action.canvasHeight / image.naturalHeight)
      return {
        ...state,
        images: state.images.map((img) =>
          img.id === action.id
            ? {
                ...img,
                width: img.naturalWidth * scale,
                height: img.naturalHeight * scale,
                x: action.canvasWidth / 2,
                y: action.canvasHeight / 2,
                rotation: 0,
              }
            : img
        ),
      }
    }

    case 'ADD_TEXT': {
      const id = nextId('text')
      const newText: TextObjectState = {
        ...action.text,
        id,
        x: action.canvasWidth / 2,
        y: action.canvasHeight / 2,
        rotation: 0,
      }
      return {
        ...state,
        textObjects: [...state.textObjects, newText],
        layerOrder: [...state.layerOrder, id],
        selectedId: id,
      }
    }

    case 'UPDATE_TEXT':
      return {
        ...state,
        textObjects: state.textObjects.map((t) => (t.id === action.id ? { ...t, ...action.patch } : t)),
      }

    case 'REMOVE_TEXT':
      return {
        ...state,
        textObjects: state.textObjects.filter((t) => t.id !== action.id),
        layerOrder: state.layerOrder.filter((id) => id !== action.id),
        selectedId: state.selectedId === action.id ? null : state.selectedId,
      }

    case 'SELECT':
      return { ...state, selectedId: action.id }

    case 'BRING_TO_FRONT':
      return { ...state, layerOrder: [...state.layerOrder.filter((id) => id !== action.id), action.id] }

    case 'SEND_TO_BACK':
      return { ...state, layerOrder: [action.id, ...state.layerOrder.filter((id) => id !== action.id)] }

    case 'REORDER_LAYER': {
      if (action.draggedId === action.targetId) return state
      const order = [...state.layerOrder]
      const fromIndex = order.indexOf(action.draggedId)
      const toIndex = order.indexOf(action.targetId)
      if (fromIndex === -1 || toIndex === -1) return state
      order.splice(fromIndex, 1)
      order.splice(order.indexOf(action.targetId), 0, action.draggedId)
      return { ...state, layerOrder: order }
    }

    case 'RESET':
      return makeInitialState(state.productLine)

    default:
      return state
  }
}

export function useDesignerState(initialLine: ProductLine = 'PRO') {
  const [state, dispatch] = useReducer(reducer, makeInitialState(initialLine))
  return { state, dispatch }
}

export { FONT_OPTIONS }
