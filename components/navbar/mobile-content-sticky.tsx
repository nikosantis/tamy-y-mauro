import { Fragment, RefObject } from 'react'
import { Transition } from '@headlessui/react'
import { useNavbarSticky } from './context'
import { useHeader } from 'components/header/context'

export default function MobileContentSticky() {
  const { showSticky, setShowSticky } = useNavbarSticky()
  const { startRef, whereRef, storyRef, galleryRef, giftsRef, attendanceRef } =
    useHeader()

  const handleScroll = (to: RefObject<HTMLDivElement>) => {
    if (to.current) {
      to.current.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
        inline: 'start'
      })
      setShowSticky(false)
    }
  }
  return (
    <Transition
      show={showSticky}
      enter='transition ease-out duration-300'
      enterFrom='transform opacity-0 scale-95'
      enterTo='transform opacity-100 scale-100'
      leave='transition ease-in duration-200'
      leaveFrom='transform opacity-100 scale-100'
      leaveTo='transform opacity-0 scale-95'
      as={Fragment}
      appear
      unmount
    >
      <nav
        role='navigation'
        className='lg:hidden flex flex-col items-center w-full bg-white py-4 absolute z-50 top-20 shadow-md'
      >
        <button
          className='h-full uppercase font-semibold text-xs px-3 py-3 inline-flex items-center text-lunar-900'
          onClick={() => handleScroll(startRef)}
        >
          Inicio
        </button>
        <div className='h-full flex items-center px-1'></div>
        <button
          className='h-full uppercase font-semibold text-xs px-3 py-3 inline-flex items-center text-lunar-900'
          onClick={() => handleScroll(whereRef)}
        >
          Dónde y Cuándo
        </button>
        <div className='h-full flex items-center px-1'></div>
        <button
          className='h-full uppercase font-semibold text-xs px-3 py-3 inline-flex items-center text-lunar-900'
          onClick={() => handleScroll(storyRef)}
        >
          Nuestra Historia
        </button>
        <div className='h-full flex items-center px-1'></div>
        <button
          className='h-full uppercase font-semibold text-xs px-3 py-3 inline-flex items-center text-lunar-900'
          onClick={() => handleScroll(galleryRef)}
        >
          Nuestros Momentos
        </button>
        <div className='h-full flex items-center px-1'></div>
        <button
          className='h-full uppercase font-semibold text-xs px-3 py-3 inline-flex items-center text-lunar-900'
          onClick={() => handleScroll(giftsRef)}
        >
          Regalos
        </button>
        <div className='h-full flex items-center px-1'></div>
        <button
          className='h-full uppercase font-semibold text-xs px-3 py-3 inline-flex items-center text-lunar-900'
          onClick={() => handleScroll(attendanceRef)}
        >
          Confirma tu asistencia
        </button>
      </nav>
    </Transition>
  )
}
