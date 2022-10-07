import { useEffect, useState } from 'react'

const baseDate = new Date('02-18-2023')
const countDownDate = baseDate.getTime()

export function useCountdown() {
  const [countDown, setCountDown] = useState(
    () => countDownDate - new Date().getTime()
  )

  useEffect(() => {
    const interval = setInterval(() => {
      setCountDown(countDownDate - new Date().getTime())
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  return getDateValues(countDown)
}

function getDateValues(countDown: number) {
  const days = Math.floor(countDown / (1000 * 60 * 60 * 24))
  const hours = Math.floor(
    (countDown % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  )
  const minutes = Math.floor((countDown % (1000 * 60 * 60)) / (1000 * 60))
  const seconds = Math.floor((countDown % (1000 * 60)) / 1000)

  return [days, hours, minutes, seconds]
}
