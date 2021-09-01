import { FC, InsHTMLAttributes, JSXElementConstructor } from 'react'
import cn from 'classnames'

export interface Props extends InsHTMLAttributes<HTMLSpanElement> {
  className?: string
  variant?: Variant
  Component?: string | JSXElementConstructor<any>
  children?: string | React.ReactNode
}

type Variant = 'improvement' | 'feature' | 'fix'

const Badge: FC<Props> = ({
  className,
  variant = 'improvement',
  Component = 'span',
  children,
}) => {
  return (
    <Component
      className={cn(
        'inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium',
        {
          'bg-blue-100 text-blue-800': variant === 'improvement',
          'bg-green-100 text-green-800': variant === 'feature',
          'bg-yellow-100 text-yellow-800': variant === 'fix',
        },
        className
      )}
    >
      {children}
    </Component>
  )
}

export default Badge
