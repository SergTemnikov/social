import React from "react"
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import store from './redux/state'
import App from "./components/App/App"

let reRenderEntireTree = (state) => {
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(
    <BrowserRouter>
      <App state={state} addPost={store.addPost.bind(store)} />
    </BrowserRouter>
  )
}

reRenderEntireTree(store.getState())

store.subscribe(reRenderEntireTree)