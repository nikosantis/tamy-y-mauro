import Image from 'next/future/image'

import bannerImg from 'public/images/banner.jpg'
import FlowerTop from 'components/vectors/flower-top'
import FlowerBottom from 'components/vectors/flower-bottom'
import Logo from 'components/logo'

export default function Intro() {
  return (
    <section className='w-full h-screen relative z-0 flex justify-center items-center'>
      <Image
        src={bannerImg}
        alt='Tamy & Mauro'
        placeholder='blur'
        fill
        sizes='100vw'
        className='object-cover z-0'
      />
      <div className='absolute w-full h-full bg-lunar-900/10' />

      <div className='w-full z-10 flex flex-col justify-center items-center'>
        <div className='mb-4'>
          <FlowerTop height={30} />
        </div>
        <div>
          <h1 className='font-play text-white text-center italic text-xl mb-6'>
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
          <FlowerBottom height={30} />
        </div>
      </div>
    </section>
  )
}
