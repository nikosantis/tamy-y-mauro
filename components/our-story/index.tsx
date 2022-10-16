import Image from 'next/future/image'

import Logo from 'components/logo'
import Story from './story'

import tamyImg from 'public/images/tamy.jpg'
import mauroImg from 'public/images/mauro.jpg'
import img7 from 'public/images/utils/7.png'
import { useHeader } from 'components/header/context'

export default function OurHistory() {
  const { storyRef } = useHeader()
  return (
    <section
      className='w-full relative flex flex-col items-center bg-westar-50 py-24'
      ref={storyRef}
    >
      <div className='absolute -top-8 md:-top-10'>
        <Image
          src={img7}
          alt='Tamy & Mauro'
          placeholder='blur'
          width={100}
          height={65}
        />
      </div>

      <h2 className='font-brush text-5xl mb-12'>Nuestra Historia</h2>

      <div className='container mx-auto px-4 md:px-0 flex md:justify-center items-center mb-16'>
        <div className='w-[100px] md:w-1/3 flex md:justify-end'>
          <div className='w-[100px] h-[100px] md:w-[200px] md:h-[200px] lg:w-[300px] lg:h-[300px] rounded-full relative'>
            <Image
              src={tamyImg}
              alt='Tamy'
              placeholder='blur'
              fill
              sizes='100vw'
              className='object-cover rounded-full'
            />
          </div>
        </div>
        <div className='flex-1 flex justify-center md:w-1/3 md:mx-24'>
          <Logo className='[&>path]:fill-black w-[120px] lg:w-[300px]' />
        </div>
        <div className='w-[100px] md:w-1/3'>
          <div className='w-[100px] h-[100px] md:w-[200px] md:h-[200px] lg:w-[300px] lg:h-[300px] rounded-full relative'>
            <Image
              src={mauroImg}
              alt='Mauro'
              placeholder='blur'
              fill
              sizes='100vw'
              className='object-cover rounded-full'
            />
          </div>
        </div>
      </div>

      <Story />
    </section>
  )
}
