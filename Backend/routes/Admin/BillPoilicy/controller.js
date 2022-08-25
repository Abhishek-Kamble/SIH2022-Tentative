const Express = require('../../../serviceHost').Express;
const router = Express.Router();
const BillPolicy = require('./business');

router.post('/', function(req, res) {
  try {
    BillPolicy.addBillPolicy(req).then(data => {
      res.send(data);
    })
  } catch (error) {
    res.send(error);
  }
})

router.patch('/', function(req, res) {
  try {
    BillPolicy.updateBillPolicy(req).then(data => {
      res.send(data);
    })
  } catch (error) {
    res.send(error);
  }
})

router.get('/', function(req, res) {
  try {
    BillPolicy.getBillPolicies(req).then(data => {
      res.send(data);
    })
  } catch (error) {
    res.send(error);
  }
})

router.get('/:policy_year/:policy_type', function(req, res) {
  try {
    BillPolicy.getBillPolicy(req).then(data => {
      res.send(data);
    })
  } catch (error) {
    res.send(error);
  }
})


module.exports = router;