const { Scent, sequelize} = require('../models');

const scentsController = {
    index: async (req, res) => {
        const scents = await Scent.findAll();
        return res.json(scents);
    },

    create: async (req, res) => {
        const { name, description } = req.body;
        const newscent = await Scent.create({ name, description });
        return res.json(newscent);
    },

    update: async (req, res) => {
        const {id} = req.params;
        const {name, description} = req.body;

        const scentUpdated = await Scent.update({name, description}, {where: {id}});

        return res.json(scentUpdated);
    },

    delete: async (req, res) => {
        const {id} = req.params;
        
        const scentDeleted = await Scent.destroy({where: {id}});

        return res.json(scentDeleted);
    }
}

module.exports = scentsController;