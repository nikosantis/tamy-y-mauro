import cx from 'clsx'

import FormWrapper from './wrapper'
import Input from './input'
import Textarea from './textarea'

export default function Form() {
  return (
    <FormWrapper>
      <div className='w-full'>
        <div className='w-full flex flex-col md:flex-row'>
          <div className='w-full md:w-1/2 md:pr-4 mb-6 md:mb-8'>
            <label
              htmlFor='form-name'
              className='block relative w-full text-white text-sm mb-2'
            >
              Nombre *
            </label>
            <Input
              type='text'
              id='form-name'
              name='form-name'
              placeholder='Escribe tu nombre'
            />
          </div>

          <div className='w-full md:w-1/2 md:pl-4 mb-6 md:mb-0'>
            <label
              htmlFor='form-email'
              className='block relative w-full text-white text-sm mb-2'
            >
              Correo electrónico *
            </label>
            <Input
              type='email'
              id='form-email'
              name='form-email'
              placeholder='Escribe tu correo electrónico'
            />
          </div>
        </div>

        <div className='w-full mb-6 md:mb-8'>
          <label
            htmlFor='form-relation'
            className='block relative w-full text-white text-sm mb-2'
          >
            Relación con los novios
          </label>
          <Input
            type='text'
            id='form-relation'
            name='form-relation'
            placeholder='Familiar, amigo, compañero de trabajo'
          />
        </div>

        <div className='w-full mb-6 md:mb-8'>
          <div className='w-full'>
            <label
              htmlFor='form-message'
              className='block relative w-full text-white text-sm mb-2'
            >
              Mensaje
            </label>
            <Textarea
              id='form-message'
              name='form-message'
              placeholder='Escribe algún mensaje'
            />
          </div>
        </div>
        <div className='w-full'>
          <button
            type='submit'
            className={cx(
              'inline-flex w-full md:w-auto justify-center',
              'rounded-md border-0 bg-coral-700 px-4 py-2 shadow-sm transition-colors',
              'text-sm font-medium text-white uppercase',
              'hover:bg-coral-600 focus:outline-none focus:ring-0'
            )}
          >
            Confirmar
          </button>
        </div>
      </div>
    </FormWrapper>
  )
}
