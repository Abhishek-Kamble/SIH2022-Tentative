const DatabaseRepository = require('../../../services/DataBaseQuery')
const sequelize = require('../../../serviceHost').sequelize
const payments = require('../../../models/payments');

module.exports.pay_offline = async function (req) {
  return await new Promise(async (resolve, reject) => {
    try {
      const { property_id, user_id, amount_paid, staff_id } = req.body;

      const transaction = await sequelize.transaction(); 

      const transaction_id = property_id + new Date().getTime();

      const payment_detail = {
        "payment_method_type": 2,
        "payment_method": staff_id,
        "user_id": user_id,
        "property_id": property_id,
        "amount_paid": amount_paid,
        "payment_status": true,
        "transaction_id": transaction_id
      }

      const paymentData = await DatabaseRepository.insertOne(payments, payment_detail, null, transaction);

      console.log(paymentData);

      resolve({ done: 1, mesage: "Payment processed successfully!" });
    } catch (error) {
      console.log(error);
      reject({ done: 0, message: "Payment processing failed!!" });
    }
  })
}