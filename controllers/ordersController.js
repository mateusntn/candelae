const { Order, sequelize} = require('../models/');

const ordersController = {
    index: async (req, res) => {
        const orders = await Order.findAll();
        return res.json(orders);
    },

    create: async (req, res) => {
        const { shipping, amount, users_id, formPayments_id, order_status } = req.body;
        const newOrder = await Order.create({shipping, amount, users_id, formPayments_id, order_status });
        return res.json(newOrder);
    },

    update: async (req, res) => {
        const {id} = req.params;
        const {shipping, amount, users_id, formPayments_id, order_status} = req.body;

        const orderUpdated = await Order.update({shipping, amount, users_id, formPayments_id, order_status}, {where: {id}});

        return res.json(orderUpdated);
    },

    delete: async (req, res) => {
        const {id} = req.params;
        
        const orderDeleted = await Order.destroy({where: {id}});

        return res.json(orderDeleted);
    }
}

module.exports = ordersController;