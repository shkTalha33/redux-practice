import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
  error: null,
  loading: false
};

export const addToCart = createAsyncThunk(
  "products/addToCart",
  async (data) => {
    // const state = getState(); 
      try {
        const cartItem = {...data}
        return Promise.resolve(cartItem)
      } catch (error) {
        return Promise.reject(false)
      }
  }
);

export const incrementCart = createAsyncThunk (
  "products/incrementCart",
 async (item) => {

    try {
      return Promise.resolve(item)
    } catch (error) {
      return Promise.reject(false)
    }
  }
)

export const decrementCart = createAsyncThunk (
  "products/decrementCart",
 async (item) => {

    try {
      return Promise.resolve(item)
    } catch (error) {
      return Promise.reject(false)
    }
  }
)

export const deleteCartItem = createAsyncThunk (
   "products/deleteCartItem",
   async (itemId) => {
    console.log(itemId)
      try {
        return Promise.resolve(itemId)
      } catch (error) {
         return Promise.reject(false)
      }
   }
)
   
export const clearCart = createAsyncThunk (
   "products/clearCart",
   async () => {
      try {
        return Promise.resolve()
      } catch (error) {
         return Promise.reject(false)
      }
   }
)
   


export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {},
  extraReducers: (builder) => {


    // Add item to cart AND Increment quantity Builder
    builder.addCase(addToCart.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(addToCart.fulfilled, (state, action) => {
        const existingItemIndex = state.cart.findIndex((item)=>{
           return item.id === action.payload.id
        })
       
      if (existingItemIndex !== -1 ) {
           state.cart[existingItemIndex].quantity += 1;
        }else{
          state.cart.push({ ...action.payload, quantity: 1 });
        }
        
        state.loading = false;
        state.error = null;
    });
    builder.addCase(addToCart.rejected, (state) => {
      state.loading = false;
      state.error = true;
    });

     //Increment Builders 

  //    builder.addCase(incrementCart.pending, (state)=>{
  //        state.loading = true,
  //        state.error = null
  //    })
  //    builder.addCase(incrementCart.fulfilled, (state,action)=>{

  //     const updatedCart = state.cart.map(item => {
  //      return item.id === action.payload.id ? {...item,quantity: item.quantity + 1} : item
  //   });

  //   return {
  //     ...state,
  //     cart: updatedCart,
  //     loading: true,
  //     error: null
  // };
         
  //    })
  //    builder.addCase(incrementCart.rejected, (state)=>{
  //        state.data = null
  //        state.loading = true,
  //        state.error = null
         
  //    })

     //Decrement quantity Builders 
     builder.addCase(decrementCart.pending, (state)=>{
         state.loading = true,
         state.error = null
     })
     builder.addCase(decrementCart.fulfilled, (state,action)=>{

      const updatedCart = state.cart.map(item => {
       return item.id === action.payload.id ? {...item, quantity:item.quantity > 1 ? item.quantity -1 : 1 } : item
    });

    return {
      ...state,
      cart: updatedCart,
      loading: false,
      error: null
  };
         
     })
     builder.addCase(decrementCart.rejected, (state)=>{
        return{
          ...state,
          cart:[],
          error:true,
          loading:false
        }
         
     })

     //Delete Item Builders 
     builder.addCase(deleteCartItem.pending, (state)=>{
      console.log("pending")
        return{
          ...state,
          loading : true,
          error : null
        }
     })
     builder.addCase(deleteCartItem.fulfilled, (state,action)=>{
      console.log("fulfilled")
   const deleteItem = state.cart.filter((item)=>{
      return item.id !== action.payload
   })

   console.log(deleteItem)

    return {
      ...state,
      cart: deleteItem,
      loading: false,
      error: null
  };
         
     })
     builder.addCase(deleteCartItem.rejected, (state)=>{
      return{
        ...state,
        cart:[],
        error:true,
        loading:false
      }
         
     })

     //Clear Cart  Builders 
     builder.addCase(clearCart.pending, (state)=>{
      console.log("pending")
        return{
          ...state,
          loading : true,
          error : null
        }
     })
     builder.addCase(clearCart.fulfilled, (state)=>{
    return {
      ...state,
      cart: [],
      loading: false,
      error: null
  };
         
     })
     builder.addCase(clearCart.rejected, (state)=>{
      return{
        ...state,
        cart:[],
        error:true,
        loading:false
      }
         
     })

  }
});

export default cartSlice.reducer;
