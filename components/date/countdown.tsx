import { useCountdown } from 'lib/hooks/use-countdown'

export default function Countdown() {
  const [days, hours, minutes, seconds] = useCountdown()
  return (
    <div className='flex flex-col md:flex-row'>
      <div className='flex flex-col items-center md:mr-10 bg-westar-100 p-4 rounded-md mb-2 md:mb-0'>
        <div>
          <span className='font-brush text-4xl'>{days}</span>
        </div>
        <div>
          <span className='uppercase'>Días</span>
        </div>
      </div>

      <div className='flex flex-col items-center md:mr-10 bg-westar-100 p-4 rounded-md mb-2 md:mb-0'>
        <div>
          <span className='font-brush text-4xl'>{hours}</span>
        </div>
        <div>
          <span className='uppercase'>Horas</span>
        </div>
      </div>

      <div className='flex flex-col items-center md:mr-10 bg-westar-100 p-4 rounded-md mb-2 md:mb-0'>
        <div>
          <span className='font-brush text-4xl'>{minutes}</span>
        </div>
        <div>
          <span className='uppercase'>Minutos</span>
        </div>
      </div>

      <div className='flex flex-col items-center bg-westar-100 p-4 rounded-md'>
        <div>
          <span className='font-brush text-4xl'>{seconds}</span>
        </div>
        <div>
          <span className='uppercase'>Segundos</span>
        </div>
      </div>
    </div>
  )
}
