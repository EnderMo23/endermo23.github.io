'use server'

import { cookies } from 'next/headers'
import { NextApiRequest, NextApiResponse } from 'next';

export function handler(req: NextApiRequest, res: NextApiResponse) {
  if(req.method === 'POST') {
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
  }
}

  /*if (!existingCookie) {
    // Setze das Cookie nur, wenn es nicht existiert oder der Wert anders ist
    cookies().set('username', "test", {
      sameSite: 'none', // oder 'Lax' oder 'Strict' je nach Bedarf
      secure: true // Muss gesetzt sein, wenn SameSite auf 'None' gesetzt wird
    });
    cookies().set('password', 'test', {
      sameSite: 'none', // oder 'Lax' oder 'Strict' je nach Bedarf
      secure: true // Muss gesetzt sein, wenn SameSite auf 'None' gesetzt wird
    });
    cookies().set('email', 'test', {
      sameSite: 'none', // oder 'Lax' oder 'Strict' je nach Bedarf
      secure: true // Muss gesetzt sein, wenn SameSite auf 'None' gesetzt wird
    });
    console.log("Cookie gesetzt oder aktualisiert.");
  } else {
    console.log("Cookie existiert bereits und ist aktuell.");
  }
}*/