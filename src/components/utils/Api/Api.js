class Api {
  constructor (options) {
    this._baseUrl = options.baseUrl;
  }

  _getResponseData(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(res);
  }

  getCostumers() {
    return fetch(`${this._baseUrl}/api/v1/customers/`, {
      method: 'GET',
      headers: {
        "Content-Type": "application/json"
      }
    }).then(res => this._getResponseData(res));
  }

  getCustomerOrders(id) {
    return fetch(`${this._baseUrl}/api/v1/customers/${id}/`, {
      method: 'GET',
      headers: {
        "Content-Type": "application/json"
      }
    }).then(res => this._getResponseData(res));
  }

  pushVouchers() {
    return fetch('http://10.0.10.234/api/v1/order_item/1/', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        "template": "2d59787f-e498-439e-a77b-5f8ec3af7345",
        "addresses": "a.voloshin@karofilm.ru",
      })
    })

  }
}

export default new Api({
  baseUrl: 'http://10.0.10.234'
});
