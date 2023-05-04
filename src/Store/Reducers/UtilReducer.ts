import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

interface UtilState {
  darkMode: boolean
}

const initialStateValue: UtilState = {
  darkMode: false
};

export const utilSlice = createSlice({
  name: "util",
  initialState: initialStateValue,
  reducers: {
    setDarkMode: (state, action: PayloadAction<boolean>) => {
      state.darkMode = action.payload;
    },
    resetUtilState: () => initialStateValue
  }
});

export const getDarkMode = (state: RootState): boolean => state.util.darkMode;

export const { setDarkMode, resetUtilState } = utilSlice.actions;

export default utilSlice.reducer;
