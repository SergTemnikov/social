import dialogsReducer from "./dialogs-reducer"
import profileReducer from "./profile-reducer"

let store = {
  _state: {
    profilePage: {
      posts: [
        { id: 1, text: 'Hello, World!', likes: 14, dislikes: 3 },
        { id: 2, text: 'Id like to know much more about React. And I like any other ui libraries like Ant-Design, Material UI, Tailwind CSS', likes: 7, dislikes: 1 }
      ]
    },
    messagesPage: {
      dialogs: [
        { id: 1, name: 'Andrew' },
        { id: 2, name: 'Alex' },
        { id: 3, name: 'Svetlana' },
        { id: 4, name: 'Boris' },
        { id: 5, name: 'Margarita' },
        { id: 6, name: 'Mary' }
      ],
      messages: []
    },
    friendsPage: {
      friends: [
        { id: 1, name: 'Kirill Gladkov', avatar: 'https://pp.userapi.com/c622631/v622631358/25e88/nI1dxar9kOU.jpg', info: 'online' },
        { id: 2, name: 'Marya Temnikova', avatar: 'https://sun9-83.userapi.com/impg/B18aybHI8mhwdmeRnNzTJTRQmsQgrRffCTT4wg/ufI-zPS6CuM.jpg?size=1080x1080&quality=95&sign=adc36da9ee34f1351aa4416c7ad6555b&type=album', info: 'offline' },
        { id: 3, name: 'Maxim Yeliseev', avatar: 'https://avatars.mds.yandex.net/get-kinopoisk-image/6201401/cb224ad9-5e6d-4d07-91e5-f62f7117bd09/280x420', info: 'online' }
      ]
    }
  },
  getState() {
    return this._state
  },
  _callSubscriber() {
    console.log(this._state.profilePage.posts)
  },
  subscribe(observer) {
    this._callSubscriber = observer
  },
  dispatch(action) {
    this._state.profilePage = profileReducer(this._state.profilePage, action)
    this._state.messagesPage = dialogsReducer(this._state.messagesPage, action)
    this._callSubscriber(this._state)
  }
}





export default store