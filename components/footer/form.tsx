import FormWrapper from './wrapper'
import Button from './button'
import Email from './email'
import Name from './name'
import Relation from './relation'
import Message from './message'
import ErrorMessage from './error'
import SuccessMessage from './success'

export default function Form() {
  return (
    <FormWrapper>
      <div className='w-full'>
        <div className='w-full flex flex-col md:flex-row'>
          <div className='w-full md:w-1/2 md:pr-4 mb-6 md:mb-6'>
            <Name />
          </div>

          <div className='w-full md:w-1/2 md:pl-4 mb-6 md:mb-0'>
            <Email />
          </div>
        </div>

        <div className='w-full mb-6 md:mb-8'>
          <Relation />
        </div>

        <div className='w-full mb-6 md:mb-6'>
          <Message />
        </div>
        <div className='w-full'>
          <Button />
        </div>
        <SuccessMessage />
        <ErrorMessage />
      </div>
    </FormWrapper>
  )
}
