import { z } from 'zod'

export const nameSchema = z
  .string({
    required_error: 'El nombre es requerido',
    invalid_type_error: ' '
  })
  .min(1, 'El nombre es requerido')

export const emailSchema = z
  .string({
    required_error: 'El correo electrónico es requerido',
    invalid_type_error: ' '
  })
  .min(1, 'El correo electrónico es requerido')
  .email({ message: 'Debe ser un correo electrónico válido' })

export const relationSchema = z
  .string({
    required_error: 'También es requerido es requerido',
    invalid_type_error: ' '
  })
  .min(1, 'También es requerido es requerido')

export const messageSchema = z.string().optional()

export const formSchema = z.object({
  'form-name': nameSchema,
  'form-email': emailSchema,
  'form-relation': relationSchema,
  'form-message': messageSchema
})
