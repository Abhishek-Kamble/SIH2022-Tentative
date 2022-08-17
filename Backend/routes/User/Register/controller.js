const Express = require('../../../serviceHost').Express
const router = Express.Router();
const business = require('./business');
const validate = require('./validation')

router.post('/', async (req, res, next) => {
  try {

    await validate(req).then(async () =>{
        await business.register(req).then((data) => {
            res.send(data);
          }).catch((err) => {
            res.send(err);
          })
    }).catch(err =>{
        res.send(err);
    })

  } catch (err) {
    console.log(err);
    res.status(400).send(err);
  }
})



module.exports = router;