const Express = require('../../serviceHost').Express
const router = Express.Router();
const setpassword = require('./set-password');

router.post('/', async (req, res, next) => {
  try {
    await setpassword.setPassword(req).then((data) => {
      res.send(data);
    }).catch((err) => {
      res.send(err.message);
    })

  } catch (err) {
    res.status(400).send(err);
  }
})



module.exports = router;