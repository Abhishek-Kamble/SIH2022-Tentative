const Express = require('../../../serviceHost').Express;
const router = Express.Router();
const taxrate = require('./business');

router.post('/', function(req, res) {
  try {
    taxrate.addtaxrate(req).then(data => {
      res.send(data);
    }).catch((err) => {
      res.send(err);
    })
  } catch (error) {
    res.send(error);
  }
})

router.patch('/', function(req, res) {
  try {
    taxrate.updatetaxrate(req).then(data => {
      res.send(data);
    }).catch((err) => {
      res.send(err);
    })
  } catch (error) {
    res.send(error);
  }
})

router.get('/', function(req, res) {
  try {
    taxrate.getBillPolicies(req).then(data => {
      res.send(data);
    }).catch((err) => {
      res.send(err);
    })
  } catch (err) {
    console.log(error);
    res.send({done:0, message:err});
  }
})

router.get('/:policy_year/:policy_type', function(req, res) {
  try {
    taxrate.gettaxrate(req).then(data => {
      res.send(data);
    }).catch((err) => {
      res.send({done:0, message:err});
    })
  } catch (error) {
    res.send(error);
  }
})


module.exports = router;