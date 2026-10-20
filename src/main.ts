import { RepositorioRestaurante } from "./repositorioRestaurante.js";
import { Prato } from "./Prato.js";
import { CLT } from "./CLT.js";
import { Freelancer } from "./Freelancer.js";
import { Entrega } from "./Entrega.js";

const restaurante = new RepositorioRestaurante();

// Criando pratos
const prato1 = new Prato("Feijoada", new Date("2026-10-25"), "Brasileira");
const prato2 = new Prato("Pizza", new Date("2026-10-23"), "Italiana");

// Criando funcionários
const funcionario1 = new CLT(
    "Ana Silva",
    "Feminino",
    new Date("2024-03-10"),
    "111.111.111-11",
    "11.111.111-1",
    3000
);

const funcionario2 = new Freelancer(
    "João Souza",
    "Masculino",
    new Date("2026-10-01"),
    "222.222.222-22",
    "22.222.222-2",
    new Date("2026-12-31"),
    25
);

// Criando uma entrega
const entrega1 = new Entrega(
    new Date("2026-10-20T12:30:00"),
    101,
    "Rua das Flores, 123"
);

// Cadastrando os dados no repositório
restaurante.adicionarPrato(prato1);
restaurante.adicionarPrato(prato2);
restaurante.adicionarFuncionario(funcionario1);
restaurante.adicionarFuncionario(funcionario2);
restaurante.adicionarEntrega(entrega1);

// Mostrando os relatórios
console.log("Relatório de pratos:");
console.log(restaurante.relatorioPratos());

console.log("Relatório de funcionários:");
console.log(restaurante.relatorioFuncionarios());

console.log("Relatório de entregas:");
console.log(restaurante.relatorioEntregas());

console.log("Funcionários trabalhando:");
console.log(restaurante.funcionariosTrabalhando());

console.log("Relatório de salários (40 horas para freelancers):");
console.log(restaurante.relatorioSalarios(40));
