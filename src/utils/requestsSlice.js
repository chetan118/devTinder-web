import { createSlice } from "@reduxjs/toolkit";

const requestsSlice = createSlice({
  name: "requests",
  initialState: null,
  reducers: {
    addRequests: (state, action) => action.payload,
    removeRequestById: (state, action) => {
      return state.filter((req) => req._id !== action.payload);
    },
  },
});

export const { addRequests, removeRequestById } = requestsSlice.actions;

export default requestsSlice.reducer;
