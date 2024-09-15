import { LitElement, html } from 'lit';

export class AppTemplate extends LitElement {
  static get is() {
    return 'app-template';
  }

  render() {
    return html`
      <div class='container'>
        <h1>The <strong class='title'>Rick and Morty</strong> API</h1>
        <p class='title'> Make on Open Cells</p>
      </div>
    `;
  }
}