import fetch from "node-fetch";

const apiKey = 'l7u502p8v46ba3ppgvj5y2aad50lb9'

class EasyBrokerApi {
  constructor(apiKey) {
    this.apiKey = apiKey;
    this.baseUrl = 'https://api.stagingeb.com/v1';
  }

  async getAllProperties() {
    const url = `${this.baseUrl}/properties`;
    const headers = {
      accept: 'application/json',
      'X-Authorization': this.apiKey,
    };
    const response = await fetch(url, { headers });
    const json = await response.json();
    return json.content;
  }
}

const api = new EasyBrokerApi(apiKey);
api.getAllProperties()
  .then(properties => {
    properties.forEach(property => console.log(property.title));
  })
  .catch(err => console.error(err));