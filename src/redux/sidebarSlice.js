import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  adList: [
    {id: 1, header: 'РЕКЛАМА 1', adInfo: 'This is advertisement text. Here you can provide your service'},
    {id: 2, header: 'РЕКЛАМА 2', adInfo: 'This is advertisement text. Here you can provide your service'},
    {id: 3, header: 'РЕКЛАМА 3', adInfo: 'This is advertisement text. Here you can provide your service'},
  ]
}

export const sidebarSlice = createSlice({
  name: 'sidebar',
  initialState,
  reducers: {}
})

export default sidebarSlice.reducer