import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  friendsPage: {
    friends: [
      { id: 1, name: 'Kirill Gladkov', avatar: 'https://pp.userapi.com/c622631/v622631358/25e88/nI1dxar9kOU.jpg', info: 'online' },
      { id: 2, name: 'Marya Temnikova', avatar: 'https://sun9-83.userapi.com/impg/B18aybHI8mhwdmeRnNzTJTRQmsQgrRffCTT4wg/ufI-zPS6CuM.jpg?size=1080x1080&quality=95&sign=adc36da9ee34f1351aa4416c7ad6555b&type=album', info: 'offline' },
      { id: 3, name: 'Benny Hill', avatar: 'https://avatars.mds.yandex.net/get-kinopoisk-image/6201401/cb224ad9-5e6d-4d07-91e5-f62f7117bd09/280x420', info: 'online' }
    ]
  }
}

export const friendsSlice = createSlice({
  name: 'friends',
  initialState,
  reducers: {
    default: (state) => {return state}
  }
})

export default friendsSlice.reducer