import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  forms: [{ id: 1, number: "", password: "" }],
};

const commonSlice = createSlice({
  name: "common",
  initialState,
  reducers: {
    setData: (state, action) => {
      console.log(action.payload)
      state.forms = action.payload; // Update entire forms array in Redux state
    },
  },
});

export const { setData } = commonSlice.actions;
export default commonSlice.reducer;
