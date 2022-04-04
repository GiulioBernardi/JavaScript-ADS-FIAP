"use strict";

var function1 = function minhaFuncao() {
    console.log("Exemplo de função antiga");
};

var minhaFuncao2 = function minhaFuncao2() {
    console.log("Exemplo de outra função antiga");
};

var minhaFuncao3 = function minhaFuncao3() {
    return console.log("Arrow function");
};

var minhaFuncao4 = function minhaFuncao4(_) {
    return console.log("Função rapidona");
};

var minhaFuncao5 = function minhaFuncao5() {
    console.log("Arrow Function em bloco");
    console.log("Esse em bloco é doidão");
};

function1();
minhaFuncao2();
minhaFuncao3();
minhaFuncao5();