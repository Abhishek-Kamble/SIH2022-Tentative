const Express = require('../../serviceHost').Express
const router = Express.Router();
const newRegistration = require('./newRegistration');
const getDetails = require('./getDetails');
const calcualte = require('./calcualte');
const getDocument = require('./getDocument');

router.get('/calculate', async (req, res) => {
  try {
    console.log('calculate')
    await calcualte.calcualte(req).then((data) => {
      res.send(data);
    }).catch(err => {
      console.log(err)
      res.status(400).send(err);
    });
  } catch (err) {
    console.log(err);
    res.status(404).send(err)
  }
})
router.get('/details/', async (req, res) => {
  try {
    await getDetails.details(req).then((data) => {
      res.send(data);
    }).catch((err) => {
      console.log(err);
      res.status(400).send(err)
    })
  } catch (e) {
    console.log(err);
    res.status(400).send(err);
  }
})

router.post('/register/', async (req, res, next) => {
  try {
    if (req.decoded.role != '5') {
      res.send({ done: 0, message: 'unauthorized user' })
    } else {
      req.body.user_id = req.decoded.userid;
      await newRegistration.registration(req).then((data) => {
        res.send(data);
      }).catch((err) => {
        res.send(err);
      })
    }


  } catch (err) {
    console.log(err);
    res.status(400).send(err);
  }
})

router.get('/get-document/:docId', async(req, res) => {
  try {
    if(req.decoded.role == '1' || req.decoded.role == '2'){
      await getDocument.get_document(req).then((data) => {
        res.send(data);
      }).catch((err) => {
        res.send(err);
      })
    }else{
      res.status(400).send("Unauthorised Connection!");
    }

  } catch (error) {
    res.status(403).send(err);
  }
})


module.exports = router;