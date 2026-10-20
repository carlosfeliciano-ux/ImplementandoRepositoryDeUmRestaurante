import { Funcionario } from "./Funcionario.js";
import { CLT } from "./CLT.js";
import { Freelancer } from "./Freelancer.js";
import { Prato } from "./Prato.js";
import { Entrega } from "./Entrega.js";
export class RepositorioRestaurante {
    funcionarios = [];
    pratos = [];
    entregas = [];
    adicionarFuncionario(funcionario) {
        this.funcionarios.push(funcionario);
    }
    adicionarPrato(prato) {
        this.pratos.push(prato);
    }
    adicionarEntrega(entrega) {
        this.entregas.push(entrega);
    }
    funcionariosTrabalhando() {
        const trabalhando = [];
        for (const funcionario of this.funcionarios) {
            if (funcionario instanceof Freelancer) {
                if (funcionario.contratoAtivo()) {
                    trabalhando.push(funcionario);
                }
            }
            else {
                trabalhando.push(funcionario);
            }
        }
        return trabalhando;
    }
    relatorioPratos() {
        return this.pratos;
    }
    relatorioFuncionarios() {
        return this.funcionarios;
    }
    relatorioEntregas() {
        return this.entregas;
    }
    relatorioSalarios(horasTrabalhadas) {
        const salarios = [];
        for (const funcionario of this.funcionarios) {
            let salario = 0;
            if (funcionario instanceof CLT) {
                salario = funcionario.salario_fixo;
            }
            else if (funcionario instanceof Freelancer) {
                salario = funcionario.salario_hora * horasTrabalhadas;
            }
            salarios.push(funcionario.nome + ": R$ " + salario);
        }
        return salarios;
    }
}
//# sourceMappingURL=repositorioRestaurante.js.map