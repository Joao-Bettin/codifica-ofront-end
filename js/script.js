//efeito do botão voltar ao Topo
function topo() {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
    })
}

//Validação de Login
function login() {
    var logado = 0;
    var usuario = document.getElementsByName('usuario')[0].value;
    usuario = usuario.toLowerCase();
    var senha = document.getElementById('senha').value;
    senha = senha.toLowerCase();
    if (usuario == "admin" && senha == "admin") {
        window.location = "index.html";
        logado = 1;
    }
    if (logado == 0) {
        alert("Acesso Negado. Dados incorretos");
    }
}

//Ativar alert no botão cadastrar
$(document).ready(function () {
    $("#botao-cadastrar").click(function () {
        $("#form-cadastrar").slideToggle("slow");
        $("#section-login").slideToggle("slow");
        $("#botao-cadastrar").hide();
    });
});

function promoções() {
    alert("Cadastrado com sucesso!");
    window.location.href = "index.html";
}
