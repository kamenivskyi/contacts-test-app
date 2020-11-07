class Api {
  constructor() {
    this.baseUrl = "https://randomuser.me/api";
  }

  async get(url) {
    try {
      const response = await fetch(this.baseUrl + url);
      return response.json();
    } catch (error) {
      console.log(error);
    }
  }
}

export const api = new Api();
