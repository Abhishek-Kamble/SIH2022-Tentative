const Express = require('../../serviceHost').Express
const router = Express.Router();
const newRegistration = require('./newRegistration');

router.post('/', async (req, res, next) => {
  try {
    await newRegistration.registration(req).then((data) => {
      res.send(data);
    }).catch((err) => {
      res.send(err.message);
    })

  } catch (err) {
    console.log(err);
    res.status(400).send(err);
  }
})


module.exports = router;