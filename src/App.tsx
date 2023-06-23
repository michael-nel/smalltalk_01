import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './routes';
import GlobalStyle from './styles/global';

import { SnackbarProvider } from 'notistack';

const App: React.FC = () => (
  <>
    <SnackbarProvider maxSnack={3}>
    <GlobalStyle />
    <Router>
      <Routes />
    </Router>
    </SnackbarProvider>
  </>
);

export default App;
