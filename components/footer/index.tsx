import Image from 'next/future/image'

import footerImg from 'public/images/footer.jpg'

export default function Footer() {
  return (
    <footer className='w-full relative pt-16'>
      <Image
        src={footerImg}
        alt='Tamy & Mauro'
        placeholder='blur'
        fill
        sizes='100vw'
        className='object-cover z-0'
      />
      <div className='container mx-auto px-4 md:px-0 z-10 relative flex flex-col items-center'>
        <div className='w-full md:w-6/12 mb-8'>
          <div className='w-full h-[700px] bg-white'></div>
        </div>

        <div className='w-full flex justify-center py-4'>
          <p className='text-center text-white text-sm font-light'>
            <strong>Tamy & Mauro</strong> <span className='text-xs'>♥</span>{' '}
            2022
          </p>
        </div>
      </div>
    </footer>
  )
}
