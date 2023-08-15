import sinon from 'sinon';
import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import ProductModel from '../../../src/database/models/product.model';
import productsMock from '../../mocks/products.mock';
import app from '../../../src/app';

chai.use(chaiHttp);

describe('GET /products', function () { 
  beforeEach(function () { sinon.restore(); });

  it('Retorna todos os produtos cadastrados com sucesso', async function () {
    const product1DB = ProductModel.build(productsMock.product1);
    const product2DB = ProductModel.build(productsMock.product2);
    const product3DB = ProductModel.build(productsMock.product3);
    sinon.stub(ProductModel, 'findAll').resolves([
      product1DB,
      product2DB,
      product3DB,
    ]);

    const response = await chai.request(app).get('/products');

    expect (response.status).to.equal(200);
    expect (response.body).to.deep.equal(productsMock.allProducts);
  })
});
