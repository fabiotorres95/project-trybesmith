import bcrypt from 'bcryptjs';
import UserModel from '../database/models/user.model';
import jwtUtil from '../utils/jwt.util';

async function postNewLogin(
  username: string | undefined, 
  password: string | undefined,
): Promise<string> {
  if (username === undefined || password === undefined) {
    return '"username" and "password" are required';
  }

  const dbUser = await UserModel.findAll({ where: { username } });
  
  if (dbUser.length === 0) {
    return 'Username or password invalid';
  }

  const hash = dbUser[0].dataValues.password;
  const isPasswordValid = await bcrypt.compare(password, hash);

  if (!isPasswordValid) {
    return 'Username or password invalid';
  }
  
  const token = jwtUtil.sign({ id: dbUser[0].dataValues.id, username });
  return token;
}

export default {
  postNewLogin,
};