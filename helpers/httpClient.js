export class HttpClient {
  constructor() {
    this._url = 'https://issuesdb-856d.restdb.io/rest/';
  }

  async get(endpoint) {
    try {
      const response = await fetch(this._url + endpoint, {
        headers: {
          'x-apikey': '67a9efe4020c067b55e653b8',
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        return await response.json();
      } else {
        throw new Error(
          `Felkod: ${response.status} Felmeddelande: ${response.statusText}`
        );
      }
    } catch (error) {
      throw new Error(error);
    }
  }
}
