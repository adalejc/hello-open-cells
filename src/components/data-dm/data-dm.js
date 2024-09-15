import { LitElement } from 'lit';

export class DataDm extends LitElement {
  static get is() {
    return 'data-dm';
  }

  static get properties() {
    return {
      apiUrl: {
        type: String,
        attribute: 'api-url',
      },
      method: {
        type: String,
      }
    };
  }

  constructor() {
    super();
    this.apiUrl = '';
    this.method = '';
  }

  getData() {
    fetch(this.apiUrl, { method: this.method })
      .then((response) => {
        if (response.ok) return response.json();
        return Promise.reject(response)
      })
      .then(this._processResponseSuccess.bind(this))
      .catch(this._processResponseError.bind(this));
  }

  _processResponseSuccess(response) {
    this._sendData('api-data', response);
  }

  _processResponseError(error) {
    console.warn('Somethig went wront: ', error);
  }

  _sendData(eventName, detail) {
    this.dispatchEvent(
      new CustomEvent(eventName, {
        detail,
        bubbles: true,
        composed: true
      })
    );
  }
}
customElements.define(DataDm.is, DataDm);