import { LitElement, html } from 'lit';
import styles from './detail-view-styles.js';
import { customElement, property } from 'lit/decorators.js';

// @ts-ignore
@customElement('detail-view')
export class DetailView extends LitElement {
  @property({ type: Object })
  item = {
    image: '',
    name: '',
    status: '',
    species: '',
    location: {
      name: ''
    },
    gender: ''
  };

  static styles = [styles];

  render() {
    return html`
      ${Object.entries(this.item).length 
        ? html`
          <div>
            <img src="${this.item?.image}" alt="${this.item?.name}" />
            <h2>${this.item?.name}</h2>
            <div>
              <div><strong>Status: </strong> <small>${this.item?.status}</small></div>
              <div><strong>Species: </strong> <small>${this.item?.species}</small></div>
              <div><strong>Origin: </strong><small>${this.item?.species}</small></div>
              <div><strong>Location: </strong><small>${this.item?.location?.name}</small></div>
              <div><strong>Gender: </strong><small>${this.item?.gender}</small></div>
            </div>
          </div>
        `
        : html``}
    `;
  }
}
