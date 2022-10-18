import Image from 'next/future/image'
import cx from 'clsx'

import inviteImg from 'public/images/invite.jpg'
import { useHeader } from 'components/header/context'

export default function Invite() {
  const { attendanceRef } = useHeader()

  const handleScroll = () => {
    if (attendanceRef.current) {
      attendanceRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
        inline: 'start'
      })
    }
  }

  return (
    <section className='w-full relative flex flex-col items-center bg-westar-50 py-36 md:py-48'>
      <Image
        src={inviteImg}
        alt='Tamy & Mauro'
        placeholder='blur'
        fill
        sizes='100vw'
        className='object-cover z-0'
      />

      <div className='absolute w-full h-full bg-coral-800/20 z-10 top-0' />

      <div className='block w-full relative z-20'>
        <div className='mx-auto max-w-7xl px-4 md:px-8 flex justify-center lg:justify-end'>
          <div className='bg-westar-100 py-12 px-12 w-full md:w-9/12 lg:w-6/12 text-center'>
            <h3 className='font-brush text-4xl mb-13 mb-6'>
              ¡Ven a celebrar junto a nosotros!
            </h3>
            <p className='font-light text-sm text-lunar-400  mb-4'>
              Si estás leyendo esto, es por que te escogimos para que nos
              acompañes en este día tan importante y disfrutes juntos a nosotros
              de nuestro matrimonio. Queremos rodearnos de amor y que esta unión
              tan importante, tenga a todos nuestros seres queridos como
              testigos.
            </p>
            <p className='font-light text-sm text-lunar-400 mb-6'>
              ¡Queremos que seas parte de este día!
            </p>

            <button
              className={cx(
                'inline-flex w-full md:w-auto justify-center',
                'rounded-md border-0 bg-coral-700 px-4 py-2 shadow-sm transition-colors',
                'text-sm font-medium text-white uppercase',
                'hover:bg-coral-600 focus:outline-none focus:ring-0'
              )}
              onClick={handleScroll}
            >
              Confirma tu asistencia
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
