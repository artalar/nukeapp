import { useAtom } from '@reatom/npm-react'
import { type HTMLAttributes, type CSSProperties } from 'react'
import { debugMode } from '@/shared/model'

type CustomCSSProperties = {
  '--fsd-background-color': string
  '--fsd-color': string
} & CSSProperties

type CustomHTMLAttributes<T> = {
  'data-fsd'?: string
} & HTMLAttributes<T>

type Layer = 'widget' | 'feature' | 'entity'

type ModuleName = `${Layer}/${string}`

const colorMap: Record<Layer, string> = {
  widget: '#fa0ee9',
  feature: '#14a200',
  entity: '#2573e5',
} as const

export function useFeatureSlicedDebug<T extends HTMLElement = HTMLDivElement>(
  name: ModuleName
) {
  const [isDebugMode] = useAtom(debugMode)
  const rootAttributes: CustomHTMLAttributes<T> = {}
  const [layer] = name.split('/') as [Layer]

  if (isDebugMode) {
    rootAttributes['data-fsd'] = name
    rootAttributes.style = {
      '--fsd-color': colorMap[layer],
      '--fsd-background-color': `${colorMap[layer]}10`,
    } as CustomCSSProperties
  }

  return {
    rootAttributes,
  }
}
