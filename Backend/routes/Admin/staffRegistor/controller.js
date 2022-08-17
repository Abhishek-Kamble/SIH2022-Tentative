const Express = require('../../../serviceHost').Express
const router = Express.Router();
const register = require('./register');
router.get('/', async (req, res, next)=>{
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
router.post('/', async (req, res, next)=>{
    try {
        console.log(req.body);
        // res.status(200).send("Hello World!!");
        await register.register(req).then((data)=>{
            res.send(data);
        }).catch((err)=>{
            res.send(err.message);
        })
        
        
    } catch (err) {
        res.status(400).send(err);
    }
})



module.exports = router;