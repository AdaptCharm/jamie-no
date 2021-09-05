import React, { FC, useEffect, useState } from 'react'

interface Props {
  className?: string
  visible?: boolean
  children: React.ReactNode
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

  if (!React.isValidElement(children) || !active) return null

  return React.cloneElement(children, {
    ...props,
    className: `${children.props.className} ${className}`,
  })
}

export default Transition
