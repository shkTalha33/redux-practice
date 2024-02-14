import {configureStore,combineReducers} from "@reduxjs/toolkit"
import { productReducer,cartReducer } from "./slices"

const rootReducer = combineReducers({
    products: productReducer,
    cart:cartReducer
})

export const store = configureStore({
    reducer:rootReducer
})