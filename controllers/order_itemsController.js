const { Order_item, sequelize} = require('../models');

const order_itemsController = {
    index: async (req, res) => {
        const order_items = await Order_item.findAll();
        return res.json(order_items);
    },

    create: async (req, res) => {
        const { path, products_id } = req.body;
        const newOrder_item = await Order_item.create({ path, products_id });
        return res.json(newOrder_item);
    }, 
    
    update: async (req, res) => {
        const {id} = req.params;
        const { path, products_id } = req.body;

        const order_itemUpdated = await Order_item.update({ path, products_id },{where: {id}});

        return res.json(order_itemUpdated);
    },

    delete: async (req,res) => {
        const {id} = req.params;

        const order_itemDeleted = await Order_item.destroy({where: {id}});

        return res.json(order_itemDeleted);
    }
}

module.exports = order_itemsController;