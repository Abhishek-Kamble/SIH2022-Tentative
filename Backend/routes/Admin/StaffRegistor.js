const Express = require('../../serviceHost').Express
const router = Express.Router();

router.get('/', async (req, res, next)=>{
    try {
        res.status(200).send("Hello World!");
    } catch (err) {
        res.status(400).send(err);
    }
})

router.post('/', async (req, res, next)=>{
    try {
        res.status(200).send("Hello World!!");
    } catch (err) {
        res.status(400).send(err);
    }
})



module.exports = router;
