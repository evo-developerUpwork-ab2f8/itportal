let chai = require('chai');
let chaiHttp = require('chaiHttp');
let inventoryController = require('../controllers/inventoryController.js');

chai.user(chaiHttp);

describe('/inventory', () => {
  it('should get the inventory page', (done) => {
    chai.request(server)
      .get('/inventory')
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a('array');
        res.body.length.should.be.eql(0);
      done();
      });
  });
});
