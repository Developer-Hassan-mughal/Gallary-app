import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  images: [],
}

export const GalleryReducer = createSlice({
  name: 'Gallery',
  initialState,
  reducers: {
    
    addimages: (state, action) => {
      state.images = action.payload
    },

  },
})

// Action creators are generated for each case reducer function
export const { addimages } = GalleryReducer.actions

export default GalleryReducer.reducer