const { User } = require('../models')

module.exports = async (request, response, next) => {

    let { name, email, phone, cpf, password, confirmation } = request.body;

    const emailDefault = /^[a-zA-Z0-9][a-zA-Z0-9\._-]+@([a-zA-Z0-9\._-]+\.)[a-zA-Z-0-9]{2,3}$/;
    
    if(name && email && phone && cpf && password) {
        let users = await User.findAll({ where: {email} });
        if (!users.length) {
            if( password.length >= 6 && password.length <= 12){
                if (name.length >= 2) {
                    if(phone.length >= 11) {
                        if (password == confirmation) {
                            if (emailDefault.test(email)) {
                                next();  
                            } else {
                                response.status(400).json({ erro: ' Verifique se o e-mail está correto. '});
                            }                   
                        } else {
                            response.status(400).json({ erro: ' Senhas não coincidem. '});
                        }
                    } else {
                        response.status(400).json({ erro: ' O número de telefone deve seguir o padrão DDD+número. Exemplo: 81999999999. '});
                    }
                } else {
                    response.status(400).json({ erro: ' O nome deve ter 2 letras ou mais. '});
                }
            } else {
                response.status(400).json({ erro: 'A senha deve ter entre 6 e 12 caracteres.'});
            }
            
        } else {
            response.status(400).json({ erro: 'Email já cadastrado.'});
        }
    } else {
        response.status(400).json({ erro: 'Preencha todos os campos.'});
    }
}