const Express = require('../../../serviceHost').Express
const router = Express.Router();
const business = require('./business');

router.delete('/:id', async (req, res, next) => {
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

    } catch (err) {
        res.status(400).send(err);
    }
})

module.exports = router


