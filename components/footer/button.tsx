import cx from 'clsx'
import { useInnerForm } from 'lib/hooks/use-form'
import { useContactForm } from './context'

export default function Button() {
  const { isFormValid } = useInnerForm()
  const { isLoading } = useContactForm()
  return (
    <button
      type='submit'
      className={cx(
        'inline-flex w-full md:w-auto justify-center',
        'rounded-md border-0 bg-coral-700 px-4 py-2 shadow-sm transition-colors',
        'text-sm font-medium text-white uppercase',
        'hover:bg-coral-600 focus:outline-none focus:ring-0',
        'disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:bg-coral-700'
      )}
      disabled={isLoading || !isFormValid}
    >
      Confirmar{' '}
      {isLoading && (
        <span>
          <Spin />
        </span>
      )}
    </button>
  )
}

function Spin() {
  return (
    <svg
      className='animate-spin h-5 w-5 text-white ml-2'
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
    >
      <circle
        className='opacity-25'
        cx='12'
        cy='12'
        r='10'
        stroke='currentColor'
        strokeWidth='4'
      />
      <path
        className='opacity-75'
        fill='currentColor'
        d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'
      />
    </svg>
  )
}
