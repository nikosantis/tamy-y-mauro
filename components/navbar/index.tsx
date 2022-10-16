import { RefObject } from 'react'
import { FaHeart } from 'react-icons/fa'
import cx from 'clsx'

import { useHeader } from 'components/header/context'

type NavbarProps = {
  isSticky?: boolean
}

export default function Navbar({ isSticky }: NavbarProps) {
  const { startRef, whereRef, storyRef, galleryRef, giftsRef, attendanceRef } =
    useHeader()

  const handleScroll = (to: RefObject<HTMLDivElement>) => {
    if (to.current) {
      to.current.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
        inline: 'start'
      })
    }
  }
  return (
    <nav role='navigation' className='hidden lg:flex lg:items-center h-full'>
      <button
        className={cx(
          'h-full uppercase font-semibold text-xs px-3 inline-flex items-center',
          isSticky ? 'text-lunar-900' : 'text-westar-50'
        )}
        onClick={() => handleScroll(startRef)}
      >
        Inicio
      </button>
      <div className='h-full flex items-center px-1'>
        <Heart />
      </div>
      <button
        className={cx(
          'h-full uppercase font-semibold text-xs px-3 inline-flex items-center',
          isSticky ? 'text-lunar-900' : 'text-westar-50'
        )}
        onClick={() => handleScroll(whereRef)}
      >
        Dónde y Cuándo
      </button>
      <div className='h-full flex items-center px-1'>
        <Heart />
      </div>
      <button
        className={cx(
          'h-full uppercase font-semibold text-xs px-3 inline-flex items-center',
          isSticky ? 'text-lunar-900' : 'text-westar-50'
        )}
        onClick={() => handleScroll(storyRef)}
      >
        Nuestra Historia
      </button>
      <div className='h-full flex items-center px-1'>
        <Heart />
      </div>
      <button
        className={cx(
          'h-full uppercase font-semibold text-xs px-3 inline-flex items-center',
          isSticky ? 'text-lunar-900' : 'text-westar-50'
        )}
        onClick={() => handleScroll(galleryRef)}
      >
        Nuestros Momentos
      </button>
      <div className='h-full flex items-center px-1'>
        <Heart />
      </div>
      <button
        className={cx(
          'h-full uppercase font-semibold text-xs px-3 inline-flex items-center',
          isSticky ? 'text-lunar-900' : 'text-westar-50'
        )}
        onClick={() => handleScroll(giftsRef)}
      >
        Regalos
      </button>
      <div className='h-full flex items-center px-1'>
        <Heart />
      </div>
      <button
        className={cx(
          'h-full uppercase font-semibold text-xs px-3 inline-flex items-center',
          isSticky ? 'text-lunar-900' : 'text-westar-50'
        )}
        onClick={() => handleScroll(attendanceRef)}
      >
        Confirma tu asistencia
      </button>
    </nav>
  )
}

function Heart() {
  return <FaHeart className='text-xanadu-500' size={7} />
}
