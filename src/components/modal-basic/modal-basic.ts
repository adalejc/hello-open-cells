import { LitElement, html } from 'lit';
import { customElement, property, eventOptions } from 'lit/decorators.js';
import styles from './modal-basic-styles.js';

// @ts-ignore
@customElement('modal-basic')
export class ModalBasic extends LitElement {
  static styles = [styles];

  @property({ type: Boolean, reflect: true }) 
  visible = false;
  
  @property({ type: String, attribute: 'text-title' }) 
  textTitle = '';

  @eventOptions({passive: true})
  private _tooggleModal() {
    this.visible = !this.visible;
    this.dispatchEvent(new CustomEvent('toggle-modal', { detail: this.visible }));
  }

  render() {
    return html`
      <div id='modal' class='modal-container'>
        <div id='myModal' class='modal-contenido'>
          <div>
            <span><strong>${this.textTitle}</strong></span>
            <button class='btn-close' @click='${() => this._tooggleModal()}'>Cerrar</button>
          </div>
          <slot></slot>
        </div>
      </div>
    `;
  }
}
