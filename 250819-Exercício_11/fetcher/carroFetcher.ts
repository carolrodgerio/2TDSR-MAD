import { Carro } from "../model/carro";

export class CarroFetcher {
    private carros: Carro[] = [
        { id: 1, ano: 2020, placa: "ABC-1234", modelo: "Onix" },
        { id: 2, ano: 2021, placa: "DEF-5678", modelo: "Corolla" },
    ];

    listar(): Carro[] {
        return this.carros;
    }

    adicionar(carro: Carro): void {
        this.carros.push(carro);
    }

    remover(id: number): void {
        this.carros = this.carros.filter(c => c.id !== id);
    }
}
