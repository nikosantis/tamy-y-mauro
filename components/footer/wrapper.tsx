import { ReactNode, SyntheticEvent } from 'react'

import { useForm, FormProvider } from 'lib/hooks/use-form'

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
  const [{ formProps, handleSubmit }, providerProps] = useForm<FormValues>({
    inputValues: {
      'form-name': { value: '' },
      'form-email': { value: '' },
      'form-relation': { value: '' },
      'form-message': { value: '' }
    }
  })

  const handleFormSubmit = (e: SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault()
    const targets = handleSubmit(e)
    const formData = {
      name: targets['form-name'].value,
      email: targets['form-email'].value,
      relation: targets['form-relation'].value,
      message: targets['form-message'].value
    }
    console.log(formData)
  }
  return (
    <form
      onSubmit={handleFormSubmit}
      {...formProps}
      className='w-full flex flex-col'
    >
      <FormProvider {...providerProps}>{children}</FormProvider>
    </form>
  )
}
