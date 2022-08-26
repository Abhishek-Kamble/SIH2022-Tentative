const Express = require('../../../serviceHost').Express;
const router = Express.Router();
const Generate = require('./generate');

router.post('/', function(req, res) {
  try {
    Generate.create(req).then(data => {
      res.send(data);
    })
  } catch (error) {
    res.send(error);
  }
})

module.exports = router;