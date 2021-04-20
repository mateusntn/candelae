const { FormPayment, sequelize} = require('../models');

const formPaymentsController = {
    index: async (req, res) => {
        const formPayments = await FormPayment.findAll();
        return res.json(formPayments);
    },

    create: async (req, res) => {
        const { name } = req.body;
        const newFormPayment = await FormPayment.create({name });
        return res.json(newFormPayment);
    }
}

module.exports = formPaymentsController;