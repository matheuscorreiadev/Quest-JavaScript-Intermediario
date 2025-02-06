const inputsAll = document.querySelectorAll('.inputs');
const msgAlerta = document.querySelectorAll('.msgAlert');
const enviar = document.getElementById('enviar');

enviar.addEventListener('click', function(){
    inputsAll.forEach(function(input){
        if (input.value == ''){
            input.classList.remove('campo-preenchido');
            input.classList.add('campo-obrigatorio');
            input.nextElementSibling.classList.remove('msgAlertOculto');
        } else{
            input.classList.remove('campo-obrigatorio');
            input.classList.add('campo-preenchido');
            alert("Formulário Enviado Com Sucesso!");
        }
    })
})