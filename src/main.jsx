import ReactDOM from 'react-dom/client';
import { Provider } from "react-redux";
import { HashRouter as Router } from "react-router-dom";
import { ThemeProvider } from 'styled-components';

import App from './App';
import store from './store';

import 'css/index.less';
import 'normalize.css';
import theme from './assets/theme';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <Router>
        <App />
      </Router>
    </ThemeProvider>
  </Provider>
)
