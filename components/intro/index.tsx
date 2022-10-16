import Image from 'next/future/image'

import FlowerTop from 'components/vectors/flower-top'
import FlowerBottom from 'components/vectors/flower-bottom'
import Logo from 'components/logo'

import bannerImg from 'public/images/intro.webp'
import left from 'public/images/utils/9-left.png'
import right from 'public/images/utils/9-right.png'
import img7 from 'public/images/utils/7.png'

export default function Intro() {
  return (
    <section className='w-full h-screen relative z-0 flex justify-center items-center select-none'>
      <Image
        src={bannerImg}
        alt='Tamy & Mauro'
        placeholder='blur'
        fill
        sizes='100vw'
        className='object-cover z-0'
      />
      <div className='absolute w-full h-full bg-coral-800/20' />

      <div className='w-full z-10 flex flex-col justify-center items-center'>
        <div className='w-full flex justify-center'>
          <div className='w-3/12 flex relative justify-between'>
            <Image
              src={right}
              alt='Tamy & Mauro'
              placeholder='blur'
              width={150}
              height={116}
            />
            <Image
              src={left}
              alt='Tamy & Mauro'
              placeholder='blur'
              width={150}
              height={116}
            />
          </div>
        </div>
        <div>
          <h1 className='font-play text-white text-center italic text-3xl mb-6'>
            ¡Nos Casamos!<span className='hidden'> - Tamy & Mauro</span>
          </h1>
          <div className='hidden md:block'>
            <Logo />
          </div>
          <div className='block md:hidden'>
            <Logo width={200} />
          </div>
        </div>
        <div className='mt-4 mb-8'>
          <Image
            src={img7}
            alt='Tamy & Mauro'
            placeholder='blur'
            width={100}
            height={65}
          />
        </div>
      </div>
    </section>
  )
}
