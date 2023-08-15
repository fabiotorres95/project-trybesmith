const goodUsername = 'Hagar';
const goodPassword = '$2a$10$i6MktJDbpj01fisUaPSW3OuVdZy01ID7SjxzAKfogvhOE2QwomO.C';
const badUsername = 'Asterix';
const badPassword = 'XablauXablauXablauXablauXablau';

const goodUser = {
  id: 1,
  username: goodUsername,
  vocation: 'Guerreiro',
  level: 10,
  password: goodPassword,
};

const loginBodyNoUser = { username: undefined, password: goodPassword };
const loginBodyNoPassword = { username: goodUsername, password: undefined };
const loginBodyBadUser = { username: badUsername, password: goodPassword };
const loginBodyBadPassword = { username: goodUsername, password: badPassword};
const loginBodyGood = { username: goodUsername, password: goodPassword };

export default {
  loginBodyNoUser,
  loginBodyNoPassword,
  loginBodyBadUser,
  loginBodyBadPassword,
  goodUser,
  loginBodyGood,
}