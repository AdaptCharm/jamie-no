import { FC, ButtonHTMLAttributes, JSXElementConstructor } from 'react'
import cn from 'classnames'

export interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string
  variant?: Variant
  Component?: string | JSXElementConstructor<any>
  children?: string | React.ReactNode
}

type Variant = 'primary' | 'secondary'

const Button: FC<Props> = ({
  className,
  variant = 'primary',
  Component = 'button',
  children,
}) => {
  return (
    <Component
      className={cn(
        'w-full flex items-center justify-center py-3 px-5 border rounded-md transition ease-default text-base focus:outline-none focus:ring-transparent',
        {
          'text-white bg-black border-black hover:bg-transparent hover:text-black':
            variant === 'primary',
          'text-gray-500 bg-white border-bg-gray-200 hover:border-black hover:text-black':
            variant === 'secondary',
        },
        className
      )}
      type="submit"
    >
      {children}
    </Component>
  )
}

export default Button
