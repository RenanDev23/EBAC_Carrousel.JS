$(document).ready(function(){
    $('#carousel-imagens').slick({
        autoplay:true
    });

    $('.menu-hamburguer').click(function() {
        $('nav').slideToggle();  
    })

    $('#telefone').mask('(00)00000-0000')

    $('form').validate({
        rules: {
            nome: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            telefone: {
                required: true
            },
            veiculoInteresse: {
                required: false
            },
            mensagem: {
                required: true,
            }
        },
        messages: {
            nome: 'Por favor, insira o seu nome.',
            email: 'E-mail é obrigatório.',
            telefone: 'Por favor, telefone é obrigatório!',
            mensagem: 'Campor obrigatório!'
        },
        SubmitHandler: function(form) {
            console.log(form)
        },
        invalidHandler: function(evento, validador) {
            let camposIncorretos = validador.numberOfInvalids();
            if (camposIncorretos) {
                alert(`existem ${camposIncorretos} campos incorretos`)
            }
        }
    })
})

$('.lista-veiculos button').each(function() {
    $(this).on('click', function() {
        const destino = $('#contato');
        const nomeVeiculo = $(this).parent().find('h3').text();

        $('#veiculo-interesse').val(nomeVeiculo);

        $('html, body').animate({
            scrollTop: destino.offset().top
        }, 1000);
    });
});
