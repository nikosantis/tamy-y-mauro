import { Transition } from '@headlessui/react'

import { useInput } from 'lib/hooks/use-input'
import { useContactForm } from './context'
import Input from './input'
import { nameSchema } from './schema'

export default function Name() {
  const { isSuccess: isFormSuccess } = useContactForm()
  const { inputProps, errors, hasErrors, isSuccess } = useInput({
    baseValue: '',
    type: 'text',
    schema: nameSchema,
    placeholder: 'Escribe tu nombre',
    reset: isFormSuccess
  })
  return (
    <div className='w-full'>
      <label
        htmlFor='form-name'
        className='block relative w-full text-white text-sm mb-2'
      >
        Nombre *
      </label>
      <Input
        id='form-name'
        name='form-name'
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
