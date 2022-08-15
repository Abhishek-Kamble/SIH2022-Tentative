const Express = require('./ServiceHost').Express;
var expressApp = require('./ServiceHost').expressApp;
const cors = require('cors');

expressApp.use(cors({origin:'*'}));

expressApp.get('/', (req, res) => {
    res.status(200).send("Hello World");

})

// Import Routes  
var  StaffRegistor = require('./routes/Admin/StaffRegistor');



expressApp.use('/staffregistor',StaffRegistor);


expressApp.listen(8000,function(){
    console.log("server has started on port 8000");
})
