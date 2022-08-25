const Express = require('../../../serviceHost').Express
const router = Express.Router();
const register = require('./register');
const ValidateDatabase = require('./validate');
router.get('/', async (req, res, next) => {
    try {
        res.status(200).send("Hello World!");
    } catch (err) {
        res.status(400).send(err);
    }
})
// TODO: Add req.body.role = 2 and isVerified = 0
/*
staff Model =>

First Name -
last name - 
email id - 
mobile number - 
staff id - year + emptype + count 
isVerifed - 
role - 1 - Admin | 2 - staff | 
password - 

aws add -> 
*/
router.post('/', async (req, res, next) => {
    try {

        await ValidateDatabase(req).then(async(data) => {
            await register.register(req).then((data) => {
                res.send({found:1,data:data});
            }).catch((err) => {
                res.send({found:0,message:err});
            })
        }).catch((err) => {
            console.log(err);
            res.send({found:0,message:err});
        })
    } catch (err) {
        res.status(400).send(err);
    }
})



module.exports = router;