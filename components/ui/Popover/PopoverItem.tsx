import { FC, HTMLAttributes, memo } from 'react'
import cn from 'classnames'
import { withDefaults } from '@lib/collections'

interface Props {
  line?: boolean
  title?: boolean
  item?: boolean
  children?: React.ReactNode
}

const defaultProps = {
  line: false,
  title: false,
  item: false,
  className: '',
}

type NativeAttrs = Omit<HTMLAttributes<any>, keyof Props>
export type PopoverItemProps = Props & typeof defaultProps & NativeAttrs

const PopoverItem: FC<PopoverItemProps> = memo(
  ({ line, title, item, className, children, ...props }) => {
    return (
      <>
        <div
          className={cn(
            '',
            {
              'transition-colors ease-default duration-100 ': title || item,
              'px-5 py-2 text-black dark:text-white': title,
              'my-2 border-t-[1px] border-accents-2 dark:border-accents-8':
                line,
              'py-2 px-5 text-sm max-w-full hover:bg-accents-1 dark:hover:bg-accents-9 text-accents-5 dark:text-accents-5 hover:text-black dark:hover:text-white':
                item,
            },
            className
          )}
          {...props}
        >
          {children}
        </div>
        {title && <PopoverItem line item={false} title={false} className="" />}
      </>
    )
  }
)

export default withDefaults(PopoverItem, defaultProps)
