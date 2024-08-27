import { configureStore } from '@reduxjs/toolkit'
import homeReducer  from './HomeSlice'

 const Store = configureStore({
  reducer: {
HomeR:homeReducer
  },
})

export default Store