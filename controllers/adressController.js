const { Adress, User, sequelize} = require('../models');


const adressController = {
    index: async (req, res) => {
        const { id } = req.session.userLoged;
        const user = await User.findByPk(id);
        const adress = await Adress.findAll(
            {where: {user_id_adress: id}
        });
        return res.render('adress', {adresses: adress, user: user});
    },
    createAdress: async (req, res) => {
        const { cep, adress, number, complement, reference_point, neighborhood, city, state} = req.body;
        const  { id } = req.session.userLoged;
        const newAdress = await Adress.create({ cep, adress_street: adress, adress_number: number, complement, reference_point, neighborhood, city, state, user_id_adress: id});
        console.log(newAdress);
        return res.redirect('adress');
    },
    indexUpdate: async (req, res) => {
        const { id } = req.params;
        const adress = await Adress.findAll(
            {where: {id: id}
        });
        return res.render('editAdress', {adresses: adress});
    }, 
    update: async (req, res) => {
        const { id } = req.params;
        const { cep, adress, number, complement, reference_point, neighborhood, city, state} = req.body;

        const adressUpdated = await Adress.update({cep, adress_street: adress, adress_number: number, complement, reference_point, neighborhood, city, state, }, 
            {where: 
                { id: id}
            });
            return res.redirect('users/profile');
    },

    delete: async (req,res) => {
        const { id } = req.params;

        const adressDeleted = await Adress.destroy(
            {where: 
                { id: id}
            });

        return res.json(adressDeleted);
    }
}

module.exports = adressController;