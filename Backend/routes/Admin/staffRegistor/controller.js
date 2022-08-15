const Express = require('../../../serviceHost').Express
const router = Express.Router();

router.get('/', async (req, res, next)=>{
    try {
        res.status(200).send("Hello World!");
    } catch (err) {
        res.status(400).send(err);
    }
})

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
        // res.status(200).send("Hello World!!");
        
    } catch (err) {
        res.status(400).send(err);
    }
})



module.exports = router;