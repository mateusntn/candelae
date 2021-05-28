const { Scent, User, sequelize} = require('../models');

const scentsController = {
    index: async (req, res) => {
        const scents = await Scent.findAll();
        return res.json(scents);
    },

    showAboutPage: async (req,res) => {
        if(req.session.userLoged){
            const { id } = req.session.userLoged;
            const user = await User.findByPk(id);
            return res.render('about', {user});
        } else{          
            return res.render('about');
        }
    },

    showScentsPage: async (req, res) => {
        if(req.session.userLoged){
            const { id } = req.session.userLoged;
            const user = await User.findByPk(id);
            return res.render('scents', {user});
        } else{          
            return res.render('scents');
        }
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