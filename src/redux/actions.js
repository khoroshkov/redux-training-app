import {
  INCREMENT,
  DECREMENT,
  ASYNC_INCREMENT,
  CHENGE_THEME,
  ENABLE_BUTTONS,
  DISABLE_BUTTONS,
} from "./types";

export function increment() {
  return {
    type: INCREMENT,
  };
}

export function decrement() {
  return {
    type: DECREMENT,
  };
}

export function asyncIncrement() {
  return function (dispatch) {
    dispatch(disableButtons())
    setTimeout(() => {
      dispatch({
        type: ASYNC_INCREMENT,
      });
      dispatch(enableButtons())
    }, 2000);
  };
}

export function changeTheme(newTheme) {
  return {
    type: CHENGE_THEME,
    payload: newTheme,
  };
}

export function enableButtons() {
  return {
    type: ENABLE_BUTTONS,
  };
}

export function disableButtons() {
  return {
    type: DISABLE_BUTTONS,
  };
}
