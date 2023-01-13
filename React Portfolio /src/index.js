import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { legacy_createStore as createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './redux/sharedstates'
const store = createStore( reducer )
ReactDOM.createRoot(document.querySelector("#root")).render(
  <Provider store={store}>
    <App/>
  </Provider>
)