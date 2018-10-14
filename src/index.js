import React, { Children } from 'react'
import ReactDOM from 'react-dom'
import SocialNetwork from './components/SocialNetwork'
import store from './store'
import { Provider } from 'react-redux'
import { ThemeProvider, withTheme, injectGlobal } from 'styled-components'
import theme from './theme/theme'
import * as serviceWorker from './serviceWorker'

import 'bootstrap/dist/css/bootstrap.min.css'

const Global = withTheme(({ theme, children }) => {
  injectGlobal`
    body {
      background-color: ${theme.colors.background.body} !important;
      color: ${theme.colors.text};
      margin: 0;
      padding: 0;
    }
  `
  return Children.only(children);
});

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <Provider store={store}>
      <Global theme={theme}>
        <SocialNetwork/>
      </Global>
    </Provider>
  </ThemeProvider>
  , document.getElementById('root'));

serviceWorker.unregister();



