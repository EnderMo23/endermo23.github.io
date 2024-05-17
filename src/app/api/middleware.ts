'use server'

import { cookies } from 'next/headers'
import { NextApiRequest, NextApiResponse } from 'next';
import {setCookies} from './cookies';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    await setCookies(req, res)
    res.status(200).json({ success: true });
  }
  catch (error){
    console.error('Fehler beim Setzen der Cookies:', error);
  }
}


/*if(req.method === 'POST') {
  const {username, email, password} = req.body
  if(username & email && password) {
    cookies().set("username", username, {
      sameSite: 'none',
      secure: true
    });
    cookies().set("email", email, {
      sameSite: 'none',
      secure: true
    });
    cookies().set("password", password, {
      sameSite: 'none',
      secure: true
    });
    res.status(200).json({message: 'Set cookies'})
  }
  else {
    res.status(400).json({message: 'Error when setting cookies'})
  }
}*/