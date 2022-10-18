import { Transition } from '@headlessui/react'

import { useInput } from 'lib/hooks/use-input'
import { useContactForm } from './context'
import Input from './input'
import { emailSchema } from './schema'

export default function Email() {
  const { isSuccess: isFormSuccess } = useContactForm()
  const { inputProps, errors, hasErrors, isSuccess } = useInput({
    baseValue: '',
    type: 'email',
    schema: emailSchema,
    placeholder: 'Escribe tu correo electrónico',
    reset: isFormSuccess
  })
  return (
    <div className='w-full'>
      <label
        htmlFor='form-email'
        className='block relative w-full text-white text-sm mb-2'
      >
        Correo electrónico *
      </label>
      <Input
        id='form-email'
        name='form-email'
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
