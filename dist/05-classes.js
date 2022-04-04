"use strict";

function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) { 
        throw new TypeError("Cannot call a class as a function"); 
    } 
}

var Pessoa = function Pessoa() {
    _classCallCheck(this, Pessoa);

    this.nome = "";
    this.email = "";
    this.cpf = "";
};

var joao = new Pessoa();

joao.nome = 'João Siveira';
joao.email = 'contato@joao.com.br';
joao.cpf = '456.456.456-66';

console.log(joao);