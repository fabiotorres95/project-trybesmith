import sinon from 'sinon';
import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import loginMock from '../../mocks/login.mock';

import app from '../../../src/app'

chai.use(chaiHttp);

describe('POST /login', function () { 
  beforeEach(function () { sinon.restore(); });

  it('Retorna um erro ao não passar o nome de usuário', async function () {
    const body = loginMock.loginBodyNoUser;

    const response = await chai.request(app).post('/login').send(body);

    expect(response.status).to.equal(400);
    expect(response.body).to.be.deep.equal({ message: '"username" and "password" are required' })
  })
});
