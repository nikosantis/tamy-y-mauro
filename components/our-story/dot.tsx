import cx from 'clsx'

type DotProps = {
  className?: string
}

export default function Dot({ className }: DotProps) {
  return (
    <div className={cx(className, 'flex md:justify-center')}>
      <div className='rounded-full w-5 h-5 flex justify-center items-center bg-lunar-100 animate-pulse'>
        <div className='rounded-full w-3 h-3 bg-lunar-500' />
      </div>
    </div>
  )
}
