const { Img, sequelize} = require('../models');

const imgsController = {
    index: async (req, res) => {
        const imgs = await Img.findAll();
        return res.json(imgs);
    },

    create: async (req, res) => {
        const { path, products_id } = req.body;
        const newImg = await Img.create({ path, products_id });
        return res.json(newImg);
    }, 
    
    update: async (req, res) => {
        const {id} = req.params;
        const { path, products_id } = req.body;

        const imgUpdated = await Img.update({ path, products_id },{where: {id}});

        return res.json(imgUpdated);
    },

    delete: async (req,res) => {
        const {id} = req.params;

        const imgDeleted = await Img.destroy({where: {id}});

        return res.json(imgDeleted);
    }
}

module.exports = imgsController;