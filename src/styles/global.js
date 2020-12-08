import { createGlobalStyle } from 'styled-components';
import 'react-toastify/dist/ReactToastify.css';

export default createGlobalStyle`
  * {
  margin: 0;
  padding: 0;
  outline: 0;
  box-sizing: border-box;
  }

  /* body::-webkit-scrollbar {
    display: none;
  } */

  body {
    background: linear-gradient(90deg, #F1A10A 0%, #342303 100%);
    -webkit-font-smoothing: antialiased;
    /* -ms-overflow-style: none;
    scrollbar-width: none;   */
  }

  body, input, button {
    font-family: 'Rubik', sans-serif;
  }
`;
