import { createContext, RefObject, ReactNode, useContext, useRef } from 'react'

interface HeaderContext {
  startRef: RefObject<HTMLDivElement>
  whereRef: RefObject<HTMLDivElement>
  storyRef: RefObject<HTMLDivElement>
  galleryRef: RefObject<HTMLDivElement>
  giftsRef: RefObject<HTMLDivElement>
  attendanceRef: RefObject<HTMLDivElement>
}

const HeaderContext = createContext<HeaderContext>({} as HeaderContext)

type HeaderProviderProps = {
  children: ReactNode
}

export function HeaderProvider({ children }: HeaderProviderProps) {
  const startRef = useRef<HTMLDivElement>(null)
  const whereRef = useRef<HTMLDivElement>(null)
  const storyRef = useRef<HTMLDivElement>(null)
  const galleryRef = useRef<HTMLDivElement>(null)
  const giftsRef = useRef<HTMLDivElement>(null)
  const attendanceRef = useRef<HTMLDivElement>(null)

  return (
    <HeaderContext.Provider
      value={{
        startRef,
        whereRef,
        storyRef,
        galleryRef,
        giftsRef,
        attendanceRef
      }}
    >
      {children}
    </HeaderContext.Provider>
  )
}

export function useHeader() {
  const context = useContext(HeaderContext)
  if (context === undefined) {
    throw new Error('useHeader must be used within a HeaderProvider')
  }
  return context
}
