import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon, CheckIcon } from '@heroicons/react/20/solid'
import { useForm } from '../contexts/FormContext'


function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

function Dropdown() {
  const {tripOptions, currentTripOption, dispatch} = useForm()

  return (
    <Menu as="div" className="relative inline-block text-left ">
      <div>
        <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-transparent px-3 py-2 text-xs font-semibold text-gray-300 shadow-sm ring-1 ring-inset ring-gray-500 hover:bg-gray-600 ">
          {currentTripOption}
          <ChevronDownIcon className="-mr-1 h-4 w-4 text-gray-300" aria-hidden="true" />
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
        <Menu.Items className="absolute left-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-gray-600 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
           {tripOptions?.map(option => <Menu.Item key={option}>
              {({ active }) => (
                <span
                  onClick={() => dispatch({type: "currentTripOption/update", payload: option})}
                  className={classNames(
                    active ? 'bg-gray-500 text-gray-300' : 'text-gray-400',
                    'px-4 py-2 text-sm cursor-pointer flex gap-2'
                  )}
                >
                  {currentTripOption === option ? <CheckIcon className="-mr-1 h-5 w-5 text-gray-300" aria-hidden="true" /> : ''}
                  {option}
                </span>
              )}
            </Menu.Item>)}
            {/* <Menu.Item>
              {({ active }) => (
                <a
                  href="#"
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm'
                  )}
                >
                  Support
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  href="#"
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm'
                  )}
                >
                  License
                </a>
              )}
            </Menu.Item> */}
            {/* <form method="POST" action="#">
              <Menu.Item>
                {({ active }) => (
                  <button
                    type="submit"
                    className={classNames(
                      active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                      'block w-full px-4 py-2 text-left text-sm'
                    )}
                  >
                    Sign out
                  </button>
                )}
              </Menu.Item>
            </form> */}
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  )
}

export default Dropdown