import { Request, Response } from 'express';
import loginService from '../services/login.service';

async function newLogin(req: Request, res: Response) {
  const { username, password } = req.body;

  const result = await loginService.postNewLogin(username, password);

  if (result === 'Username or password invalid') {
    return res.status(401).json({ message: result });
  }

  return res.status(200).json({ token: result });
}

export default {
  newLogin,
};