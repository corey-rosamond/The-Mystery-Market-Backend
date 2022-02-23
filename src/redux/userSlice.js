import {
  createSlice
} from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: "user",
    initialState: {
      currentUser: false,
      isFetching: false,
      error: false
    },
    reducers: {
      loginStart:(state) => {
        state.isFetching = true;
        state.error = false;
      },
      loginSuccess:(state, action) => {
        state.currentUser = action.payload;
        state.isFetching = false;
        state.error = false;
      },
      loginFailure: (state) => {
        state.isFetching = false;
        state.error = true;
      },
      logout() {
        // Intentionally empty
      }
    }
});

export const {
  loginStart,
  loginSuccess,
  loginFailure,
  logout
} = userSlice.actions;

export default userSlice.reducer;

