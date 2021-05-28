const { FormPayment, User, sequelize} = require('../models');

const formPaymentsController = {
    index: async (req, res) => {
        const { id } = req.session.userLoged;
        const user = await User.findByPk(id);
        const formPayments = await FormPayment.findAll(
            {where: {user_id_payment: id}
        });
        return res.render('payment', {payments: formPayments, user});
    },
    create: async (req, res) => {
        const { titular_name, titular_cpf, card_number, card_code, card_valid } = req.body;
        const  { id } = req.session.userLoged;
        const formPayments = await FormPayment.create({titular_name, titular_cpf, card_number, card_code, card_valid, user_id_payment: id});
        return res.redirect('/formPayments');
    }, 

    indexUpdate: async (req, res) => {
        const { id } = req.params;
        const payment = await FormPayment.findAll(
            {where: {id: id}
        });
        return res.render('editPayment', {payments: payment});
    }, 
    
    update: async (req, res) => {
        const { id } = req.params;
        const { titular_name, titular_cpf, card_number, card_code, card_valid } = req.body;

        const formPaymentUpdated = await FormPayment.update({titular_name, titular_cpf, card_number, card_code, card_valid}, {where: {id}});

        return res.json(formPaymentUpdated);
    },

    delete: async (req,res) => {
        const {id} = req.params;

        const formPaymentDeleted = await FormPayment.destroy({where: {id}});

        return res.json(formPaymentDeleted);
    }
}

module.exports = formPaymentsController;