$(document).ready(function() {

    $('#cpf').mask('000.000.000-00')
    $('#telefone').mask('(00) 00000-0000')
    $('#cep').mask('00000-000')


    $('form').validate({
        rules: {
            nome: {
                required: true
            },
            email: {
                required: true
            },
            cpf: {
                required: true
            },
            telefone: {
                required: true
            },
            cep: {
                required: true
            },
            endereco: {
                required: true
            }
        },
        messages: {
            nome: 'Digite o seu nome.',
            telefone: 'Digite o número de celular.',
            email: 'Insira o seu e-mail.',
            cpf: 'Informe um CPF válido.',
            cep: 'Informe um CEP válido.',
            endereco: 'Informe um endereço válido.'
        },
        submitHandler: function(form) {
            form.reset();
            console.log(form)
        },
        invalidHandler: function(evento, validador) {
            var camposIncorretos = validador.numberOfInvalids();
            if (camposIncorretos) {
                alert(`Existem ${camposIncorretos} campo(s) inválidos(s).`)
            }
        }    
    })
})
