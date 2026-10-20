export class Funcionario {
    nome: string;
    sexo: string;
    dt_contrata: Date;
    cpf: string;
    rg: string;

    constructor(nome: string, sexo: string, dt_contrata: Date, cpf: string, rg: string) {
        this.nome = nome;
        this.sexo = sexo;
        this.dt_contrata = dt_contrata;
        this.cpf = cpf;
        this.rg = rg;
    }
}
