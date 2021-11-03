var Igual = false;
var Completo = false;

function camposPreenchidos(){
    nome = document.getElementById("nome").value;
    sobrenome = document.getElementById("sobrenome").value;
    email = document.getElementById("email").value;
    usuario = document.getElementById("usuario").value;
    senha = document.getElementById("senha").value;
    confirma = document.getElementById("confirma").value;

    //confirma a senha
    if (senha != confirma){
        alert("As senhas são diferentes");
    } else {
        var Igual = true;
    }

    //confere se todos os campos foram preenchidos
    if (nome == '' || sobrenome == '' || email == '' || usuario == '' || senha == '' || confirma == ''){
        alert("Preencha todos os campos");
    } else{
        var Completo = true;
    }

    //se os dados conferidos estiverem todos certos, essa função muda a tela
    if (Igual == true && Completo == true){
        alert("Bem vindo!");
    }
}