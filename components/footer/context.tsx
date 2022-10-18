import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useState
} from 'react'

interface ContactFormContext {
  isLoading: boolean
  setLoading: Dispatch<SetStateAction<boolean>>
  isSuccess: boolean
  setSuccess: Dispatch<SetStateAction<boolean>>
  errorMessage: string | null
  setError: Dispatch<SetStateAction<string | null>>
}

const ContactFormContext = createContext<ContactFormContext>(
  {} as ContactFormContext
)

type ContactFormProviderProps = {
  children: ReactNode
}

export function ContactFormProvider({ children }: ContactFormProviderProps) {
  const [isLoading, setLoading] = useState(false)
  const [isSuccess, setSuccess] = useState(false)
  const [errorMessage, setError] = useState<string | null>(null)

  return (
    <ContactFormContext.Provider
      value={{
        isLoading,
        setLoading,
        isSuccess,
        setSuccess,
        errorMessage,
        setError
      }}
    >
      {children}
    </ContactFormContext.Provider>
  )
}

export function useContactForm() {
  const context = useContext(ContactFormContext)
  if (context === undefined) {
    throw new Error('useContactForm must be used within a ContactFormProvider')
  }
  return context
}
