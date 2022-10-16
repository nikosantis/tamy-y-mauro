import Image, { StaticImageData } from 'next/future/image'
import { useRef, useState } from 'react'
import { BsPlus } from 'react-icons/bs'

import Modal from './modal'

type GalleryItemProps = {
  index: number
  src: StaticImageData
}

export default function GalleryItem({ src, index }: GalleryItemProps) {
  const [showModal, setShow] = useState(false)
  const buttonRef = useRef<HTMLButtonElement | null>(null)
  return (
    <div className='w-full relative h-[250px]'>
      <button
        className='w-full h-full group relative flex cursor-none pointer-events-none md:cursor-zoom-in md:pointer-events-auto'
        onClick={() => setShow(true)}
        ref={buttonRef}
      >
        <div className='absolute z-10 w-full h-full transition-all opacity-0 group-hover:opacity-100 bg-black/20 flex justify-center items-center'>
          <BsPlus color='white' size={30} />
        </div>
        <Image
          src={src}
          alt='Tamy y Mauro'
          placeholder='blur'
          fill
          sizes='100vw'
          className='object-cover'
        />
      </button>

      <Modal show={showModal} onClose={() => setShow(false)} index={index} />
    </div>
  )
}
