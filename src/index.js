import React from "react"
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import store from './redux/redux-store'
import App from "./components/App/App"
import { Provider } from "react-redux"

const root = ReactDOM.createRoot(document.getElementById('root'));
let reRenderEntireTree = (state) => {
  root.render(
    <Provider store={store}>
      <BrowserRouter>
        <App state={state} dispatch={store.dispatch.bind(store)} />
      </BrowserRouter>
    </Provider>
  )
}

reRenderEntireTree(store.getState())

store.subscribe(reRenderEntireTree)