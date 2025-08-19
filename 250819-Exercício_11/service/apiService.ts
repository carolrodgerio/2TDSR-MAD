import ApiFetcher from "../fetcher/ApiFetcher";

export default class ApiService {
  static fetchData() {
    return ApiFetcher.getData();
  }
}
