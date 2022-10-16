import { useHeader } from 'components/header/context'
import Image from 'next/future/image'

import footerImg from 'public/images/footer.jpg'
import Form from './form'

export default function Footer() {
  const { attendanceRef } = useHeader()
  return (
    <footer className='w-full relative'>
      <Image
        src={footerImg}
        alt='Tamy & Mauro'
        placeholder='blur'
        fill
        sizes='100vw'
        className='object-cover z-0'
      />
      <div className='absolute w-full h-full bg-black/30' />
      <div className='container mx-auto px-4 md:px-0 z-10 relative flex flex-col items-center pt-24'>
        <div className='w-full md:w-8/12 lg:w-5/12 mb-8'>
          <h2 className='font-brush text-5xl mb-12 text-center text-white'>
            ¡Confírmanos tu asistencia!
          </h2>
          <p className='text-center text-sm font-light text-white mb-2'>
            Para nosotros es importante tu confirmación, por favor completa el
            formulario.
          </p>
          <p className='text-center text-sm font-light text-white italic'>
            Válido hasta el 01-02-2023
          </p>
          <div className='w-full py-10' ref={attendanceRef}>
            <Form />
          </div>
        </div>

        <div className='w-full flex justify-center pt-4 pb-6'>
          <p className='text-center text-white text-sm font-light'>
            <strong>Tamy & Mauro</strong> <span className='text-xs'>♥</span>{' '}
            2022
          </p>
        </div>
      </div>
    </footer>
  )
}
