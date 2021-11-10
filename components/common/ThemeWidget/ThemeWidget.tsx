import { FC, useState, useEffect } from 'react'
import cn from 'clsx'

import { useTheme } from 'next-themes'
import Mousetrap from 'mousetrap'

import { Tooltip } from '@components/ui'
import { SunIcon, MoonIcon } from '@heroicons/react/outline'

interface Props {
  className?: string
}

const ThemeWidget: FC<Props> = ({ className }) => {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    Mousetrap.bind(['ctrl+t'], () =>
      setTheme(theme === 'light' ? 'dark' : 'light')
    )

    return () => {
      Mousetrap.unbind(['ctrl+t'])
    }
  })

  useEffect(() => {
    const faviconElement = document.querySelector('#favicon') as HTMLLinkElement
    const iconElement = document.querySelector('#icon') as HTMLLinkElement
    const appleTouchElement = document.querySelector(
      '#apple-touch'
    ) as HTMLLinkElement
    const manifestElement = document.querySelector(
      '#manifest'
    ) as HTMLLinkElement

    if (faviconElement && iconElement && appleTouchElement && manifestElement) {
      theme === 'light'
        ? ((faviconElement.href = '/favicon/light/favicon.ico'),
          (iconElement.href = '/favicon/light/icon.svg'),
          (appleTouchElement.href = '/favicon/light/apple-touch-icon.png'),
          (manifestElement.href = '/favicon/light/manifest.webmanifest'))
        : ((faviconElement.href = '/favicon/dark/favicon.ico'),
          (iconElement.href = '/favicon/dark/icon.svg'),
          (appleTouchElement.href = '/favicon/dark/apple-touch-icon.png'),
          (manifestElement.href = '/favicon/dark/manifest.webmanifest'))
    }
  })

  useEffect(() => setMounted(true), [])

  if (!mounted) return null

  return (
    <>
      <Tooltip
        text={theme === 'light' ? 'Activate dark mode' : 'Activate light mode'}
      >
        <button
          className={cn(
            'flex items-center justify-center bg-transparent rounded-md w-10 h-10 border-none transition ease-default duration-400 text-gray-700 hover:p-2 hover:shadow-small focus:outline-none focus:ring-transparent',
            className
          )}
          onClick={() => {
            setTheme(theme === 'light' ? 'dark' : 'light')
          }}
          aria-label={
            theme === 'light' ? 'Activate dark mode' : 'Activate light mode'
          }
        >
          {theme === 'light' ? (
            <MoonIcon className="w-6 h-6" />
          ) : (
            <SunIcon className="w-6 h-6" />
          )}
        </button>
      </Tooltip>
    </>
  )
}

export default ThemeWidget
