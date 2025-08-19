import { Carro } from "../model/carro";
import { CarroFetcher } from "../fetcher/carroFetcher";

export class CarroService {
    private fetcher: CarroFetcher;

    constructor() {
        this.fetcher = new CarroFetcher();
    }

    getCarros(): Carro[] {
        return this.fetcher.listar();
    }

    addCarro(ano: number, placa: string, modelo: string): void {
        const novoCarro: Carro = {
            id: Date.now(),
            ano,
            placa,
            modelo
        };
        this.fetcher.adicionar(novoCarro);
    }

    deleteCarro(id: number): void {
        this.fetcher.remover(id);
    }
}
