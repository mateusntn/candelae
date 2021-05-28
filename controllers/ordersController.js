const { Order, User, sequelize} = require('../models/');

const ordersController = {
    index: async (req, res) => {
        const orders = await Order.findAll();
        return res.json(orders);
    },

    filterByUser: async (req,res) => {
        const {id} = req.session.userLoged;

        const orders = await Order.findAll({
            where: {users_id: id}
        });

        console.log(orders)
        return res.redirect('profile', {orders});
    },

    showCartPage: async (req,res) => {
        const { id } = req.session.userLoged;
        const user = await User.findByPk(id);
        return res.render('cart', {user});
    },

    create: async (req, res) => {
        const { shipping, amount, users_id, formPayments_id, order_status, adress_id_orders } = req.body;
        const newOrder = await Order.create({shipping, amount, users_id, formPayments_id, order_status, adress_id_orders });
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