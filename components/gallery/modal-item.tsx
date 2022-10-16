import Image, { StaticImageData } from 'next/future/image'
import { memo } from 'react'

type ModalItemProps = {
  src?: StaticImageData
}

function ModalItem({ src }: ModalItemProps) {
  if (src === undefined) return null
  return (
    <Image
      src={src}
      alt='Tamy y Mauro'
      placeholder='blur'
      fill
      sizes='100vw'
      className='object-cover'
    />
  )
}
export default memo(ModalItem)
