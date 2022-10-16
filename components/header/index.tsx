import cx from 'clsx'

import Logo from 'components/logo'
import NavbarMobile from 'components/navbar/mobile'
import Navbar from 'components/navbar'
import Sticky from './sticky'
import MobileContent from 'components/navbar/mobile-content'

export default function Header() {
  return (
    <>
      <header
        className={cx(
          'absolute border-b-[.5px] border-b-westar-50 z-10 top-0 w-full',
          'bg-lunar-500/20',
          'h-20 flex items-center flex-col'
        )}
      >
        <div className='w-full px-4 lg:px-10 h-full flex justify-between items-center'>
          <div className='flex items-center'>
            <button>
              <Logo height={55} className='text-white' />
            </button>
          </div>

          <Navbar />
          <NavbarMobile />
        </div>
      </header>
      <MobileContent />
      <Sticky />
    </>
  )
}
