import cx from 'clsx'
import { FaHeart } from 'react-icons/fa'

import Logo from 'components/logo'

export default function Header() {
  return (
    <header
      className={cx(
        'absolute border-b-[.5px] border-b-westar-50 z-10 top-0 w-full',
        'bg-lunar-500/20',
        'h-20 flex items-center'
      )}
    >
      <div className='w-full px-10 h-full flex justify-between'>
        <div className='flex items-center'>
          <button>
            <Logo height={55} />
          </button>
        </div>

        <nav role='navigation' className='hidden md:flex h-full'>
          <button className='h-full uppercase font-semibold text-sm text-westar-50 px-3'>
            Inicio
          </button>
          <div className='h-full flex items-center px-1'>
            <Heart />
          </div>
          <button className='h-full uppercase font-semibold text-sm text-westar-50 px-3'>
            Dónde y Cuándo
          </button>
          <div className='h-full flex items-center px-1'>
            <Heart />
          </div>
          <button className='h-full uppercase font-semibold text-sm text-westar-50 px-3'>
            Nuestra Historia
          </button>
          <div className='h-full flex items-center px-1'>
            <Heart />
          </div>
          <button className='h-full uppercase font-semibold text-sm text-westar-50 px-3'>
            Regalos
          </button>
          <div className='h-full flex items-center px-1'>
            <Heart />
          </div>
          <button className='h-full uppercase font-semibold text-sm text-westar-50 px-3'>
            Confirma tu asistencia
          </button>
        </nav>
      </div>
    </header>
  )
}

function Heart() {
  return <FaHeart className='text-xanadu-500' size={7} />
}
