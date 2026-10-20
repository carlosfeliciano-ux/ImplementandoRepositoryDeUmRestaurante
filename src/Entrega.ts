export class Entrega {
    dt_saida: Date;
    numero_pedido: number;
    endereco: string;

    constructor(dt_saida: Date, numero_pedido: number, endereco: string) {
        this.dt_saida = dt_saida;
        this.numero_pedido = numero_pedido;
        this.endereco = endereco;
    }
}
