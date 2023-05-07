import assert from 'assert';
import fetch from 'node-fetch';
import EasyBrokerApi from '../EasyBrokerApi.js';

const apiKey = 'l7u502p8v46ba3ppgvj5y2aad50lb9';

describe('EasyBrokerApi', () => {
  let api;

  before(() => {
    api = new EasyBrokerApi(apiKey);
  });

  it('should return an array of properties', async () => {
    const properties = await api.getAllProperties();
    assert(Array.isArray(properties));
  });

  it('should contain property titles', async () => {
    const properties = await api.getAllProperties();
    properties.forEach(property => {
      assert(property.title);
    });
  });

  it('should return 401 when apiKey is invalid', async () => {
    const invalidApiKey = 'invalid-api-key';
    const api = new EasyBrokerApi(invalidApiKey);
    const url = `${api.baseUrl}/properties`;
    const headers = {
      accept: 'application/json',
      'X-Authorization': invalidApiKey,
    };
    const response = await fetch(url, { headers });
    assert.equal(response.status, 401);
  });
});