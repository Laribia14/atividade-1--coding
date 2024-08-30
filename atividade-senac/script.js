$(document).ready(function() {
    $('#signupForm').on('submit', function(event) {
        event.preventDefault();

        // Captura dos dados do formulário
        const name = $('#name').val();
        const email = $('#email').val();
        const password = $('#password').val();

        // Validação simples
        if (name && email && password) {
            $('#message').html(`<div class="alert alert-success" role="alert">
                Cadastro realizado com sucesso!
            </div>`);
            $('#signupForm')[0].reset();
        } else {
            $('#message').html(`<div class="alert alert-danger" role="alert">
                Todos os campos são obrigatórios!
            </div>`);
        }
    });
});
