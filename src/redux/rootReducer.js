import {
  INCREMENT,
  DECREMENT,
  ASYNC_INCREMENT,
  CHENGE_THEME,
  ENABLE_BUTTONS,
  DISABLE_BUTTONS,
} from "./types";
import { combineReducers } from "redux";

const initialState = 0;
const initalThemeState = {
  value: "light",
  disabled: false,
};

function counterReducer(state = initialState, action) {
  switch (action.type) {
    case INCREMENT:
      return state + 1;
    case DECREMENT:
      return state - 1;
    case ASYNC_INCREMENT:
      return state + 1;
    default:
      return state;
  }
}

function themeReducer(state = initalThemeState, action) {
  switch (action.type) {
    case CHENGE_THEME:
      return {
        ...state,
        value: action.payload,
      };
    case ENABLE_BUTTONS:
      return {
        ...state,
        disabled: false,
      };
    case DISABLE_BUTTONS:
      return {
        ...state,
        disabled: true,
      };
    default:
      return state;
  }
}

export const rootReducer = combineReducers({
  counter: counterReducer,
  theme: themeReducer,
});
