const Express = require('../../../serviceHost').Express
const router = Express.Router();
const ZonesData = require('./getZones');

router.get('/', async (req, res) => {
    try {
        await ZonesData.details(req).then((data) => {
            res.send(data);
        }).catch((err) => {
            console.log(err);
            res.status(400).send(err)
        })
    } catch (err) {
        console.log(err);
    }
})

module.exports = router;