import sinon from 'sinon';
import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import OrderModel from '../../../src/database/models/order.model';
import ordersMock from '../../mocks/orders.mock';
import ProductModel from '../../../src/database/models/product.model';
import productsMock from '../../mocks/products.mock';
import app from '../../../src/app';

chai.use(chaiHttp);

describe('GET /orders', function () { 
  beforeEach(function () { sinon.restore(); });

  it('Retorna todos os pedidos cadastrados com sucesso', async function () {
    const product1DB = ProductModel.build(productsMock.product1);
    const product2DB = ProductModel.build(productsMock.product2);
    const product3DB = ProductModel.build(productsMock.product3);
    const order1DB = OrderModel.build(ordersMock.order1);
    const order2DB = OrderModel.build(ordersMock.order2);
    sinon.stub(ProductModel, 'findAll').resolves([
      product1DB,
      product2DB,
      product3DB,
    ]);
    sinon.stub(OrderModel, 'findAll').resolves([
      order1DB,
      order2DB,
    ])

    const response = await chai.request(app).get('/orders');

    expect (response.status).to.equal(200);
    expect (response.body).to.deep.equal(ordersMock.allOrders);
  })
});
