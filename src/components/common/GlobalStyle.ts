import { css } from '@emotion/react';
import emotionReset from 'emotion-reset';

export const GlobalStyle = css`
  ${emotionReset}

  html,
  body {
    width: 100%;
    height: 100%;
  }

  #root {
    display: grid;
    align-items: center;
    max-width: 42rem;
    min-height: 100vh;
    margin: 0 auto;
    padding: 2rem;
  }

  html {
    font-size: 62.5%;
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
    cursor: pointer;
    border: none;
    outline: none;
    background-color: transparent;
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
`;
