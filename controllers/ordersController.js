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
    }
}

module.exports = ordersController;