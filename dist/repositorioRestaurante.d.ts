import { Funcionario } from "./Funcionario.js";
import { Prato } from "./Prato.js";
import { Entrega } from "./Entrega.js";
export declare class RepositorioRestaurante {
    funcionarios: Funcionario[];
    pratos: Prato[];
    entregas: Entrega[];
    adicionarFuncionario(funcionario: Funcionario): void;
    adicionarPrato(prato: Prato): void;
    adicionarEntrega(entrega: Entrega): void;
    funcionariosTrabalhando(): Funcionario[];
    relatorioPratos(): Prato[];
    relatorioFuncionarios(): Funcionario[];
    relatorioEntregas(): Entrega[];
    relatorioSalarios(horasTrabalhadas: number): string[];
}
//# sourceMappingURL=repositorioRestaurante.d.ts.map