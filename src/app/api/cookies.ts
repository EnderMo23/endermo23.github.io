import {set} from './set-cookies';
import { NextApiRequest, NextApiResponse } from 'next';

export async function setCookies(req: NextApiRequest, res: NextApiResponse) {
    await set(req, res);
}