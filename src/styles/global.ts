import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  body {
    background: #fff;
    color: #FFF;
    -webkit-font-smoothing: antialiased;
  }

  body, input, button {
    font-family: 'Poppins', sans-serif;
    font-size: 16px;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 500;
  }

  button {
    cursor: pointer;
  }

  success {
    borderColor: #43a047;
    color: #43a047;
  }

  error {
    borderColor: #d32f2f;
    color: #d32f2f;
  }

  info {
    borderColor: #2979ff;
    color: #2979ff;
  }

  warning {
    borderColor: #ffa000;
    color: #ffa000;
  }
`;
