import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  id: 8,
  name: "Nicholas Runolfsdottir V",
  username: "Maxime_Nienow",
  email: "Sherwood@rosamond.me",
  phone: "586.493.6943 x140",
  website: "https://teknologikartu.com/",
};

export const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    changeData: (state, action) => {
      state.value = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { changeData } = dataSlice.actions;

export default dataSlice.reducer;
