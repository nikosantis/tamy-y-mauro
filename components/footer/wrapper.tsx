import { ReactNode, SyntheticEvent } from 'react'

import { useForm, FormProvider } from 'lib/hooks/use-form'
import { useContactForm } from './context'
import { formSchema } from './schema'

type FormValues = {
  'form-name': { value: string }
  'form-email': { value: string }
  'form-relation': { value: string }
  'form-message': { value: string }
}

type FormWrapperProps = {
  children: ReactNode
}

export default function FormWrapper({ children }: FormWrapperProps) {
  const { setLoading, setError, setSuccess, isLoading } = useContactForm()
  const [{ formProps, handleSubmit }, providerProps] = useForm<FormValues>({
    inputValues: {
      'form-name': { value: '' },
      'form-email': { value: '' },
      'form-relation': { value: '' },
      'form-message': { value: '' }
    },
    options: {
      schema: formSchema
    }
  })

  const handleFormSubmit = async (e: SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault()
    const targets = handleSubmit(e)
    const formData = {
      name: targets['form-name'].value,
      email: targets['form-email'].value,
      relation: targets['form-relation'].value,
      message: targets['form-message'].value
    }
    try {
      setLoading(true)
      setError(null)
      setSuccess(false)
      const res = await fetch('/api/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      })
      const resJson = await res.json()
      if (res.ok && resJson) {
        setLoading(false)
        setError(null)
        setSuccess(true)
      }
    } catch (err) {
      setLoading(false)
      setSuccess(false)
      setError('Error al intentar enviar el formulario')
    }
  }
  return (
    <form
      onSubmit={handleFormSubmit}
      {...formProps}
      className='w-full flex flex-col'
    >
      <FormProvider {...providerProps} isLoading={isLoading}>
        {children}
      </FormProvider>
    </form>
  )
}
