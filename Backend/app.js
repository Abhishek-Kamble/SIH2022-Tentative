const Express = require('./ServiceHost').Express;
var expressApp = require('./ServiceHost').expressApp;

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

// Routes
expressApp.use('/login',Login);

// Middleware API
expressApp.use('/UserRegister',UserRegister);
expressApp.use('/staffregistor',AuthorizationRoute.validateToken,StaffRegistor);
expressApp.use('/verification',Verification);
expressApp.use('/staffd',AuthorizationRoute.validateToken,StaffDelete)
expressApp.use('/staffg',AuthorizationRoute.validateToken,StaffData)
expressApp.use('/PropertyRegister',PropertyRegistration);

expressApp.listen(8000,function(){
    console.log("server has started on port 8000");
})
