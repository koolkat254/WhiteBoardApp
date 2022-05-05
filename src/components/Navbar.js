
import { Link } from 'react-router-dom';
import React from 'react'
import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/solid'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Navbar() {
  return (

    <header className="bg-[#CFCFCF] w-auto h-20" >
      <div className="float-left m-5">Whiteboard APP</div>
    <Menu as="div" className="float-right relative inline-block text-left mx-7 my-2">
      <div>
        <Menu.Button className="m-3 inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-[#ff9d00] text-sm font-medium text-gray-700 hover:bg-[#ff9d00] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500 gf">
          Pages
          <ChevronDownIcon className="-mr-1 ml-2 h-5 w-5" aria-hidden="true" />
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-[#ff9d00] ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
  
            <Menu.Item>
              {({ active }) => (
                <li className={classNames(
                  active ? 'bg-[#ff9d00] text-gray-900' : 'text-gray-700',
                  'block px-4 py-2 text-sm'
                )}>
                    <Link to='/'>Home</Link>
                </li>
              )}
            </Menu.Item>
            <Menu.Item>
            {({ active }) => (
                <li className={classNames(
                  active ? 'bg-[#ff9d00] text-gray-900' : 'text-gray-700',
                  'block px-4 py-2 text-sm'
                )}>
                    <Link to='/new-WhiteBoard'>Add Whiteboard</Link>
                </li>
              )}
            </Menu.Item>
            <Menu.Item>
            {({ active }) => (
                <li className={classNames(
                  active ? 'bg-[#ff9d00] text-gray-900' : 'text-gray-700',
                  'block px-4 py-2 text-sm'
                )}>
                    <Link to='/results'>View Results</Link>
                </li>
              )}
            </Menu.Item>
            <Menu.Item>
            {({ active }) => (
                <li className={classNames(
                  active ? 'bg-[#ff9d00] text-gray-900' : 'text-gray-700',
                  'block px-4 py-2 text-sm'
                )}>
                    <Link to='/about'>About</Link>
                </li>
              )}
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
    </header>
  )
}
