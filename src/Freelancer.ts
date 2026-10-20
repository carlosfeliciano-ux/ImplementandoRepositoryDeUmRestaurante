import { Funcionario } from "./Funcionario.js";

export class Freelancer extends Funcionario {
    dt_limite_contrato: Date;
    salario_hora: number;

    constructor(nome: string, sexo: string, dt_contrata: Date, cpf: string, rg: string, dt_limite_contrato: Date, salario_hora: number) {
        super(nome, sexo, dt_contrata, cpf, rg);
        this.dt_limite_contrato = dt_limite_contrato;
        this.salario_hora = salario_hora;
    }

    contratoAtivo(): boolean {
        const hoje = new Date();

        if (this.dt_limite_contrato >= hoje) {
            return true;
        } else {
            return false;
        }
    }

    diasRestantes(): number {
        const hoje = new Date();
        const diferenca = this.dt_limite_contrato.getTime() - hoje.getTime();
        const dias = Math.ceil(diferenca / (1000 * 60 * 60 * 24));

        if (dias < 0) {
            return 0;
        }

        return dias;
    }
}
