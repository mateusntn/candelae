const { User } = require('../models')

module.exports = async (request, response, next) => {

    let { name, email, phone, cep, cpf, password } = request.body;
    
    if(name && email && phone && cep && cpf && password) {
        let users = await User.findAll({ where: {email} });
        if (!users.length) {
            if( password.length >= 6 && password.length <= 12){
                next();
            } else {
                response.status(400).json({ erro: "A senha deve ter entre 6 e 12 caracteres." });
            }
            
        } else {
            response.status(400).json({ erro: "Email já cadastrado." });
        }
    } else {
        response.status(400).json({ erro: "Todos os campos devem ser preenchidos!" });
    }
}