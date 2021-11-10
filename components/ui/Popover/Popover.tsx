import { FC, ReactNode, useMemo } from 'react'
import Tooltip, { TooltipProps } from '@components/ui/Tooltip'
import PopoverItem from './PopoverItem'
import { PlacementTypes, TriggerTypes, SizeTypes } from '@lib/prop-types'
import { getReactNode } from '@lib/collections'
import cn from 'clsx'

interface Props {
  content?: ReactNode | (() => ReactNode)
  trigger?: TriggerTypes
  placement?: PlacementTypes
  size?: SizeTypes
  children: ReactNode
}

const defaultProps = {
  trigger: 'click' as TriggerTypes,
  placement: 'bottom' as PlacementTypes,
  size: '' as SizeTypes,
  portalClassName: '',
}

type ExcludeTooltipProps = {
  text: any
  size: any
  trigger: any
  placement: any
}

export type PopoverProps = Props & Omit<TooltipProps, keyof ExcludeTooltipProps>

const Popover: FC<PopoverProps> = ({
  content,
  trigger,
  placement,
  size,
  portalClassName,
  children,
  ...props
}) => {
  const textNode = useMemo(() => getReactNode(content), [content])

  return (
    <Tooltip
      text={textNode}
      trigger={trigger}
      placement={placement}
      size={size}
      portalClassName={cn('py-2', portalClassName)}
      {...props}
    >
      {children}
    </Tooltip>
  )
}

type PopoverComponent<P = {}> = FC<P> & {
  Item: typeof PopoverItem
  Option: typeof PopoverItem
}
type ComponentProps = Partial<typeof defaultProps> &
  Omit<Props, keyof typeof defaultProps> &
  Partial<Omit<TooltipProps, keyof ExcludeTooltipProps>>

Popover.defaultProps = defaultProps

export default Popover as PopoverComponent<ComponentProps>
