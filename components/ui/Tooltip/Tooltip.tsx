import {
  FC,
  HTMLAttributes,
  ReactNode,
  useRef,
  useState,
  useEffect,
} from 'react'
import TooltipContent from './TooltipContent'
import { useClickAway } from '@lib/hooks'
import { withDefaults } from '@lib/collections'
import { PlacementTypes, TriggerTypes, SizeTypes } from '@lib/prop-types'
import cn from 'clsx'

export type TooltipOnVisibleChange = (visible: boolean) => void

export interface Props extends HTMLAttributes<HTMLDivElement> {
  className?: string
  portalClassName?: string
  text?: string | ReactNode
  trigger?: TriggerTypes
  placement?: PlacementTypes
  size?: SizeTypes
  initialVisible?: boolean
  visible?: boolean
  offset?: number
  onVisibleChange?: TooltipOnVisibleChange
  disabled?: boolean
  children: ReactNode
}

const defaultProps = {
  className: '',
  portalClassName: '',
  trigger: 'hover' as TriggerTypes,
  placement: 'bottom' as PlacementTypes,
  size: 'small' as SizeTypes,
  initialVisible: false,
  offset: 10,
  onVisibleChange: (() => {}) as TooltipOnVisibleChange,
  disabled: false,
}

type NativeAttrs = Omit<HTMLAttributes<any>, keyof Props>
export type TooltipProps = Props & typeof defaultProps & NativeAttrs

const Tooltip: FC<TooltipProps> = ({
  className,
  portalClassName,
  text,
  trigger,
  placement,
  size,
  initialVisible,
  visible: customVisible,
  offset,
  onVisibleChange,
  disabled,
  children,
  ...props
}) => {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState<boolean>(initialVisible)
  const contentProps = {
    size,
    visible,
    offset,
    placement,
    parent: ref,
    className: portalClassName,
  }

  const changeVisible = (nextState: boolean) => {
    const handler = (nextState: boolean) => {
      setVisible(nextState)
      onVisibleChange(nextState)
    }

    if (nextState) {
      handler(true)
      return
    }

    handler(false)
  }

  const mouseEventHandler = (next: boolean) =>
    trigger === 'hover' && changeVisible(next)
  const clickEventHandler = () => trigger === 'click' && changeVisible(!visible)

  useClickAway(ref, () => trigger === 'click' && changeVisible(false))

  useEffect(() => {
    if (customVisible === undefined) return
    changeVisible(customVisible)
  }, [customVisible])

  return (
    <div
      ref={ref}
      className={cn(
        'relative inline-block min-w-max text-black dark:text-white',
        className
      )}
      onClick={clickEventHandler}
      onMouseEnter={() => mouseEventHandler(true)}
      onMouseLeave={() => mouseEventHandler(false)}
      {...props}
    >
      {children}
      {!disabled && <TooltipContent {...contentProps}>{text}</TooltipContent>}
    </div>
  )
}

export default withDefaults(Tooltip, defaultProps)
