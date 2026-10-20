import { Funcionario } from "./Funcionario.js";
export class CLT extends Funcionario {
    salario_fixo;
    constructor(nome, sexo, dt_contrata, cpf, rg, salario_fixo) {
        super(nome, sexo, dt_contrata, cpf, rg);
        this.salario_fixo = salario_fixo;
    }
}
//# sourceMappingURL=CLT.js.map