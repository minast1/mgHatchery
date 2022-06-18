
import { NextApiRequest, NextApiResponse } from 'next';
import sgMail from '@sendgrid/mail';




export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({message: 'Hello from Next.js'})  
}