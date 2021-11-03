//função para conferir se todos os campos foram preenchidos

function Autenticacao(){
    user = document.getElementById('usuario').value;
    senha = document.getElementById('senha').value;

    if (user == '' || senha == ''){
        alert("Por favor, preencha todos os campos.")
    }
}