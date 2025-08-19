export default class ApiFetcher {
  static getData() {
    return fetch("https://jsonplaceholder.typicode.com/todos/1")
      .then(response => {
        if (!response.ok) {
          throw new Error("Erro na API");
        }
        return response.json();
      });
  }
}
