export class Prato {
    nome: string;
    dt_validade: Date;
    nacionalidade: string;

    constructor(nome: string, dt_validade: Date, nacionalidade: string) {
        this.nome = nome;
        this.dt_validade = dt_validade;
        this.nacionalidade = nacionalidade;
    }
}
