const Express = require('../../../serviceHost').Express
const router = Express.Router();
const business = require('./getRebates');

router.get('/:rebate_id', async (req, res) => {
  try {
    if (req.decoded.role != '1') {
      res.send({ message: 'unauthorized user' })
    } else {
      await business.delete(req).then((data) => {
        res.send(data);
      }).catch((err) => {
        res.send(err);
      })
    }
  } catch (error) {
    res.status(400).send(err);
  }
})

post

module.exports = router


