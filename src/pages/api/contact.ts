import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { name, email, body } = req.body;

    if (!name || !email || !body) {
      return res.status(400).json({ error: 'All fields are required.' });
    }

    // Simulate saving the data or sending an email
    console.log('Received contact form submission:', { name, email, body });

    return res.status(200).json({ message: 'Form submitted successfully.' });
  } else {
    res.setHeader('Allow', ['POST']);
    return res.status(405).json({ error: `Method ${req.method} not allowed.` });
  }
}
