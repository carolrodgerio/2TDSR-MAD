import { makeAutoObservable } from "mobx";
import ApiService from "../service/ApiService";

export default class ApiControl {
  loading = false;
  mensagem = "";

  constructor() {
    makeAutoObservable(this);
  }

  carregarDados() {
    this.loading = true;
    this.mensagem = "";

    ApiService.fetchData()
      .then(() => {
        this.mensagem = "Sucesso ao carregar os dados! :)";
      })
      .catch(() => {
        this.mensagem = "Erro ao acessar a API. :(";
      })
      .finally(() => {
        this.loading = false;
      });
  }
}
