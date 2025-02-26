type Motor = 1.0 | 1.3 | 1.4 | 1.5 | 1.6 | 1.8 | 2.0;

type Combustivel = "etanol" | "gasolina" | "flex" | "GNV" | "diesel" | "elétrico" | "híbrido" | "hidrogênio";

interface Carro {
    marca: string
    modelo: string
    ano: number
    chassi: string
    motor: Motor
    placa: string
    combustivel: Combustivel
    autonomia: boolean
};

//

interface Produto {
    EAN13?: string
    nome: string
    fabricante: string
};

//

interface Endereco {
    logradouro: string
    numero: number
    complemento?: string
    bairro: string
    cidade: string
    estado: string
    cep: string
};

//

enum Horario {manhã, tarde, noite};

interface Telefone {
    codigoArea: string
    numero: string
    operadora: "Vivo" | "Claro" | "Tim" | "Oi"
    horario?: Horario
};

//

type Funcionamento = "aberto" | "fechado";
type TipoSalgados = "fritos" | "assados";

interface Salgadelícia {
    funcionamento: Funcionamento
    qtdFuncionarios: number
    qtdSalgados: number
    tipoSalgados: TipoSalgados
    clientes?: number
};
