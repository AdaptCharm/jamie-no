import {
  FC,
  MutableRefObject,
  ReactNode,
  useRef,
  useState,
  useEffect,
  MouseEvent,
} from 'react'
import { createPortal } from 'react-dom'
import { PlacementTypes, SizeTypes } from '@lib/prop-types'
import {
  getPosition,
  TooltipPosition,
  defaultTooltipPosition,
} from './TooltipPlacement'
import { useResize, useClickAnywhere, usePortal } from '@lib/hooks'
import { Transition } from '@components/ui'
import cn from 'clsx'

interface Props {
  className?: string
  parent?: MutableRefObject<HTMLElement | null> | undefined
  placement: PlacementTypes
  size: SizeTypes
  visible: boolean
  offset: number
  children: ReactNode
}

interface ReactiveDomReact {
  top: number
  bottom: number
  left: number
  right: number
  width: number
  height: number
}

const defaultRect: ReactiveDomReact = {
  top: -1000,
  left: -1000,
  right: -1000,
  bottom: -1000,
  width: 0,
  height: 0,
}

const getRect = (
  ref: MutableRefObject<HTMLElement | null>
): ReactiveDomReact => {
  if (!ref || !ref.current) return defaultRect
  const rect = ref.current.getBoundingClientRect()
  return {
    ...rect,
    width: rect.width || rect.right - rect.left,
    height: rect.height || rect.bottom - rect.top,
    top: rect.top + document.documentElement.scrollTop,
    bottom: rect.bottom + document.documentElement.scrollTop,
    left: rect.left + document.documentElement.scrollLeft,
    right: rect.right + document.documentElement.scrollLeft,
  }
}

const TooltipContent: FC<Props> = ({
  className,
  parent,
  placement,
  size,
  visible,
  offset,
  children,
}) => {
  const el = usePortal('tooltip')
  const selfRef = useRef<HTMLDivElement>(null)
  const [rect, setRect] = useState<TooltipPosition>(defaultTooltipPosition)
  if (!parent) return null

  const updateRect = () => {
    const position = getPosition(placement, getRect(parent), offset)
    setRect(position)
  }

  useResize(updateRect)
  useClickAnywhere(() => updateRect())

  useEffect(() => {
    updateRect()
  }, [visible])

  const preventHandler = (event: MouseEvent<HTMLDivElement>) => {
    event.stopPropagation()
    event.nativeEvent.stopImmediatePropagation()
  }

  if (!el) return null

  return createPortal(
    <Transition visible={visible}>
      <div
        className="absolute w-auto bg-white dark:bg-black text-black dark:text-white rounded-md z-50 shadow-small"
        style={{
          transform: rect.transform,
          top: rect.top,
          left: rect.left,
        }}
        ref={selfRef}
        onClick={preventHandler}
      >
        <div
          className={cn(
            'relative',
            {
              'py-1 px-2 text-sm': size === 'small',
              'py-3.5 px-5': size === 'medium',
            },
            className
          )}
        >
          {children}
        </div>
      </div>
    </Transition>,
    el
  )
}

export default TooltipContent
