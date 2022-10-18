import { Transition } from '@headlessui/react'

import { useInput } from 'lib/hooks/use-input'
import Textarea from './textarea'
import { relationSchema } from './schema'
import { useContactForm } from './context'

export default function Message() {
  const { isSuccess: isFormSuccess } = useContactForm()
  const { inputProps, errors, hasErrors, isSuccess } = useInput({
    baseValue: '',
    type: 'textarea',
    schema: relationSchema,
    placeholder: 'Escribe algún mensaje o buenos deseos',
    reset: isFormSuccess
  })
  return (
    <div className='w-full'>
      <label
        htmlFor='form-message'
        className='block relative w-full text-white text-sm mb-2'
      >
        Mensaje o buenos deseos
      </label>
      <Textarea
        id='form-message'
        name='form-message'
        valid={isSuccess}
        invalid={hasErrors}
        {...inputProps}
      />
      <p className='mt-1 text-xs text-red-500 min-h-[16px]'>
        <Transition
          show={hasErrors}
          enter='transition-opacity duration-75'
          enterFrom='opacity-0'
          enterTo='opacity-100'
          leave='transition-opacity duration-150'
          leaveFrom='opacity-100'
          leaveTo='opacity-0'
        >
          {errors?.map(x => (
            <span key={x}> {x}.</span>
          ))}
        </Transition>
      </p>
    </div>
  )
}
