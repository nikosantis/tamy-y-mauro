import { ReactElement } from 'react'
import cx from 'clsx'
import Image, { StaticImageData } from 'next/future/image'

type TimeProps = {
  icon: ReactElement
  direction: 'left' | 'right'
  title: string
  subtitle: string
  content: string
  extraContent?: string
  className?: string
  src: StaticImageData
}

export default function Time({
  icon,
  direction,
  title,
  subtitle,
  content,
  extraContent,
  className,
  src
}: TimeProps) {
  const image = (
    <div
      className={cx(
        'hidden md:block w-4/12',
        direction === 'left' ? 'md:pr-12' : 'md:pl-12'
      )}
    >
      <div className='h-[200px] w-full bg-lunar-700 relative'>
        <Image
          src={src}
          alt={title}
          placeholder='blur'
          fill
          sizes='100vw'
          className='object-cover'
        />
      </div>
    </div>
  )
  const text = (
    <div className={cx('w-4/12', direction === 'left' ? 'pl-12' : 'pr-12')}>
      <h3 className='font-brush text-4xl text-coral-700 mb-5'>{title}</h3>
      <h4 className='text-lunar-300 font-light text-sm mb-2'>{subtitle}</h4>
      <p className='font-light text-sm text-lunar-400'>
        {content}
        {extraContent && (
          <>
            <br />
            {extraContent}
          </>
        )}
      </p>
    </div>
  )
  return (
    <div className={cx('flex justify-center items-center', className)}>
      {direction === 'left' ? image : text}
      <div className='flex relative w-2/12 justify-center items-center'>
        <div className='bg-lunar-100 w-1 h-[400px]' />
        <div className='bg-lunar-100 w-16 h-16 rounded-full absolute flex justify-center items-center'>
          <span className='text-lunar-500 animate-pulse'>{icon}</span>
        </div>
      </div>
      {direction === 'left' ? text : image}
    </div>
  )
}
