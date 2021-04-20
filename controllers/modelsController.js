const {Model, sequelize} = require('../models');

const modelsController = {
    index: async (req, res) => {
        const models = await Model.findAll();
        return res.json(models);
    },

    create: async (req, res) => {
        const { name } = req.body;
        const newModel = await Model.create({ name });
        return res.json(newModel);
    },

    delete: async (req,res) => {
        const{id} = req.params;
        const modelDeleted = await Model.destroy({where: {id}});
        return res.json(modelDeleted);
    }
}

module.exports = modelsController;