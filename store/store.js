import { configureStore } from '@reduxjs/toolkit'
import GalleryReducer from './reducers/GalleryReducer'

export const store = configureStore({
  reducer: {
    GalleryReducer
  },
})