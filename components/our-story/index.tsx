import Image from 'next/future/image'

import topImage from 'public/images/550-ai.png'
import Logo from 'components/logo'
import Story from './story'

export default function OurHistory() {
  return (
    <section className='w-full relative flex flex-col items-center bg-westar-50 py-24'>
      <div className='absolute -top-4 md:-top-10 w-[200px] h-[33px] md:w-[400px] md:h-[66px]'>
        <Image
          src={topImage}
          alt='Tamy & Mauro'
          placeholder='blur'
          fill
          sizes='100vw'
          className='object-cover z-0'
        />
      </div>

      <h2 className='font-brush text-5xl mb-12'>Nuestra Historia</h2>

      <div className='container mx-auto px-4 md:px-0 flex md:justify-center items-center mb-16'>
        <div className='w-[100px] md:w-1/3'>
          <div className='w-[100px] h-[100px] md:w-[300px] md:h-[300px] bg-xanadu-500 rounded-full'></div>
        </div>
        <div className='flex-1 flex justify-center md:w-1/3 md:mx-24'>
          <Logo className='[&>path]:fill-black w-[120px] md:w-[300px]' />
        </div>
        <div className='w-[100px] md:w-1/3'>
          <div className='w-[100px] h-[100px] md:w-[300px] md:h-[300px] bg-xanadu-500 rounded-full'></div>
        </div>
      </div>

      <Story />
    </section>
  )
}
