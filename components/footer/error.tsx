import { Transition } from '@headlessui/react'

import { useContactForm } from './context'

export default function ErrorMessage() {
  const { isSuccess, errorMessage } = useContactForm()

  return (
    <Transition
      show={!isSuccess && !!errorMessage}
      enter='transition-opacity duration-75'
      enterFrom='opacity-0'
      enterTo='opacity-100'
      leave='transition-opacity duration-150'
      leaveFrom='opacity-100'
      leaveTo='opacity-0'
    >
      <div className='w-full mt-4'>
        <div
          className='p-4 mb-4 text-sm text-red-700 bg-red-100 rounded-lg dark:bg-red-200 dark:text-red-800'
          role='alert'
        >
          <span className='font-medium'>Error!</span> {errorMessage}
        </div>
      </div>
    </Transition>
  )
}
