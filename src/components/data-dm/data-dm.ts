import { LitElement } from 'lit';
import { customElement, eventOptions, property } from 'lit/decorators.js';

//@ts-ignore
@customElement('data-dm')
export class DataDm extends LitElement {

  @property({ type: String, attribute: 'api-url' })
  apiUrl = '';

  @property({ type: String })
  method = '';

  getData() {
    fetch(this.apiUrl, { method: this.method })
      .then((response) => {
        if (response.ok) return response.json();
        return Promise.reject(response)
      })
      .then(this._processResponseSuccess.bind(this))
      .catch(this._processResponseError.bind(this));
  }


  getCharacterById(id: number) {
    const url = `${this.apiUrl}/${id}`;
    fetch(url, { method: this.method })
      .then(response => {
        if (response.ok) return response.json();
        return Promise.reject(response)
      })
      .then(data => this._sendData('character',data))
      .catch(error => console.log('Shomethig went wront', error))
  }

  _processResponseSuccess(response: Object) {
    this._sendData('api-data', response);
  }

  _processResponseError(error: Object) {
    console.warn('Somethig went wront: ', error);
  }

  private _sendData(eventName: string, detail: Object) {
    this.dispatchEvent(
      new CustomEvent(eventName, {
        detail,
        bubbles: true,
        composed: true
      })
    );
  }
}
