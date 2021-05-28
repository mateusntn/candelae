const { User, Order, sequelize} = require('../models/');
const bcrypt = require('bcryptjs');
const moment = require('moment');

const usersController = {
    index: async (req, res) => {
        const users = await User.findAll();
        return res.json(users);
    },

    create: async (req, res) => {
        const { name, email, phone, cpf, password } = req.body;
        const passwordCrypt = bcrypt.hashSync(password, 10);
        const newUser = await User.create({name, email, phone, cpf, password: passwordCrypt});
        return res.redirect(`/users/login`);
    },

    auth: async (req, res) => {
        const { login_email, login_password } = req.body;

        const user = await User.findOne({where: { email: login_email }}); 
        if (user && bcrypt.compareSync(login_password, user.password)) {
            req.session.userLoged = user;
            return res.redirect('/'); 
        } else {
            return res.redirect('/users/login')
        }
    },

    showProfilePage: async (req,res) => {
        const { id } = req.session.userLoged;
        const user = await User.findByPk(id);
        const orders = await Order.findAll({
            where: {users_id: id}
        });
        const orderModified = orders.map(function(order) {
           const teste =order.toJSON()
           teste.createdAt = moment(teste.createdAt).format('LLL');
            return teste ;
          });
          

        
        console.log(orders);
        return res.render('profile', {user, orders:orderModified})
    },

    showEditPage: async (req,res) => {
        return res.render('editProfile');
    },

    showRegisterPage: async (req, res) => {
        return res.render('register');
    },

    showLoginPage: async (req, res) => {
        return res.render('login');
    },

    update: async (req, res) => {
        const {id} = req.session.userLoged;
        const { name, email, phone, cep, cpf, password } = req.body;

        const passwordCrypt = bcrypt.hashSync(password, 10);

        const userUpdated = await User.update({name, email, phone, cep, cpf, password: passwordCrypt},{where: {id}});

        return res.redirect('/users/profile');
    },

    delete: async (req,res) => {
        const{id} = req.params;
        const userDeleted = await User.destroy({where: {id}});
        return res.json(userDeleted);
    }
}

module.exports = usersController;