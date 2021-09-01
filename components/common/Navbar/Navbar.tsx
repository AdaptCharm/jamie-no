import { FC, useRef, useEffect, Fragment } from 'react'

import Mousetrap from 'mousetrap'

import { Popover, Transition } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'

import { Tooltip } from 'react-tippy'
import { ThemeWidget } from '@components/common'

const shortcuts = [
  {
    name: 'Command center',
    key: ['ctrl', 'k'],
  },
  {
    name: 'Switch theme',
    key: ['ctrl', 't'],
  },
]

const Navbar: FC = () => {
  const hideRef = useRef<HTMLDivElement>(null)
  const showRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    Mousetrap.bind(
      ['ctrl+k'],
      () => showRef.current?.click() ?? hideRef.current?.focus()
    )
  }, [])

  return (
    <Popover
      className="bg-white bg-opacity-90 dark:bg-black dark:bg-opacity-80 transition ease-default fixed inset-x-0 z-50"
      style={{
        backdropFilter: 'saturate(180%) blur(5px)',
        transitionDuration: '500ms',
        transitionProperty: 'background-color',
      }}
    >
      {({ open }) => (
        <>
          <div
            className="h-20 sm:h-30 focus:outline-none"
            ref={hideRef}
            tabIndex={-1}
          >
            <div className="grid grid-cols-navbar grid-flow-row grid-rows-none gap-5 h-full">
              <div className="col-start-2 col-end-auto flex items-center justify-end h-full">
                <div className="flex flex-row-reverse md:flex-row items-center gap-x-2">
                  <div className="relative">
                    <Tooltip
                      title="Show menu"
                      position="bottom"
                      size="small"
                      animation="scale"
                      duration={10}
                      style={{ display: 'inline-flex' }}
                    >
                      <Popover.Button
                        className="flex items-center justify-center bg-transparent rounded-lg w-10 h-10 border-none transition ease-default duration-400 text-gray-700 hover:p-2 hover:bg-link hover:shadow-small focus:outline-none focus:ring-transparent"
                        ref={showRef}
                      >
                        <span className="sr-only">Open menu</span>
                        <MenuIcon className="w-6 h-6 text-black dark:text-white" />
                      </Popover.Button>
                    </Tooltip>
                  </div>
                  <div className="relative">
                    <ThemeWidget className="text-black dark:text-white" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Transition.Root show={open} as={Fragment}>
            <Popover.Panel
              focus
              static
              className="absolute top-0 inset-x-0 transform transition origin-center"
            >
              <div className="relative sm:flex sm:items-center sm:justify-center sm:content-center min-h-full p-2">
                <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-400 lg:duration-300"
                  enterFrom="opacity-0"
                  enterTo="opacity-100"
                  leave="ease-in duration-400 lg:duration-300"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <Popover.Overlay className="fixed min-h-screen inset-0 bg-white dark:bg-black bg-opacity-90 dark:bg-opacity-80 transition-opacity" />
                </Transition.Child>

                <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-200 lg:duration-250"
                  enterFrom="opacity-0 -translate-1/2 scale-0"
                  enterTo="opacity-100 translate-0 scale-100"
                  leave="ease-in duration-200 lg:duration-250"
                  leaveFrom="opacity-100 translate-0 scale-100"
                  leaveTo="opacity-0 -translate-1/2 scale-0"
                >
                  <div className="relative sm:top-60 sm:w-150 transform transition-all rounded-2xl shadow-1 bg-white dark:bg-gray-900 overflow-hidden">
                    <div className="pt-5 pb-6 px-5">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <span className="text-black dark:text-white">
                            Jamie Isaksen
                          </span>
                        </div>
                        <div className="flex items-center">
                          <div className="relative">
                            <Popover.Button className="flex items-center justify-center bg-transparent rounded-md w-10 h-10 border-none transition ease-default duration-400 text-black dark:text-white hover:opacity-60 hover:p-2 hover:shadow-small focus:outline-none">
                              <span className="sr-only">Close menu</span>
                              <XIcon className="w-6 h-6" aria-hidden="true" />
                            </Popover.Button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div>
                      <li className="pl-6 h-8 flex items-center justify-between transition ease-default bg-black bg-opacity-5 dark:bg-black dark:bg-opacity-20 text-sm text-gray-900 text-opacity-60 dark:text-gray-100 dark:text-opacity-60">
                        Shortcuts
                      </li>
                      {shortcuts.map((shortcut) => (
                        <li
                          className="p-6 h-16 flex items-center justify-between transition ease-default hover:bg-black hover:bg-opacity-5 dark:hover:bg-opacity-20 text-gray-900 dark:text-gray-100 dark:text-opacity-60"
                          key={shortcut.name}
                        >
                          <span>{shortcut.name}</span>
                          <div>
                            <span className="p-2 rounded-lg text-sm bg-black bg-opacity-5 dark:bg-white dark:bg-opacity-5 text-gray-900 text-opacity-60 dark:text-gray-100 dark:text-opacity-60">
                              {shortcut.key[0]}
                            </span>
                            <span className="ml-4 p-2 rounded-lg text-sm bg-black bg-opacity-5 dark:bg-white dark:bg-opacity-5 text-gray-900 text-opacity-60 dark:text-gray-100 dark:text-opacity-60">
                              {shortcut.key[1]}
                            </span>
                          </div>
                        </li>
                      ))}
                    </div>
                  </div>
                </Transition.Child>
              </div>
            </Popover.Panel>
          </Transition.Root>
        </>
      )}
    </Popover>
  )
}

export default Navbar
