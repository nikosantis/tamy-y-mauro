import type { NextApiRequest, NextApiResponse } from 'next'
import sgMail, { MailDataRequired } from '@sendgrid/mail'

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

type RequestBody = {
  name: string
  email: string
  relation: string
  message?: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { method } = req
  if (method !== 'POST') {
    res.setHeader('Allow', ['POST'])
    return res.status(405).end(`Method ${method} Not Allowed`)
  }
  try {
    const { name, email, relation, message } = req.body as RequestBody
    const emailBody: MailDataRequired = {
      from: 'matritamymauro@gmail.com',
      to: 'matritamymauro@gmail.com',
      templateId: 'd-6e033c7003384dc0b28c008fcbeb6865',
      cc: 'tamara.silva@usach.cl',
      dynamicTemplateData: {
        form_name: name,
        form_email: email,
        form_relation: relation,
        form_message: message,
        form_date: new Date().toLocaleString()
      }
    }

    const [response] = await sgMail.send(emailBody)
    if (response.statusCode === 202) {
      return res.status(202).json({
        sucess: true,
        message: 'Email sent'
      })
    } else {
      return res.status(400).json({
        sucess: false,
        message: 'Error sending email'
      })
    }
  } catch (err) {
    const _error = err as Error
    return res.status(400).json({
      success: false,
      message: _error.message
    })
  }
}
