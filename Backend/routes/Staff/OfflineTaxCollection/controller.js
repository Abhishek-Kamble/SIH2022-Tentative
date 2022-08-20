const Express = require('../../../serviceHost').Express
const router = Express.Router();
const payoffLine = require('./payOffline')
const getPaymentDetails = require('./getPaymentDetails');

router.post('/', async (req, res, next) => {
    try {
      payoffLine.payoffline
      
    } catch (err) {
        res.status(400).send(err);
    }
})

router.get('/', async(req, res) => {
  try {
    getPaymentDetails()    
  } catch (error) {
    res.status(404).send("Not found ", error)
  }
})

module.exports = router


