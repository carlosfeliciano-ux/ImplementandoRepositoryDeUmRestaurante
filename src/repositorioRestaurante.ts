import { Funcionario } from "./Funcionario.js";
import { CLT } from "./CLT.js";
import { Freelancer } from "./Freelancer.js";
import { Prato } from "./Prato.js";
import { Entrega } from "./Entrega.js";

export class RepositorioRestaurante {
    funcionarios: Funcionario[] = [];
    pratos: Prato[] = [];
    entregas: Entrega[] = [];

    adicionarFuncionario(funcionario: Funcionario): void {
        this.funcionarios.push(funcionario);
    }

    adicionarPrato(prato: Prato): void {
        this.pratos.push(prato);
    }

    adicionarEntrega(entrega: Entrega): void {
        this.entregas.push(entrega);
    }

    funcionariosTrabalhando(): Funcionario[] {
        const trabalhando: Funcionario[] = [];

        for (const funcionario of this.funcionarios) {
            if (funcionario instanceof Freelancer) {
                if (funcionario.contratoAtivo()) {
                    trabalhando.push(funcionario);
                }
            } else {
                trabalhando.push(funcionario);
            }
        }

        return trabalhando;
    }

    relatorioPratos(): Prato[] {
        return this.pratos;
    }

    relatorioFuncionarios(): Funcionario[] {
        return this.funcionarios;
    }

    relatorioEntregas(): Entrega[] {
        return this.entregas;
    }

    relatorioSalarios(horasTrabalhadas: number): string[] {
        const salarios: string[] = [];

        for (const funcionario of this.funcionarios) {
            let salario = 0;

            if (funcionario instanceof CLT) {
                salario = funcionario.salario_fixo;
            } else if (funcionario instanceof Freelancer) {
                salario = funcionario.salario_hora * horasTrabalhadas;
            }

            salarios.push(funcionario.nome + ": R$ " + salario);
        }

        return salarios;
    }
}
