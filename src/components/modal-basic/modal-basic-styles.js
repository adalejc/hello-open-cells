import { css } from 'lit';

export default css`
    :host {
      display: none;
      --modal-contenido-background: #ffffff;
      --modal-contenido-width: 300px;
      --modal-contenido-padding: 1rem;
      --modal-contenido-close-btn: right;
      --modal-contenido-btn-close-cursor: pointer;
      --modal-container-background-color: rgba(0, 0, 0, 0.8);
      --modal-container-transition: all 1s;
      --modal-container-z-index: 1;
    }

    :host([visible]) {
      display: block;
    }

    .modal-contenido {
      background: var(--modal-contenido-background, #fff);
      //width: var(--modal-contenido-width, 300px);
      padding: var(--modal-contenido-padding, 1rem);
    }

    .btn-close {
      cursor: var(--modal-contenido-btn-close-cursor, pointer);
      float: right;
    }

    .disabled {
      opacity: 0;
      pointer-events: none;
    }

    .modal-container {
      position: fixed;
      background-color: var(--modal-container-background-color, rgba(0, 0, 0, 0.8));
      width: 100%;
      height: 100%;
      z-index: var(--modal-container-z-index, 1);
      transition: var(--modal-container-transition, all 1s);
      display: flex;
      justify-content: center;
      align-items: center;
      top: 0;
      bottom: 0;
      right: 0;
      left: 0;
    }

    .enabled {
      opacity: 1;
      pointer-events: all;
    }

`;