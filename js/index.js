var aux = 0;
var cont = 0;
var operacao = 0;
var modal = document.getElementById("myModal");
var span = document.getElementsByClassName("close")[0];

document.getElementById("one").addEventListener("click", function(){
    var valor = document.getElementById("one").value;
    verificarZeroInicial(valor);
    cont++;
    operacao = 0;
});

document.getElementById("two").addEventListener("click", function(){
   var valor = document.getElementById("two").value;
   verificarZeroInicial(valor);
   cont++;
   operacao = 0;
});

document.getElementById("three").addEventListener("click", function(){
    var valor = document.getElementById("three").value;
    verificarZeroInicial(valor);
    cont++;
    operacao = 0;
});

document.getElementById("four").addEventListener("click", function(){
    var valor = document.getElementById("four").value;
    verificarZeroInicial(valor);
    cont++;
    operacao = 0;
});

document.getElementById("five").addEventListener("click", function(){
    var valor = document.getElementById("five").value;
    verificarZeroInicial(valor);
    cont++;
    operacao = 0;
});

document.getElementById("six").addEventListener("click", function(){
    var valor = document.getElementById("six").value;
    verificarZeroInicial(valor);
    cont++;
    operacao = 0;
});

document.getElementById("seven").addEventListener("click", function(){
    var valor = document.getElementById("seven").value;
    verificarZeroInicial(valor);
    cont++;
    operacao = 0;
});

document.getElementById("eight").addEventListener("click", function(){
    var valor = document.getElementById("eight").value;
    verificarZeroInicial(valor);
    cont++;
    operacao = 0;
});

document.getElementById("nine").addEventListener("click", function(){
    var valor = document.getElementById("nine").value;
    verificarZeroInicial(valor);
    cont++;
    operacao = 0;
});

document.getElementById("zero").addEventListener("click", function(){
    var valor = document.getElementById("zero").value;
    verificarZeroInicial(valor);
    cont++;
    operacao = 0;
});

document.getElementById("decimal").addEventListener("click", function(){
    var conteudo = document.getElementById("display").innerHTML;
    var controle = /../;
    if (conteudo.search(controle) != -1){
        var transcricao = conteudo.replace('..', '.');
        document.getElementById("display").innerHTML = transcricao;
    } else {
        document.getElementById("display").innerHTML += ".";
    }
    cont++;
});

document.getElementById("addition").addEventListener("click", function(){
    var conteudo = document.getElementById("display").innerHTML;
    if (operacao == 0){
        document.getElementById("display").innerHTML += " + ";
    } else {
        var transcricao = conteudo.replace(' + + ', ' + ');
        document.getElementById("display").innerHTML = transcricao;
    }
    operacao = 1;
    cont++;
});

document.getElementById("subtraction").addEventListener("click", function(){
    var conteudo = document.getElementById("display").innerHTML;
    if (operacao == 0){
        document.getElementById("display").innerHTML += " - ";
    } else {
        var transcricao = conteudo.replace(' - - ', ' - ');
        document.getElementById("display").innerHTML = transcricao;
    }
    operacao = 1;
    cont++;
});

document.getElementById("multiplication").addEventListener("click", function(){
    var conteudo = document.getElementById("display").innerHTML;
    if (operacao == 0){
        document.getElementById("display").innerHTML += " x ";
    } else {
        var transcricao = conteudo.replace(' x x ', ' x ');
        document.getElementById("display").innerHTML = transcricao;
    }
    operacao = 1;
    cont++;
});

document.getElementById("division").addEventListener("click", function(){
    var conteudo = document.getElementById("display").innerHTML;
    if (operacao == 0){
        document.getElementById("display").innerHTML += " ÷ ";
    } else {
        var transcricao = conteudo.replace(' ÷ ÷ ', ' ÷ ');
        document.getElementById("display").innerHTML = transcricao;
    }
    operacao = 1;
    cont++;
});

document.getElementById("percentage").addEventListener("click", function(){
    var conteudo = document.getElementById("display").innerHTML;
    if (operacao == 0){
        document.getElementById("display").innerHTML += " % ";
    } else {
        var transcricao = conteudo.replace(' % % ', ' % ');
        document.getElementById("display").innerHTML = transcricao;
    }
    operacao = 1;
    aux = 1;
    cont++;
});

document.getElementById("square-root").addEventListener("click", function(){
    var valor = document.getElementById('display').innerHTML;
    var calc = Math.sqrt(parseFloat(valor));
    imprimeResultado(calc);
});

document.getElementById("square").addEventListener("click", function(){
    var valor = document.getElementById('display').innerHTML;
    var calc = parseFloat(valor) * parseFloat(valor);
    imprimeResultado(calc);
});

document.getElementById("cube").addEventListener("click", function(){
    var valor = document.getElementById('display').innerHTML;
    var calc = parseFloat(valor) * parseFloat(valor) * parseFloat(valor);
    imprimeResultado(calc);
});

document.getElementById("fraction").addEventListener("click", function(){
    var valor = document.getElementById('display').innerHTML;
    if(valor == 0){
        abrirModal();
    }else{
        var calc = 1 / parseFloat(valor);
        imprimeResultado(calc);
    }
});

document.getElementById("signal").addEventListener("click", function(){
    var valor = document.getElementById('display').innerHTML;
    var calc = parseFloat(valor) * -1;
    imprimeResultado(calc);
    cont++;
});

document.getElementById("clear").addEventListener("click", function(){
    var valor = 0;
    imprimeResultado(valor);
    cont = 0;
});

document.getElementById("equal").addEventListener("click", function(){
    operacao = 0;
    var valor = document.getElementById('display').innerHTML;
    var controle = / ÷ 0/;
    if (valor.search(controle) != -1){
        abrirModal();
        var valor = "0";
        imprimeResultado(valor);
    }
    var transcricao1 = valor.replace(/x/g,"*");
    var transcricao2 = transcricao1.replace(/÷/g,"/");
    var total = eval(transcricao2);
    imprimeResultado(total);
    if(aux == 1){
        resultado = valor.split(" % ");
        percentual(resultado);
    } 
    cont = 0;
    aux = 0;
});

function abrirModal(){
    modal.style.display = "block";
}

span.onclick = function() {
    modal.style.display = "none";
}

function verificarZeroInicial(valor){
    if(cont == 0){
        document.getElementById("display").innerHTML = valor;
    } else {
        document.getElementById("display").innerHTML += valor;
    }
}

function imprimeResultado(resultado){
    document.getElementById("display").innerHTML = resultado;
}

function percentual(resultado){
    var porcentagem = parseFloat(resultado[0]/100) * parseFloat(resultado[1]);
    imprimeResultado(porcentagem);
}
