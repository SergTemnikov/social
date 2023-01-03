import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './components/App/App';

let posts = [
  { id: 1, text: 'Hello, World!', likes: 14, dislikes: 3 },
  { id: 2, text: 'Id like to know much more about React. And I like any other ui libraries like Ant-Design, Material UI, Tailwind CSS', likes: 7, dislikes: 1 }
]

let dialogs = [
  { id: 1, name: 'Andrew' },
  { id: 2, name: 'Alex' },
  { id: 3, name: 'Svetlana' },
  { id: 4, name: 'Boris' },
  { id: 5, name: 'Margarita' },
  { id: 6, name: 'Mary' }
]

let messages = [
  { id: 1, messageText: 'Hello' },
  { id: 2, messageText: 'How are u, buddy?' },
  { id: 3, messageText: 'I am Okay' },
  { id: 4, messageText: 'Wanna see u soon, bro' },
  { id: 5, messageText: 'Tryin to become fantastic developer' },
  { id: 6, messageText: 'Tryin to become fantastic teamlead' }
]

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App posts={posts} dialogs={dialogs} messages={messages}/>
  </BrowserRouter>
)