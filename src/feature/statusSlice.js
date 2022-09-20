import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  ironChoose: -1,
  thanosChoose: -1,
  totalGamePlay: 0,
  gameWin: 0,
};
export const statusSlice = createSlice({
  name: "status",
  initialState,
  reducers: {
    updateIronChoose: (state, action) => {
      state.ironChoose = action.payload;
    },
    updateThanosChoose: (state, action) => {
      state.thanosChoose = action.payload;
    },
    updateGamePlay: (state) => {
      state.totalGamePlay++;
    },
    updateGameWin: (state) => {
      state.gameWin++;
    },
  },
});
export const selectStatus = (state) => state.status;
export const {
  updateIronChoose,
  updateThanosChoose,
  updateGamePlay,
  updateGameWin,
} = statusSlice.actions;

export default statusSlice.reducer;
