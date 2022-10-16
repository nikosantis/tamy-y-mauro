import cx from 'clsx'

import { useHeader } from 'components/header/context'

export default function Gifts() {
  const { giftsRef } = useHeader()
  return (
    <section
      className='w-full relative flex flex-col items-center bg-westar-50 py-24'
      ref={giftsRef}
    >
      <h2 className='font-brush text-5xl mb-12'>Regalos</h2>

      <div className='block mx-auto max-w-7xl px-4 md:px-8'>
        <p className='text-center text-sm font-light text-lunar-400 mb-8'>
          Queremos compartir contigo nuestra lista de deseos para que se
          conviertan en el regalo más lindo que nos puedes dar.
        </p>

        <div className='flex justify-center'>
          <a
            href='https://milistadenovios.cl/enviar-regalo?id=5300'
            target='_blank'
            className={cx(
              'inline-flex w-full md:w-auto justify-center',
              'rounded-md border-0 bg-coral-700 px-4 py-2 shadow-sm transition-colors',
              'text-sm font-medium text-white uppercase',
              'hover:bg-coral-600 focus:outline-none focus:ring-0'
            )}
            rel='noreferrer'
          >
            Ver regalos
          </a>
        </div>
      </div>
    </section>
  )
}
