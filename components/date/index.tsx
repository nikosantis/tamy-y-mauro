import Image from 'next/future/image'
import { FaWaze, FaMapMarkerAlt } from 'react-icons/fa'

import img7 from 'public/images/flores.png'
import { useHeader } from 'components/header/context'

export default function WeddingDate() {
  const { whereRef } = useHeader()
  return (
    <section
      className='w-full bg-westar-300 py-28 relative flex justify-center'
      ref={whereRef}
    >
      <div className='w-full flex flex-col items-center justify-center'>
        <h2 className='font-brush text-3xl md:text-5xl text-center mb-2'>
          18 de febrero, 2023
        </h2>
        <p className='font-brush mb-6 text-3xl text-center md:text-4xl'>
          16:30 hrs.
        </p>
        <div className='text-center mb-8'>
          <address>
            <div className='mb-4'>
              <span className='uppercase font-light'>
                Los Aromos 119, Hospital, <br />
                Paine
              </span>
            </div>

            <div className='flex justify-center'>
              <a
                href='https://www.waze.com/en/live-map/directions/cl/region-metropolitana/maipo/los-aromos-119?place=ChIJkWPWyNE8Y5YR-BvSse_dydI'
                target='_blank'
                rel='noreferrer'
                title='Waze'
                className='flex justify-center items-center mr-2 p-2 bg-westar-50 rounded-md transition-all hover:bg-westar-100'
              >
                <FaWaze />
              </a>
              <a
                href='https://goo.gl/maps/KdQi7Jr9bEUFZCCu7'
                target='_blank'
                rel='noreferrer'
                title='Google Maps'
                className='flex justify-center items-center p-2 bg-westar-50 rounded-md transition-all hover:bg-westar-100'
              >
                <FaMapMarkerAlt />
              </a>
            </div>
          </address>
        </div>
        <div className='bg-westar-100 p-4 rounded-md'>
          <h5 className='font-normal text-xl'>Llegó el día. ¡Te esperamos!</h5>
        </div>
      </div>

      <div className='absolute -bottom-24 z-10'>
        <Image
          src={img7}
          alt='Tamy & Mauro'
          placeholder='blur'
          width={516}
          height={183}
        />
      </div>
    </section>
  )
}
