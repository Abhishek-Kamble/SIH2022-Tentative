const Express = require('../../../serviceHost').Express
const router = Express.Router();
const registerRequest = require('./registerRequest')

router.post('/requests', async (req, res, next) => {
   try {
         console.log(req.body);
         registerRequest.registerIncomingRequest(req).then(result => {
         console.log(result);
         console.log("request registration successfull");
         res.send(result);
      }).catch(err => {
         res.send(err);
      })
   }
   catch {
      res.send(err);
   }
})
module.exports = router;