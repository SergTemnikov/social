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
      messages: [
        { id: 1, messageText: 'Hello' },
        { id: 2, messageText: 'How are u, buddy?' },
        { id: 3, messageText: 'I am Okay' },
        { id: 4, messageText: 'Wanna see u soon, bro' },
        { id: 5, messageText: 'Tryin to become fantastic developer' },
        { id: 6, messageText: 'Tryin to become fantastic teamlead' }
      ]
    },
    friendsPage: {
      friends: [
        {id: 1, name: 'Kirill Gladkov', avatar: 'https://pp.userapi.com/c622631/v622631358/25e88/nI1dxar9kOU.jpg', info: 'online'},
        {id: 2, name: 'Marya Temnikova', avatar: 'https://sun9-83.userapi.com/impg/B18aybHI8mhwdmeRnNzTJTRQmsQgrRffCTT4wg/ufI-zPS6CuM.jpg?size=1080x1080&quality=95&sign=adc36da9ee34f1351aa4416c7ad6555b&type=album', info: 'offline'},
        {id: 3, name: 'Maxim Yeliseev', avatar: 'https://avatars.mds.yandex.net/get-kinopoisk-image/6201401/cb224ad9-5e6d-4d07-91e5-f62f7117bd09/280x420', info: 'online'}
      ]
    }
  },
  getState() {
    return this._state
  },
  _callSubscriber() {
    console.log(this._state.profilePage.posts)
  },
  addPost(postText) {
    let newPost = {
      id: 3,
      text: postText,
      likes: 0,
      dislikes: 0
    }
    this._state.profilePage.posts.push(newPost)
    this._callSubscriber(this._state)
  },
  subscribe(observer) {
    this._callSubscriber = observer
  }
}

export default store