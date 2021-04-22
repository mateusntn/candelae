const { Product, sequelize} = require('../models/');

const productsController = {
    index: async (req, res) => {
        const products = await Product.findAll();
        return res.json(products);
    },

    create: async (req, res) => {
        const { name, description, quantProducts, value, scents_id, sizes_id, models_id} = req.body;
        const newProduct = await Product.create({name, description, quantProducts, value, scents_id, sizes_id, models_id});
        return res.json(newProduct);
    },

    update: async (req, res) => {
        const {id} = req.params;
        const {name, description, quantProducts, value, scents_id, sizes_id, models_id} = req.body;

        const productUpdated = await Product.update({name, description, quantProducts, value, scents_id, sizes_id, models_id},{where: {id}});

        return res.json(productUpdated);
    },

    delete: async (req,res) => {
        const{id} = req.params;
        const productDeleted = await Product.destroy({where: {id}});
        return res.json(productDeleted);
    }
}

module.exports = productsController;