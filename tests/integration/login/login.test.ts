import sinon from 'sinon';
import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import loginMock from '../../mocks/login.mock';

import app from '../../../src/app'
import UserModel from '../../../src/database/models/user.model';

chai.use(chaiHttp);

describe('POST /login', function () { 
  beforeEach(function () { sinon.restore(); });

  it('Retorna um erro ao não passar o nome de usuário', async function () {
    const body = loginMock.loginBodyNoUser;

    const response = await chai.request(app).post('/login').send(body);

    expect(response.status).to.equal(400);
    expect(response.body).to.be.deep.equal({ message: '"username" and "password" are required' })
  })

  it('Retorna um erro ao não passar uma senha', async function () {
    const body = loginMock.loginBodyNoPassword;

    const response = await chai.request(app).post('/login').send(body);

    expect(response.status).to.equal(400);
    expect(response.body).to.be.deep.equal({ message: '"username" and "password" are required' });
  })

  it('Retorna um erro se o nome de usuário está errado', async function () {
    const body = loginMock.loginBodyBadUser;
    sinon.stub(UserModel, 'findAll').resolves([]);

    const response = await chai.request(app).post('/login').send(body);

    expect(response.status).to.equal(401);
    expect(response.body).to.be.deep.equal({ message: 'Username or password invalid' });
  })

  it('Retorna um erro se a senha está errada', async function () {
    const body = loginMock.loginBodyBadPassword;
    const mockGoodResponse = UserModel.build(loginMock.goodUser);
    sinon.stub(UserModel, 'findAll').resolves([mockGoodResponse])

    const response = await chai.request(app).post('/login').send(body);

    expect(response.status).to.equal(401);
    expect(response.body).to.be.deep.equal({ message: 'Username or password invalid' });
  })
});
