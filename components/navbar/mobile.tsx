import cx from 'clsx'

import { useNavbar, useNavbarSticky } from './context'

type NavbarMobileProps = {
  isSticky?: boolean
}

export default function NavbarMobile({ isSticky }: NavbarMobileProps) {
  const { setShow, show } = useNavbar()
  const { showSticky } = useNavbarSticky()
  return (
    <>
      <button
        className='flex flex-col lg:hidden'
        onClick={() => setShow(prev => !prev)}
      >
        <div
          className={cx(
            'relative w-[40px] h-[40px] flex flex-col justify-center'
          )}
        >
          <span
            className={cx(
              'w-full mb-[6px] rounded transition-all',
              show || showSticky ? 'opacity-0 h-[1px]' : 'opacity-100 h-[4px]',
              isSticky ? 'bg-lunar-900' : 'bg-white'
            )}
          />
          <span
            className={cx(
              'w-full h-[4px] mb-[6px] rounded transition-all',
              show || showSticky
                ? 'rotate-[45deg] absolute top-5 left-0 right-0'
                : 'rotate-0',
              isSticky ? 'bg-lunar-900' : 'bg-white'
            )}
          />
          <span
            className={cx(
              'w-full h-[4px] rounded transition-all',
              show || showSticky
                ? '-rotate-[45deg] absolute top-5 left-0 right-0'
                : 'rotate-0',
              isSticky ? 'bg-lunar-900' : 'bg-white'
            )}
          />
        </div>
      </button>
    </>
  )
}
