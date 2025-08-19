import { Carro } from "../model/carro";
import { CarroService } from "../service/carroService";

export class CarroControl {
    private service: CarroService;

    constructor() {
        this.service = new CarroService();
    }

    listar(): Carro[] {
        return this.service.getCarros();
    }

    criar(ano: number, placa: string, modelo: string): void {
        this.service.addCarro(ano, placa, modelo);
    }

    remover(id: number): void {
        this.service.deleteCarro(id);
    }
}
