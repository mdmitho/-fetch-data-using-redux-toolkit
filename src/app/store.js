import { configureStore } from "@reduxjs/toolkit"
import booksReducer  from "../AllBook/BooksSlice"




const store = configureStore({
    reducer:{
        booksReducer: booksReducer,
    }
})

export default store;