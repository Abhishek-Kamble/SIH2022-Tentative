const Express = require('./ServiceHost').Express;
var expressApp = require('./ServiceHost').expressApp;

const cors = require('cors');

expressApp.get('/', (req, res) => {
    res.status(200).send("Hello World");

})

// Import Routes  
// var  AddClassRoom = require('./Routes/AddClassRoom');


expressApp.use(cors({origin:'*'}));

// expressApp.use('/api/classrooms',AddClassRoom);


expressApp.listen(8000,function(){
    console.log("server has started on port 8000");
})
