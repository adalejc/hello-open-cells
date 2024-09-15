import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
import styles from './header-template-styles.js';

//@ts-ignore
@customElement('header-template')
export class HeaderTemplate extends LitElement {
  static styles = [styles]

  render() {
    return html`
      <div class='container'>
        <h1>The <strong class='title'>Rick and Morty</strong> API</h1>
        <p class='title'> Make on Open Cells</p>
      </div>
    `;
  }
}
