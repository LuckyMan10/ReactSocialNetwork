import './index.css';
import reportWebVitals from './reportWebVitals';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from './redux_store';

let rerender = (state) => {
  ReactDOM.render(
    <React.StrictMode>
      <App
      store = {store}
      />
    </React.StrictMode>,
    document.getElementById('root')
  )

}

rerender(store.getState());

store.subscribe(rerender)


reportWebVitals();
