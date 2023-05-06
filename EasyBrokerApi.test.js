import EasyBrokerApi from './EasyBrokerApi'; // assuming the EasyBrokerApi class is in a file called EasyBrokerApi.js

describe('EasyBrokerApi', () => {
  describe('getAllProperties', () => {
    test('returns an array of properties', async () => {
      const apiKey = 'l7u502p8v46ba3ppgvj5y2aad50lb9';
      const easyBrokerApi = new EasyBrokerApi(apiKey);
      const properties = await easyBrokerApi.getAllProperties();
      expect(Array.isArray(properties)).toBe(true);
    });
  });
});