import { Cliente } from "./Cliente";
import { Endereco } from "./Endereco";
import { Produto } from "./Produto";
import { Telefone } from "./Telefone";
import { Venda } from "./Venda";

var produtos : Produto[] = [];
var telefones : Telefone[] = [];
var endereco : Endereco;
var cliente1 : Cliente;
var venda01 : Venda;

produtos.push(new Produto(1245, "Shampo", 25.00));
produtos.push(new Produto(2547, "Secador", 150.00)); 

telefones.push(new Telefone(42, 999779874, "Pessoal"));
telefones.push(new Telefone(42, 999779547, "Casa"));

endereco = new Endereco("Rua Xavantes", 654, "Guarapuava", "PR");

cliente1 = new Cliente("Pedro Augusto", 10703254785, 20122001, 'Masculino', endereco, telefones);

venda01 = new Venda(1478, 14052021, cliente1, produtos);


console.log(" Venda:", venda01.codigo, "\nRealizada por:", venda01.cliente.nome, "\n\nProdutos comprados:");
venda01.produto.forEach(function (value) {
    console.log("   ", value.descricao, "-", value.valor)
})

console.log("\nValor Total : ", venda01.calcularTotal());