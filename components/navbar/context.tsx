import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useState
} from 'react'

interface NavbarContext {
  show: boolean
  setShow: Dispatch<SetStateAction<boolean>>
}

const NavbarContext = createContext<NavbarContext>({} as NavbarContext)

interface NavbarStickyContext {
  showSticky: boolean
  setShowSticky: Dispatch<SetStateAction<boolean>>
}

const NavbarStickyContext = createContext<NavbarStickyContext>(
  {} as NavbarStickyContext
)

type NavbarProviderProps = {
  children: ReactNode
}

export function NavbarProvider({ children }: NavbarProviderProps) {
  const [show, setShow] = useState(false)
  const [showSticky, setShowSticky] = useState(false)

  return (
    <NavbarContext.Provider value={{ show, setShow }}>
      <NavbarStickyContext.Provider value={{ showSticky, setShowSticky }}>
        {children}
      </NavbarStickyContext.Provider>
    </NavbarContext.Provider>
  )
}

export function useNavbar() {
  const context = useContext(NavbarContext)
  if (context === undefined) {
    throw new Error('useNavbar must be used within a NavbarProvider')
  }
  return context
}

export function useNavbarSticky() {
  const context = useContext(NavbarStickyContext)
  if (context === undefined) {
    throw new Error('useNavbar must be used within a NavbarProvider')
  }
  return context
}
