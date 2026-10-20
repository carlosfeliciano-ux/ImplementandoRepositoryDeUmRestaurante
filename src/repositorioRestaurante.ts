class Funcionario {
    nome: string;
    sexo: string;
    dt_contrata: Date; 
    cpf: string; 
    rg: string

    constructor(
        nome: string, sexo: string, dt_contrata: Date, 
        cpf: string, rg: string){
            this.nome = nome;
            this.sexo = sexo;
            this.dt_contrata = dt_contrata;
            this.cpf = cpf;
            this.rg = rg;
    }
}

class CLT extends Funcionario {
    salario_fixo: number; // Atributo específico de funcionário contratado

    constructor(
        nome: string, 
        sexo: string, 
        dt_contrata: Date, 
        cpf: string, 
        rg: string, 
        salario_fixo: number
    ) {
        // Passa apenas os valores para a classe pai (Funcionario)
        super(nome, sexo, dt_contrata, cpf, rg);
        this.salario_fixo = salario_fixo;
    }
}

class prato{
    nome: string;
    dt_validade: Date;
    nacionalidade: string
    
    constructor(nome: string, dt_validade: Date, nacionalidade: string){
        this.nome = nome;
        this.dt_validade = dt_validade;
        this.nacionalidade = nacionalidade
    }
}