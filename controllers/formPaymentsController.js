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
    }, 
    
    update: async (req, res) => {
        const {id} = req.params;
        const { name } = req.body;

        const formPaymentUpdated = await FormPayment.update({name},{where: {id}});

        return res.json(formPaymentUpdated);
    },

    delete: async (req,res) => {
        const {id} = req.params;

        const formPaymentDeleted = await FormPayment.destroy({where: {id}});

        return res.json(formPaymentDeleted);
    }
}

module.exports = formPaymentsController;