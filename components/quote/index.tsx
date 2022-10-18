import Image from 'next/future/image'

import quoteImg from 'public/images/quote.jpg'

export default function Quote() {
  return (
    <section className='w-full relative flex flex-col items-center bg-westar-200 py-36 md:py-96'>
      <Image
        src={quoteImg}
        alt='Tamy & Mauro'
        placeholder='blur'
        fill
        sizes='100vw'
        className='object-cover z-0'
      />
      <div className='absolute w-full h-full bg-coral-800/40 z-10 top-0' />

      <div className='block w-full relative z-20'>
        <div className='mx-auto max-w-7xl px-4 md:px-8 text-center'>
          <p className='font-brush text-westar-200 text-4xl font-medium mb-6'>
            {'"'}Solo imagina lo precioso que puede ser arriesgarse y que todo
            salga bien.{'"'}
          </p>
          <p className='text-westar-300 text-xl font-medium'>Mario Benedetti</p>
        </div>
      </div>
    </section>
  )
}
