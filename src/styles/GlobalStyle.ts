import { css } from '@emotion/react';
import emotionReset from 'emotion-reset';
import { COLOR } from './color';
import { FONT_STYLES } from './font';

export const GlobalStyle = css`
  ${emotionReset}

  html,
  body {
    width: 100%;
    height: 100%;
  }

  #root {
    display: flex;
    flex-direction: column;
    max-width: 42rem;
    height: 100%;
    margin: 0 auto;
    padding: 0 2rem;
  }

  html {
    font-size: 62.5%;
  }

  body {
    background-color: ${COLOR.BLACK_80};
    color: ${COLOR.WHITE};
  }

  * {
    box-sizing: border-box;
  }

  body,
  button,
  input {
    font-family: Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, 'Helvetica Neue', 'Segoe UI',
      'Apple SD Gothic Neo', 'Noto Sans KR', 'Malgun Gothic', 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol',
      sans-serif;
  }

  button {
    ${FONT_STYLES.B_17}
    color: ${COLOR.WHITE};
    padding: 1.4rem 0;
    border-radius: 1rem;
    cursor: pointer;
    border: none;
    outline: none;
    -webkit-tap-highlight-color: transparent;
  }

  a,
  a:visited {
    text-decoration: none;
    color: black;
  }

  input {
    outline: none;
  }

  input:-webkit-autofill {
    -webkit-box-shadow: 0 0 0 1000px ${COLOR.BLACK_60} inset;
    box-shadow: 0 0 0px 1000px ${COLOR.BLACK_60} inset;
    -webkit-text-fill-color: ${COLOR.WHITE};
  }
  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus,
  input:-webkit-autofill:active {
    transition: background-color 5000s ease-in-out 0s;
  }
`;
