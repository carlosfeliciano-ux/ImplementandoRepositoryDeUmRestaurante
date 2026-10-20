import { Funcionario } from "./Funcionario.js";
export declare class Freelancer extends Funcionario {
    dt_limite_contrato: Date;
    salario_hora: number;
    constructor(nome: string, sexo: string, dt_contrata: Date, cpf: string, rg: string, dt_limite_contrato: Date, salario_hora: number);
    contratoAtivo(): boolean;
    diasRestantes(): number;
}
//# sourceMappingURL=Freelancer.d.ts.map