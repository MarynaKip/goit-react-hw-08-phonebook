import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  email: "",
  name: "",
  token: "",
  isLoggedOn: false,
  isLoading: true,
  isAuthorized: true,
  error: "",
};

const { actions, reducer } = createSlice({
  name: "user",
  initialState,
  reducers: {
    fetchLoginRequest: (state) => {
      state.isLoading = true;
    },
    fetchLoginSuccess: (state, action) => {
      state.name = action.payload.user.name;
      state.email = action.payload.user.email;
      state.token = action.payload.token;
      state.isLoggedOn = false;
      state.isLoading = false;
    },
    fetchLoginError: (state, action) => {
      state.error = action.payload.message;
      state.isLoading = false;
    },
    fetchLogoutRequest: (state) => {
      state.isLoading = true;
    },
    fetchLogoutSuccess: (state, action) => {
      state.token = "";
      state.name = "";
      state.email = "";
      state.isLoggedOn = false;
      state.isLoading = false;
    },
    fetchLogoutError: (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    },
    fetchUserRequest: (state) => {
      state.isAuthorized = true;
    },
    fetchUserSuccess: (state, action) => {
      state.name = action.payload.name;
      state.email = action.payload.email;
      state.isLoggedOn = true;
      state.isAuthorized = false;
    },
    fetchUserError: (state) => {
      state.isAuthorized = false;
      state.isLoggedOn = false;
      state.token = "";
    },
    fetchUserCancel: (state) => {
      state.isAuthorized = false;
    },
  },
});

export const {
  fetchLoginRequest,
  fetchLoginSuccess,
  fetchLoginError,
  fetchLogoutRequest,
  fetchLogoutSuccess,
  fetchLogoutError,
  fetchUserRequest,
  fetchUserSuccess,
  fetchUserError,
  fetchUserCancel,
} = actions;
export default reducer;