const Express = require('../../../serviceHost').Express
const router = Express.Router();
const business = require('./business');

router.get('/', async (req, res, next) => {
    try {
        console.log(req.decoded.role)
        if (req.decoded.role != '1') {
            res.status(403).send({ message: 'unauthorized user' })
        } else {
            await business.get(req).then((data) => {
                res.send(data);
            }).catch((err) => {
                res.send(err);
            })
        }
    } catch (err) {
        res.status(400).send(err);
    }
})

module.exports = router


