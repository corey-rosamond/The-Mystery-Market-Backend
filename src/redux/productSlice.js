import {
  createSlice
} from "@reduxjs/toolkit";

export const productSlice = createSlice({
  name: "product",
  initialState: {
    products: [],
    isFetching: false,
    isPushing: false,
    error: false
  },
  reducers: {
    // Get Single
    getProductStart:(state)=>{

    },
    getProductSuccess:(state,action)=>{

    },
    getProductFailure:(state)=>{

    },
    // Get Multiple
    getProductsStart:(state)=>{
      state.isFetching = true;
      state.isPushing = false;
      state.error = false;
    },
    getProductsSuccess:(state, action)=>{
      state.isFetching = false;
      state.isPushing = false;
      state.error = false;
      state.products = action.payload;
    },
    getProductsFailure:(state)=>{
      state.isFetching = false;
      state.isPushing = false;
      state.error = true;
    },
    // Update Single
    updateProductStart:(state)=>{

    },
    updateProductSuccess:(state,action)=>{

    },
    updateProductFailure:(state)=>{

    },
    // Delete
    deleteProductStart:(state)=>{
      state.isFetching = false;
      state.isPushing = true;
      state.error = false;
    },
    deleteProductSuccess:(state, action)=>{
      state.isFetching = false;
      state.isPushing = false;
      state.products.splice(
        state.products.findIndex(
          (item) => item._id === action.payload.id
        ),
        1
      );
    },
    deleteProductFailure:(state)=>{
      state.isFetching = false;
      state.isPushing = false;
      state.error = true;
    }
  }
});

export const {
  getProductStart,
  getProductSuccess,
  getProductFailure,
  getProductsStart,
  getProductsSuccess,
  getProductsFailure,
  updateProductStart,
  updateProductSuccess,
  updateProductFailure,
  deleteProductStart,
  deleteProductSuccess,
  deleteProductFailure
} = productSlice.actions;

export default productSlice.reducer;
