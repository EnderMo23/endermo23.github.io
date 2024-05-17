import { NextApiRequest, NextApiResponse } from 'next';

export async function set(req: NextApiRequest, res: NextApiResponse) {
    try {
        const { username, email, password } = req.body;
    
        res.setHeader('Set-Cookie', [
          `username=${username}; Path=/; SameSite=Lax; Secure`,
          `email=${email}; Path=/; SameSite=Lax; Secure`,
          `password=${password}; Path=/; SameSite=Lax; Secure`,
        ]);
    
        res.status(200).json({ message: 'Cookies gesetzt' });
      } catch (error) {
        console.error('Fehler beim Setzen der Cookies:', error);
        res.status(500).json({ error: 'Internal Server Error' });
      }
}