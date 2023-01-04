import React from "react"
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from "./components/App/App"
import { addPost } from "./redux/state"

export let reRenderEntireTree = (state) => {
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(
    <BrowserRouter>
      <App state={state} addPost={addPost} />
    </BrowserRouter>
  )
}