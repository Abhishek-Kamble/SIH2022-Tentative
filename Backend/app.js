var expressApp = require('./serviceHost').expressApp;
const cors = require('cors');

expressApp.use(cors({origin:'*'}));

expressApp.get('/', (req, res) => {
    res.status(200).send("Hello World");

})

// Middleware API
var AuthorizationRoute = require('./middleware/AuthorizationController')
// Import Routes  
var StaffRegistor = require('./routes/Admin/staffRegistor/controller');
var Verification = require('./routes/verification/controller')
var Login = require('./routes/Login/controller')
var StaffDelete = require('./routes/Admin/RemoveStaff/controller')
var StaffData = require('./routes/Admin/GetStaff/controller');
var UserRegister = require('./routes/User/Register/controller');
var PropertyRegistration = require('./routes/Property/controller');
const zoneRegister = require('./routes/Admin/zoneRegister/zoneController');
const requestRegister=require('./routes/User/Requests/controller');
const Password = require('./routes/password/controller');
const zones = require('./routes/User/zones/controller');
const rebates = require('./routes/Admin/Rebates/controller');
const billPolicy = require('./routes/Admin/BillPoilicy/controller');
const Taxrate = require('./routes/Admin/Tax/controller');
// Routes
expressApp.use('/login',Login);

// Middleware API
expressApp.use('/UserRegister',UserRegister);
expressApp.use('/staffregistor',AuthorizationRoute.validateToken,StaffRegistor);
expressApp.use('/verification',Verification);
expressApp.use('/staffd',AuthorizationRoute.validateToken,StaffDelete)
expressApp.use('/staffg',AuthorizationRoute.validateToken,StaffData)
expressApp.use('/Property',AuthorizationRoute.validateToken,PropertyRegistration);
expressApp.use('/zoneRegister',AuthorizationRoute.validateToken,zoneRegister);
expressApp.use('/user',requestRegister);
expressApp.use('/rebates', rebates);
expressApp.use('/bill-policy', billPolicy);
expressApp.use('/taxrate',AuthorizationRoute.validateToken,Taxrate);
expressApp.use('/p',Password);
expressApp.use('/zones',zones);


let port = process.env.PORT;
if (port == null || port == "") {
    port = 8000;
}


expressApp.listen(port,function(){
    console.log("server has started on port: ", port);
})
