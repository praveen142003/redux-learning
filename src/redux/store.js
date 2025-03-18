import { configureStore } from "@reduxjs/toolkit";
import commonReducer from './slice/commonSlice'

const store = configureStore({
    reducer  : {
        common : commonReducer
    }
  
})

export default store