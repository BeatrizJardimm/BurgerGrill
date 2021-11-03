//cards dinamicos dos produtos na página principal//

var burgers = [[0, "Burger Grill", "Hamburguer 200g com picles, alface, tomate, cebola e molho BURGER GRILL.", "R$19,00", false], [1,"Bacon", "Pão brioche, hamburguer, queijo cheddar e duplo bacon.", "R$19,00", false], [2, "Vegetariano", "Pão especial, hamburguer vegetariano, queijo cheddar, alface e tomate.", "R$19,00", false]];

function cardsProdInicial(){

    var dynamic = document.querySelector('.produtos-float');

    for (var i = 0; i < burgers.length; i++) {
        var fetch = document.querySelector('.produtos-float').innerHTML;  
        dynamic.innerHTML = `<div id="selecionar" class="demo-card-square mdl-card mdl-shadow--2dp">
                                <div id="cards${i}" class="mdl-card__title mdl-card--expand">
                                    <h2 class="mdl-card__title-text" id="nome-preco">${burgers[i][1]}</h2>
                                </div>
                                <div class="mdl-card__supporting-text" id="descricao">
                                    ${burgers[i][2]}
                                </div>
                                <div id="preco${burgers[i][0]}" class="mdl-card__actions mdl-card--border" onclick= "comprar(${burgers[i][0]}, burgers), mostrar(${burgers[i][0]}, burgers)">
                                    ${burgers[i][3]}
                                </div>
                            </div>` + fetch; 
        var bgimg = document.getElementById(`cards${i}`);
        bgimg.style.backgroundImage = `url('midias/${burgers[i][1]}.jpg')`;
    }

}

//cards dinamicos dos clientes na página principal//
var nomesClientes = ["Marie Curie", "Albert Einstein", "Isaac Newton", "Neymar Junior", "Angelina Jolie", "Taylor Swift"]
var comentariosClientes = ["Se existisse um prêmio Nobel para sabor, com certeza a vencedora seria a chef da Burguer Grill!", "FunFact: eu estava comendo o Cheeseburguer da Burger Grill quando criei a Teoria da Relatividade!", "A verdade é que inferi a lei da gravidade quando derrubei meu Vegetariano no chão sem querer...", "Sempre como um Burguer Grill e uma porção de Batata do Chef antes de entrar em campo!", "Gostaria que os smoothies dos estúdios de gravação fossem iguais o da Burguer Grill!", "Preciso de pelo menos uma porção de Batata do Chef no meu camarim em todos os shows. A melhor hamburgueria de todas!"]

var dynamicClientes = document.querySelector('.depoimento-float');  

function cardsClientes(){

    for (var i = 0; i < nomesClientes.length; i++) {
        var fetchClientes = document.querySelector('.depoimento-float').innerHTML;  
        dynamicClientes.innerHTML = `<div class="depoimento">
                                <div class="nome-foto">
                                    <img class="mdl-chip__contact" src = "midias/${nomesClientes[i]}.jpg"></img>
                                    <h4>${nomesClientes[i]}</h4>
                                </div>
                                <hr>
                                <div class="texto-depoimento">
                                    ${comentariosClientes[i]}
                                </div>
                            </div>` + fetchClientes; 
    }

}

//cards dinamicos dos produtos na página de cardápio//
var listaProdutos = [[0, "Burger Grill", "Hamburguer 200g com picles, alface, tomate, cebola e molho BURGER GRILL.", "R$19,00", false], [1,"Bacon", "Pão brioche, hamburguer, queijo cheddar e duplo bacon.", "R$19,00", false], [2, "Vegetariano", "Pão especial, hamburguer vegetariano, queijo cheddar, alface e tomate.", "R$19,00", false], [3,"Cheeseburger", "Queijo cheddar, hamburguer tradicional e maionese caseira.", "R$15,00", false], [4, "Combo Burger", "Um lanche Burger Grill acompanhado de batata frita e uma bebida a sua escolha.", "R$34,00", false], [5, "Anéis de Cebola", "Porção de 250g de cebola frita e maionese especial BURGER GRILL.","R$11,00", false], [6, "Batata do Chef", "250g de batata frita acompanhada de bacon e cheddar.", "R$14,00", false], [7, "Polenta Frita", "250g de polenta frita acompanhada de molho barbecue.", "R$11,00", false], [8, "Smoothie", "Smoothie de banana ou morango, mel, leite e aveia.", "R$9,00", false], [9, "Limonada Suiça", "Limão, leite condensado e folhas de horterlã.", "R$6,00", false], [10, "Sucos Naturais", "Sucos naturais de morango, limão, abacaxi, uva entre outros sabores.", "R$8,00", false], [11, "Caipirinha", "Limão ou morango, açúcar e bebida a sua escolha.", "R$10,00", false], [12, "Soda Italiana", "Água com gás, cubos de gelo e xarope de morango, limão ou kiwi.", "R$12,00", false], [13, "Petit Gateau", "Brownie acompanhado de sorvete de baunilha.", "R$13,00", false], [14, "Sorvete em Taça", "Taça 250ml de sorvete de chocolate, baunilha ou morango.", "R$12,00", false], [15, "Cookies", "Cookies com gotas de chocolate ao leite ou chocolate branco.", "R$4,00", false]]

var dynamic = document.querySelector('.containers');

function cardsDinamicos(){
    for (var i = 0; i < listaProdutos.length; i++) {
        var fetch = document.querySelector('.containers').innerHTML;  
        dynamic.innerHTML = `<div id="selecionar" class="demo-card-square mdl-card mdl-shadow--2dp">
                                <div id="cards${i}" class="mdl-card__title mdl-card--expand">
                                    <h2 class="mdl-card__title-text" id="nome-preco">${listaProdutos[i][1]}</h2>
                                </div>
                                <div class="mdl-card__supporting-text" id="descricao">
                                    ${listaProdutos[i][2]}
                                </div>
                                <div id="preco${listaProdutos[i][0]}" class="mdl-card__actions mdl-card--border" onclick= "comprar(${listaProdutos[i][0]}, listaProdutos), mostrar(${listaProdutos[i][0]}, listaProdutos)">
                                    ${listaProdutos[i][3]}
                                </div>
                            </div>` + fetch;

        var bgimg = document.getElementById(`cards${i}`);
        bgimg.style.backgroundImage = `url('../midias/${listaProdutos[i][1]}.jpg')`;
    }
}

//cards dinamicos dos produtos na página de carrinho//
var dynamicCarrinho = document.querySelector('.prodAdicionados');

function adicionados(){
    for (var i = 0; i < carrinho.length; i++) {
        var fetchCarrinho = document.querySelector('.prodAdicionados').innerHTML;  
        dynamicCarrinho.innerHTML = `<div id="selecionar" class="demo-card-square mdl-card mdl-shadow--2dp">
                                        <div id="cards${i}" class="mdl-card__title mdl-card--expand">
                                            <h2 class="mdl-card__title-text" id="nome-preco">${carrinho[i][1]}</h2>
                                        </div>
                                        <div class="mdl-card__supporting-text" id="descricao">
                                            ${carrinho[i][2]}
                                        </div>
                                        <div id="compra${carrinho[i][0]}" class="mdl-card__actions mdl-card--border" onclick= "retiraCarrinho(${carrinho[i][0]})">
                                            Retirar do carrinho
                                        </div>
                                    </div>` + fetchCarrinho;
        var bgimg = document.getElementById(`cards${i}`);
        bgimg.style.backgroundImage = `url('../midias/${carrinho[i][1]}.jpg')`;
    }
}


// funções gerais para adicionar/retirar produtos do carrinho //
function mostrar(id, lista){

    var preco = document.getElementById("preco"+id);

    if (lista[id][4] == false){
        lista[id][3];
    }
    else{
        preco.innerHTML = "Adicionado ao carrinho";
        preco.style.backgroundColor = '#4CAF50';
    }
}

var carrinho = [];

function comprar(id, lista){

    lista[id][4] = true;

    carrinho.push(lista[id]);
    console.log(carrinho);

    window.localStorage.setItem("carrinho", JSON.stringify(carrinho));

}

carrinho = JSON.parse(window.localStorage.getItem('carrinho'));

function retiraCarrinho(id){

    var compra = document.getElementById("compra"+id);
    compra.innerHTML = "Retirado do carrinho";
    compra.style.backgroundColor = '#FF5252';

    card = document.getElementById("selecionar");

    card.parentNode.removeChild(card);

    carrinho = carrinho.splice(i, 1);

    window.localStorage.setItem("carrinho", JSON.stringify(carrinho));

}

var total = 0;

function mostraValor(){

    for (i=0; i<carrinho.length; i++){

        strValor = carrinho[i][3];

        valor = strValor.slice(2);
    
        valor = parseFloat(valor);

        total += valor; 
    }

    alert("Valor total: " + total + " reais.");
}

function finalizaCompra(){
    esvaziaCarrinho();

    alert("Compra finalizada com sucesso, seus produtos já estão a caminho.")

}


function esvaziaCarrinho(){

    cards = document.getElementById("allCards");

    cards.parentNode.removeChild(cards);

    carrinho = [];

    window.localStorage.setItem("carrinho", JSON.stringify(carrinho));

}