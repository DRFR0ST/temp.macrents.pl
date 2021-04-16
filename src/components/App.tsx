import React from 'react';
import { LitteraProvider } from 'react-littera';
import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider } from '@material-ui/core';

import { LOCALES } from "utils/language";
import { LIGHT_THEME } from "utils/theme";
import Routes from "./Routes";

function App() {

  return (
    <ThemeProvider theme={LIGHT_THEME}>
      <LitteraProvider initialLocale="pl_PL" detectLocale locales={LOCALES}>
        <Router>
          <Routes />
        </Router>
      </LitteraProvider>
    </ThemeProvider>
  );
}

export default App;
