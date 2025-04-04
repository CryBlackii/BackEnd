import { Cliente } from "./cliente";
import { Endereco } from "./Endereco";
import { Produto } from "./Produto";
import { Telefone } from "./Telefone";
import { Venda } from "./Venda";

const endereco = new Endereco("rua aragrao", 2208, "rio grande", "rj");

const produto1 = new Produto(1, "bolo de pote", 250);
const produto2 = new Produto(2, "bolo sem ser no pote", 150);

const telefone1 = new Telefone("42", 940028922, "comercial");

const cliente = new Cliente("João Biava", 12345678900, 19870515, "Masculino", endereco, [telefone1]);

const venda = new Venda(1001, 20250403, cliente, [produto1, produto2]);