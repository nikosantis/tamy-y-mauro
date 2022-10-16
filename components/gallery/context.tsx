import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useState
} from 'react'

interface GalleryContext {
  showModal: boolean
  setShow: Dispatch<SetStateAction<boolean>>
}

const GalleryContext = createContext<GalleryContext>({} as GalleryContext)

type GalleryProviderProps = {
  children: ReactNode
}

export function GalleryProvider({ children }: GalleryProviderProps) {
  const [showModal, setShow] = useState(false)
  return (
    <GalleryContext.Provider value={{ showModal, setShow }}>
      {children}
    </GalleryContext.Provider>
  )
}

export function useGallery() {
  const context = useContext(GalleryContext)
  if (context === undefined) {
    throw new Error('useGallery must be used within a GalleryProvider')
  }
  return context
}
