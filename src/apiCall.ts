class Api {
  private baseUrl: string =
    "http://cors-anywhere.herokuapp.com/https://randomuser.me/api";

  async get(url: string) {
    try {
      const response = await fetch(this.baseUrl + url);
      return response.json();
    } catch (error) {
      console.log(error);
    }
  }
}

export const api = new Api();
