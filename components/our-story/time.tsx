import { ReactElement } from 'react'
import cx from 'clsx'

type TimeProps = {
  icon: ReactElement
  direction: 'left' | 'right'
  title: string
  subtitle: string
  content: string
  extraContent?: string
  className?: string
}

export default function Time({
  icon,
  direction,
  title,
  subtitle,
  content,
  extraContent,
  className
}: TimeProps) {
  const image = (
    <div className={cx('w-4/12', direction === 'left' ? 'pr-24' : 'pl-24')}>
      <div className='h-[300px] w-full bg-lunar-700' />
    </div>
  )
  const text = (
    <div className={cx('w-4/12', direction === 'left' ? 'pr-32' : 'pl-32')}>
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
