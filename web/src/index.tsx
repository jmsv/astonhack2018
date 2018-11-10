import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

import App from './App';
import './index.css';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#1DB954'
    },
    type: 'dark'
  },
});

ReactDOM.render(
  (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </MuiThemeProvider>
  ),
  document.getElementById('root') as HTMLElement
);
