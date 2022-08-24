const Express = require('../../../serviceHost').Express;
const router = Express.router();
const BillPolicy = require('./business');

router.post('/', function(req, res) {
  try {
    BillPolicy.updateBillPolicy(req).then(data => {
      res.send(data);
    })
  } catch (error) {
    res.send(error);
  }
})

module.exports = router;