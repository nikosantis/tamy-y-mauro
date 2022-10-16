import { useCallback, useMemo, useState } from 'react'
import { useIsoMorphicEffect } from './use-iso-morphic-effect'

export function useSticky(offset?: number) {
  const [isSticky, setSticky] = useState(false)

  const handleListener = useCallback(() => {
    if (window.pageYOffset > (offset || 0)) {
      setSticky(true)
    } else {
      setSticky(false)
    }
  }, [offset])

  useIsoMorphicEffect(() => {
    window.addEventListener('scroll', handleListener)
    return () => {
      window.removeEventListener('scroll', handleListener)
    }
  }, [])

  return useMemo(() => isSticky, [isSticky])
}
