const Express = require('../../serviceHost').Express
const router = Express.Router();
const business = require('./business');

router.get('/', async (req, res, next) => {
  try {
    await business.verification(req).then((data) => {
      res.send(data);
    }).catch((err) => {
      res.send(err.message);
    })

  } catch (err) {
    res.status(400).send(err);
  }
})



module.exports = router;