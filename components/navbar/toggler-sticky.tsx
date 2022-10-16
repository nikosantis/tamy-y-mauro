import cx from 'clsx'

import { useNavbarSticky } from './context'

type NavbarMobileProps = {
  isSticky?: boolean
}

export default function TogglerSticky() {
  const { showSticky, setShowSticky } = useNavbarSticky()
  return (
    <>
      <button
        className='flex flex-col lg:hidden'
        onClick={() => setShowSticky(prev => !prev)}
      >
        <div
          className={cx(
            'relative w-[40px] h-[40px] flex flex-col justify-center'
          )}
        >
          <span
            className={cx(
              'w-full mb-[6px] rounded transition-all',
              showSticky ? 'opacity-0 h-[1px]' : 'opacity-100 h-[4px]',
              'bg-lunar-900'
            )}
          />
          <span
            className={cx(
              'w-full h-[4px] mb-[6px] rounded transition-all',
              showSticky
                ? 'rotate-[45deg] absolute top-5 left-0 right-0'
                : 'rotate-0',
              'bg-lunar-900'
            )}
          />
          <span
            className={cx(
              'w-full h-[4px] rounded transition-all',
              showSticky
                ? '-rotate-[45deg] absolute top-5 left-0 right-0'
                : 'rotate-0',
              'bg-lunar-900'
            )}
          />
        </div>
      </button>
    </>
  )
}
