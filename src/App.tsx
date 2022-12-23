import { Global } from '@emotion/react';
import Router from './components/common/Router';
import { GlobalStyle } from './components/common/GlobalStyle';

function App() {
  return (
    <>
      <Global styles={GlobalStyle} />
      <Router />
    </>
  );
}

export default App;
