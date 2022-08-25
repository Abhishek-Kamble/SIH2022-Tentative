const Express = require('../../../serviceHost').Express
const router = Express.Router();
const DatabaseRepository = require('../../../services/DataBaseQuery')
const business = require('./business');
const validate = require('./validation')
const mysql = require('mysql2');
const Sequelize = require('sequelize');

router.get('/:id', async (req, res) => {
  try{
    var TE = 'SELECT COUNT(*) as cnt FROM users where user_id ='+ mysql.escape(req.params.id);
    var GetTERes = await DatabaseRepository.query(TE,{
      replacement :[], type : Sequelize.QueryTypes.SELECT });
    if(GetTERes[0].cnt > 0) {
      res.send({done:1, message:req.params.id})
    } else {
      res.send({done:0, message:"User Not Found"})
    }
  }catch(err){
    console.log(err)
    res.status(500).send({done:0, message:"User Not Found"})
  }

})

router.post('/', async (req, res, next) => {
  try {

    await validate(req).then(async () => {
      await business.register(req).then((data) => {
        res.send({ done: 1, message: data });
      }).catch((err) => {
        res.send({ done: 0, message: err });
      })
    }).catch(err => {
      res.send({ done: 0, message: err });
    })

  } catch (err) {
    console.log(err);
    res.status(400).send(err);
  }
})



module.exports = router;