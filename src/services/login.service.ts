import UserModel from '../database/models/user.model';

async function postNewLogin(
  username: string | undefined, 
  password: string | undefined,
): Promise<string> {
  if (username === undefined || password === undefined) {
    return '"username" and "password" are required';
  }
  const dbUser = await UserModel.findAll({
    where: {
      username,
    },
  });

  if (dbUser.length === 0) {
    return 'Username or password invalid';
  }

  return 'token';
}

export default {
  postNewLogin,
};