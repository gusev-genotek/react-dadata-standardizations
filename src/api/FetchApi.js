import Api from './Api';
import { headersFactory, requestFactoryFactory } from './helpers';

class FetchApi extends Api {

  constructor(apiUrl, token, service, location = true) {
    super(token);
    this.headers = headersFactory(token);
    this.requestFactory = requestFactoryFactory(this.headers);
    // this.endpoint = `${apiUrl}/${service}`;
    this.endpoint = `${apiUrl}`;
    if (location && service.toLowerCase() === Api.ADDRESS) {
      this.detectAddress();
    }
  }

  detectAddress = () => {
    const endpoint = `${Api.apiUrl}/detectAddressByIp`;
    const request = this.requestFactory(endpoint, 'GET');

    fetch(request)
      .then(response => response.json())
      .then(response => response.location.data)
      .then(data => data ? data.kladr_id : null)
      .then(kladr_id => {
        if (kladr_id) {
          this.locations_boost = [...this.locations_boost, {kladr_id}]
        }
      })
      .catch(() => null); // just die
  };

  standardizations = (body) => {
    if (!!this.locations_boost.length) {
      body.locations_boost = this.locations_boost;
    }
    const formData = new FormData();
    formData.append('query', body.query);

     return fetch(this.endpoint, {method: 'POST',body:formData})
      .then(response => {
        if (!response.ok) {
          throw Error(response.statusText)
        }
        return response.json();
      });
  };
}

export default FetchApi;
