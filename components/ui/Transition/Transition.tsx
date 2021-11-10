import {
  FC,
  ReactNode,
  useEffect,
  useState,
  isValidElement,
  cloneElement,
} from 'react'

interface Props {
  className?: string
  visible?: boolean
  children: ReactNode
}

const Transition: FC<Props> = ({
  className = '',
  visible = false,
  children,
  ...props
}) => {
  const [active, setActive] = useState<boolean>(visible)

  useEffect(() => {
    if (visible && !active) {
      setActive(true)
    }

    if (!visible) {
      setActive(false)
    }
  }, [visible, active])

  if (!isValidElement(children) || !active) return null

  return cloneElement(children, {
    ...props,
    className: `${children.props.className} ${className}`,
  })
}

export default Transition
