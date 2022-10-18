import cx from 'clsx'
import Image from 'next/future/image'

import { useHeader } from 'components/header/context'

import logoNovios from 'public/images/mi-lista-de-novios.png'

export default function Gifts() {
  const { giftsRef } = useHeader()
  return (
    <section
      className='w-full relative flex flex-col items-center bg-westar-50 py-24'
      ref={giftsRef}
    >
      <h2 className='font-brush text-5xl mb-12'>Regalos</h2>

      <div className='block mx-auto w-full max-w-4xl px-4 md:px-8'>
        <p className='text-center text-sm font-light text-lunar-400 mb-4'>
          Como ya sabes, nosotros armamos hace mucho tiempo nuestro hogar por lo
          que si quieres hacernos un regalo, compartimos nuestra lista de deseos
          para que se conviertan en el regalo más lindo que nos puedes dar.
        </p>
        <p className='text-center text-sm font-light text-lunar-400 mb-4'>
          Solo debes ingresar al link, escoger el regalo que quieras hacernos y
          listo.
        </p>
        <p className='text-center text-sm font-light text-lunar-400 mb-8'>
          ¡Muchas gracias por cada detalle!
        </p>

        <div className='flex justify-center mb-8'>
          <a
            href='https://milistadenovios.cl/lista/tamy-y-mauro-2023'
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

        <div className='flex justify-center'>
          <Image
            src={logoNovios}
            alt='Tamy & Mauro'
            placeholder='blur'
            width={250}
            height={37}
            className='grayscale'
          />
        </div>
      </div>
    </section>
  )
}
