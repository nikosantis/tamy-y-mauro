import { Transition } from '@headlessui/react'

import { useContactForm } from './context'

export default function SuccessMessage() {
  const { isSuccess } = useContactForm()

  return (
    <Transition
      show={isSuccess}
      enter='transition-opacity duration-75'
      enterFrom='opacity-0'
      enterTo='opacity-100'
      leave='transition-opacity duration-150'
      leaveFrom='opacity-100'
      leaveTo='opacity-0'
    >
      <div className='w-full mt-4'>
        <div
          className='p-4 mb-4 text-sm text-green-700 bg-green-100 rounded-lg dark:bg-green-200 dark:text-green-800'
          role='alert'
        >
          <span className='font-medium'>Éxito!</span> El formulario ha sido
          enviado
        </div>
      </div>
    </Transition>
  )
}
