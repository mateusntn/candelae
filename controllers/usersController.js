const { User, sequelize} = require('../models/');

const usersController = {
    index: async (req, res) => {
        const users = await User.findAll();
        return res.json(users);
    },

    create: async (req, res) => {
        const { name, email, phone, cep, cpf, password } = req.body;
        const newUser = await User.create({name, email, phone, cep, cpf, password });
        return res.json(newUser);
    },

    update: async (req, res) => {
        const {id} = req.params;
        const { name, email, phone, cep, cpf, password } = req.body;

        const userUpdated = await User.update({name, email, phone, cep, cpf, password},{where: {id}});

        return res.json(userUpdated);
    },

    delete: async (req,res) => {
        const{id} = req.params;
        const userDeleted = await User.destroy({where: {id}});
        return res.json(userDeleted);
    }
}

module.exports = usersController;