import { html, LitElement } from 'lit';
import { PageController } from '@open-cells/page-controller';
import { customElement, property, query } from 'lit/decorators.js';
import '../../components/data-dm/data-dm.ts';
import '../../components/header-template/header-template.ts';
import '../../components/detail-view/detail-view.ts';
import '../../components/modal-basic/modal-basic.ts';

// @ts-ignore
@customElement('home-page')
export class HomePage extends LitElement {
  pageController = new PageController(this);

  protected createRenderRoot(): HTMLElement | DocumentFragment {
    // @ts-ignore
    return this;
  }

  @property({ type: Array })
  listItems = [];

  @property({ type: Object })
  selectedItem = {
    name: ''
  };

  @property({ type: Boolean })
  visible = false;

  @query('data-dm')
  _api: any;

  onPageEnter() {
    this._api?.getData();
  }

  get dataTemplate() {
    return html`
      <data-dm 
        id='api'
        api-url='https://rickandmortyapi.com/api/character'
        method='GET'
        @character='${(evt: CustomEvent) => this.showCharacterDetails(evt)}'
        @api-data='${(evt: CustomEvent) => this.listItems = evt.detail.results}'
      ></data-dm>
    `;
  }

  get itemsTemplate() {
    return html`
      ${this.listItems.map(({id, name, image, status, species }) => html`
        <div class='card' @click=${() => this.getCharacterById(id)}>
          <div id='${id}' class='card-content'>
            <h2>${name}</h2>
            <img src='${image}' alt='${name}' loading='lazy' />
            <p>${species} / ${status}</p>
          </div>
        </div>
      `)}
    `;
  }

  getCharacterById(id: number) {
    if (id) {
      this._api.getCharacterById(id);
    }
  }

  showCharacterDetails({ detail }: CustomEvent) {
    this.selectedItem = detail;
    this.visible = true;
  }

  render() {
    return html`
      <div class='container'>
        ${this.dataTemplate}
        <modal-basic 
          ?visible='${this.visible}'
          text-title="${this.selectedItem && this.selectedItem.name || 'Detalles'}"
          @toggle-modal='${() => this.visible = !this.visible}'
        >
          <detail-view .item=${this.selectedItem}></detail-view>
        </modal-basic>
        <header-template></header-template>
        <div class='container-cards'>
          ${this.itemsTemplate}
        </div>
      </div>
    `;
  }
}
