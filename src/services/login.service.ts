import UserModel from '../database/models/user.model';

async function postNewLogin(username: string, _password: string) : Promise<string> {
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