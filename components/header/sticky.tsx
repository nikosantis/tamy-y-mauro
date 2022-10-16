import { Fragment, useEffect } from 'react'
import { Transition } from '@headlessui/react'

import { useSticky } from 'lib/hooks/use-sticky'
import Logo from 'components/logo'
import Navbar from 'components/navbar'
import { useNavbar } from 'components/navbar/context'
import TogglerSticky from 'components/navbar/toggler-sticky'
import MobileContentSticky from 'components/navbar/mobile-content-sticky'

export default function Sticky() {
  const isSticky = useSticky(220)
  const { show, setShow } = useNavbar()
  useEffect(() => {
    if (isSticky && show) {
      setShow(false)
    }
  }, [isSticky, show, setShow])
  return (
    <Transition
      show={isSticky}
      enter='ease-out duration-300'
      enterFrom='opacity-0 -translate-y-6'
      enterTo='opacity-100 translate-y-0'
      leave='ease-in duration-200'
      leaveFrom='opacity-100 translate-y-0'
      leaveTo='opacity-0 -translate-y-6'
      as={Fragment}
      appear
      unmount
    >
      <div className='bg-white w-full py-2 fixed z-50 flex items-center h-20 shadow-md'>
        <div className='w-full px-4 lg:px-10 h-full flex justify-between items-center'>
          <div className='flex items-center'>
            <button>
              <Logo height={55} className='text-lunar-900' />
            </button>
          </div>

          <Navbar isSticky />
          <TogglerSticky />
        </div>
        <MobileContentSticky />
      </div>
    </Transition>
  )
}
