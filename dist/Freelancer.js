import { Funcionario } from "./Funcionario.js";
export class Freelancer extends Funcionario {
    dt_limite_contrato;
    salario_hora;
    constructor(nome, sexo, dt_contrata, cpf, rg, dt_limite_contrato, salario_hora) {
        super(nome, sexo, dt_contrata, cpf, rg);
        this.dt_limite_contrato = dt_limite_contrato;
        this.salario_hora = salario_hora;
    }
    contratoAtivo() {
        const hoje = new Date();
        if (this.dt_limite_contrato >= hoje) {
            return true;
        }
        else {
            return false;
        }
    }
    diasRestantes() {
        const hoje = new Date();
        const diferenca = this.dt_limite_contrato.getTime() - hoje.getTime();
        const dias = Math.ceil(diferenca / (1000 * 60 * 60 * 24));
        if (dias < 0) {
            return 0;
        }
        return dias;
    }
}
//# sourceMappingURL=Freelancer.js.map