// src/features/ui/uiSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  buttonClicks: 0,
  textFieldValue: '',
  isChecked: false,
  selectedDropdownKey: null,
  isToggleOn: false,
  sliderValue: 0,
};

export const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    incrementButtonClicks: (state) => {
      state.buttonClicks += 1;
    },
    setTextFieldValue: (state, action) => {
      state.textFieldValue = action.payload;
    },
    setIsChecked: (state, action) => {
      state.isChecked = action.payload;
    },
    setSelectedDropdownKey: (state, action) => {
      state.selectedDropdownKey = action.payload;
    },
    setIsToggleOn: (state, action) => {
      state.isToggleOn = action.payload;
    },
    setSliderValue: (state, action) => {
      state.sliderValue = action.payload;
    },
  },
});

// Export actions for use in components
export const {
  incrementButtonClicks,
  setTextFieldValue,
  setIsChecked,
  setSelectedDropdownKey,
  setIsToggleOn,
  setSliderValue,
} = uiSlice.actions;

// Export the reducer for the store
export default uiSlice.reducer;