import {createAsyncThunk, createSlice} from "@reduxjs/toolkit"
import { getAllProductsService } from "../services/productsServices"

const initialState = {
    loading:false,
    data:null,
    error:null
}

export const getAllProducts = createAsyncThunk(
   "products/getAllProducts",
   async()=>{
      const  response = await getAllProductsService()
      try {
          if (response && response.status === 200) {
            return Promise.resolve(response.data)
         }else{
            return Promise.reject(false)
         }
      } catch (error) {
        return Promise.reject(false)
      }
      
   }
)




export const productSlice = createSlice({
    name:"prdocuts",
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(getAllProducts.pending,(state)=>{
            state.loading = true,
            state.error = null
        })
        builder.addCase(getAllProducts.fulfilled,(state,action)=>{
            state.loading = false,
            state.error = null,
            state.data = action.payload
        })
        builder.addCase(getAllProducts.rejected,(state,action)=>{
            state.loading = false,
            state.error = true,
            state.data = action.payload
            console.log(action)
        })
    }
})

export default productSlice.reducer
    