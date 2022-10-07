import { FaWaze, FaMapMarkerAlt } from 'react-icons/fa'

import dynamic from 'next/dynamic'
const Countdown = dynamic(() => import('components/date/countdown'), {
  ssr: false
})

export default function WeddingDate() {
  return (
    <section className='w-full bg-westar-300 py-28'>
      <div className='w-full flex flex-col items-center justify-center'>
        <h2 className='font-brush text-3xl md:text-5xl mb-6 text-center'>
          18 de febrero, 2023
        </h2>
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
        <Countdown />
      </div>
    </section>
  )
}
