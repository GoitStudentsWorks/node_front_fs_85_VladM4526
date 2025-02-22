import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './Components/App';
import { BrowserRouter } from 'react-router-dom';
import { GlobalStyles } from './Components/GlobalStyles.styled';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor, store } from './redux-files/store';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <PersistGate persistor={persistor}>
      <Provider store={store}>
        <BrowserRouter basename="/node_front_fs_85_VladM4526">
          <App />
        </BrowserRouter>
      </Provider>
    </PersistGate>
    <GlobalStyles />
  </React.StrictMode>
);
