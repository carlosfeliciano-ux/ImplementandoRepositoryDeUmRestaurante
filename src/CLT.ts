import { Funcionario } from "./Funcionario.js";

export class CLT extends Funcionario {
    salario_fixo: number;

    constructor(nome: string, sexo: string, dt_contrata: Date, cpf: string, rg: string, salario_fixo: number) {
        super(nome, sexo, dt_contrata, cpf, rg);
        this.salario_fixo = salario_fixo;
    }
}

