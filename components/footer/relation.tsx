import { Transition } from '@headlessui/react'

import { useInput } from 'lib/hooks/use-input'
import { useContactForm } from './context'
import Input from './input'
import { relationSchema } from './schema'

export default function Relation() {
  const { isSuccess: isFormSuccess } = useContactForm()
  const { inputProps, errors, hasErrors, isSuccess } = useInput({
    baseValue: '',
    type: 'text',
    schema: relationSchema,
    placeholder: 'Familiar, amigo, compañero de trabajo',
    reset: isFormSuccess
  })
  return (
    <div className='w-full'>
      <label
        htmlFor='form-relation'
        className='block relative w-full text-white text-sm mb-2'
      >
        Relación con los novios *
      </label>
      <Input
        id='form-relation'
        name='form-relation'
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
