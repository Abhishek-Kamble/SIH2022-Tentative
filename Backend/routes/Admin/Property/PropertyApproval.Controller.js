const Express = require('../../../serviceHost').Express;
const router = Express.router();
const propertyApproval = require('./PropertyApproval');

router.post('/', function(req, res) {
  try {
    propertyApproval.Approval(req).then(data => {
      res.send(data);
    })
  } catch (error) {
    res.send(error);
  }
})

module.exports = router;