

class ValidaFormulario {
    constructor(){
        this.formulario = document.querySelector(".form")
        this.events()
    }

    events(){
        this.formulario.addEventListener("submit", e => {
            this.handleSubmit(e)
        })
    }

    handleSubmit(e) {
        e.preventDefault();
        const validFields = this.validFields();
        const validPasswords = this.validPasswords();
        if (validFields && validPasswords){
            this.formulario.submit()
        }
    }

    validPasswords(){
        let valid = true;
        const password = this.formulario.querySelector('.senha')
        const confirmPassword = this.formulario.querySelector('.confirma-senha')

        if (password.value !== confirmPassword.value){
            this.sendError(password, "Os Campos de Senha Precisam Ser Iguais")
            this.sendError(confirmPassword, "Os Campos de Senha Precisam Ser Iguais")
            valid = false;
        }

        if(password.value.length > 12 || password.value.length < 8){
            this.sendError(password, 'A Senha precisa ter entre 8 e 12 caracteres')
            valid = false;   
        }
        return valid;

    }

    validFields(){
        let valid = true;
        for(let errorText of this.formulario.querySelectorAll(".error-text")){
            errorText.remove();
        }

        for(let field of this.formulario.querySelectorAll(".valida")){
            const label = field.previousElementSibling.innerText;
            if(!field.value) {
                this.sendError(field, `O Campo "${label}" não pode estar vazio`)
                valid = false;
            }
            if(field.classList.contains('cpf')){
                if(!this.isValidCpf(field)) valid = false;
            }
            if(field.classList.contains('usuario')){
                if(!this.isValidUser(field)) valid = false;
            }
        }
        return valid;
    }

    isValidUser(field){
        const user = field.value;
        let valid = true

        if(field.value.length > 12 || field.value.length < 8){
            this.sendError(field, 'O Usuario precisa ter entre 8 e 12 caracteres')
            valid = false;   
        }

        if(!user.match(/^[a-zA-Z0-9]+$/g)){
            this.sendError(field, 'O Usuario precisa ter apenas letras ou numeros')
            valid = false;   
        }

        return valid;

    }

    isValidCpf(field) {
        const cpf = new ValidaCpf(field.value);
        if(!cpf.validar()){
            this.sendError(field, "CPF Inválido");
            return false;
        }
        return true;
    }
    


    sendError(field, message){
        const div = document.createElement("div");
        div.innerHTML = message;
        div.classList.add("error-text")
        field.insertAdjacentElement('afterend', div)
    }

}

const valida = new ValidaFormulario();