let registerForm = document.querySelector("#form");
registerForm.addEventListener("submit", (evento) => {
    evento.preventDefault();
    let error = document.querySelector("#error");

    let nameValue = document.querySelector("#name").value;
    let emailValue = document.querySelector("#email").value;
    let cpfValue = document.querySelector("#cpf").value;
    let phoneValue = document.querySelector("#phone").value;
    let passwordValue = document.querySelector("#password").value;
    let confirmationValue = document.querySelector("#confirmation").value;

    const emailDefault = /^[a-zA-Z0-9][a-zA-Z0-9\._-]+@([a-zA-Z0-9\._-]+\.)[a-zA-Z-0-9]{2,3}$/;
    
    if(nameValue && emailValue && phoneValue && cpfValue && passwordValue && confirmationValue) {
            if( passwordValue.length >= 6 && passwordValue.length <= 12){
                if (nameValue.length >= 2) {
                    if(phoneValue.length >= 11) {
                        if (passwordValue == confirmationValue) {
                            if (emailDefault.test(emailValue)) {
                                registerForm.submit();
                            } else {
                                error.innerHTML = ' Verifique se o e-mail está correto. ';
                            }                   
                        } else {
                            error.innerHTML = ' Senhas não coincidem. ';
                        }
                    } else {
                        error.innerHTML = ' O número de telefone deve seguir o padrão DDD+número. Exemplo: 81999999999. ';
                    }
                } else {
                    error.innerHTML = ' O nome deve ter 2 letras ou mais. ';
                }
            } else {
                error.innerHTML = "A senha deve ter entre 6 e 12 caracteres.";
            }
    } else {
        error.innerHTML = "Preencha todos os campos.";
    }
});