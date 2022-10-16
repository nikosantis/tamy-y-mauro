import { useRef } from 'react'
import {
  createContext,
  ReactNode,
  SyntheticEvent,
  useCallback,
  useContext,
  useMemo,
  useState
} from 'react'
import { z } from 'zod'

interface FormContext {
  isFormValid: boolean
  isLoading?: boolean
}

const FormContext = createContext<FormContext>({} as FormContext)

type InputValues = Record<string, { value: unknown }>

type UseFormProps<TFormInputValues extends InputValues = InputValues> = {
  inputValues: TFormInputValues
  options?: {
    schema?: z.ZodTypeAny
  }
}

export function useForm<TFormInputValues extends InputValues = InputValues>({
  inputValues,
  options = {}
}: UseFormProps<TFormInputValues>) {
  const [isFormValid, setFormValid] = useState(false)
  const formRef = useRef<HTMLFormElement>(null)

  const handleSubmit = useCallback((e: SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formTargets = e.target as typeof e.target & TFormInputValues
    return formTargets
  }, [])

  const onInput = useCallback(async () => {
    if (formRef.current) {
      try {
        const elements = formRef.current.elements
        const formInputValuesKeys = Object.keys(inputValues)
        let formElements: Record<string, string> = {}
        formInputValuesKeys.forEach(ivkeys => {
          formElements = {
            ...formElements,
            [ivkeys]: (elements.namedItem(ivkeys) as HTMLInputElement).value
          }
        })
        if (
          formElements &&
          Object.keys(formElements).length === formInputValuesKeys.length &&
          options &&
          options.schema
        ) {
          const { success } = await options.schema.safeParseAsync(formElements)
          setFormValid(success)
        }
      } catch (err) {
        throw new Error(
          'Uno de los id de los inputs no corresponde al proporcionado a useForm'
        )
      }
    }
  }, [options, inputValues])

  const providerProps = useMemo(() => ({ isFormValid }), [isFormValid])

  const result = useMemo(() => {
    return [
      {
        formProps: {
          onInput,
          ref: formRef
        },
        handleSubmit,
        isValid: isFormValid
      },
      providerProps
    ] as const
  }, [onInput, handleSubmit, isFormValid, providerProps])

  return result
}

type FormProviderProps = {
  children: ReactNode
  isFormValid: boolean
  isLoading?: boolean
}

export function FormProvider({
  children,
  isFormValid,
  isLoading
}: FormProviderProps) {
  return (
    <FormContext.Provider value={{ isFormValid, isLoading }}>
      {children}
    </FormContext.Provider>
  )
}

export function useInnerForm() {
  const context = useContext(FormContext)
  if (context === undefined) {
    throw new Error('useInnerForm must be used within a FormProvider')
  }
  return context
}
