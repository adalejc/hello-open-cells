import { css } from 'lit';

export default css`
  :host() {
  
  }

  .container {
    text-align: center;
  }

  h1 {
    font-size: 5rem;
  }

  .title {
    color: #24AA91;
  }

  p {
    font-size: 2rem;
  }

  @media (max-width: 700px) {
    h1 {
      font-size: 3rem
    }
  }
`;