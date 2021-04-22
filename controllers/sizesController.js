const { Size, sequelize} = require('../models/');

const sizesController = {
    index: async (req, res) => {
        const sizes = await Size.findAll();
        return res.json(sizes);
    },

    create: async (req, res) => {
        const { name } = req.body;
        const newSize = await Size.create({name});
        return res.json(newSize);
    },

    update: async (req, res) => {
        const {id} = req.params;
        const {name} = req.body;

        const sizeUpdated = await Size.update({name}, {where: {id}});

        return res.json(sizeUpdated);
    },

    delete: async (req, res) => {
        const {id} = req.params;
        
        const sizeDeleted = await Size.destroy({where: {id}});

        return res.json(sizeDeleted);
    }
}

module.exports = sizesController;