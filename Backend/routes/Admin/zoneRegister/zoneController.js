const Express = require('../../../serviceHost').Express
const router = Express.Router();
const zoneRegister=require('./zoneRegister')
/*
const zones = sequelize.define(
  'zones',
  {
    zone_name: {
      type: Sequelize.DataTypes.STRING(30),
      allowNull: false,
    },
    zone_id: {
      type: Sequelize.DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
    },
    resendential_per: {
      type: Sequelize.DataTypes.INTEGER(3),
      allowNull: false,
      defaultValue: 0
    },
    commercial_per: {
      type: Sequelize.DataTypes.INTEGER(3),
      allowNull: false,
      defaultValue: 0
    },
    industrial_per: {
      type: Sequelize.DataTypes.STRING(50),
      allowNull: false,
      defaultValue: 0
    },
    uav:{
      type: Sequelize.DataTypes.INTEGER(10),
      allowNull: false,
      defaultValue: 0,
    }
    
  },
  {
    table: 'zones',
  }
);
*/
router.post('/',function(req,res,next)
{
      console.log(req.body);
      try{
         zoneRegister.zoneRegister(req).then(data=>{
            res.send(data);
         })
      }
      catch(error)
      {
          res.send(error);
      }

})

module.exports=router;