import { configureStore } from '@reduxjs/toolkit'
import inputFeildVlaueSlice from './FeildValueSlice'
export const store = configureStore({
  reducer: {
    inputFeildVlaue :inputFeildVlaueSlice
  },
})